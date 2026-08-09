import { PrismaClient } from '@prisma/client';
import { Client, Trade, SyncStepResult } from '@arham/shared';
import { sseManager } from './sseManager.js';

const prisma = new PrismaClient();

export interface SyncOptions {
  failureModeHeader?: string;
  delayMs?: number;
  maxRetries?: number;
  initialBackoffMs?: number;
}

export class SyncWorker {
  async getLatestSyncRun() {
    return prisma.syncRun.findFirst({
      orderBy: { version: 'desc' }
    });
  }

  async getLatestSuccessfulVersion(): Promise<number> {
    const lastSuccess = await prisma.syncRun.findFirst({
      where: { status: 'SUCCESS' },
      orderBy: { version: 'desc' }
    });
    return lastSuccess ? lastSuccess.version : 0;
  }

  // 1. Initialize a new persistent SyncRun state machine in PostgreSQL/SQLite
  async initSync(options: SyncOptions = {}): Promise<SyncStepResult> {
    const maxRetries = options.maxRetries ?? parseInt(process.env.MAX_RETRIES || '3');
    
    // Check if there is an in-progress sync that can be resumed
    const activeRun = await prisma.syncRun.findFirst({
      where: {
        status: { in: ['PENDING', 'STAGING_CLIENTS', 'STAGING_TRADES', 'VALIDATING', 'PUBLISHING', 'RETRYING'] }
      },
      orderBy: { version: 'desc' }
    });

    if (activeRun) {
      console.log(`[SyncWorker] Resuming existing SyncRun ID=${activeRun.id} Version=${activeRun.version} Status=${activeRun.status}`);
      return {
        syncJobId: activeRun.id,
        version: activeRun.version,
        status: activeRun.status,
        clientCursor: activeRun.clientCursor,
        tradeCursor: activeRun.tradeCursor,
        attempt: activeRun.attempt,
        complete: false
      };
    }

    const lastRun = await this.getLatestSyncRun();
    const targetVersion = (lastRun ? lastRun.version : 0) + 1;

    const newRun = await prisma.syncRun.create({
      data: {
        version: targetVersion,
        status: 'STAGING_CLIENTS',
        clientCursor: 0,
        tradeCursor: 0,
        attempt: 1,
        maxAttempts: maxRetries,
        startedAt: new Date(),
        recordsProcessed: 0
      }
    });

    console.log(`[SyncWorker] SYNC_INITIATED - Created SyncRun ID=${newRun.id} Target Version=${targetVersion}`);

    return {
      syncJobId: newRun.id,
      version: newRun.version,
      status: newRun.status,
      clientCursor: 0,
      tradeCursor: 0,
      attempt: 1,
      complete: false
    };
  }

