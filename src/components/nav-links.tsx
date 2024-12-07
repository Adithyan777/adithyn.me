import { cn } from '@/lib/utils';
import { scrollToSection } from '@/lib/scroll-utils';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#blog', label: 'Blog' },
  { href: '#contact', label: 'Contact' },
];

export function NavLinks({ className }: { className?: string }) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToSection(href);
  };

  return (
    <>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={(e) => handleClick(e, link.href)}
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