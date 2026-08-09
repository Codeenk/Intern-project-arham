# Arham Fintech Private Limited — Stock Broking Operations Portal

Production-quality take-home coding assignment isolating the internal operations portal from a slow/unreliable BSE API source using a **Vercel Free Tier Compatible Serverless Architecture** and persistent database snapshotting.

---

## ⚡ Hosting & Free-Tier Architecture Summary

- **Hosting Provider:** Vercel Free Tier (**Total Hosting Cost = ₹0.00**)
- **Database:** Free persistent PostgreSQL-compatible database (configured via `DATABASE_URL`)
- **Backend Architecture:** Serverless-compatible Node.js REST API
- **External Source Isolation:** Dashboard reads strictly from local canonical database snapshots. Browser requests **never** wait for external BSE pulls.
- **Synchronization Engine:** Chunked resumable state machine persisted in PostgreSQL.
- **30-Second HTTP & 10-Minute Upstream Constraint Solution:** Each sync step completes in < 1 second. No single HTTP request remains open for the 10-minute BSE pull.

---

## 🏗️ System Architecture & Workflow

```
Vercel Free Tier ($0.00 Cost)
    │
    ├── Dashboard (React + Vite static web app)
    │     │
    │     ├── Sub-second reads (< 100ms)
    │     ▼
    ├── Backend API (Vercel Serverless Functions)
    │     │
    │     ├── Reads/Writes Canonical Snapshot
    │     ▼
    ├── PostgreSQL Database (Persistent Data Store)
    │     ├── SyncRun (State machine, cursors, attempt tracking)
    │     ├── StagingClient & StagingTrade (Chunk staging)
    │     └── Client, Trade, Employee, Mapping (Canonical data)
    │
    └── Mock BSE API (Chunked pagination with delay & 20% failure simulation)
```

---

## 🔄 Chunked Resumable Synchronization Protocol

To solve the assignment's scenario where **BSE pulls take 5–10 minutes**, **networks terminate HTTP requests after 30 seconds**, and **20% of pulls fail midway**, the synchronization worker uses a persistent state machine stored in PostgreSQL:

1. **Initiation (`POST /api/sync/trigger`):**
   Creates a `SyncRun` record in PostgreSQL with status `STAGING_CLIENTS`, `clientCursor = 0`, `tradeCursor = 0`, and `attempt = 1`.
2. **Chunked Resumable Execution (`POST /api/sync/step`):**
   - **Clients Staging:** Fetches bounded chunks of 100 clients from `/api/bse/clients?offset=...&limit=100`, inserts into `StagingClient` table in PostgreSQL, and advances `clientCursor`.
   - **Trades Staging:** Fetches bounded chunks of 500 trades from `/api/bse/trades?offset=...&limit=500`, inserts into `StagingTrade` table in PostgreSQL, and advances `tradeCursor`.
   - **Validation & Deduplication:** Validates staged records and deduplicates trades by trade ID.
   - **Atomic Publishing:** Runs a sub-second PostgreSQL transaction (`prisma.$transaction`) that bulk-publishes staged data to active `Client` and `Trade` tables with snapshot version $N$.
3. **Fault Tolerance & Resumable Retries:**
   - If a chunk fails (e.g., 20% random BSE disruption), the failure is recorded in `SyncRun.attempt` and retried with exponential backoff.
   - **Already staged chunks remain preserved in PostgreSQL!** The retry resumes directly from the failed chunk cursor rather than restarting the entire 10-minute pull.
4. **Overlapping Version Protection:**
   - If Sync Version 42 publishes first, an older Sync Version 41 attempting to publish is marked `DISCARDED` by the database transaction, preventing stale data overwrites.

---

## 👥 Employee Roles & Scoping Model

- **Management Accounts (`EMP-001`, `EMP-002`):**
  - Global oversight visibility across all 400 clients, 18 relationship managers, and 4,000 trades.
  - Access to `GET /api/mappings` and global incentive breakdowns.
  - Ownership: 0 mapped clients.
- **Relationship Managers (`EMP-003` to `EMP-020`):**
  - Mapped to clients non-uniformly (e.g. `EMP-003`: 12 clients, `EMP-007`: 38 clients, `EMP-020`: 41 clients).
  - Strict backend authorization (`HTTP 403 Forbidden`) prevents an RM from viewing another RM's mapped clients or incentive details.

---

## 🚀 Environment Variables

Configure the following environment variables on Vercel:

| Variable | Description | Default / Example |
| :--- | :--- | :--- |
| `DATABASE_URL` | PostgreSQL connection string | `postgresql://user:pass@ep-host.postgresql.provider.com/neondb` |
| `BSE_API_URL` | Mock BSE API base URL | `http://127.0.0.1:3001` or deployed URL |
| `BSE_DELAY_MS` | Simulated BSE pull delay (ms) | `50` (or `600000` for 10-min simulation) |
| `BSE_FAILURE_RATE` | Random BSE mid-pull failure rate | `0.20` (20%) |
| `BSE_SEED` | Seed for deterministic data generation | `12345` |
| `MAX_RETRIES` | Max sync retry attempts | `3` |

---

## 🧪 Testing & Verification

Run the full integration test suite covering role scoping, database constraints, chunked resumable sync, and fault tolerance:

```bash
npm run test
```

Expected output:
```
 Test Files  2 passed (2)
      Tests  19 passed (19)
```

---

## 📊 Database Audit & Metrics Report

Run the database inspection script to log exact empirical statistics:

```bash
npx tsx scripts/inspectDb.ts
```

Output highlights:
- **Total Employees:** 20 (2 Management, 18 RMs)
- **Total Clients:** 400 (Unique `clientId` mapping constraint enforced)
- **Total Mappings:** 400 (Unevenly distributed: 11 to 41 clients per RM)
- **Total Trades:** 4,000 (Unevenly distributed: 1 to 33 trades per client)
- **Firm Grand Total Incentive Payout:** ₹4,35,471.04
