import { PrismaClient } from '@prisma/client';
import { calculateAllIncentives } from '../apps/backend/src/services/incentiveCalculator.js';

const prisma = new PrismaClient();

async function inspect() {
  const employees = await prisma.employee.findMany({ orderBy: { id: 'asc' } });
  const mgmt = employees.filter((e) => e.role === 'MANAGEMENT');
  const rms = employees.filter((e) => e.role === 'EMPLOYEE');

  const totalClients = await prisma.client.count();
  const totalMappings = await prisma.employeeClientMapping.count();
  const totalTrades = await prisma.trade.count();

  // Mappings per employee
  const mappingGroups = await prisma.employeeClientMapping.groupBy({
    by: ['employeeId'],
    _count: { clientId: true }
  });

  const mappingCounts: Record<string, number> = {};
  mappingGroups.forEach((g) => {
    mappingCounts[g.employeeId] = g._count.clientId;
  });

  // Trades per client distribution
  const tradeGroups = await prisma.trade.groupBy({
    by: ['clientId'],
    _count: { id: true }
  });

  const counts = tradeGroups.map((g) => g._count.id);
  const minTrades = Math.min(...counts);
  const maxTrades = Math.max(...counts);
  const avgTrades = (counts.reduce((a, b) => a + b, 0) / counts.length).toFixed(1);

  // Incentive totals per employee
  const incentives = await calculateAllIncentives(1);

  console.log('==================================================');
  console.log('DATABASE AUDIT & METRICS REPORT');
  console.log('==================================================');
  console.log(`Total Employees: ${employees.length}`);
  console.log(`- Management Accounts (${mgmt.length}): ${mgmt.map((m) => m.id).join(', ')}`);
  console.log(`- Relationship Managers (${rms.length}): ${rms.map((r) => r.id).join(', ')}`);
  console.log(`Total Clients: ${totalClients}`);
  console.log(`Total Mappings: ${totalMappings}`);
  console.log(`Total Trades: ${totalTrades}`);
  console.log('--------------------------------------------------');
  console.log('CLIENT MAPPING DISTRIBUTION PER EMPLOYEE (UNEVEN):');
  rms.forEach((rm) => {
    console.log(`  ${rm.id} (${rm.name}): ${mappingCounts[rm.id] || 0} clients mapped`);
  });
  console.log('--------------------------------------------------');
  console.log('TRADES PER CLIENT DISTRIBUTION (UNEVEN):');
  console.log(`  Min trades for a client: ${minTrades}`);
  console.log(`  Max trades for a client: ${maxTrades}`);
  console.log(`  Average trades per client: ${avgTrades}`);
  console.log('--------------------------------------------------');
  console.log('EMPLOYEE INCENTIVE BREAKDOWN:');
  incentives.summaries.forEach((s) => {
    console.log(`  ${s.employeeId} (${s.employeeName}): ${s.mappedClientCount} clients, Brokerage = ₹${s.totalBrokerage.toLocaleString()}, Incentive = ₹${s.calculatedIncentive.toLocaleString()}`);
  });
  console.log(`FIRM GRAND TOTAL INCENTIVE PAYOUT: ₹${incentives.grandTotalIncentive.toLocaleString()}`);
  console.log('==================================================');

  await prisma.$disconnect();
}

inspect().catch(console.error);
