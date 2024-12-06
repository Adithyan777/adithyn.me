import { NavLinks } from '@/components/nav-links';
import { MobileNav } from '@/components/mobile-nav';
import { ModeToggle } from '@/components/mode-toggle';

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b">
      <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
        <MobileNav />
        <NavLinks className="hidden md:flex gap-8 items-center" />
        <ModeToggle />
      </div>
    </header>
  );
}