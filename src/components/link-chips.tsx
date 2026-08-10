import { ReactNode } from 'react';

/*
  Marks drawn inline at the page's hairline weight — icon sets carry their own
  optical weight and never sit right against it.
*/
const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export const marks: Record<string, ReactNode> = {
  resume: (
    <>
      <path d="M8 1.5H3.5A1.5 1.5 0 0 0 2 3v10a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 14 13V7.5" {...stroke} />
      <path d="M8 1.5 14 7.5h-4.5A1.5 1.5 0 0 1 8 6z" {...stroke} />
      <path d="M5 9.5h6M5 12h4" {...stroke} />
    </>
  ),
  github: (
    <path
      d="M6 12.8c-2.6.8-2.6-1.3-3.6-1.6m7.2 3.3v-2.1c0-.6.06-.86-.3-1.2 1.7-.19 3.3-.83 3.3-3.6a2.8 2.8 0 0 0-.78-1.95 2.6 2.6 0 0 0-.07-1.96s-.64-.19-2.1.8a7.2 7.2 0 0 0-3.7 0c-1.46-.99-2.1-.8-2.1-.8a2.6 2.6 0 0 0-.07 1.96 2.8 2.8 0 0 0-.78 1.97c0 2.75 1.6 3.39 3.3 3.6-.35.34-.34.68-.3 1.18v2.1"
      {...stroke}
    />
  ),
  linkedin: (
    <>
      <path d="M4 6.5v7.5M4 3.4v.1" {...stroke} />
      <path d="M7.4 14V6.5m0 2.2c.5-1.4 1.6-2.2 2.9-2.2 1.6 0 2.7 1.1 2.7 3V14" {...stroke} />
    </>
  ),
  scholar: (
    <>
      <path d="M8 2 1.6 5.6 8 9.2l6.4-3.6z" {...stroke} />
      <path d="M4.2 7.3v3.2c0 .9 1.7 1.6 3.8 1.6s3.8-.7 3.8-1.6V7.3" {...stroke} />
      <path d="M14.4 5.7v3.6" {...stroke} />
    </>
  ),
  email: (
    <>
      <rect x="1.8" y="3.2" width="12.4" height="9.6" rx="1.5" {...stroke} />
      <path d="m2.4 4.5 4.8 3.7a1.3 1.3 0 0 0 1.6 0l4.8-3.7" {...stroke} />
    </>
  ),
};

export type Chip = {
  mark: keyof typeof marks;
  label: string;
  href: string;
  onClick?: () => void;
};

export function LinkChips({ chips }: { chips: Chip[] }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {chips.map((chip) => (
        <a
          key={chip.label}
          href={chip.href}
          target={
            chip.href.startsWith('/') || chip.href.startsWith('mailto')
              ? undefined
              : '_blank'
          }
          rel="noopener noreferrer"
          onClick={chip.onClick}
          className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-1.5 font-mono text-micro text-muted-foreground transition-colors duration-200 hover:border-primary/40 hover:text-foreground"
        >
          <svg
            viewBox="0 0 16 16"
            aria-hidden
            className="h-3.5 w-3.5 shrink-0 text-muted-foreground/80"
          >
            {marks[chip.mark]}
          </svg>
          {chip.label}
        </a>
      ))}
    </div>
  );
}
