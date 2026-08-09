import { PrismaClient } from '@prisma/client';

function setupDatabase(): PrismaClient {
  const customUrl = process.env.DATABASE_URL;

  if (!customUrl) {
    throw new Error('DATABASE_URL is required (Render Free PostgreSQL connection string)');
  }

  console.log('[Database] Connecting to PostgreSQL database...');
  return new PrismaClient();
}

let prismaInstance: PrismaClient | null = null;

export function getPrisma(): PrismaClient {
  if (!prismaInstance) {
    try {
      prismaInstance = setupDatabase();
    } catch (err) {
      console.error('[Database setup error]', err);
      throw err;
    }
  }
  return prismaInstance;
}

export const prisma = new Proxy({} as PrismaClient, {
  get(_target, prop, _receiver) {
    const instance = getPrisma();
    const value = (instance as any)[prop];
    return typeof value === 'function' ? value.bind(instance) : value;
  }
});
