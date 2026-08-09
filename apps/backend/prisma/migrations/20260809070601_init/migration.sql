-- CreateTable
CREATE TABLE "Employee" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "incentiveRate" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Client" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "snapshotVersion" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmployeeClientMapping" (
    "id" TEXT NOT NULL,
    "employeeId" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EmployeeClientMapping_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Trade" (
    "id" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    "tradeDate" TIMESTAMP(3) NOT NULL,
    "symbol" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "brokerage" DOUBLE PRECISION NOT NULL,
    "snapshotVersion" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Trade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StagingClient" (
    "id" TEXT NOT NULL,
    "syncVersion" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StagingClient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StagingTrade" (
    "id" TEXT NOT NULL,
    "syncVersion" INTEGER NOT NULL,
    "clientId" TEXT NOT NULL,
    "tradeDate" TIMESTAMP(3) NOT NULL,
    "symbol" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "brokerage" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StagingTrade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SyncRun" (
    "id" TEXT NOT NULL,
    "version" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "clientCursor" INTEGER NOT NULL DEFAULT 0,
    "tradeCursor" INTEGER NOT NULL DEFAULT 0,
    "attempt" INTEGER NOT NULL DEFAULT 1,
    "maxAttempts" INTEGER NOT NULL DEFAULT 3,
    "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completedAt" TIMESTAMP(3),
    "recordsProcessed" INTEGER NOT NULL DEFAULT 0,
    "error" TEXT,

    CONSTRAINT "SyncRun_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Employee_email_key" ON "Employee"("email");

-- CreateIndex
CREATE INDEX "Client_snapshotVersion_idx" ON "Client"("snapshotVersion");

-- CreateIndex
CREATE UNIQUE INDEX "EmployeeClientMapping_clientId_key" ON "EmployeeClientMapping"("clientId");

-- CreateIndex
CREATE INDEX "EmployeeClientMapping_employeeId_idx" ON "EmployeeClientMapping"("employeeId");

-- CreateIndex
CREATE INDEX "EmployeeClientMapping_clientId_idx" ON "EmployeeClientMapping"("clientId");

-- CreateIndex
CREATE INDEX "Trade_clientId_idx" ON "Trade"("clientId");

-- CreateIndex
CREATE INDEX "Trade_tradeDate_idx" ON "Trade"("tradeDate");

-- CreateIndex
CREATE INDEX "Trade_snapshotVersion_idx" ON "Trade"("snapshotVersion");

-- CreateIndex
CREATE INDEX "Trade_clientId_tradeDate_idx" ON "Trade"("clientId", "tradeDate");

-- CreateIndex
CREATE INDEX "StagingClient_syncVersion_idx" ON "StagingClient"("syncVersion");

-- CreateIndex
CREATE INDEX "StagingTrade_syncVersion_idx" ON "StagingTrade"("syncVersion");

-- CreateIndex
CREATE INDEX "StagingTrade_syncVersion_clientId_idx" ON "StagingTrade"("syncVersion", "clientId");

-- CreateIndex
CREATE UNIQUE INDEX "SyncRun_version_key" ON "SyncRun"("version");

-- CreateIndex
CREATE INDEX "SyncRun_status_idx" ON "SyncRun"("status");

-- CreateIndex
CREATE INDEX "SyncRun_version_idx" ON "SyncRun"("version");

-- AddForeignKey
ALTER TABLE "EmployeeClientMapping" ADD CONSTRAINT "EmployeeClientMapping_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmployeeClientMapping" ADD CONSTRAINT "EmployeeClientMapping_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trade" ADD CONSTRAINT "Trade_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE CASCADE ON UPDATE CASCADE;
