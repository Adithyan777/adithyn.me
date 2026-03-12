import { cn } from '@/lib/utils';
import { scrollToSection } from '@/lib/scroll-utils';
import { siteConfig } from '@/config/site';
import { trackEvent, AnalyticsEvents } from '@/lib/analytics';

const links: { href: string; label: string; featureFlag?: keyof typeof siteConfig.features }[] = [
  { href: '#home', label: 'Home' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#blog', label: 'Blog', featureFlag: 'blog' },
  { href: '#beyond-code', label: 'Beyond Code'},
  { href: '#contact', label: 'Contact' },
];

export function NavLinks({ className }: { className?: string }) {
  const visibleLinks = links.filter(l => !l.featureFlag || siteConfig.features[l.featureFlag]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, label: string) => {
    e.preventDefault();
    trackEvent(AnalyticsEvents.NAV_CLICK, { target: label });
    scrollToSection(href);
  };

  return (
    <>
      {visibleLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={(e) => handleClick(e, link.href, link.label)}
          className={cn(
            'px-4 py-2 text-sm font-medium transition-colors hover:text-primary',
            className
          )}
        >
          {link.label}
        </a>
      ))}
    </>
  );
}