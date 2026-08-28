import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.SUPABASE_URL as string | undefined;
const anonKey = import.meta.env.SUPABASE_ANON_KEY as string | undefined;

/** Lazy client — only created when both env vars are present. */
const supabase =
  url && anonKey ? createClient(url, anonKey) : null;

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

/** Fetch all projects for the CMS, sorted by the `order` column (featured first). */
export async function getProjects(): Promise<Project[]> {
  // If Supabase vars are missing (e.g. local dev without .env), fail gracefully.
  if (!supabase) {
    console.warn('[supabase] SUPABASE_URL / ANON_KEY not set; returning empty projects.');
    return [];
  }
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('featured', { ascending: false })
    .order('order', { ascending: true });

  if (error) {
    console.error('[supabase] Failed to fetch projects:', error.message);
    return [];
  }
  return (data ?? []) as Project[];
}