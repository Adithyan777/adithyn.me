import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Container } from '@/components/section';
import { Prose } from '@/components/prose';
import { SEO } from '@/components/seo';
import { findPost, findWork } from '@/lib/content';
import { NotFoundPage } from '@/pages/error';

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

function Back({ to, label }: { to: string; label: string }) {
  return (
    <Link
      to={to}
      className="meta inline-flex items-center gap-1.5 transition-colors hover:text-primary"
    >
      <ArrowLeft className="h-3 w-3" />
      {label}
    </Link>
  );
}

export function PostPage() {
  const { slug } = useParams<{ slug: string }>();
  const entry = slug ? findPost(slug) : undefined;

  if (!entry) return <NotFoundPage />;

  const { meta, Content } = entry;

  return (
    <article className="pb-24">
      <SEO
        title={meta.title}
        description={meta.description}
        path={`/writing/${meta.slug}`}
        article={{ publishedTime: meta.date }}
      />
      <Container className="pt-14">
        <Back to="/writing" label="Writing" />

        <h1 className="mt-6 max-w-prose text-h1 font-semibold tracking-tight">
          {meta.title}
        </h1>
        <p className="meta mt-3">
          <time dateTime={meta.date}>{formatDate(meta.date)}</time>
          {meta.readingTime && ` · ${meta.readingTime}`}
        </p>

        <div className="mt-10 border-t border-border pt-8">
          <Prose>
            <Content />
          </Prose>
        </div>
      </Container>
    </article>
  );
}

export function WorkPage() {
  const { slug } = useParams<{ slug: string }>();
  const entry = slug ? findWork(slug) : undefined;

  if (!entry || !entry.meta.writeup) return <NotFoundPage />;

  const { meta, Content } = entry;

  return (
    <article className="pb-24">
      <SEO
        title={meta.title}
        description={meta.blurb}
        path={`/work/${meta.slug}`}
      />
      <Container className="pt-14">
        <Back to="/projects" label="Projects" />

        <h1 className="mt-6 text-h1 font-semibold tracking-tight">
          {meta.title}
        </h1>
        <p className="meta mt-3">
          {meta.at && `${meta.at} · `}
          {meta.period}
        </p>
        <p className="mt-4 max-w-prose text-lead text-foreground/90">
          {meta.blurb}
        </p>
        <p className="meta mt-4">{meta.stack.join(' · ')}</p>

        <div className="mt-10 border-t border-border pt-8">
          <Prose>
            <Content />
          </Prose>
        </div>
      </Container>
    </article>
  );
}
