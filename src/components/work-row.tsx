import type { WorkItem } from '@/data/work';
import { trackOutboundClick } from '@/lib/analytics';

/*
  One row of work.

  The chrome is a single accent rail on the left edge that wipes in from the
  top on hover — it marks where you are without adding a border that's there
  all the time. Everything else stays open.
*/
export function WorkRow({ item, first }: { item: WorkItem; first?: boolean }) {
  return (
    <li
      className={`group relative rounded-md px-5 py-6 transition-colors duration-200 hover:bg-card ${
        first ? '' : 'border-t border-border'
      }`}
    >
      <span
        aria-hidden
        className="absolute bottom-4 left-0 top-4 w-[2px] origin-top scale-y-0 rounded-full bg-primary transition-transform duration-300 ease-out group-hover:scale-y-100"
      />

      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-h3 font-semibold tracking-tight">
          {item.title}
          {item.at && (
            <span className="ml-2 font-normal text-muted-foreground">
              · {item.at}
            </span>
          )}
        </h3>
        <time className="meta shrink-0">{item.period}</time>
      </div>

      <p className="mt-2 max-w-prose text-muted-foreground">{item.blurb}</p>

      {/*
        Measured results, given room rather than buried in the sentence. The
        number leads and the label explains it, so the row scans before it reads.
      */}
      {item.metrics && (
        <dl className="mt-4 flex flex-wrap gap-x-8 gap-y-3 border-l border-border pl-4">
          {item.metrics.map((metric) => (
            <div key={metric.label}>
              <dt className="font-mono text-h3 font-medium tabular leading-none text-foreground">
                {metric.value}
              </dt>
              <dd className="mt-1 text-micro text-muted-foreground">
                {metric.label}
              </dd>
            </div>
          ))}
        </dl>
      )}

      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="meta">{item.stack.join(' · ')}</p>
        {item.links?.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackOutboundClick(link.href, item.slug)}
            className="meta group/link inline-flex items-center gap-1 text-primary transition-opacity hover:opacity-70"
          >
            {link.label}
            <span
              aria-hidden
              className="transition-transform duration-200 group-hover/link:-translate-y-px group-hover/link:translate-x-px"
            >
              ↗
            </span>
          </a>
        ))}
      </div>
    </li>
  );
}

export function WorkList({ items }: { items: WorkItem[] }) {
  return (
    <ul className="-mx-5">
      {items.map((item, i) => (
        <WorkRow key={item.slug} item={item} first={i === 0} />
      ))}
    </ul>
  );
}
