import { Section } from '@/components/section';
import { experience } from '@/data/experience';
import { trackEvent, AnalyticsEvents } from '@/lib/analytics';

/*
  A left rail, not cards — employment is sequential. Roles nest under their
  company so a promotion reads as progression, not a repeated employer.
*/
function Highlights({
  items,
  className = '',
}: {
  items: string[];
  className?: string;
}) {
  return (
    <ul className={`max-w-prose space-y-1.5 ${className}`}>
      {items.map((item) => (
        <li
          key={item}
          className="relative pl-4 text-small text-muted-foreground before:absolute before:left-0 before:top-[0.6em] before:h-px before:w-2 before:bg-border"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export function ExperiencePage() {
  return (
    <Section id="experience" label="Experience">
      <ol className="relative">
        {/* Stops short of the last marker so it doesn't dangle. */}
        <span
          aria-hidden
          className="absolute bottom-6 left-[3.5px] top-2 w-px bg-border"
        />

        {experience.map((company) => (
          <li key={company.name} className="relative pb-10 pl-6 last:pb-0">
            {/* Filled for current, hollow for past — state in form, not just date. */}
            <span
              aria-hidden
              className={`absolute left-0 top-[7px] h-2 w-2 rounded-full border ${
                company.period.includes('Present')
                  ? 'border-primary bg-primary'
                  : 'border-border bg-background'
              }`}
            />

            <div className="flex items-baseline justify-between gap-4">
              {company.href ? (
                <a
                  href={company.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackEvent(AnalyticsEvents.EXPERIENCE_COMPANY_CLICK, {
                      company: company.name,
                    })
                  }
                  className="text-h3 font-semibold transition-colors hover:text-primary"
                >
                  {company.name}
                </a>
              ) : (
                <h3 className="text-h3 font-semibold">{company.name}</h3>
              )}
              <time className="meta shrink-0">{company.period}</time>
            </div>

            {company.summary && (
              <p className="mt-2 max-w-prose text-muted-foreground">
                {company.summary}
              </p>
            )}

            <ul className="mt-4 space-y-4">
              {company.roles.map((role) => (
                <li key={role.title}>
                  <div className="flex items-baseline justify-between gap-4 text-small">
                    <span className="font-medium text-foreground/90">
                      {role.title}
                    </span>
                    {role.period && (
                      <time className="meta shrink-0">{role.period}</time>
                    )}
                  </div>
                  {role.highlights && (
                    <Highlights items={role.highlights} className="mt-2" />
                  )}
                </li>
              ))}
            </ul>

            {company.highlights && (
              <Highlights items={company.highlights} className="mt-3" />
            )}

            {company.stack && (
              <p className="meta mt-3">{company.stack.join(' · ')}</p>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}
