import type { ReactNode } from 'react';
import { MDXProvider } from '@mdx-js/react';
import type { MDXComponents } from 'mdx/types';

/* Mapped explicitly, not via a typography plugin, to stay on the site scale. */
const components: MDXComponents = {
  h2: (props) => (
    <h2
      className="mt-12 scroll-mt-24 text-h2 font-medium tracking-tight first:mt-0"
      {...props}
    />
  ),
  h3: (props) => (
    <h3 className="mt-8 scroll-mt-24 text-h3 font-semibold" {...props} />
  ),
  p: (props) => <p className="mt-4 text-muted-foreground" {...props} />,
  a: (props) => (
    <a
      className="link-underline text-foreground"
      target={props.href?.startsWith('http') ? '_blank' : undefined}
      rel="noopener noreferrer"
      {...props}
    />
  ),
  strong: (props) => (
    <strong className="font-semibold text-foreground" {...props} />
  ),
  ul: (props) => <ul className="mt-4 space-y-2" {...props} />,
  ol: (props) => <ol className="mt-4 space-y-2" {...props} />,
  li: (props) => (
    <li
      className="relative pl-4 text-muted-foreground before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-2 before:bg-border"
      {...props}
    />
  ),
  /* Blockquotes carry the takeaway, so they get the accent rail. */
  blockquote: (props) => (
    <blockquote
      className="my-8 border-l-2 border-primary py-1 pl-5 text-lead text-foreground/90 [&>p]:mt-0 [&>p]:text-foreground/90"
      {...props}
    />
  ),
  hr: () => <hr className="my-10 border-border" />,
  code: (props) => (
    <code
      className="rounded border border-border bg-card px-1 py-0.5 font-mono text-[0.85em]"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="mt-4 overflow-x-auto rounded-lg border border-border bg-card p-4 font-mono text-small [&>code]:border-0 [&>code]:bg-transparent [&>code]:p-0"
      {...props}
    />
  ),
  table: (props) => (
    <div className="mt-6 overflow-x-auto">
      <table className="w-full border-collapse text-small" {...props} />
    </div>
  ),
  th: (props) => (
    <th
      className="border-b border-border px-3 py-2 text-left font-medium"
      {...props}
    />
  ),
  td: (props) => (
    <td className="border-b border-border px-3 py-2 text-muted-foreground" {...props} />
  ),
};

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-prose">
      <MDXProvider components={components}>{children}</MDXProvider>
    </div>
  );
}
