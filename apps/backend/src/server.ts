import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import './db.js';
import { authMiddleware } from './middleware/auth.js';
import {
  getClients,
  getTrades,
  getMyClients,
  getMappings,
  getEmployees,
  getIncentives,
  getSyncStatus,
  triggerSync,
  executeSyncStep,
  getEventsStream
} from './controllers/portalController.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Public health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'UP', timestamp: new Date().toISOString() });
});

// SSE Events stream (public / auth flexible)
app.get('/api/events', getEventsStream);

// Apply Auth Middleware to all internal portal routes
app.use('/api', authMiddleware);

// Portal Views Endpoints
app.get('/api/clients', getClients);
app.get('/api/trades', getTrades);
app.get('/api/my-clients', getMyClients);
app.get('/api/mappings', getMappings);
app.get('/api/employees', getEmployees);
app.get('/api/incentives', getIncentives);

// Sync Operations Endpoints
app.get('/api/sync/status', getSyncStatus);
app.post('/api/sync/trigger', triggerSync);
app.post('/api/sync/step', executeSyncStep);

export { app };

const PORT = process.env.PORT || 4000;

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`[Internal Backend] Server running on http://localhost:${PORT}`);
  });
}
