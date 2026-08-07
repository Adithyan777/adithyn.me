import { Section } from '@/components/section';
import { papers } from '@/data/research';
import { trackOutboundClick } from '@/lib/analytics';

/*
  The one bordered block on the page. Papers are the scarcest signal here, so
  this is where the chrome gets spent — everything else stays open.
*/
export function Research() {
  return (
    <Section id="research" label="Research">
      <div className="overflow-hidden rounded-lg border border-border">
        {papers.map((paper, i) => (
          <article
            key={paper.arxiv}
            className={`group p-5 transition-colors duration-200 hover:bg-card md:p-6 ${
              i > 0 ? 'border-t border-border' : ''
            }`}
          >
            <a
              href={paper.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackOutboundClick(paper.href, paper.arxiv)}
              className="text-h3 font-semibold decoration-border underline-offset-4 transition-colors hover:text-primary hover:underline"
            >
              {paper.title}
            </a>

            <div className="mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-2">
              {/* The identifier gets a chip — it's the thing a reader
                  verifies, so it should be findable at a glance. */}
              <span className="rounded border border-border px-1.5 py-0.5 font-mono text-micro text-primary transition-colors group-hover:border-primary/40">
                {paper.arxiv}
              </span>
              <p className="meta">
                {paper.authors} · {paper.venue} · {paper.date}
              </p>
            </div>

            <p className="mt-3 max-w-prose text-small text-muted-foreground">
              {paper.contribution}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
