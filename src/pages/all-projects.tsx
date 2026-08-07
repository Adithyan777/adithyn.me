import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Container, Section } from '@/components/section';
import { WorkList } from '@/components/work-row';
import { selectedWork } from '@/data/work';
import { archive, otherProjects } from '@/data/projects';
import { trackOutboundClick } from '@/lib/analytics';

export function ProjectsPage() {
  return (
    <div className="pb-20">
      <Container className="pt-14">
        <Link
          to="/"
          className="meta inline-flex items-center gap-1.5 transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-3 w-3" />
          Back
        </Link>
        <h1 className="mt-6 text-h1 font-semibold">Projects</h1>
        <p className="mt-2 max-w-prose text-muted-foreground">
          Everything worth listing, newest first — from research systems built
          at work to things I made because I wanted them to exist.
        </p>
      </Container>

      <Section label="Selected work">
        <WorkList items={selectedWork} />
      </Section>

      <Section label="Other projects">
        <WorkList items={otherProjects} />
      </Section>

      {/*
        Archive. Deliberately compact and low-contrast — early work is here for
        completeness, and the treatment should say so without apologising.
      */}
      <Section label="Earlier">
        <ul className="max-w-prose">
          {archive.map((project, i) => (
            <li
              key={project.title}
              className={`flex items-baseline justify-between gap-6 py-2.5 ${
                i > 0 ? 'border-t border-border' : ''
              }`}
            >
              <div className="flex flex-wrap items-baseline gap-x-2">
                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackOutboundClick(project.href!, project.title)}
                    className="text-small text-foreground/80 transition-colors hover:text-primary"
                  >
                    {project.title}
                  </a>
                ) : (
                  <span className="text-small text-foreground/80">
                    {project.title}
                  </span>
                )}
                <span className="text-small text-muted-foreground">
                  {project.blurb}
                </span>
              </div>
              <time className="meta shrink-0">{project.year}</time>
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
}
