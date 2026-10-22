// Site-wide content config.
// Edit this to change copy. Projects/experience load from Supabase CMS,
// but static sections live here.

export const SITE = {
  name: 'Ankur Kumar Singh',
  domain: 'ankurkumarsingh.tech',
  url: 'https://ankurkumarsingh.tech',
  role: 'Software Engineering · Distributed Systems',
  blurb:
    'Backend engineer building low-latency, horizontally scalable systems. Distributed messaging, streaming pipelines, and the algorithms that make them fast.',
  email: 'kumarankursingh6@gmail.com',
  phone: '+91-7982745600',
  location: 'New Delhi, India',
  resumeUrl: import.meta.env.RESUME_URL ?? '',
  github: 'https://github.com/damnankur',
  linkedin: 'https://www.linkedin.com/in/ankur-singh-a12035287/',
  leetcode: 'https://leetcode.com/u/damnankur/',
  profiles: [
    { label: 'GitHub', url: 'https://github.com/damnankur' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/ankur-singh-a12035287/' },
    { label: 'LeetCode', url: 'https://leetcode.com/u/damnankur/' },
  ],
};

export const NAV = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

// Experience timeline (static source of truth; move to Supabase later if needed)
export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  points: string[];
}

export const EXPERIENCE: Experience[] = [
  {
    company: 'NMG Technologies',
    role: 'AI Associate Intern',
    period: 'Jun 2026 — Present',
    location: 'New Delhi, India',
    summary:
      'Serverless platform engineering on Astro + Supabase for a centralized hackathon registration system.',
    points: [
      'Architected a unified registration platform replacing 5+ isolated event forms, onboarding 5000+ users in month one on infrastructure built for 50,000+ monthly registrations.',
      'Automated 100% of user notifications across 3 lifecycle stages via Supabase PostgreSQL triggers, Edge Functions, and the Brevo API — saving 21+ hours of manual ops per event.',
      'Accelerated site load speed by 50% and improved UX metrics by 30% with lightweight metadata placeholder frames served before asset hydration.',
    ],
  },
  {
    company: 'IIT Ropar (VLED Labs)',
    role: 'Web Development Intern',
    period: 'Jan 2026 — Apr 2026',
    location: 'Remote',
    summary:
      'NPTEL internship on a core MERN-stack application — React, TypeScript, Express, Node.js.',
    points: [
      'Shipped 10+ responsive frontend features adopted across 6+ screens, translated into reusable architectures.',
      'Integrated 12+ REST API endpoints with frontend clients for reliable state management and data hydration.',
    ],
  },
];

// Skills grouped by category
export const SKILLS: { category: string; items: string[] }[] = [
  {
    category: 'Languages',
    items: ['C++', 'Python', 'TypeScript', 'JavaScript', 'SQL'],
  },
  {
    category: 'Backend & Infra',
    items: ['Node.js', 'Express', 'Socket.IO', 'Kafka', 'Redis', 'Docker', 'AWS'],
  },
  {
    category: 'Data & Storage',
    items: ['PostgreSQL', 'pgvector', 'MongoDB', 'Prisma', 'Supabase'],
  },
  {
    category: 'Systems & CS',
    items: ['OS', 'Networks', 'DBMS', 'System Design', 'DSA', 'Low-Latency Systems'],
  },
  {
    category: 'ML / AI',
    items: ['LangChain', 'Hugging Face', 'QLoRA', 'RAG'],
  },
];

// Metrics strip for the hero (backend-leaning, credible numbers from your resume)
export const STATS = [
  { value: '5000+', label: 'users onboarded in month one' },
  { value: '100%', label: 'core-msg availability under failure' },
  { value: '50%', label: 'site load speed improvement' },
  { value: '600+', label: 'DSA problems solved · Knight' },
];