# Arham Fintech — Stock Broking Operations Portal

Production-quality take-home coding assignment that isolates the internal operations portal from a slow/unreliable BSE API source using a **chunked, resumable, atomic snapshot synchronization engine** backed by **PostgreSQL**.

> **Hosted evaluation deployment** — deployed on Render Free tier. This is a *temporary* hosted evaluation deployment, **not** permanent production infrastructure. Render Free Web Services sleep after ~15 minutes of inactivity (cold start ≈ 1 minute) and Render Free PostgreSQL expires after 30 days.

---

## 🔗 Deployment Links

- **GitHub Repository:** `https://github.com/Codeenk/arham-fintech-take-home`
- **Hosted Evaluation Application (Dashboard + Backend + Mock BSE + SSE):** `https://<your-service>.onrender.com`
  - set this to your actual Render URL (`*.onrender.com`) after your service is created.
- Dashboard, Backend, Mock BSE, and SSE all share the **same single URL**.

---

## 🏗️ Architecture (ONE Render Service)

```
GitHub
   ↓
Render Free (Docker Web Service) — ONE public URL
   ├── React Dashboard          GET /              (served from apps/dashboard/dist)
   ├── Express Backend          /api/*             (portal + auth + incentives)
   ├── Mock BSE                 /api/bse/*         (clients, trades, internal data)
   └── SSE                      /api/events        (realtime DATA_UPDATED events)
   ↓
Render Free PostgreSQL          (persistent canonical + staging + sync state)
```

- **Hosting:** Render Free (Docker) — **₹0**
- **Database:** Render Free PostgreSQL — **₹0**
- One Render account, one Web Service, one PostgreSQL database, one public URL.
- No Vercel / Neon / Supabase / Railway / SQLite / paid infrastructure.

The Express process running on `process.env.PORT` serves the built React dashboard, the internal backend routes, the Mock BSE router (mounted under `/api/bse`), and the SSE stream from one listener.

---

## 🔄 Chunked Resumable Synchronization Protocol

The sync engine solves the assignment scenario (BSE pulls can take 5–10 minutes, HTTP requests terminate after ~30s, and ~20% of pulls fail midway):

1. **`POST /api/sync/step`** initializes a persistent `SyncRun` (status, clientCursor, tradeCursor, attempt) in PostgreSQL and stages short chunks:
   - Clients: bounded chunks of 100 from `/api/bse/clients?offset=…&limit=100` → `StagingClient`
   - Trades: bounded chunks of 500 from `/api/bse/trades?offset=…&limit=500` → `StagingTrade`
2. Each step returns the next cursor; the caller re-invokes `/api/sync/step` until `complete:true`. Each HTTP request stays **well under 1 second**.
3. **Validation & deduplication** occurs before publishing.
4. **Atomic publish:** a single PostgreSQL transaction bulk-publishes the staged snapshot to `Client`/`Trade` with snapshot version `N`, preserves employee–client mappings, marks `SyncRun SUCCESS`, and broadcasts **`DATA_UPDATED`** over SSE.
5. **Fault tolerance:** a failed chunk records `attempt` and resumes from the saved cursor; retries preserve already-staged chunks. Canonical snapshot is never replaced by a partial pull.
6. **Overlapping sync protection:** an older version completing after a newer version is marked `DISCARDED` and can never overwrite the active snapshot.

> The dashboard's **Sync Now** button drives the resumable step loop through `POST /api/sync/step`; no paid background workers or cron are introduced.

---

## 👥 Employee Roles & Scoping

- **Management (`EMP-001`, `EMP-002`):** global visibility across all 400 clients, 18 RMs, and 4,000 trades; access to all mappings and global incentives. (0 mapped clients.)
- **Relationship Managers (`EMP-003`–`EMP-020`):** non-uniform mapped-client ownership; strict backend authorization returns **HTTP 403** if an RM tries to read another RM's clients/incentive.
- Authorization headers used by the demo dashboard (not production auth): `x-user-role`, `x-employee-id`.

---

## 🚀 Environment Variables

| Variable | Description | Default |
| :--- | :--- | :--- |
| `DATABASE_URL` | Render Free PostgreSQL connection string | **required** |
| `BSE_DELAY_MS` | Simulated BSE pull delay (ms) | `50` |
| `BSE_FAILURE_RATE` | Random BSE mid-pull failure rate | `0.20` |
| `BSE_SEED` | Deterministic data-generation seed | `12345` |
| `MAX_RETRIES` | Max sync retry attempts | `3` |
| `PORT` | Render injects the HTTP port | `10000` |

---

## 🐳 Local Verification (Docker)

The `Dockerfile` builds the whole app and starts **one** Node/Express process. Without Docker, the exact build steps are: `npm ci && npm run build` then `node apps/backend/dist/index.js`.

```bash
docker build -t arham-fintech .
docker run \
  -e DATABASE_URL=postgresql://user:pass@host/db \
  -e BSE_DELAY_MS=50 \
  -e BSE_FAILURE_RATE=0.20 \
  -e BSE_SEED=12345 \
  -e MAX_RETRIES=3 \
  -p 4000:4000 arham-fintech
```

Apply migrations + seed once (idempotent):

```bash
npx prisma migrate deploy --schema apps/backend/prisma/schema.prisma
node apps/backend/dist/seed.js
```

Expected seed: **20 employees, 400 clients, 400 mappings, 4000 trades** (uneven distribution). Re-running the seed does not duplicate data.

---

## 🧪 Testing

```bash
npm test
```

19 integration tests cover role scoping/auth, chunked resumable sync, atomic publish, SSE, retries, duplicate prevention, mid-pull failure, and overlapping-sync discard.

---

## 🗄 Database Schema / Migrations

- **Provider:** PostgreSQL (Prisma), migrations at `apps/backend/prisma/migrations`.
- Render **Pre-Deploy Command** applies them (no destructive `db push --reset` against production):
  `npx prisma migrate deploy --schema apps/backend/prisma/schema.prisma`
- State maintained in PostgreSQL: employees, clients, mappings, trades, `SyncRun`, `StagingClient`, `StagingTrade`. No SQLite, filesystem state, or in-memory canonical data.

---

## ⚠️ Known Free-Tier Limitations (honest)

- **Render Free Web Service** may sleep after ~15 minutes of inactivity; the first request after sleep triggers a cold start of about one minute. This is **not** the application's normal read performance (warm reads complete well under one second).
- **Render Free PostgreSQL expires after 30 days** and has 1 GB storage, no backups, and no managed connection pooling.
- This is a **temporary hosted evaluation deployment**, not permanent production infrastructure.

---

## 🔐 Security

No `.env`, `DATABASE_URL`, passwords, API keys, tokens, private keys, or confidential materials are committed. Secrets are injected via Render environment variables only.