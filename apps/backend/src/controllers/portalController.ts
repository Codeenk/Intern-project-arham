import { Response } from 'express';
import { prisma } from '../db.js';
import { AuthenticatedRequest } from '../middleware/auth.js';
import { calculateAllIncentives, calculateIncentivesForEmployee } from '../services/incentiveCalculator.js';
import { syncWorker } from '../services/syncWorker.js';
import { sseManager } from '../services/sseManager.js';

async function getActiveSnapshotVersion(): Promise<number> {
  const lastClient = await prisma.client.findFirst({
    orderBy: { snapshotVersion: 'desc' }
  });
  return lastClient ? lastClient.snapshotVersion : 1;
}

// 1. GET /api/clients
export async function getClients(req: AuthenticatedRequest, res: Response) {
  try {
    const page = Math.max(1, parseInt(req.query.page as string) || 1);
    const pageSize = Math.min(100, Math.max(1, parseInt(req.query.pageSize as string) || 20));
    const snapshotVersion = await getActiveSnapshotVersion();

    const [total, clients] = await Promise.all([
      prisma.client.count({ where: { snapshotVersion } }),
      prisma.client.findMany({
        where: { snapshotVersion },
        skip: (page - 1) * pageSize,
        take: pageSize,
        orderBy: { id: 'asc' }
      })
    ]);

    const lastRun = await syncWorker.getLatestSyncRun();

    return res.json({
      data: clients,
      total,
      page,
      pageSize,
      lastUpdated: lastRun?.completedAt?.toISOString() || null,
      snapshotVersion
    });
  } catch (err: any) {
    return res.status(500).json({ error: err.message || 'Failed to fetch clients' });
  }
}

// 2. GET /api/trades (supports clientId, from, to filters)
export async function getTrades(req: AuthenticatedRequest, res: Response) {
  try {
    const page = Math.max(1, parseInt(req.query.page as string) || 1);
    const pageSize = Math.min(100, Math.max(1, parseInt(req.query.pageSize as string) || 20));
    const { clientId, from, to } = req.query;
    const snapshotVersion = await getActiveSnapshotVersion();

    const whereClause: any = { snapshotVersion };

    if (clientId) {
      whereClause.clientId = String(clientId);
    }

    if (from || to) {
      whereClause.tradeDate = {};
      if (from) whereClause.tradeDate.gte = new Date(from as string);
      if (to) whereClause.tradeDate.lte = new Date(to as string);
    }

    const [total, trades] = await Promise.all([
      prisma.trade.count({ where: whereClause }),
      prisma.trade.findMany({
        where: whereClause,
        skip: (page - 1) * pageSize,
        take: pageSize,
        orderBy: { tradeDate: 'desc' },
        include: {
          client: {
            select: { name: true, email: true }
          }
        }
      })
    ]);

    const lastRun = await syncWorker.getLatestSyncRun();

    return res.json({
      data: trades,
      total,
      page,
      pageSize,
      lastUpdated: lastRun?.completedAt?.toISOString() || null,
      snapshotVersion
    });
  } catch (err: any) {
    return res.status(500).json({ error: err.message || 'Failed to fetch trades' });
  }
}

