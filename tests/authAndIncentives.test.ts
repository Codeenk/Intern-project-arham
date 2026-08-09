import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import supertest from 'supertest';
import { PrismaClient } from '@prisma/client';
import { app as backendApp } from '../apps/backend/src/server.js';
import { calculateIncentivesForEmployee } from '../apps/backend/src/services/incentiveCalculator.js';

const prisma = new PrismaClient();
const backendRequest = supertest(backendApp);

describe('Backend Authorization, Scoping & Mapping Model Audit Tests', () => {
  beforeAll(async () => {
    await prisma.trade.deleteMany();
    await prisma.employeeClientMapping.deleteMany();
    await prisma.client.deleteMany();
    await prisma.employee.deleteMany();
    await prisma.syncRun.deleteMany();

    await prisma.syncRun.create({
      data: {
        version: 1,
        status: 'SUCCESS',
        startedAt: new Date(),
        completedAt: new Date(),
        recordsProcessed: 10
      }
    });

    // EMP-001: Management Account
    await prisma.employee.create({
      data: {
        id: 'EMP-001',
        name: 'Test Management Admin',
        email: 'management.1@arhamfintech.com',
        role: 'MANAGEMENT',
        incentiveRate: 0.15
      }
    });

    // EMP-003: Relationship Manager 1
    await prisma.employee.create({
      data: {
        id: 'EMP-003',
        name: 'RM Aarav',
        email: 'employee.3@arhamfintech.com',
        role: 'EMPLOYEE',
        incentiveRate: 0.10
      }
    });

    // EMP-004: Relationship Manager 2
    await prisma.employee.create({
      data: {
        id: 'EMP-004',
        name: 'RM Vihaan',
        email: 'employee.4@arhamfintech.com',
        role: 'EMPLOYEE',
        incentiveRate: 0.10
      }
    });

    // Clients
    await prisma.client.create({
      data: { id: 'CLI-0001', name: 'Client A', email: 'a@client.com', phone: '9999911111', snapshotVersion: 1 }
    });
    await prisma.client.create({
      data: { id: 'CLI-0002', name: 'Client B', email: 'b@client.com', phone: '9999922222', snapshotVersion: 1 }
    });

    // Mappings: CLI-0001 -> EMP-003, CLI-0002 -> EMP-004
    await prisma.employeeClientMapping.create({
      data: { employeeId: 'EMP-003', clientId: 'CLI-0001' }
    });
    await prisma.employeeClientMapping.create({
      data: { employeeId: 'EMP-004', clientId: 'CLI-0002' }
    });

    // Trades
    await prisma.trade.create({
      data: {
        id: 'TRD-0001',
        clientId: 'CLI-0001',
        tradeDate: new Date('2026-08-01T10:00:00Z'),
        symbol: 'RELIANCE',
        quantity: 100,
        price: 2000,
        brokerage: 1000.00, // Brokerage for Client A (EMP-003) = 1000
        snapshotVersion: 1
      }
    });
    await prisma.trade.create({
      data: {
        id: 'TRD-0002',
        clientId: 'CLI-0002',
        tradeDate: new Date('2026-08-01T11:00:00Z'),
        symbol: 'TCS',
        quantity: 50,
        price: 4000,
        brokerage: 2000.00, // Brokerage for Client B (EMP-004) = 2000
        snapshotVersion: 1
      }
    });
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it('1. EMP-001 management can see all mappings', async () => {
    const res = await backendRequest
      .get('/api/mappings')
      .set('x-user-role', 'MANAGEMENT')
      .set('x-employee-id', 'EMP-001');

    expect(res.status).toBe(200);
    expect(res.body.role).toBe('MANAGEMENT');
    expect(res.body.total).toBe(2);
  });

  it('2. EMP-003 sees only EMP-003 mapped clients', async () => {
    const res = await backendRequest
      .get('/api/my-clients')
      .set('x-user-role', 'EMPLOYEE')
      .set('x-employee-id', 'EMP-003');

    expect(res.status).toBe(200);
    expect(res.body.data.length).toBe(1);
    expect(res.body.data[0].id).toBe('CLI-0001');
  });

  it('3. EMP-004 sees only EMP-004 mapped clients', async () => {
    const res = await backendRequest
      .get('/api/my-clients')
      .set('x-user-role', 'EMPLOYEE')
      .set('x-employee-id', 'EMP-004');

    expect(res.status).toBe(200);
    expect(res.body.data.length).toBe(1);
    expect(res.body.data[0].id).toBe('CLI-0002');
  });

  it('4. EMP-003 cannot retrieve EMP-004 mapped clients', async () => {
    const res = await backendRequest
      .get('/api/my-clients?employeeId=EMP-004')
      .set('x-user-role', 'EMPLOYEE')
      .set('x-employee-id', 'EMP-003');

    expect(res.status).toBe(403);
    expect(res.body.error).toContain("Forbidden: You cannot access another employee's mapped clients");
  });

  it('5. EMP-003 can retrieve only EMP-003 incentive', async () => {
    const res = await backendRequest
      .get('/api/incentives')
      .set('x-user-role', 'EMPLOYEE')
      .set('x-employee-id', 'EMP-003');

    expect(res.status).toBe(200);
    expect(res.body.summary.employeeId).toBe('EMP-003');
    expect(res.body.summary.calculatedIncentive).toBe(100.00); // 1000 * 0.10 = 100
  });

  it('6. EMP-003 cannot retrieve EMP-004 incentive', async () => {
    const res = await backendRequest
      .get('/api/incentives?employeeId=EMP-004')
      .set('x-user-role', 'EMPLOYEE')
      .set('x-employee-id', 'EMP-003');

    expect(res.status).toBe(403);
    expect(res.body.error).toContain('Forbidden: You can only view your own incentive details');
  });

  it('7. EMP-001 management can retrieve all employee incentives', async () => {
    const res = await backendRequest
      .get('/api/incentives')
      .set('x-user-role', 'MANAGEMENT')
      .set('x-employee-id', 'EMP-001');

    expect(res.status).toBe(200);
    expect(res.body.role).toBe('MANAGEMENT');
    expect(res.body.summaries.length).toBeGreaterThanOrEqual(2);
  });

  it('8. Client mapping has no duplicate active relationships (clientId unique constraint)', async () => {
    // Attempting to assign CLI-0001 to EMP-004 should fail due to @unique constraint on clientId
    await expect(
      prisma.employeeClientMapping.create({
        data: { employeeId: 'EMP-004', clientId: 'CLI-0001' }
      })
    ).rejects.toThrow();
  });

  it('9. Incentive calculation uses only mapped-client trades', async () => {
    // EMP-003 only gets incentive from CLI-0001 trade (1000 brokerage * 10% = 100)
    // EMP-004 trade (CLI-0002, 2000 brokerage) is NOT included in EMP-003 calculation!
    const summaryEmp3 = await calculateIncentivesForEmployee('EMP-003', 1);
    const summaryEmp4 = await calculateIncentivesForEmployee('EMP-004', 1);

    expect(summaryEmp3?.totalBrokerage).toBe(1000.00);
    expect(summaryEmp3?.calculatedIncentive).toBe(100.00);

    expect(summaryEmp4?.totalBrokerage).toBe(2000.00);
    expect(summaryEmp4?.calculatedIncentive).toBe(200.00);
  });

  it('10. Role switching changes authenticated demo identity correctly', async () => {
    // Switching headers from EMP-003 to EMP-001 changes context from restricted employee to management
    const empRes = await backendRequest
      .get('/api/employees')
      .set('x-user-role', 'EMPLOYEE')
      .set('x-employee-id', 'EMP-003');

    const mgmtRes = await backendRequest
      .get('/api/employees')
      .set('x-user-role', 'MANAGEMENT')
      .set('x-employee-id', 'EMP-001');

    expect(empRes.status).toBe(200);
    expect(mgmtRes.status).toBe(200);
    // Employee view hides incentiveRate; Management view exposes incentiveRate
    expect(empRes.body[0].incentiveRate).toBeUndefined();
    expect(mgmtRes.body[0].incentiveRate).toBeDefined();
  });
});
