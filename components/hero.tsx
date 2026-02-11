'use client';

import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative overflow-hidden py-24 md:py-36">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-60">
        <div className="absolute left-[10%] top-[16%] h-40 w-40 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
        className="mx-auto max-w-4xl px-6"
      >
        <p className="mb-4 text-xs uppercase tracking-[0.24em] text-muted">Profile</p>
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">A record of deliberate work.</h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">Small builds. Precise thinking.</p>
      </motion.div>
    </section>
  );
}