// 3. GET /api/my-clients (Strict Employee Scope Authorization)
export async function getMyClients(req: AuthenticatedRequest, res: Response) {
  try {
    const role = req.user?.role;
    const currentEmpId = req.user?.id;
    const requestedEmpId = req.query.employeeId as string;

    // Enforce authorization: An EMPLOYEE can only query their own mapped clients!
    if (role === 'EMPLOYEE' && requestedEmpId && requestedEmpId !== currentEmpId) {
      return res.status(403).json({
        error: "Forbidden: You cannot access another employee's mapped clients"
      });
    }

    const targetEmployeeId = (role === 'EMPLOYEE' ? currentEmpId : (requestedEmpId || currentEmpId))!;

    const page = Math.max(1, parseInt(req.query.page as string) || 1);
    const pageSize = Math.min(100, Math.max(1, parseInt(req.query.pageSize as string) || 20));
    const snapshotVersion = await getActiveSnapshotVersion();

    // Query employee client mappings
    const mappings = await prisma.employeeClientMapping.findMany({
      where: { employeeId: targetEmployeeId },
      select: { clientId: true }
    });

    const mappedClientIds = mappings.map((m) => m.clientId);

    const [total, clients] = await Promise.all([
      prisma.client.count({
        where: {
          id: { in: mappedClientIds },
          snapshotVersion
        }
      }),
      prisma.client.findMany({
        where: {
          id: { in: mappedClientIds },
          snapshotVersion
        },
        skip: (page - 1) * pageSize,
        take: pageSize,
        orderBy: { id: 'asc' }
      })
    ]);

    const lastRun = await syncWorker.getLatestSyncRun();

    return res.json({
      employeeId: targetEmployeeId,
      data: clients,
      total,
      page,
      pageSize,
      lastUpdated: lastRun?.completedAt?.toISOString() || null,
      snapshotVersion
    });
  } catch (err: any) {
    return res.status(500).json({ error: err.message || 'Failed to fetch mapped clients' });
  }
}

// 4. GET /api/mappings (Management Visibility for All Employee-Client Mappings)
export async function getMappings(req: AuthenticatedRequest, res: Response) {
  try {
    const role = req.user?.role;
    const currentEmpId = req.user?.id;
    const requestedEmpId = req.query.employeeId as string;

    if (role === 'EMPLOYEE' && requestedEmpId && requestedEmpId !== currentEmpId) {
      return res.status(403).json({
        error: "Forbidden: You cannot view another employee's mappings"
      });
    }

    const whereClause: any = {};
    if (role === 'EMPLOYEE') {
      whereClause.employeeId = currentEmpId;
    } else if (requestedEmpId) {
      whereClause.employeeId = requestedEmpId;
    }

    const page = Math.max(1, parseInt(req.query.page as string) || 1);
    const pageSize = Math.min(100, Math.max(1, parseInt(req.query.pageSize as string) || 50));

    const [total, mappings, countsByEmployee] = await Promise.all([
      prisma.employeeClientMapping.count({ where: whereClause }),
      prisma.employeeClientMapping.findMany({
        where: whereClause,
        skip: (page - 1) * pageSize,
        take: pageSize,
        orderBy: { clientId: 'asc' },
        include: {
          employee: { select: { id: true, name: true, email: true } },
          client: { select: { id: true, name: true, email: true } }
        }
      }),
      prisma.employeeClientMapping.groupBy({
        by: ['employeeId'],
        _count: { clientId: true }
      })
    ]);

    const countsMap: Record<string, number> = {};
    countsByEmployee.forEach((c) => {
      countsMap[c.employeeId] = c._count.clientId;
    });

    return res.json({
      role,
      total,
      page,
      pageSize,
      countsByEmployee: countsMap,
      mappings
    });
  } catch (err: any) {
    return res.status(500).json({ error: err.message || 'Failed to fetch mappings' });
  }
}

// 5. GET /api/employees
export async function getEmployees(req: AuthenticatedRequest, res: Response) {
  try {
    const role = req.user?.role;

    if (role === 'EMPLOYEE') {
      const employees = await prisma.employee.findMany({
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
          createdAt: true
        },
        orderBy: { id: 'asc' }
      });
      return res.json(employees);
    }

    // Management sees all employee data including incentive rates and mapped client counts
    const [employees, mappingCounts] = await Promise.all([
      prisma.employee.findMany({ orderBy: { id: 'asc' } }),
      prisma.employeeClientMapping.groupBy({
        by: ['employeeId'],
        _count: { clientId: true }
      })
    ]);

    const countsMap: Record<string, number> = {};
    mappingCounts.forEach((c: any) => {
      countsMap[c.employeeId] = c._count.clientId;
    });

    const enrichedEmployees = employees.map((emp: any) => ({
      ...emp,
      mappedClientCount: countsMap[emp.id] || 0
    }));

    return res.json(enrichedEmployees);
  } catch (err: any) {
    return res.status(500).json({ error: err.message || 'Failed to fetch employees' });
  }
}

