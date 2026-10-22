import type { Project } from './supabase.ts';

/**
 * Static project ledger — the source of truth for the Projects section.
 *
 * The Supabase `public.projects` table overrides this list when reachable at
 * build time (see `getProjects()`), but the build must never ship an empty
 * section just because an env var is missing or the query fails.
 * Keep in sync with `supabase/schema.sql`.
 */
export const FALLBACK_PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Vortex: Distributed Real-Time Chat System',
    slug: 'vortex',
    tagline: 'Horizontally scalable real-time messaging on a Kafka + Redis backbone.',
    description:
      'Distributed chat platform designed for scale: Redis Pub/Sub for cross-server Socket.IO broadcast, Apache Kafka decoupling high-throughput ingestion from PostgreSQL persistence, TurboRepo monorepo deployed across Vercel and Render.',
    tech: ['Node.js', 'TypeScript', 'Socket.IO', 'Redis', 'Kafka', 'Prisma', 'PostgreSQL', 'Next.js'],
    highlights: [
      'Sustained 100% core-messaging availability during Redis/Kafka outages via graceful fallback to direct broadcast.',
      'Founded fault tolerance with graceful degradation across a TurboRepo monorepo.',
    ],
    live_url: 'https://vortex-web-three.vercel.app/',
    repo_url: 'https://github.com/damnankur/Vortex',
    featured: true,
    order: 1,
  },
  {
    id: 2,
    title: 'Synapse: Research & Literature Discovery Platform',
    slug: 'synapse',
    tagline: 'Full-stack research platform with role-based access and a PubMed search pipeline.',
    description:
      'Research collaboration platform with RBAC across 3 roles and JWT auth. Literature search integrates the NCBI PubMed API with a custom XML parser and caching layer.',
    tech: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB'],
    highlights: [
      'Improved team collaboration efficiency by 40% with role-based access control (RBAC) and JWT auth.',
      'Cut redundant upstream API calls by 60% via a custom PubMed XML parser and caching layer.',
      'Boosted search recall by 35% on plain-language queries with a MeSH/UMLS query-expansion engine.',
    ],
    live_url: 'https://synapse-three-beryl.vercel.app/',
    repo_url: 'https://github.com/damnankur/synapse',
    featured: true,
    order: 2,
  },
  {
    id: 3,
    title: 'LoveAI: Persona-Adaptive AI Chatbot',
    slug: 'loveai',
    tagline: 'Fine-tuned LLM that steers responses across 16 psychological personas.',
    description:
      'Full-stack AI chatbot that derives user psychological personas from a 30-question matrix. Fine-tuned a Mistral base model with QLoRA (4-bit) + Hugging Face PEFT on 150,000+ dialogue pairs, with DPO emotional alignment and pgvector RAG.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Mistral', 'QLoRA', 'AWS'],
    highlights: [
      'Fine-tuned Mistral with QLoRA (4-bit) and PEFT on a 150,000+ pair corpus with DPO emotional alignment.',
      'Integrated pgvector-backed RAG for dynamic context injection.',
    ],
    live_url: 'https://loveai-brown.vercel.app/',
    repo_url: 'https://github.com/damnankur/LoveAI',
    featured: false,
    order: 3,
  },
  {
    id: 4,
    title: 'Omnichannel Customer Support Suite',
    slug: 'omnichannel-support',
    tagline: 'Real-time multi-tenant helpdesk with an autonomous AI triage agent.',
    description:
      'Enterprise helpdesk using WebSockets for zero-latency live messaging and presence. Multi-tenant Prisma schema enforcing RBAC and strict data isolation; LangChain agent triages tickets with semantic vector search for automated L1 resolution.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'WebSockets', 'Prisma', 'LangChain'],
    highlights: [
      'Built real-time messaging + presence with WebSockets across concurrent sessions.',
      'Enforced RBAC and tenant-data isolation with a multi-tenant Prisma schema.',
      'Integrated a LangChain agent for automated Level-1 ticket triage via vector search.',
    ],
    live_url: null,
    repo_url: null,
    featured: false,
    order: 4,
  },
  {
    id: 5,
    title: 'Hermes-OpenClaw Agent Orchestrator',
    slug: 'hermes-openclaw',
    tagline: 'Agentic orchestration layer with autonomous tool-calling, deployed on DigitalOcean.',
    description:
      'Engineered an agentic orchestration layer using local LLMs (Hermes/OpenClaw) with autonomous tool-calling and multi-step reasoning pipelines to resolve compound queries. Inference engine + agentic backend deployed on a DigitalOcean droplet with robust REST endpoints.',
    tech: ['Python', 'DigitalOcean', 'LLM Agents', 'API Design'],
    highlights: [
      'Implemented autonomous tool-calling and multi-step reasoning pipelines for compound queries.',
      'Deployed inference on a DigitalOcean droplet exposing REST APIs for external clients.',
      'GTM-focused modular architecture for fast adaptation across use cases.',
    ],
    live_url: null,
    repo_url: null,
    featured: false,
    order: 5,
  },
  {
    id: 6,
    title: 'Pocket FM — Strategic Analysis',
    slug: 'pocketfm-strategy',
    tagline: 'In-depth market & retention case study for the audio OTT platform.',
    description:
      'Comprehensive strategic case analysis for audio OTT platform Pocket FM: market penetration opportunities, user-retention strategies, and content-consumption trend evaluation for targeted growth.',
    tech: ['Strategy', 'Market Research', 'Data Analysis'],
    highlights: [
      'Evaluated market penetration opportunities and user-retention strategies.',
      'Proposed actionable growth initiatives from content-consumption trend analysis.',
    ],
    live_url: null,
    repo_url: null,
    featured: false,
    order: 6,
  },
];
