// Seeds schema via Supabase Management API SQL endpoint (runs as superuser/owner).
// Usage: SB_MGMT_TOKEN=<sb_secret_...> node scripts/seed-db.mjs
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const ref = process.env.SB_REF || 'qtvggmghybhjerrgihxh';
const token = process.env.SB_MGMT_TOKEN;

if (!token) {
  console.error('SB_MGMT_TOKEN env var is required.');
  process.exit(1);
}

const sql = readFileSync(join(root, 'supabase', 'schema.sql'), 'utf8');

const res = await fetch(`https://api.supabase.com/v1/projects/${ref}/database/query`, {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ query: sql }),
});

const text = await res.text();
if (!res.ok) {
  console.error(`Management API failed (${res.status}):`, text.slice(0, 2000));
  process.exit(1);
}
console.log('Status', res.status);
try {
  const j = JSON.parse(text);
  console.log(Array.isArray(j) ? `OK: query returned ${j.length} row(s).` : j);
} catch {
  console.log(text.slice(0, 500) || 'OK (empty response).');
}