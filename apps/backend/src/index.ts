import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import { app as backendApp } from './server.js';
import { app as bseApp } from '@arham/mock-bse';

dotenv.config();

// Unify Mock BSE under the same Express app (it already defines /api/bse and /api/internal)
backendApp.use(bseApp);

// Serve the compiled React dashboard (Vite output: apps/dashboard/dist)
const dashboardDist = path.resolve(__dirname, '../../dashboard/dist');
backendApp.use(express.static(dashboardDist));

// SPA fallback: serve index.html for non-API routes only
backendApp.use('/api', (_req: express.Request, res: express.Response) => {
  res.status(404).json({ error: 'Not found' });
});
backendApp.get('*', (req: express.Request, res: express.Response) => {
  res.sendFile(path.resolve(dashboardDist, 'index.html'));
});

const PORT = process.env.PORT || 4000;

if (!process.env.VERCEL && process.env.NODE_ENV !== 'test') {
  backendApp.listen(PORT, () => {
    console.log(`[Arham Fintech] Unified server running on port ${PORT}`);
  });
}