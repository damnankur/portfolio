-- Supabase CMS schema for the portfolio
-- Run this in the Supabase SQL editor (Dashboard -> SQL Editor -> New query -> paste -> Run).
-- Idempotent: safe to re-run.

-- 1) projects table (your full CMS content source)
create table if not exists public.projects (
  id bigint generated always as identity primary key,
  title text not null,
  slug text unique not null,
  tagline text not null,
  description text not null,          -- markdown or plain paragraphs
  tech text[] not null default '{}',
  highlights text[] not null default '{}',   -- bullet points (impact/metrics)
  live_url text,
  repo_url text,
  featured boolean not null default false,
  "order" int not null default 0,
  created_at timestamptz not null default now()
);

-- 2) contact_submissions table (for the contact form)
create table if not exists public.contact_submissions (
  id bigint generated always as identity primary key,
  name text not null,
  email text not null,
  message text not null,
  created_at timestamptz not null default now()
);

-- 3) Row Level Security
alter table public.projects enable row level security;
alter table public.contact_submissions enable row level security;

-- Public can READ projects (that's what the static site fetches).
create policy "projects_public_read" on public.projects
  for select using (true);

-- Public can INSERT into contact_submissions (form posts).
create policy "contact_public_insert" on public.contact_submissions
  for insert with check (true);

-- 4) Seed data (idempotent: each insert only runs if the slug is not present)
insert into public.projects (title, slug, tagline, description, tech, highlights, live_url, repo_url, featured, "order")
select
  'Vortex: Distributed Real-Time Chat System',
  'vortex',
  'Horizontally scalable real-time messaging on a Kafka + Redis backbone.',
  'Distributed chat platform designed for scale: Redis Pub/Sub for cross-server Socket.IO broadcast, Apache Kafka decoupling high-throughput ingestion from PostgreSQL persistence, TurboRepo monorepo deployed across Vercel and Render.',
  array['Node.js','TypeScript','Socket.IO','Redis','Kafka','Prisma','PostgreSQL','Next.js'],
  array[
    'Sustained 100% core-messaging availability during Redis/Kafka outages via graceful fallback to direct broadcast.',
    'Founded fault tolerance with graceful degradation across a TurboRepo monorepo.'
  ],
  'https://vortex-web-three.vercel.app/',
  'https://github.com/damnankur/Vortex',
  true,
  1
where not exists (select 1 from public.projects where slug = 'vortex');

insert into public.projects (title, slug, tagline, description, tech, highlights, live_url, repo_url, featured, "order")
select
  'Synapse: Research & Literature Discovery Platform',
  'synapse',
  'Full-stack research platform with role-based access and a PubMed search pipeline.',
  'Research collaboration platform with RBAC across 3 roles and JWT auth. Literature search integrates the NCBI PubMed API with a custom XML parser and caching layer.',
  array['React','TypeScript','Node.js','Express','MongoDB'],
  array[
    'Improved team collaboration efficiency by 40% with role-based access control (RBAC) and JWT auth.',
    'Cut redundant upstream API calls by 60% via a custom PubMed XML parser and caching layer.',
    'Boosted search recall by 35% on plain-language queries with a MeSH/UMLS query-expansion engine.'
  ],
  'https://synapse-three-beryl.vercel.app/auth',
  'https://github.com/damnankur/synapse',
  true,
  2
where not exists (select 1 from public.projects where slug = 'synapse');

insert into public.projects (title, slug, tagline, description, tech, highlights, live_url, repo_url, featured, "order")
select
  'LoveAI: Persona-Adaptive AI Chatbot',
  'loveai',
  'Fine-tuned LLM that steers responses across 16 psychological personas.',
  'Full-stack AI chatbot that derives user psychological personas from a 30-question matrix. Fine-tuned a Mistral base model with QLoRA (4-bit) + Hugging Face PEFT on 150,000+ dialogue pairs, with DPO emotional alignment and pgvector RAG.',
  array['React','Node.js','PostgreSQL','Mistral','QLoRA','AWS'],
  array[
    'Fine-tuned Mistral with QLoRA (4-bit) and PEFT on a 150,000+ pair corpus with DPO emotional alignment.',
    'Integrated pgvector-backed RAG for dynamic context injection.'
  ],
  'https://loveai-brown.vercel.app/',
  'https://github.com/damnankur/LoveAI',
  false,
  3
where not exists (select 1 from public.projects where slug = 'loveai');

insert into public.projects (title, slug, tagline, description, tech, highlights, live_url, repo_url, featured, "order")
select
  'Omnichannel Customer Support Suite',
  'omnichannel-support',
  'Real-time multi-tenant helpdesk with an autonomous AI triage agent.',
  'Enterprise helpdesk using WebSockets for zero-latency live messaging and presence. Multi-tenant Prisma schema enforcing RBAC and strict data isolation; LangChain agent triages tickets with semantic vector search for automated L1 resolution.',
  array['React','Node.js','PostgreSQL','WebSockets','Prisma','LangChain'],
  array[
    'Built real-time messaging + presence with WebSockets across concurrent sessions.',
    'Enforced RBAC and tenant-data isolation with a multi-tenant Prisma schema.',
    'Integrated a LangChain agent for automated Level-1 ticket triage via vector search.'
  ],
  null,
  null,
  false,
  4
where not exists (select 1 from public.projects where slug = 'omnichannel-support');

insert into public.projects (title, slug, tagline, description, tech, highlights, live_url, repo_url, featured, "order")
select
  'Hermes-OpenClaw Agent Orchestrator',
  'hermes-openclaw',
  'Agentic orchestration layer with autonomous tool-calling, deployed on DigitalOcean.',
  'Engineered an agentic orchestration layer using local LLMs (Hermes/OpenClaw) with autonomous tool-calling and multi-step reasoning pipelines to resolve compound queries. Inference engine + agentic backend deployed on a DigitalOcean droplet with robust REST endpoints.',
  array['Python','DigitalOcean','LLM Agents','API Design'],
  array[
    'Implemented autonomous tool-calling and multi-step reasoning pipelines for compound queries.',
    'Deployed inference on a DigitalOcean droplet exposing REST APIs for external clients.',
    'GTM-focused modular architecture for fast adaptation across use cases.'
  ],
  null,
  null,
  false,
  5
where not exists (select 1 from public.projects where slug = 'hermes-openclaw');

insert into public.projects (title, slug, tagline, description, tech, highlights, live_url, repo_url, featured, "order")
select
  'Pocket FM — Strategic Analysis',
  'pocketfm-strategy',
  'In-depth market & retention case study for the audio OTT platform.',
  'Comprehensive strategic case analysis for audio OTT platform Pocket FM: market penetration opportunities, user-retention strategies, and content-consumption trend evaluation for targeted growth.',
  array['Strategy','Market Research','Data Analysis'],
  array[
    'Evaluated market penetration opportunities and user-retention strategies.',
    'Proposed actionable growth initiatives from content-consumption trend analysis.'
  ],
  null,
  null,
  false,
  6
where not exists (select 1 from public.projects where slug = 'pocketfm-strategy');