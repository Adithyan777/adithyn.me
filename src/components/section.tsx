import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

/* The single content column — one left edge down the whole page. */
export function Container({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-measure px-6 md:px-8 ${className}`}>
      {children}
    </div>
  );
}

type SectionProps = {
  id?: string;
  label: string;
  count?: number;
  action?: { label: string; to: string };
  children: ReactNode;
};

/* No container border: chrome is spent per-section by the component inside. */
export function Section({ id, label, count, action, children }: SectionProps) {
  return (
    <section id={id} className="py-14 md:py-20">
      <Container>
        <div className="mb-6 flex items-baseline justify-between gap-4 border-b border-border pb-3">
          {/* Mono uppercase survives one level down, as sub-labels. */}
          <h2 className="flex items-baseline gap-2.5 text-h2 font-medium tracking-tight">
            {label}
            {count !== undefined && (
              <span className="font-mono text-micro tabular text-muted-foreground/60">
                {String(count).padStart(2, '0')}
              </span>
            )}
          </h2>
          {action && (
            <Link
              to={action.to}
              className="meta group inline-flex items-center gap-1 transition-colors hover:text-primary"
            >
              {action.label}
              <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
            </Link>
          )}
        </div>
        {children}
      </Container>
    </section>
  );
}
