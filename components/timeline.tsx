import { projects } from '@/data/projects';
import { TimelineCard } from './timeline-card';

export function Timeline() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 md:pb-32" aria-label="Project timeline">
      <div className="mb-10 md:mb-16">
        <p className="text-xs uppercase tracking-[0.2em] text-muted">Timeline</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">Selected work.</h2>
      </div>

      <div className="relative space-y-8 md:space-y-12">
        <div className="absolute left-1/2 hidden h-full w-px -translate-x-1/2 bg-white/10 md:block" />
        {projects.map((project, index) => (
          <TimelineCard key={project.id} project={project} alignRight={index % 2 !== 0} />
        ))}
      </div>
    </section>
  );
}
