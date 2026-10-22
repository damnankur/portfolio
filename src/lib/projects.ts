import { FALLBACK_PROJECTS } from './projects-fallback.ts';

/**
 * Projects data layer.
 *
 * The bundled static ledger (`projects-fallback.ts`) is the **source of truth**
 * so a build can never ship an empty Projects section. The Supabase CMS is an
 * optional override that is only consulted when `USE_SUPABASE_CMS=true`, with a
 * hard timeout — a paused/deleted database must never slow or break a deploy.
 *
 * Why the guard: the original CMS project (`hddjorzhvtypzexcsniq.supabase.co`)
 * went away, which silently blanked this section on the next build.
 */

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

const CMS_ENABLED = String(import.meta.env.USE_SUPABASE_CMS ?? '').toLowerCase() === 'true';
const CMS_TIMEOUT_MS = 5000;

function sortProjects(rows: Project[]): Project[] {
  return [...rows].sort((a, b) => {
    if (a.featured !== b.featured) return a.featured ? -1 : 1;
    return a.order - b.order;
  });
}

export async function getProjects(): Promise<Project[]> {
  if (!CMS_ENABLED) return sortProjects(FALLBACK_PROJECTS);

  const url = (import.meta.env.PUBLIC_SUPABASE_URL ?? import.meta.env.SUPABASE_URL) as
    | string
    | undefined;
  const anonKey = (import.meta.env.PUBLIC_SUPABASE_ANON_KEY ??
    import.meta.env.SUPABASE_ANON_KEY) as string | undefined;

  if (!url || !anonKey) {
    console.warn('[projects] USE_SUPABASE_CMS is on but Supabase env is missing; using static ledger.');
    return sortProjects(FALLBACK_PROJECTS);
  }

  try {
    const { createClient } = await import('@supabase/supabase-js');
    const supabase = createClient(url, anonKey, {
      global: { fetch: (input, init) => fetch(input, { ...init, signal: AbortSignal.timeout(CMS_TIMEOUT_MS) }) },
    });

    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('featured', { ascending: false })
      .order('order', { ascending: true });

    if (error) throw new Error(error.message);

    const rows = (data ?? []) as Project[];
    if (rows.length === 0) {
      console.warn('[projects] CMS returned no rows; using static ledger.');
      return sortProjects(FALLBACK_PROJECTS);
    }
    return rows;
  } catch (err) {
    console.error('[projects] CMS unavailable, using static ledger:', (err as Error).message);
    return sortProjects(FALLBACK_PROJECTS);
  }
}
