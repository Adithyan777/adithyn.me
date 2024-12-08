import { NavLinks } from '@/components/nav-links';
import { MobileNav } from '@/components/mobile-nav';
import { ModeToggle } from '@/components/mode-toggle';
import { useEffect, useState } from 'react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center">
      <header className={`transition-all duration-700 ease-out rounded-full backdrop-blur-md border
        ${isScrolled 
          ? 'mt-2 shadow-lg w-[90%] max-w-5xl' 
          : 'w-[98%] max-w-7xl'}`}>
        <div className="flex items-center justify-between p-4 px-8">
          <MobileNav />
          <NavLinks className="hidden md:flex gap-8 items-center" />
          <ModeToggle />
        </div>
      </header>
    </div>
  );
}