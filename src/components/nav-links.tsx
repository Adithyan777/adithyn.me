import { cn } from '@/lib/utils';
import { scrollToSection } from '@/lib/scroll-utils';
import { trackEvent, AnalyticsEvents } from '@/lib/analytics';
import { useActiveSection } from '@/hooks/use-active-section';

const links = [
  { id: 'research', label: 'Research' },
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'beyond-code', label: 'Beyond code' },
  { id: 'contact', label: 'Contact' },
];

const ids = links.map((link) => link.id);

export function NavLinks({ className }: { className?: string }) {
  const active = useActiveSection(ids);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
    label: string
  ) => {
    e.preventDefault();
    trackEvent(AnalyticsEvents.NAV_CLICK, { target: label });
    scrollToSection(`#${id}`);
  };

  return (
    <nav className={cn('flex', className)}>
      {links.map((link) => {
        const isActive = active === link.id;
        return (
          <a
            key={link.id}
            href={`#${link.id}`}
            aria-current={isActive ? 'true' : undefined}
            onClick={(e) => handleClick(e, link.id, link.label)}
            className={cn(
              'relative py-1 text-small transition-colors duration-200',
              isActive
                ? 'text-foreground'
                : 'text-muted-foreground hover:text-foreground'
            )}
          >
            {link.label}
            {/* Fades rather than slides — nothing travels across the bar. */}
            <span
              aria-hidden
              className={cn(
                'absolute -bottom-0.5 left-0 h-px w-full bg-primary transition-opacity duration-300',
                isActive ? 'opacity-100' : 'opacity-0'
              )}
            />
          </a>
        );
      })}
    </nav>
  );
}
