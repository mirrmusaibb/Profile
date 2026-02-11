import { Hero } from '@/components/hero';
import { ThemeToggle } from '@/components/theme-toggle';
import { Timeline } from '@/components/timeline';
import { TimelineProgress } from '@/components/timeline-progress';

export default function HomePage() {
  return (
    <main>
      <TimelineProgress />
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 pt-6">
        <p className="text-sm font-medium tracking-tight">Profile</p>
        <ThemeToggle />
      </header>
      <Hero />
      <Timeline />
    </main>
  );
}
