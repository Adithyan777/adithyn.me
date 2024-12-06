import { cn } from '@/lib/utils';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#blog', label: 'Blog' },
  { href: '#contact', label: 'Contact' },
];

export function NavLinks({ className }: { className?: string }) {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={(e) => scrollToSection(e, link.href)}
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