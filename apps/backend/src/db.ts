import path from 'path';
import fs from 'fs';
import { PrismaClient } from '@prisma/client';

function setupDatabase(): PrismaClient {
  const customUrl = process.env.DATABASE_URL;

  // 1. If PostgreSQL DATABASE_URL is set in environment, use it directly
  if (customUrl && !customUrl.startsWith('file:')) {
    console.log('[Database] Connecting to remote PostgreSQL database...');
    return new PrismaClient();
  }

  // 2. For Vercel Serverless environment: use /tmp/dev.db and copy template on cold start
  const isVercel = Boolean(process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME);
  
  if (isVercel) {
    const tmpDbPath = '/tmp/dev.db';
    
    if (!fs.existsSync(tmpDbPath)) {
      console.log('[Database] Initializing /tmp/dev.db for Vercel Serverless...');
      const candidates = [
        path.join(process.cwd(), 'apps/backend/prisma/dev.db'),
        path.join(process.cwd(), 'prisma/dev.db'),
        path.join(process.cwd(), 'dev.db'),
        path.join(__dirname, '../prisma/dev.db'),
        path.join(__dirname, 'dev.db')
      ];
      
      let copied = false;
      for (const src of candidates) {
        if (fs.existsSync(src)) {
          try {
            fs.copyFileSync(src, tmpDbPath);
            console.log(`[Database] Successfully copied SQLite template from ${src} to ${tmpDbPath}`);
            copied = true;
            break;
          } catch (e) {
            console.error(`[Database Error] Failed to copy from ${src}:`, e);
          }
        }
      }

      if (!copied) {
        console.warn('[Database WARNING] Could not find SQLite template file; Prisma will create new DB at /tmp/dev.db');
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

export const prisma = setupDatabase();
