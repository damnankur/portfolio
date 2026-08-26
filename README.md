# Portfolio — Ankur Kumar Singh

Backend / distributed-systems portfolio built with **Astro** + **Tailwind CSS v4** + **Supabase** (CMS for projects). Patrick Heng–inspired palette: warm off-black (`#0d0d0c`) + amber (`#e0a458`), editorial serif type. Deploys to **Vercel**.

## Stack
- [Astro](https://astro.build) 7 (static output)
- [Tailwind CSS](https://tailwindcss.com) v4 via `@tailwindcss/vite`
- [Supabase](https://supabase.com) — PostgreSQL-backed CMS for projects
- [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)

## Getting started
```bash
npm install
npm run dev      # local dev server
npm run build    # production build -> dist/
npm run preview  # preview the build
```

> **Note:** your shell may set `NODE_ENV=production`, which makes npm skip devDependencies (Tailwind). If `npm install` silently omits Tailwind, run with dev env explicitly:
> ```bash
> NODE_ENV=development npm install
> ```

## Environment variables
Copy and fill in `.env` (see `.env.example`):

| Variable | Required | Notes |
|---|---|---|
| `SUPABASE_URL` | yes | e.g. `https://<ref>.supabase.co` |
| `SUPABASE_ANON_KEY` | yes | Public **anon** key (safe in the browser) |
| `RESUME_URL` | yes | Google Drive share link to your resume PDF |

`.env` is git-ignored — never commit secrets.

## Supabase setup (one manual step)
The site reads projects from a `public.projects` table at build time. The schema is not yet applied to your database.

1. Run **`supabase/schema.sql`** in the Supabase dashboard → **SQL Editor** → paste → **Run**.
   This creates `public.projects` and `public.contact_submissions`, enables RLS, and seeds 6 projects (Vortex, Synapse, LoveAI, Omnichannel Support, Hermes-OpenClaw, Pocket FM case).
   The seed is idempotent — safe to re-run.
2. Confirm: `select title from public.projects;` returns 6 rows.

The schema can also be applied from a Postgres client via the **shared/transaction pooler**, but the SQL editor is the simplest reliable path.

## Content management
- **Projects** come from the `projects` table via `src/lib/supabase.ts` → `getProjects()`. Add/edit rows directly in the Supabase dashboard table editor.
- **Static sections** (about, experience, skills, hero stats) live in `src/lib/site.ts` — edit that file to change copy.
- To add a project row (guide the `projects` table columns: `title, slug, tagline, description, tech[], highlights[], live_url, repo_url, featured, order`).

## Deploying to Vercel
1. Push this repo to GitHub:
   ```bash
   git add -A
   git commit -m "rebuild: Astro + Supabase portfolio"
   git push origin main
   ```
2. In [Vercel](https://vercel.com): **Add New Project** → import the GitHub repo.
   - Framework preset: **Astro** (auto-detected).
   - Root directory: `/` (project root).
3. Add the environment variables (same as `.env`):
   - `SUPABASE_URL`, `SUPABASE_ANON_KEY`, `RESUME_URL`
   - To override the production site URL for sitemap/OG meta, set `SITE_URL=https://your-domain.vercel.app` (or custom domain).
4. **Deploy.** Vercel runs `npm run build` and auto-rebuilds on every `git push`.

> Because the site is fully static, projects render at build time. After editing Supabase data, trigger a redeploy (or use a Vercel webhook) to refresh.

## Project layout
```
src/
  layouts/BaseLayout.astro   # HTML shell, fonts, meta/OG
  components/                # Nav, Hero, About, Experience, Projects, Skills, Contact, Footer
  lib/
    site.ts                  # static content (about, experience, skills, stats, SITE config)
    supabase.ts              # Supabase client + getProjects()
  pages/index.astro          # single-page portfolio
supabase/schema.sql          # CMS schema + seed (idempotent)
scripts/seed-db.mjs          # optional: apply schema via Management API / pooler
```