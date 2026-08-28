// Seed script: applies supabase/schema.sql against the Supabase session pooler.
// Usage: node scripts/seed-db.mjs   (uses env overrides, defaults below)
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import pg from 'pg';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const host = process.env.PGHOST || 'aws-0-ap-northeast-1.pooler.supabase.com';
const port = Number(process.env.PGPORT || 5432);
const user = process.env.PGUSER || 'postgres.qtvggmghybhjerrgihxh';
const password = process.env.PGPASSWORD || 'ak@12port@34';
const database = process.env.PGDATABASE || 'postgres';

const client = new pg.Client({
  host,
  port,
  user,
  password,
  database,
  ssl: {
    rejectUnauthorized: false,
    servername: host, // SNI used by Supabase session pooler to identify the tenant
  },
});

try {
  await client.connect();
  const sql = readFileSync(join(root, 'supabase', 'schema.sql'), 'utf8');
  await client.query(sql);
  console.log('Schema applied successfully.');
} catch (err) {
  console.error('Seed failed:', err.message);
  process.exitCode = 1;
} finally {
  await client.end();
}