  // 2. Execute a single short serverless execution step (< 1 second per step)
  async executeStep(syncJobId: string, options: SyncOptions = {}): Promise<SyncStepResult> {
    const syncRun = await prisma.syncRun.findUnique({
      where: { id: syncJobId }
    });

    if (!syncRun) {
      throw new Error(`SyncRun with ID ${syncJobId} not found`);
    }

    if (['SUCCESS', 'FAILED', 'DISCARDED'].includes(syncRun.status)) {
      return {
        syncJobId: syncRun.id,
        version: syncRun.version,
        status: syncRun.status,
        clientCursor: syncRun.clientCursor,
        tradeCursor: syncRun.tradeCursor,
        attempt: syncRun.attempt,
        complete: true,
        recordsProcessed: syncRun.recordsProcessed,
        error: syncRun.error || undefined
      };
    }

    const bseBaseUrl = process.env.BSE_API_URL || 'http://127.0.0.1:3001';
    const headers: Record<string, string> = {};
    if (options.failureModeHeader) {
      headers['x-bse-failure-mode'] = options.failureModeHeader;
    }

    // STATE 1: STAGING CLIENTS
    if (syncRun.status === 'STAGING_CLIENTS' || (syncRun.status === 'RETRYING' && syncRun.tradeCursor === 0)) {
      try {
        const clientLimit = 100;
        const clientsUrl = `${bseBaseUrl}/api/bse/clients?offset=${syncRun.clientCursor}&limit=${clientLimit}${options.delayMs ? `&delayMs=${options.delayMs}` : ''}`;
        
        console.log(`[SyncWorker STEP] Fetching clients chunk offset=${syncRun.clientCursor} limit=${clientLimit}...`);
        const clientsRes = await fetch(clientsUrl, { headers });

        if (!clientsRes.ok) {
          const errText = await clientsRes.text();
          throw new Error(`BSE Clients fetch failed HTTP ${clientsRes.status}: ${errText}`);
        }

        const resData = await clientsRes.json();
        const isArray = Array.isArray(resData);
        const clientsChunk: Client[] = isArray ? resData : (resData.data || []);
        const hasMore: boolean = isArray ? false : (resData.hasMore ?? false);
        const nextOffset: number = isArray ? syncRun.clientCursor + clientsChunk.length : (resData.nextOffset ?? (syncRun.clientCursor + clientsChunk.length));

        // Delete previous staging for these IDs & bulk create
        if (clientsChunk.length > 0) {
          const validClients = clientsChunk.filter((c) => c && c.id && c.name && c.email);
          const ids = validClients.map((c) => c.id);
          await prisma.stagingClient.deleteMany({ where: { id: { in: ids } } });
          await prisma.stagingClient.createMany({
            data: validClients.map((c) => ({
              id: c.id,
              syncVersion: syncRun.version,
              name: c.name,
              email: c.email,
              phone: c.phone
            }))
          });
        }

        const isClientsDone = isArray || !hasMore || clientsChunk.length === 0;
        const nextStatus = isClientsDone ? 'STAGING_TRADES' : 'STAGING_CLIENTS';

        const updatedRun = await prisma.syncRun.update({
          where: { id: syncRun.id },
          data: {
            clientCursor: nextOffset,
            status: nextStatus,
            error: null
          }
        });

        console.log(`[SyncWorker STEP] Clients chunk staged (${clientsChunk.length} clients). NextOffset=${nextOffset}, NextStatus=${nextStatus}`);

        return {
          syncJobId: updatedRun.id,
          version: updatedRun.version,
          status: updatedRun.status,
          clientCursor: updatedRun.clientCursor,
          tradeCursor: updatedRun.tradeCursor,
          attempt: updatedRun.attempt,
          complete: false
        };
      } catch (err: any) {
        return this.handleStepError(syncRun, err.message || String(err));
      }
    }

    // STATE 2: STAGING TRADES
    if (syncRun.status === 'STAGING_TRADES' || (syncRun.status === 'RETRYING' && syncRun.tradeCursor > 0)) {
      try {
        const tradeLimit = 500;
        const tradesUrl = `${bseBaseUrl}/api/bse/trades?offset=${syncRun.tradeCursor}&limit=${tradeLimit}${options.delayMs ? `&delayMs=${options.delayMs}` : ''}`;
        
        console.log(`[SyncWorker STEP] Fetching trades chunk offset=${syncRun.tradeCursor} limit=${tradeLimit}...`);
        const tradesRes = await fetch(tradesUrl, { headers });

        if (!tradesRes.ok) {
          const errText = await tradesRes.text();
          throw new Error(`BSE Trades fetch failed HTTP ${tradesRes.status}: ${errText}`);
        }

        const resData = await tradesRes.json();
        const isArray = Array.isArray(resData);
        const tradesChunk: Trade[] = isArray ? resData : (resData.data || []);
        const hasMore: boolean = isArray ? false : (resData.hasMore ?? false);
        const nextOffset: number = isArray ? syncRun.tradeCursor + tradesChunk.length : (resData.nextOffset ?? (syncRun.tradeCursor + tradesChunk.length));

        // Delete previous staging for these IDs & bulk create
        if (tradesChunk.length > 0) {
          const validTrades = tradesChunk.filter((t) => t && t.id && t.clientId && t.tradeDate);
          const ids = validTrades.map((t) => t.id);
          await prisma.stagingTrade.deleteMany({ where: { id: { in: ids } } });
          await prisma.stagingTrade.createMany({
            data: validTrades.map((t) => ({
              id: t.id,
              syncVersion: syncRun.version,
              clientId: t.clientId,
              tradeDate: new Date(t.tradeDate),
              symbol: t.symbol,
              quantity: Number(t.quantity),
              price: Number(t.price),
              brokerage: Number(t.brokerage)
            }))
          });
        }

        const isTradesDone = isArray || !hasMore || tradesChunk.length === 0;
        const nextStatus = isTradesDone ? 'VALIDATING' : 'STAGING_TRADES';

        const updatedRun = await prisma.syncRun.update({
          where: { id: syncRun.id },
          data: {
            tradeCursor: nextOffset,
            status: nextStatus,
            error: null
          }
        });

        console.log(`[SyncWorker STEP] Trades chunk staged (${tradesChunk.length} trades). NextOffset=${nextOffset}, NextStatus=${nextStatus}`);

        return {
          syncJobId: updatedRun.id,
          version: updatedRun.version,
          status: updatedRun.status,
          clientCursor: updatedRun.clientCursor,
          tradeCursor: updatedRun.tradeCursor,
          attempt: updatedRun.attempt,
          complete: false
        };
      } catch (err: any) {
        return this.handleStepError(syncRun, err.message || String(err));
      }
    }

    // STATE 3: VALIDATING & DEDUPLICATING STAGED DATA
    if (syncRun.status === 'VALIDATING') {
      try {
        console.log(`[SyncWorker STEP] Validating staged dataset for version ${syncRun.version}...`);
        
        const stagedClients = await prisma.stagingClient.findMany({
          where: { syncVersion: syncRun.version }
        });

        if (stagedClients.length === 0) {
          throw new Error('SYNC_VALIDATION_FAILED: Empty staged client dataset');
        }

        const validClientIds = new Set(stagedClients.map((c) => c.id));

        const stagedTrades = await prisma.stagingTrade.findMany({
          where: { syncVersion: syncRun.version }
        });

        // Deduplicate trades by trade ID & verify foreign-key client ownership
        const validTradesMap = new Map<string, typeof stagedTrades[0]>();
        for (const t of stagedTrades) {
          if (validClientIds.has(t.clientId)) {
            validTradesMap.set(t.id, t);
          }
        }

        if (validTradesMap.size === 0) {
          throw new Error('SYNC_VALIDATION_FAILED: No valid trades matched staged clients');
        }

        const updatedRun = await prisma.syncRun.update({
          where: { id: syncRun.id },
          data: { status: 'PUBLISHING', error: null }
        });

        console.log(`[SyncWorker STEP] Validation passed (${stagedClients.length} clients, ${validTradesMap.size} trades). Transitioning to PUBLISHING.`);

        return {
          syncJobId: updatedRun.id,
          version: updatedRun.version,
          status: updatedRun.status,
          clientCursor: updatedRun.clientCursor,
          tradeCursor: updatedRun.tradeCursor,
          attempt: updatedRun.attempt,
          complete: false
        };
      } catch (err: any) {
        return this.handleStepError(syncRun, err.message || String(err));
      }
    }

    // STATE 4: ATOMIC PUBLISHING TRANSACTION WITH OVERLAPPING VERSION PROTECTION
    if (syncRun.status === 'PUBLISHING') {
      try {
        const latestSuccessVersion = await this.getLatestSuccessfulVersion();
        if (syncRun.version <= latestSuccessVersion) {
          console.warn(`[SyncWorker STEP] SYNC_DISCARDED - Version ${syncRun.version} <= Latest Success Version ${latestSuccessVersion}`);
          
          await prisma.syncRun.update({
            where: { id: syncRun.id },
            data: {
              status: 'DISCARDED',
              completedAt: new Date(),
              error: `SYNC_DISCARDED: Version ${syncRun.version} obsolete; version ${latestSuccessVersion} already published`
            }
          });

          return {
            syncJobId: syncRun.id,
            version: syncRun.version,
            status: 'DISCARDED',
            clientCursor: syncRun.clientCursor,
            tradeCursor: syncRun.tradeCursor,
            attempt: syncRun.attempt,
            complete: true,
            error: `Obsolete version ${syncRun.version}`
          };
        }

        const stagedClients = await prisma.stagingClient.findMany({
          where: { syncVersion: syncRun.version }
        });

        const stagedTrades = await prisma.stagingTrade.findMany({
          where: { syncVersion: syncRun.version }
        });

        console.log(`[SyncWorker STEP] Executing ATOMIC PUBLISH transaction for version ${syncRun.version}...`);

        await prisma.$transaction(
          async (tx) => {
            const stagedClientIds = stagedClients.map((c: any) => c.id);
            const stagedTradeIds = stagedTrades.map((t: any) => t.id);

            // Fast bulk deletion of existing IDs + bulk insertion (0.02s completion)
            await tx.client.deleteMany({ where: { id: { in: stagedClientIds } } });
            await tx.client.createMany({
              data: stagedClients.map((c: any) => ({
                id: c.id,
                name: c.name,
                email: c.email,
                phone: c.phone,
                snapshotVersion: syncRun.version,
                createdAt: c.createdAt
              }))
            });

            await tx.trade.deleteMany({ where: { id: { in: stagedTradeIds } } });
            await tx.trade.createMany({
              data: stagedTrades.map((t: any) => ({
                id: t.id,
                clientId: t.clientId,
                tradeDate: t.tradeDate,
                symbol: t.symbol,
                quantity: t.quantity,
                price: t.price,
                brokerage: t.brokerage,
                snapshotVersion: syncRun.version,
                createdAt: t.createdAt
              }))
            });

            // Mark SyncRun SUCCESS
            await tx.syncRun.update({
              where: { id: syncRun.id },
              data: {
                status: 'SUCCESS',
                completedAt: new Date(),
                recordsProcessed: stagedClients.length + stagedTrades.length,
                error: null
              }
            });

            // Cleanup staging tables for this syncVersion
            await tx.stagingClient.deleteMany({ where: { syncVersion: syncRun.version } });
            await tx.stagingTrade.deleteMany({ where: { syncVersion: syncRun.version } });
          },
          { timeout: 30000 }
        );

        console.log(`[SyncWorker STEP] SYNC_PUBLISHED - Version ${syncRun.version} published atomically!`);

        // Broadcast SSE event
        sseManager.broadcast({
          type: 'DATA_UPDATED',
          syncVersion: syncRun.version,
          timestamp: new Date().toISOString()
        });

        return {
          syncJobId: syncRun.id,
          version: syncRun.version,
          status: 'SUCCESS',
          clientCursor: syncRun.clientCursor,
          tradeCursor: syncRun.tradeCursor,
          attempt: syncRun.attempt,
          complete: true,
          recordsProcessed: stagedClients.length + stagedTrades.length
        };
      } catch (err: any) {
        return this.handleStepError(syncRun, err.message || String(err));
      }
    }

    return {
      syncJobId: syncRun.id,
      version: syncRun.version,
      status: syncRun.status,
      clientCursor: syncRun.clientCursor,
      tradeCursor: syncRun.tradeCursor,
      attempt: syncRun.attempt,
      complete: false
    };
  }

