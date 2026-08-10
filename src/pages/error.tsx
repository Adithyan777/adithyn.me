import { Link, useRouteError, isRouteErrorResponse } from 'react-router-dom';
import { Container } from '@/components/section';
import { SEO } from '@/components/seo';

const destinations = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'Writing', to: '/writing' },
];

/* The status code is the one fact needed, so it's the largest thing here. */
function ErrorShell({
  code,
  title,
  message,
  path,
}: {
  code: string;
  title: string;
  message: string;
  path: string;
}) {
  return (
    <Container className="flex min-h-[70vh] flex-col justify-center py-20">
      <SEO title={title} description={message} path={path} noindex />

      <p className="font-mono text-display font-medium tabular leading-none text-muted-foreground/40">
        {code}
      </p>

      <h1 className="mt-6 text-h1 font-semibold tracking-tight">{title}</h1>
      <p className="mt-3 max-w-prose text-muted-foreground">{message}</p>

      <nav className="mt-8 flex flex-wrap items-center gap-2">
        {destinations.map((destination) => (
          <Link
            key={destination.to}
            to={destination.to}
            className="rounded-md border border-border px-3 py-1.5 font-mono text-micro text-muted-foreground transition-colors duration-200 hover:border-primary/40 hover:text-foreground"
          >
            {destination.label}
          </Link>
        ))}
      </nav>
    </Container>
  );
}

/* Rendered for /404 and any unmatched path. */
export function NotFoundPage() {
  return (
    <ErrorShell
      code="404"
      title="Page not found"
      message="That page doesn’t exist, or it moved. The links below cover everything on the site."
      path="/404"
    />
  );
}

/* Catches thrown responses and render errors, instead of RR's dev fallback. */
export function ErrorPage() {
  const error = useRouteError();

  if (isRouteErrorResponse(error) && error.status === 404) {
    return <NotFoundPage />;
  }

  const status = isRouteErrorResponse(error) ? String(error.status) : '500';

  if (import.meta.env.DEV) console.error(error);

  return (
    <ErrorShell
      code={status}
      title="Something went wrong"
      message="This page failed to load. Reloading usually fixes it — if it doesn’t, the links below still work."
      path="/error"
    />
  );
}
