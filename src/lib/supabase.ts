import { createClient } from '@supabase/supabase-js';
import { FALLBACK_PROJECTS } from './projects-fallback.ts';

/**
 * Env is read with both the modern `PUBLIC_*` names used in Vercel and the
 * legacy bare names, so a renamed variable can never blank the section again.
 */
const url = (import.meta.env.PUBLIC_SUPABASE_URL ?? import.meta.env.SUPABASE_URL) as
  | string
  | undefined;
const anonKey = (import.meta.env.PUBLIC_SUPABASE_ANON_KEY ??
  import.meta.env.SUPABASE_ANON_KEY) as string | undefined;

/** Lazy client — only created when both env vars are present. */
const supabase = url && anonKey ? createClient(url, anonKey) : null;

export interface Project {
  id: number;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  tech: string[];
  highlights: string[];
  live_url: string | null;
  repo_url: string | null;
  featured: boolean;
  order: number;
}

/**
 * Fetch all projects for the CMS, sorted by the `order` column (featured first).
 * Falls back to the bundled static ledger (`FALLBACK_PROJECTS`) whenever the
 * database is unreachable, misconfigured, or empty — the section must never
 * render blank.
 */
export async function getProjects(): Promise<Project[]> {
  if (!supabase) {
    console.warn('[projects] Supabase env not set; using bundled static projects.');
    return FALLBACK_PROJECTS;
  }

  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('featured', { ascending: false })
    .order('order', { ascending: true });

  if (error) {
    console.error('[projects] Failed to fetch projects, using fallback:', error.message);
    return FALLBACK_PROJECTS;
  }

  const rows = (data ?? []) as Project[];
  return rows.length > 0 ? rows : FALLBACK_PROJECTS;
}