// 6. GET /api/incentives (Strict Backend Authorization)
export async function getIncentives(req: AuthenticatedRequest, res: Response) {
  try {
    const role = req.user?.role;
    const currentEmpId = req.user?.id;
    const requestedEmpId = req.query.employeeId as string;

    const snapshotVersion = await getActiveSnapshotVersion();

    if (role === 'EMPLOYEE') {
      // An employee can ONLY access their own incentive!
      if (requestedEmpId && requestedEmpId !== currentEmpId) {
        return res.status(403).json({
          error: 'Forbidden: You can only view your own incentive details'
        });
      }

      const summary = await calculateIncentivesForEmployee(currentEmpId!, snapshotVersion);
      return res.json({
        role: 'EMPLOYEE',
        summary,
        snapshotVersion
      });
    }

    // Management role: can request specific employee OR get overall breakdown
    if (requestedEmpId) {
      const summary = await calculateIncentivesForEmployee(requestedEmpId, snapshotVersion);
      return res.json({
        role: 'MANAGEMENT',
        summary,
        snapshotVersion
      });
    }

    const allIncentives = await calculateAllIncentives(snapshotVersion);
    return res.json({
      role: 'MANAGEMENT',
      ...allIncentives
    });
  } catch (err: any) {
    return res.status(500).json({ error: err.message || 'Failed to calculate incentives' });
  }
}

// 7. GET /api/sync/status
export async function getSyncStatus(req: AuthenticatedRequest, res: Response) {
  try {
    const latestRun = await syncWorker.getLatestSyncRun();
    const activeVersion = await getActiveSnapshotVersion();

    return res.json({
      currentStatus: latestRun?.status || 'IDLE',
      activeSnapshotVersion: activeVersion,
      currentVersion: latestRun?.version || activeVersion,
      lastSuccessfulSync: latestRun?.completedAt?.toISOString() || null,
      recordsProcessed: latestRun?.recordsProcessed || 0,
      latestError: latestRun?.error || null,
      isBseAvailable: latestRun?.status !== 'FAILED'
    });
  } catch (err: any) {
    return res.status(500).json({ error: err.message || 'Failed to get sync status' });
  }
}

// 8. POST /api/sync/trigger
export async function triggerSync(req: AuthenticatedRequest, res: Response) {
  try {
    const failureModeHeader = (req.body?.failureMode || req.headers['x-bse-failure-mode']) as string;
    const delayMs = req.body?.delayMs ? parseInt(req.body.delayMs) : undefined;
    const autoRun = req.body?.autoRun !== false;

    if (autoRun) {
      const result = await syncWorker.runSync({ failureModeHeader, delayMs });
      return res.json(result);
    }

    const initResult = await syncWorker.initSync({ failureModeHeader, delayMs });
    return res.json(initResult);
  } catch (err: any) {
    return res.status(500).json({ error: err.message || 'Sync trigger failed' });
  }
}

// 9. POST /api/sync/step (Resumable Chunk Step Execution for Vercel Serverless)
export async function executeSyncStep(req: AuthenticatedRequest, res: Response) {
  try {
    const { syncJobId } = req.body || {};
    const failureModeHeader = (req.body?.failureMode || req.headers['x-bse-failure-mode']) as string;
    const delayMs = req.body?.delayMs ? parseInt(req.body.delayMs) : undefined;

    let targetJobId = syncJobId;
    if (!targetJobId) {
      const init = await syncWorker.initSync({ failureModeHeader, delayMs });
      targetJobId = init.syncJobId;
    }

    const result = await syncWorker.executeStep(targetJobId, { failureModeHeader, delayMs });
    return res.json(result);
  } catch (err: any) {
    return res.status(500).json({ error: err.message || 'Sync step execution failed' });
  }
}

// 10. GET /api/events (SSE Realtime Stream)
export function getEventsStream(req: AuthenticatedRequest, res: Response) {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.flushHeaders();

  sseManager.addClient(res);
}