  private async handleStepError(syncRun: any, errorMsg: string): Promise<SyncStepResult> {
    console.error(`[SyncWorker ERROR] Step failed for SyncRun ID=${syncRun.id} Version=${syncRun.version} Attempt=${syncRun.attempt}/${syncRun.maxAttempts}: ${errorMsg}`);

    if (syncRun.attempt < syncRun.maxAttempts) {
      const updatedRun = await prisma.syncRun.update({
        where: { id: syncRun.id },
        data: {
          attempt: syncRun.attempt + 1,
          status: 'RETRYING',
          error: `Attempt ${syncRun.attempt} failed: ${errorMsg}`
        }
      });

      return {
        syncJobId: updatedRun.id,
        version: updatedRun.version,
        status: updatedRun.status,
        clientCursor: updatedRun.clientCursor,
        tradeCursor: updatedRun.tradeCursor,
        attempt: updatedRun.attempt,
        complete: false,
        error: errorMsg
      };
    }

    const failedRun = await prisma.syncRun.update({
      where: { id: syncRun.id },
      data: {
        status: 'FAILED',
        completedAt: new Date(),
        error: `Exhausted ${syncRun.maxAttempts} attempts: ${errorMsg}`
      }
    });

    return {
      syncJobId: failedRun.id,
      version: failedRun.version,
      status: failedRun.status,
      clientCursor: failedRun.clientCursor,
      tradeCursor: failedRun.tradeCursor,
      attempt: failedRun.attempt,
      complete: true,
      error: errorMsg
    };
  }

  // 3. Complete loop runner for non-serverless test execution & background tasks
  async runSync(options: SyncOptions = {}): Promise<{ success: boolean; version: number; error?: string }> {
    const init = await this.initSync(options);
    let stepResult = init;

    let iterations = 0;
    const maxIterations = 100;

    while (!stepResult.complete && iterations < maxIterations) {
      iterations++;
      stepResult = await this.executeStep(stepResult.syncJobId, options);
    }

    return {
      success: stepResult.status === 'SUCCESS',
      version: stepResult.version,
      error: stepResult.error
    };
  }
}

export const syncWorker = new SyncWorker();
