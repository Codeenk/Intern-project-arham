import { prisma } from '../db.js';
import { IncentiveSummary } from '@arham/shared';

export async function calculateIncentivesForEmployee(
  employeeId: string,
  targetSnapshotVersion?: number
): Promise<IncentiveSummary | null> {
  const employee = await prisma.employee.findUnique({
    where: { id: employeeId }
  });

  if (!employee) return null;

  // Determine latest successful active snapshot version if not specified
  let version = targetSnapshotVersion;
  if (!version) {
    const latestRun = await prisma.syncRun.findFirst({
      where: { status: 'SUCCESS' },
      orderBy: { version: 'desc' }
    });
    version = latestRun ? latestRun.version : 1;
  }

  // Get mapped client IDs for this employee
  const mappings = await prisma.employeeClientMapping.findMany({
    where: { employeeId: employee.id },
    select: { clientId: true }
  });

  const mappedClientIds = mappings.map((m) => m.clientId);

  if (mappedClientIds.length === 0) {
    return {
      employeeId: employee.id,
      employeeName: employee.name,
      email: employee.email,
      incentiveRate: employee.incentiveRate,
      mappedClientCount: 0,
      totalBrokerage: 0,
      calculatedIncentive: 0,
      snapshotVersion: version
    };
  }

  // Aggregate brokerage from trades belonging to mapped clients in the current snapshot
  const tradeAggregation = await prisma.trade.aggregate({
    _sum: {
      brokerage: true
    },
    where: {
      clientId: { in: mappedClientIds },
      snapshotVersion: version
    }
  });

  const totalBrokerage = tradeAggregation._sum.brokerage || 0;
  const calculatedIncentive = Number((totalBrokerage * employee.incentiveRate).toFixed(2));

  return {
    employeeId: employee.id,
    employeeName: employee.name,
    email: employee.email,
    incentiveRate: employee.incentiveRate,
    mappedClientCount: mappedClientIds.length,
    totalBrokerage: Number(totalBrokerage.toFixed(2)),
    calculatedIncentive,
    snapshotVersion: version
  };
}

export async function calculateAllIncentives(
  targetSnapshotVersion?: number
): Promise<{ summaries: IncentiveSummary[]; grandTotalIncentive: number; snapshotVersion: number }> {
  const employees = await prisma.employee.findMany({
    orderBy: { id: 'asc' }
  });

  let version = targetSnapshotVersion;
  if (!version) {
    const latestRun = await prisma.syncRun.findFirst({
      where: { status: 'SUCCESS' },
      orderBy: { version: 'desc' }
    });
    version = latestRun ? latestRun.version : 1;
  }

  const summaries: IncentiveSummary[] = [];
  let grandTotalIncentive = 0;

  for (const emp of employees) {
    const summary = await calculateIncentivesForEmployee(emp.id, version);
    if (summary) {
      summaries.push(summary);
      grandTotalIncentive += summary.calculatedIncentive;
    }
  }

  return {
    summaries,
    grandTotalIncentive: Number(grandTotalIncentive.toFixed(2)),
    snapshotVersion: version
  };
}
