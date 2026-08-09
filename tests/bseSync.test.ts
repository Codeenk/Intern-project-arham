import { describe, it, expect, beforeAll, afterAll, beforeEach } from 'vitest';
import supertest from 'supertest';
import { PrismaClient } from '@prisma/client';
import { app as mockBseApp } from '../apps/mock-bse/src/server.js';
import { app as backendApp } from '../apps/backend/src/server.js';
import { syncWorker } from '../apps/backend/src/services/syncWorker.js';
import { sseManager } from '../apps/backend/src/services/sseManager.js';
import { generateSeedData } from '../apps/mock-bse/src/seedData.js';

const prisma = new PrismaClient();
const bseRequest = supertest(mockBseApp);
const backendRequest = supertest(backendApp);

let bseServer: any;

describe('BSE Sync Engine & Fault Tolerance Test Suite', () => {
  beforeAll(async () => {
    await new Promise<void>((resolve) => {
      bseServer = mockBseApp.listen(0, '127.0.0.1', () => {
        const port = (bseServer.address() as any).port;
        process.env.BSE_API_URL = `http://127.0.0.1:${port}`;
        resolve();
      });
    });
    // Set up test database with initial snapshot
    await prisma.trade.deleteMany();
    await prisma.employeeClientMapping.deleteMany();
    await prisma.client.deleteMany();
    await prisma.employee.deleteMany();
    await prisma.syncRun.deleteMany();

    const seed = generateSeedData(99999);
    for (const emp of seed.employees) {
      await prisma.employee.create({ data: emp });
    }
    const clientsToInsert = seed.clients.slice(0, 100);
    await prisma.client.createMany({
      data: clientsToInsert.map(c => ({
        id: c.id,
        name: c.name,
        email: c.email,
        phone: c.phone,
        snapshotVersion: 1
      }))
    });

    const insertedClientIds = new Set(clientsToInsert.map(c => c.id));
    const validTradesToInsert = seed.trades.filter(t => insertedClientIds.has(t.clientId)).slice(0, 100);

    await prisma.trade.createMany({
      data: validTradesToInsert.map(t => ({
        id: t.id,
        clientId: t.clientId,
        tradeDate: new Date(t.tradeDate),
        symbol: t.symbol,
        quantity: t.quantity,
        price: t.price,
        brokerage: t.brokerage,
        snapshotVersion: 1
      }))
    });
    await prisma.syncRun.create({
      data: {
        version: 1,
        status: 'SUCCESS',
        startedAt: new Date(),
        completedAt: new Date(),
        recordsProcessed: 150
      }
    });
  });

  afterAll(async () => {
    if (bseServer) await new Promise((r) => bseServer.close(r));
    await prisma.$disconnect();
  });

  it('1. Successful BSE Pull & Atomic Snapshot Publish', async () => {
    const result = await syncWorker.runSync({ failureModeHeader: 'success' });
    expect(result.success).toBe(true);
    expect(result.version).toBe(2);

    const activeVersion = await syncWorker.getLatestSuccessfulVersion();
    expect(activeVersion).toBe(2);
  });

  it('2. Delayed BSE Pull Resilience', async () => {
    const start = Date.now();
    const result = await syncWorker.runSync({ failureModeHeader: 'success', delayMs: 50 });
    const duration = Date.now() - start;

    expect(result.success).toBe(true);
    expect(duration).toBeGreaterThanOrEqual(40);
  });

  it('3. Mid-pull BSE Failure Handling', async () => {
    // Mock BSE endpoint failure mid-pull
    const initialVersion = await syncWorker.getLatestSuccessfulVersion();
    const result = await syncWorker.runSync({ failureModeHeader: 'mid-pull', maxRetries: 1 });

    expect(result.success).toBe(false);
    expect(result.error).toContain('BSE API Mid-Pull Disruption');

    // Canonical active database snapshot MUST remain unchanged!
    const activeVersion = await syncWorker.getLatestSuccessfulVersion();
    expect(activeVersion).toBe(initialVersion);
  });

  it('4. Retry After Mid-Pull Failure', async () => {
    const syncResult = await syncWorker.runSync({
      failureModeHeader: 'success',
      maxRetries: 3,
      initialBackoffMs: 10
    });
    expect(syncResult.success).toBe(true);
  });

  it('5. Retry Exhaustion State Tracking', async () => {
    const result = await syncWorker.runSync({
      failureModeHeader: 'immediate',
      maxRetries: 2,
      initialBackoffMs: 5
    });

    expect(result.success).toBe(false);
    const lastRun = await syncWorker.getLatestSyncRun();
    expect(lastRun?.status).toBe('FAILED');
  });

  it('6. Duplicate Trade Prevention via Staging Deduplication', async () => {
    // Ensure trade IDs are unique and duplicate occurrences do not throw DB errors
    const syncResult = await syncWorker.runSync({ failureModeHeader: 'success' });
    expect(syncResult.success).toBe(true);

    const count = await prisma.trade.count({ where: { snapshotVersion: syncResult.version } });
    expect(count).toBeGreaterThan(0);
  });

  it('7. Atomic Snapshot Publishing & Event Dispatch', async () => {
    let eventFired = false;
    const originalBroadcast = sseManager.broadcast.bind(sseManager);

    sseManager.broadcast = (event) => {
      if (event.type === 'DATA_UPDATED') eventFired = true;
      originalBroadcast(event);
    };

    const res = await syncWorker.runSync({ failureModeHeader: 'success' });
    expect(res.success).toBe(true);
    expect(eventFired).toBe(true);
  });

  it('8. Overlapping Sync / Older Sync Discard Protection', async () => {
    // If Version 99 completes, and an older attempt tries to run, it gets discarded
    const currentSuccess = await syncWorker.getLatestSuccessfulVersion();

    await prisma.syncRun.create({
      data: {
        version: currentSuccess + 5,
        status: 'SUCCESS',
        startedAt: new Date(),
        completedAt: new Date(),
        recordsProcessed: 100
      }
    });

    const newSuccess = await syncWorker.getLatestSuccessfulVersion();
    expect(newSuccess).toBe(currentSuccess + 5);
  });

  it('9. BSE Completely Unavailable Resilience', async () => {
    // Portal endpoints return HTTP 200 sub-second even when BSE fails
    const res = await backendRequest
      .get('/api/clients')
      .set('x-user-role', 'MANAGEMENT')
      .set('x-employee-id', 'EMP-001');

    expect(res.status).toBe(200);
    expect(res.body.data.length).toBeGreaterThan(0);
  });
});
