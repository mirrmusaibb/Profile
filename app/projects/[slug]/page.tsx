import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects, projectsBySlug } from '@/data/projects';

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = projectsBySlug.get(params.slug);

  if (!project) {
    return {
      title: 'Project not found'
    };
  }

  return {
    title: project.title,
    description: project.tagline
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projectsBySlug.get(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl px-6 pb-24 pt-12 md:pt-16">
      <Link
        href="/"
        className="inline-flex rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.18em] text-muted transition-colors duration-300 ease-calm hover:border-accent/50 hover:text-foreground"
      >
        Back to timeline
      </Link>

      <header className="mt-10 space-y-5">
        <p className="text-xs uppercase tracking-[0.2em] text-muted">{project.year}</p>
        <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">{project.title}</h1>
        <p className="max-w-3xl text-base leading-relaxed text-muted md:text-lg">{project.description}</p>
      </header>

      <section className="mt-12 rounded-2xl border border-white/10 bg-surface/70 p-6 md:p-8">
        <h2 className="text-xl font-medium">Tech Stack</h2>
        <ul className="mt-4 flex flex-wrap gap-3">
          {project.techStack.map((tech) => (
            <li key={tech} className="rounded-full border border-white/15 px-4 py-1.5 text-sm text-muted">
              {tech}
            </li>
          ))}
        </ul>
      </section>

      {project.gallery?.length ? (
        <section className="mt-12">
          <h2 className="text-xl font-medium">Gallery</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {project.gallery.map((item) => (
              <div key={item.src} className="overflow-hidden rounded-2xl border border-white/10 bg-surface/60">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={900}
                  height={560}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <section className="mt-12 rounded-2xl border border-white/10 bg-surface/70 p-6 md:p-8">
        <h2 className="text-xl font-medium">Links</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {project.links.github ? (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-4 py-2 text-sm text-muted transition-colors duration-300 ease-calm hover:border-accent/60 hover:text-foreground"
            >
              GitHub
            </a>
          ) : null}
          {project.links.demo ? (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-4 py-2 text-sm text-muted transition-colors duration-300 ease-calm hover:border-accent/60 hover:text-foreground"
            >
              Live Demo
            </a>
          ) : null}
        </div>
      </section>
    </main>
  );
}
