# Arham Fintech — System Architecture & Failure Isolation Model

## System Overview

The Arham Fintech Operations Portal isolates internal stock broking dashboard users from an unreliable external BSE API (5–10 minute pull delays, 20% mid-pull network failure rate, 30s HTTP client drop-offs).

```
┌─────────────────┐
│   Mock BSE API  │ (Slow, Unreliable: 5-10 min delay, 20% mid-pull failures)
└────────┬────────┘
         │ (HTTP Chunked Stream / Rest Endpoints)
┌────────▼────────┐
│  Sync Worker    │ (Background Process: Monotonic Sync Versions, Backoff Retries)
└────────┬────────┘
         │
┌────────▼────────┐
│ Staging Valid.  │ (Deduplication, Schema Verification, Foreign-Key Integrity)
└────────┬────────┘
         │
┌────────▼────────┐
│ Atomic Publish  │ (Single PostgreSQL / Prisma DB Transaction)
└────────┬────────┘
         │
┌────────▼────────┐             ┌─────────────────────┐
│ PostgreSQL DB   ├────────────►│  SSE Event Manager  │
└────────┬────────┘             └──────────┬──────────┘
         │ (Sub-second Reads)              │ (DATA_UPDATED Push Event)
┌────────▼────────┐                        │
│ Internal API    │                        │
└────────┬────────┘                        │
         │                                 │
┌────────▼─────────────────────────────────▼────────┐
│               React Operations Portal             │ (5 Views, Roles: Employee / Management)
└───────────────────────────────────────────────────┘
```

---

## Architectural Principles & Guarantees

### 1. BSE Isolation & Sub-Second Response Guarantee (<1s)
- **Principle:** The frontend React dashboard **NEVER** requests BSE directly.
- **Implementation:** All portal requests (`/api/clients`, `/api/trades`, `/api/my-clients`, `/api/incentives`) query the local PostgreSQL database using indexed fields (`clientId`, `tradeDate`, `employeeId`, `snapshotVersion`).
- **Result:** API responses return in **< 50 milliseconds**, even when the BSE server is completely offline or taking 10 minutes to process.

### 2. Atomic Snapshot Consistency (No Partial State)
- **Problem:** Incrementally updating production tables during a slow BSE pull corrupts active data if the connection drops at 20%.
- **Solution:** Sync worker loads data into a staging verification layer. All client records, trade schema constraints, and foreign key references are validated.
- **Transaction:** Data is published atomically using a single database transaction (`prisma.$transaction`). Either the entire new snapshot (e.g. `v42`) is published successfully, or the attempt is discarded leaving active snapshot `v41` intact.

### 3. Overlapping Refresh Safety & Out-of-Order Discard Protection
- **Problem:** Fast Sync B (version 42) completes in 20s, while slow Sync A (version 41) completes after 2 minutes. Sync A finishing later must not overwrite version 42.
- **Solution:** Monotonically increasing sync versioning (`SyncRun.version`). Prior to committing, the worker checks:
  `if (targetVersion <= currentActiveSuccessfulVersion) => DISCARD`.
- Older sync runs are marked `FAILED` with an explicit reason (`SYNC_DISCARDED: Version obsolete`).

### 4. Exponential Backoff Retries with Jitter
- **Strategy:** Retries use bounded exponential backoff: `Delay = Initial * (2 ^ attempt) + Jitter`.
- **Bound:** Retries stop automatically after reaching `MAX_RETRIES` (default 3), updating status to `FAILED`.

### 5. Server-Sent Events (SSE) Realtime Notification
- **Trigger:** Upon successful atomic publish, `sseManager.broadcast({ type: 'DATA_UPDATED', syncVersion: 42 })`.
- **Frontend Action:** Open dashboards receive the event instantly and trigger TanStack Query cache invalidation (`queryClient.invalidateQueries()`), updating views automatically without reloading the page.

### 6. Role-Based Backend Authorization
- **Security:** Security is enforced at the backend middleware layer (`authMiddleware`), NOT just by hiding UI buttons.
- **Employee Scope:** Employees (`EMPLOYEE` role) can only access their mapped clients (`/api/my-clients`) and their own incentive calculation (`/api/incentives?employeeId=OWN_ID`). Requesting another employee's incentives yields HTTP `403 Forbidden`.
