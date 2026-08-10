import { ReactNode } from 'react';
import { Section } from '@/components/section';

/* Drawn at the page's hairline weight so they read as part of the system. */
const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

type Item = {
  title: string;
  description: string;
  glyph: ReactNode;
};

const items: Item[] = [
  {
    title: 'Football',
    description:
      'Watching it, analysing it, playing it badly. Non-negotiable weekend structure.',
    glyph: (
      <>
        <circle cx="16" cy="16" r="11" {...stroke} />
        <path d="M16 9.5l5.2 3.8-2 6.1h-6.4l-2-6.1z" {...stroke} />
        <path d="M16 5.2v4.3M26.4 13.3l-5.2 0M22.8 25l-3.4-5.6M9.2 25l3.4-5.6M5.6 13.3l5.2 0" {...stroke} />
      </>
    ),
  },
  {
    title: 'Cooking',
    description:
      'Mostly an excuse to work through a cuisine methodically until I get it right.',
    glyph: (
      <>
        <path d="M6.5 14.5h19v5.5a6 6 0 0 1-6 6h-7a6 6 0 0 1-6-6z" {...stroke} />
        <path d="M25.5 16.5h2.6a2.4 2.4 0 0 1 0 4.8h-2.6" {...stroke} />
        <path d="M12 10.5c0-1.6 1.6-1.9 1.6-3.5M16 10.5c0-1.6 1.6-1.9 1.6-3.5M20 10.5c0-1.6 1.6-1.9 1.6-3.5" {...stroke} />
      </>
    ),
  },
  {
    title: 'Travel',
    description: 'New places, unfamiliar food, no itinerary worth the name.',
    glyph: (
      <>
        <path
          d="M29.3 2.7 20 29.3l-5.3-12-12-5.3z"
          {...stroke}
        />
        <path d="M29.3 2.7 14.7 17.3" {...stroke} />
      </>
    ),
  },
];

/* One strip, dividers between items rather than a rule above each. */
export function BeyondCode() {
  return (
    <Section id="beyond-code" label="Beyond code">
      <ul className="grid sm:grid-cols-3">
        {items.map((item, i) => (
          <li
            key={item.title}
            className={`group py-5 sm:py-0 ${
              i > 0
                ? 'border-t border-border sm:border-l sm:border-t-0 sm:pl-6'
                : ''
            } ${i < items.length - 1 ? 'sm:pr-6' : ''}`}
          >
            <svg
              viewBox="0 0 32 32"
              aria-hidden
              className="h-8 w-8 text-muted-foreground transition-colors duration-300 group-hover:text-primary"
            >
              {item.glyph}
            </svg>
            <h3 className="mt-3 text-small font-medium">{item.title}</h3>
            <p className="mt-1 max-w-[32ch] text-small text-muted-foreground">
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
