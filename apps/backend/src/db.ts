import path from 'path';
import fs from 'fs';
import { PrismaClient } from './generated/client/index.js';

function setupDatabase(): PrismaClient {
  const customUrl = process.env.DATABASE_URL;

  // 1. If custom PostgreSQL DATABASE_URL is set, use standard PrismaClient
  if (customUrl && !customUrl.startsWith('file:')) {
    console.log('[Database] Connecting to PostgreSQL database...');
    return new PrismaClient();
  }

  // 2. For Vercel Serverless environment: fallback to /tmp/dev.db
  const isVercel = Boolean(process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME);
  
  if (isVercel) {
    const tmpDbPath = '/tmp/dev.db';
    
    if (!fs.existsSync(tmpDbPath)) {
      console.log('[Database] Initializing /tmp/dev.db for Vercel Serverless environment...');
      const candidates = [
        path.join(process.cwd(), 'apps/backend/prisma/dev.db'),
        path.join(process.cwd(), 'prisma/dev.db'),
        path.join(process.cwd(), 'dev.db'),
        path.join(__dirname, '../prisma/dev.db'),
        path.join(__dirname, 'dev.db')
      ];
      
      let copied = false;
      for (const src of candidates) {
        try {
          if (fs.existsSync(src)) {
            fs.copyFileSync(src, tmpDbPath);
            console.log(`[Database] Successfully copied SQLite template from ${src} to ${tmpDbPath}`);
            copied = true;
            break;
          }
        } catch (e) {
          console.error(`[Database Error] Failed candidate ${src}:`, e);
        }
      }

      if (!copied) {
        console.warn('[Database WARNING] No SQLite template file found; creating fresh DB at /tmp/dev.db');
      }
    }

    return new PrismaClient({
      datasources: {
        db: {
          url: `file:${tmpDbPath}`
        }
      }
    });
  }

  // 3. Local development
  return new PrismaClient();
}

let prismaInstance: PrismaClient | null = null;

export function getPrisma(): PrismaClient {
  if (!prismaInstance) {
    try {
      prismaInstance = setupDatabase();
    } catch (err) {
      console.error('[Database setup error]', err);
      prismaInstance = new PrismaClient();
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
