import { Link } from 'react-router-dom';
import type { WorkMeta } from '@/lib/content';
import { trackOutboundClick } from '@/lib/analytics';

/* Accent rail on hover marks the row without a permanent border. */
export function WorkRow({ item, first }: { item: WorkMeta; first?: boolean }) {
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
          {item.writeup ? (
            <Link to={`/work/${item.slug}`} className="hover:text-primary">
              {item.title}
            </Link>
          ) : (
            item.title
          )}
          {item.at && (
            <span className="ml-2 font-normal text-muted-foreground">
              · {item.at}
            </span>
          )}
        </h3>
        <time className="meta shrink-0">{item.period}</time>
      </div>

      <p className="mt-2 max-w-prose text-muted-foreground">{item.blurb}</p>

      {/* Number leads, label explains, so the row scans before it reads.
          Stacked on mobile: the dividers key off index, not visual position,
          so on a wrapped row the first item would keep a dangling border. */}
      {item.metrics && (
        <dl className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-y-4">
          {item.metrics.map((metric, i) => (
            <div
              key={metric.label}
              className={`sm:max-w-[22ch] sm:pr-6 ${
                i > 0 ? 'sm:border-l sm:border-border sm:pl-6' : ''
              }`}
            >
              <dt className="font-mono text-h2 font-medium tabular leading-none text-foreground">
                {metric.value}
              </dt>
              <dd className="mt-1.5 text-micro leading-snug text-muted-foreground">
                {metric.label}
              </dd>
            </div>
          ))}
        </dl>
      )}

      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="meta">{item.stack.join(' · ')}</p>

        {item.writeup && (
          <Link
            to={`/work/${item.slug}`}
            className="meta text-primary transition-opacity hover:opacity-70"
          >
            Read more →
          </Link>
        )}

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

export function WorkList({ items }: { items: WorkMeta[] }) {
  return (
    <ul className="-mx-5">
      {items.map((item, i) => (
        <WorkRow key={item.slug} item={item} first={i === 0} />
      ))}
    </ul>
  );
}
