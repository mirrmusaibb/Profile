'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

export function TimelineProgress() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    damping: 24,
    stiffness: 150,
    mass: 0.35
  });

  return (
    <div className="fixed left-4 top-0 z-50 hidden h-full w-1 overflow-hidden rounded-full bg-white/5 lg:block">
      <motion.div style={{ scaleY, transformOrigin: 'top' }} className="h-full w-full bg-accent/80 shadow-glow" />
    </div>
  );
}
