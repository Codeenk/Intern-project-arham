import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { generateSeedData } from './seedData.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;
const BSE_SEED = parseInt(process.env.BSE_SEED || '12345');
const BSE_DELAY_MS = parseInt(process.env.BSE_DELAY_MS || '50');
const BSE_FAILURE_RATE = parseFloat(process.env.BSE_FAILURE_RATE || '0.20');

// Generate deterministic seeded dataset
const seedData = generateSeedData(BSE_SEED);

console.log(`[Mock BSE] Initialized with Seed=${BSE_SEED}: ${seedData.clients.length} Clients, ${seedData.trades.length} Trades, ${seedData.employees.length} Employees`);

// Helper to handle delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Status check endpoint
app.get('/api/bse/health', (req: Request, res: Response) => {
  res.json({
    status: 'UP',
    config: {
      seed: BSE_SEED,
      delayMs: BSE_DELAY_MS,
      failureRate: BSE_FAILURE_RATE,
      totalClients: seedData.clients.length,
      totalTrades: seedData.trades.length
    }
  });
});

// Internal Master Data Endpoints (Fast and Reliable)
app.get('/api/internal/employees', (req: Request, res: Response) => {
  console.log(`[Mock BSE Internal] GET /api/internal/employees`);
  res.json(seedData.employees);
});

app.get('/api/internal/mappings', (req: Request, res: Response) => {
  console.log(`[Mock BSE Internal] GET /api/internal/mappings`);
  res.json(seedData.mappings);
});

// Mock BSE Clients Endpoint (Supports Chunking Pagination via offset & limit)
app.get('/api/bse/clients', async (req: Request, res: Response) => {
  const failureMode = req.headers['x-bse-failure-mode'] as string;
  const customDelay = req.query.delayMs ? parseInt(req.query.delayMs as string) : BSE_DELAY_MS;
  const offset = req.query.offset !== undefined ? parseInt(req.query.offset as string) : undefined;
  const limit = req.query.limit !== undefined ? parseInt(req.query.limit as string) : undefined;
  
  console.log(`[Mock BSE] PULL STARTED: /api/bse/clients (Offset=${offset ?? 'none'}, Limit=${limit ?? 'none'}, Delay=${customDelay}ms, Mode=${failureMode || 'default'})`);
  
  if (customDelay > 0) {
    await delay(customDelay);
  }

  // Handle immediate failure simulation
  if (failureMode === 'immediate') {
    console.error(`[Mock BSE] PULL FAILED (Immediate simulated failure): /api/bse/clients`);
    return res.status(500).json({ error: 'BSE API connection failed immediately' });
  }

  // Check mid-pull failure condition
  const shouldFailMidway = failureMode === 'mid-pull' || (!failureMode && Math.random() < BSE_FAILURE_RATE);

  if (shouldFailMidway) {
    console.error(`[Mock BSE] PULL MID-FAIL: /api/bse/clients (Simulated failure midway through response)`);
    return res.status(500).json({
      error: 'BSE API Mid-Pull Disruption: Stream disconnected after partial transmit',
      partialCount: Math.floor(seedData.clients.length * 0.25),
      clients: seedData.clients.slice(0, Math.floor(seedData.clients.length * 0.25))
    });
  }

  if (offset !== undefined && limit !== undefined) {
    const chunk = seedData.clients.slice(offset, offset + limit);
    const nextOffset = offset + chunk.length;
    const hasMore = nextOffset < seedData.clients.length;
    console.log(`[Mock BSE] PULL CHUNK SUCCESS: /api/bse/clients (Offset ${offset}-${nextOffset} / ${seedData.clients.length})`);
    return res.json({
      data: chunk,
      nextOffset,
      total: seedData.clients.length,
      hasMore
    });
  }

  console.log(`[Mock BSE] PULL SUCCESS: /api/bse/clients (${seedData.clients.length} records)`);
  return res.json(seedData.clients);
});

// Mock BSE Trades Endpoint (Supports Chunking Pagination via offset & limit)
app.get('/api/bse/trades', async (req: Request, res: Response) => {
  const failureMode = req.headers['x-bse-failure-mode'] as string;
  const customDelay = req.query.delayMs ? parseInt(req.query.delayMs as string) : BSE_DELAY_MS;
  const { clientId, from, to } = req.query;
  const offset = req.query.offset !== undefined ? parseInt(req.query.offset as string) : undefined;
  const limit = req.query.limit !== undefined ? parseInt(req.query.limit as string) : undefined;

  console.log(`[Mock BSE] PULL STARTED: /api/bse/trades (Offset=${offset ?? 'none'}, Limit=${limit ?? 'none'}, clientId=${clientId || 'all'})`);

  if (customDelay > 0) {
    await delay(customDelay);
  }

  if (failureMode === 'immediate') {
    console.error(`[Mock BSE] PULL FAILED (Immediate simulated failure): /api/bse/trades`);
    return res.status(500).json({ error: 'BSE API connection failed immediately' });
  }

  const shouldFailMidway = failureMode === 'mid-pull' || (!failureMode && Math.random() < BSE_FAILURE_RATE);

  let filteredTrades = [...seedData.trades];

  if (clientId) {
    filteredTrades = filteredTrades.filter((t) => t.clientId === clientId);
  }
  if (from) {
    const fromTime = new Date(from as string).getTime();
    filteredTrades = filteredTrades.filter((t) => new Date(t.tradeDate).getTime() >= fromTime);
  }
  if (to) {
    const toTime = new Date(to as string).getTime();
    filteredTrades = filteredTrades.filter((t) => new Date(t.tradeDate).getTime() <= toTime);
  }

  if (shouldFailMidway) {
    console.error(`[Mock BSE] PULL MID-FAIL: /api/bse/trades (Failed midway after partial data)`);
    return res.status(500).json({
      error: 'BSE API Mid-Pull Disruption: Database transaction aborted midway',
      partialCount: Math.floor(filteredTrades.length * 0.3),
      trades: filteredTrades.slice(0, Math.floor(filteredTrades.length * 0.3))
    });
  }

  if (offset !== undefined && limit !== undefined) {
    const chunk = filteredTrades.slice(offset, offset + limit);
    const nextOffset = offset + chunk.length;
    const hasMore = nextOffset < filteredTrades.length;
    console.log(`[Mock BSE] PULL CHUNK SUCCESS: /api/bse/trades (Offset ${offset}-${nextOffset} / ${filteredTrades.length})`);
    return res.json({
      data: chunk,
      nextOffset,
      total: filteredTrades.length,
      hasMore
    });
  }

  console.log(`[Mock BSE] PULL SUCCESS: /api/bse/trades (${filteredTrades.length} records returned)`);
  return res.json(filteredTrades);
});

// Single client trade lookup endpoint
app.get('/api/bse/trades/:clientId', async (req: Request, res: Response) => {
  const { clientId } = req.params;
  const trades = seedData.trades.filter((t) => t.clientId === clientId);
  res.json(trades);
});

export { app };

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`[Mock BSE] Server running on http://localhost:${PORT}`);
  });
}
