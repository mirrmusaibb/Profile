'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Project } from '@/lib/types';

type TimelineCardProps = {
  project: Project;
  alignRight: boolean;
};

export function TimelineCard({ project, alignRight }: TimelineCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.3, once: true }}
      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
      className="relative"
    >
      <div
        className={`group relative rounded-2xl border border-white/10 bg-surface/60 p-6 backdrop-blur-md transition-all duration-300 ease-calm hover:scale-[1.015] hover:border-accent/40 hover:shadow-glow ${
          alignRight ? 'md:ml-auto' : ''
        } md:w-[calc(50%-2rem)]`}
      >
        <span className="inline-flex rounded-full border border-white/15 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-muted">
          {project.category}
        </span>
        <h3 className="mt-4 text-xl font-medium tracking-tight">{project.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>
        <div className="mt-5 flex items-center justify-between text-sm text-muted">
          <span>{project.year}</span>
          <Link
            href={`/projects/${project.slug}`}
            className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.14em] transition-colors duration-300 ease-calm group-hover:border-accent/60 group-hover:text-foreground"
          >
            Open Project
          </Link>
        </div>
      </div>
      <div className="absolute left-1/2 top-8 hidden h-3 w-3 -translate-x-1/2 rounded-full border border-accent/40 bg-background md:block" />
    </motion.article>
  );
}
