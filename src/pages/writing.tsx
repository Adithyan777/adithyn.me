import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Container, Section } from '@/components/section';
import { SEO } from '@/components/seo';
import { posts, type Entry, type PostMeta } from '@/lib/content';

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

/* Bare list — the only chrome is a hairline between items. */
export function PostList({ entries }: { entries: Entry<PostMeta>[] }) {
  if (!entries.length) return null;

  return (
    <ul className="-mx-5">
      {entries.map(({ meta }, i) => (
        <li key={meta.slug} className={i > 0 ? 'border-t border-border' : ''}>
          <Link
            to={`/writing/${meta.slug}`}
            className="group relative block rounded-md px-5 py-5 transition-colors hover:bg-card"
          >
            <span
              aria-hidden
              className="absolute bottom-3 left-0 top-3 w-[2px] origin-top scale-y-0 rounded-full bg-primary transition-transform duration-300 ease-out group-hover:scale-y-100"
            />
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-h3 font-semibold">{meta.title}</h3>
              <time dateTime={meta.date} className="meta shrink-0">
                {formatDate(meta.date)}
              </time>
            </div>
            <p className="mt-1.5 max-w-prose text-muted-foreground">
              {meta.description}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

/* Renders nothing when empty — a "coming soon" block reads worse. */
export function Writing() {
  if (!posts.length) return null;

  return (
    <Section
      id="writing"
      label="Writing"
      count={posts.length}
      action={posts.length > 3 ? { label: 'All writing', to: '/writing' } : undefined}
    >
      <PostList entries={posts.slice(0, 3)} />
    </Section>
  );
}

export function WritingPage() {
  return (
    <div className="pb-20">
      <SEO
        title="Writing"
        description="Essays and notes on AI systems, agents, and building things that work — by Adithyan K."
        path="/writing"
      />
      <Container className="pt-14">
        <Link
          to="/"
          className="meta inline-flex items-center gap-1.5 transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-3 w-3" />
          Back
        </Link>
        <h1 className="mt-6 text-h1 font-semibold">Writing</h1>
      </Container>

      <Section label="All posts" count={posts.length}>
        <PostList entries={posts} />
      </Section>
    </div>
  );
}
