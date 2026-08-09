export type UserRole = 'EMPLOYEE' | 'MANAGEMENT';

export interface Employee {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  incentiveRate: number; // e.g. 0.10 for 10%
  createdAt: string;
}

export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
  snapshotVersion: number;
}

export interface EmployeeClientMapping {
  id: string;
  employeeId: string;
  clientId: string;
  createdAt: string;
}

export interface Trade {
  id: string;
  clientId: string;
  tradeDate: string;
  symbol: string;
  quantity: number;
  price: number;
  brokerage: number;
  snapshotVersion: number;
  createdAt: string;
}

export type SyncStatusType = 'IDLE' | 'SYNCING' | 'SUCCESS' | 'FAILED' | 'RETRYING';

export interface SyncRun {
  id: string;
  version: number;
  status: SyncStatusType;
  startedAt: string;
  completedAt: string | null;
  recordsProcessed: number;
  error: string | null;
}

export interface IncentiveSummary {
  employeeId: string;
  employeeName: string;
  email: string;
  incentiveRate: number;
  mappedClientCount: number;
  totalBrokerage: number;
  calculatedIncentive: number;
  snapshotVersion: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  lastUpdated: string | null;
  snapshotVersion: number;
}

export interface RealtimeEvent {
  type: 'DATA_UPDATED';
  syncVersion: number;
  timestamp: string;
}

export interface TradeFilterOptions {
  clientId?: string;
  from?: string;
  to?: string;
  page?: number;
  pageSize?: number;
}

export interface BSEConfig {
  delayMs: number;
  failureRate: number;
  seed: number;
}

export interface ChunkedBseResponse<T> {
  data: T[];
  nextOffset: number;
  total: number;
  hasMore: boolean;
}

export interface SyncStepResult {
  syncJobId: string;
  version: number;
  status: string;
  clientCursor: number;
  tradeCursor: number;
  attempt: number;
  complete: boolean;
  recordsProcessed?: number;
  error?: string;
}

export * from './seedData.js';
