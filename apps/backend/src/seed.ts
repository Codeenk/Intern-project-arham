import { PrismaClient } from './generated/client/index.js';
import { generateSeedData } from '@arham/shared';

const prisma = new PrismaClient();

async function main() {
  console.log('[Seed] Seeding local backend database...');
  const seedData = generateSeedData(12345);

  // 1. Seed Employees
  for (const emp of seedData.employees) {
    await prisma.employee.upsert({
      where: { id: emp.id },
      update: {
        name: emp.name,
        email: emp.email,
        role: emp.role,
        incentiveRate: emp.incentiveRate
      },
      create: {
        id: emp.id,
        name: emp.name,
        email: emp.email,
        role: emp.role,
        incentiveRate: emp.incentiveRate,
        createdAt: new Date(emp.createdAt)
      }
    });
  }
  console.log(`[Seed] Seeded ${seedData.employees.length} employees.`);

  // 2. Initial Snapshot 1 for Clients & Trades
  const version = 1;

  for (const client of seedData.clients) {
    await prisma.client.upsert({
      where: { id: client.id },
      update: {
        name: client.name,
        email: client.email,
        phone: client.phone,
        snapshotVersion: version
      },
      create: {
        id: client.id,
        name: client.name,
        email: client.email,
        phone: client.phone,
        snapshotVersion: version,
        createdAt: new Date(client.createdAt),
        updatedAt: new Date(client.updatedAt)
      }
    });
  }
  console.log(`[Seed] Seeded ${seedData.clients.length} clients.`);

  for (const map of seedData.mappings) {
    await prisma.employeeClientMapping.upsert({
      where: { clientId: map.clientId },
      update: { employeeId: map.employeeId },
      create: {
        id: map.id,
        employeeId: map.employeeId,
        clientId: map.clientId,
        createdAt: new Date(map.createdAt)
      }
    });
  }
  console.log(`[Seed] Seeded ${seedData.mappings.length} mappings.`);

  // Batch insert trades
  for (const trade of seedData.trades) {
    await prisma.trade.upsert({
      where: { id: trade.id },
      update: {
        clientId: trade.clientId,
        tradeDate: new Date(trade.tradeDate),
        symbol: trade.symbol,
        quantity: trade.quantity,
        price: trade.price,
        brokerage: trade.brokerage,
        snapshotVersion: version
      },
      create: {
        id: trade.id,
        clientId: trade.clientId,
        tradeDate: new Date(trade.tradeDate),
        symbol: trade.symbol,
        quantity: trade.quantity,
        price: trade.price,
        brokerage: trade.brokerage,
        snapshotVersion: version,
        createdAt: new Date(trade.createdAt)
      }
    });
  }
  console.log(`[Seed] Seeded ${seedData.trades.length} trades.`);

  // Seed Initial SyncRun
  await prisma.syncRun.upsert({
    where: { version: 1 },
    update: {
      status: 'SUCCESS',
      completedAt: new Date(),
      recordsProcessed: seedData.clients.length + seedData.trades.length
    },
    create: {
      version: 1,
      status: 'SUCCESS',
      startedAt: new Date(),
      completedAt: new Date(),
      recordsProcessed: seedData.clients.length + seedData.trades.length,
      error: null
    }
  });

  console.log('[Seed] Database initialization complete!');
}

main()
  .catch((e) => {
    console.error('[Seed Error]', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
