import { NavLinks } from '@/components/nav-links';
import { MobileNav } from '@/components/mobile-nav';
import { ModeToggle } from '@/components/mode-toggle';
import { Container } from '@/components/section';
import { useEffect, useState } from 'react';

/* Border appears only after scrolling, so the page opens without a line. */
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-background/85 backdrop-blur-md transition-colors duration-300 ${
        isScrolled ? 'border-b border-border' : 'border-b border-transparent'
      }`}
    >
      <Container>
        <div className="flex h-14 items-center justify-between gap-6">
          <NavLinks className="hidden items-center gap-6 md:flex" />
          <MobileNav />
          <ModeToggle />
        </div>
      </Container>
    </header>
  );
}
