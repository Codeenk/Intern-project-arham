const { execSync } = require('child_process');

console.log('[Startup] Executing database migrations...');
try {
  execSync('npx prisma migrate deploy --schema=apps/backend/prisma/schema.prisma', { stdio: 'inherit' });
  console.log('[Startup] Migrations applied successfully.');
} catch (err) {
  console.error('[Startup Warning] Migration failed, attempting db push:', err.message);
  try {
    execSync('npx prisma db push --schema=apps/backend/prisma/schema.prisma --accept-data-loss', { stdio: 'inherit' });
  } catch (pushErr) {
    console.error('[Startup Error] db push failed:', pushErr.message);
  }
}

console.log('[Startup] Seeding database...');
try {
  execSync('node apps/backend/dist/seed.js', { stdio: 'inherit' });
  console.log('[Startup] Database seeding completed.');
} catch (err) {
  console.error('[Startup Warning] Seed script failed:', err.message);
}

console.log('[Startup] Launching unified backend...');
require('../apps/backend/dist/index.js');
