'use client';

import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative overflow-hidden py-24 md:py-36">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-70">
        <div className="absolute left-[8%] top-[14%] h-44 w-44 rounded-full bg-accent/15 blur-3xl" />
        <div className="absolute bottom-[16%] right-[10%] h-56 w-56 rounded-full bg-violet-400/10 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
        className="mx-auto max-w-4xl px-6"
      >
        <p className="mb-4 text-xs uppercase tracking-[0.24em] text-muted">Digital Project Atlas</p>
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          A calm command center for every product, experiment, and platform.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          Explore a curated timeline of projects through a refined, performance-first experience designed for clarity,
          continuity, and depth.
        </p>
      </motion.div>
    </section>
  );
}
