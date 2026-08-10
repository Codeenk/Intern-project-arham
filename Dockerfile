# ---- Multi-stage Dockerfile for Render Free Docker Web Service ----
# Produces ONE image running a single Node/Express process that serves the
# React dashboard, the Express backend, the Mock BSE router, and SSE on process.env.PORT.

# ---------- Stage 1: Build all workspaces, generate Prisma Client ----------
FROM node:20-alpine AS builder
WORKDIR /app

# npm workspaces require the lockfile + manifest first for efficient caching
COPY package*.json ./
COPY apps ./apps
COPY packages ./packages

# Install all workspace dependencies (includes build tooling + prisma CLI)
RUN npm ci

# Build in dependency order: shared -> mock-bse -> backend (prisma generate + tsc) -> dashboard (vite)
RUN npm run build

# ---------- Stage 2: Runtime image ----------
FROM node:20-alpine
WORKDIR /app

ENV NODE_ENV=production

# Copy manifests, installed dependencies, built artifacts, and scripts
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/apps ./apps
COPY --from=builder /app/packages ./packages
COPY scripts ./scripts

# Render supplies the port at runtime via the PORT env var (never hardcode 4000)
# 10000 is Render's default Free dynamic port.
EXPOSE 10000

# Start script applies Prisma migrations/seeds and launches the unified backend
CMD ["node", "scripts/start-server.cjs"]