import { Project } from '@/lib/types';

export const projects: Project[] = [
  {
    slug: 'aurora-ops',
    title: 'Aurora Ops Console',
    tagline: 'A control layer for distributed systems with human-first observability.',
    description:
      'Aurora Ops is a premium internal dashboard that blends command-level visibility with narrative incident timelines. It is built for teams that need rapid context without noise.',
    year: '2026',
    category: 'Platform Engineering',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Node.js'],
    links: {
      github: 'https://github.com/example/aurora-ops',
      demo: 'https://aurora-ops.vercel.app'
    },
    gallery: [
      { src: '/gallery/aurora-1.svg', alt: 'Aurora Ops dashboard overview' },
      { src: '/gallery/aurora-2.svg', alt: 'Aurora Ops timeline and alerts' }
    ]
  },
  {
    slug: 'lattice-notes',
    title: 'Lattice Notes',
    tagline: 'Structured writing workspace with graph-powered discovery.',
    description:
      'Lattice Notes is a calm, distraction-free knowledge workspace that surfaces relationships between ideas. It balances elegant typography with performance-first rendering.',
    year: '2025',
    category: 'Productivity',
    techStack: ['Next.js', 'TypeScript', 'SQLite', 'Tailwind CSS', 'Prisma'],
    links: {
      github: 'https://github.com/example/lattice-notes',
      demo: 'https://lattice-notes.vercel.app'
    },
    gallery: [{ src: '/gallery/lattice-1.svg', alt: 'Lattice Notes editor and graph panel' }]
  },
  {
    slug: 'vector-field',
    title: 'Vector Field Studio',
    tagline: 'Realtime visual sandbox for generative motion experiments.',
    description:
      'Vector Field Studio is a WebGL-driven prototype environment for designing high-fidelity motion systems. It includes parameter snapshots and collaborative sharing.',
    year: '2024',
    category: 'Creative Engineering',
    techStack: ['Next.js', 'TypeScript', 'WebGL', 'Framer Motion', 'Vercel Edge'],
    links: {
      github: 'https://github.com/example/vector-field',
      demo: 'https://vector-field.vercel.app'
    }
  }
];

export const projectsBySlug = new Map(projects.map((project) => [project.slug, project]));
