import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';

/* Routes with their own back-link, which don't want the section nav. */
const BARE_ROUTES = ['/projects'];

function isBare(pathname: string) {
  return (
    BARE_ROUTES.includes(pathname) ||
    pathname.startsWith('/writing') ||
    pathname.startsWith('/work/')
  );
}

export function Layout() {
  const location = useLocation();
  const showNavbar = !isBare(location.pathname);

  return (
    <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
      <div className="min-h-screen">
        {/* Without this, navigating keeps the previous page's scroll offset. */}
        <ScrollRestoration />
        {showNavbar && <Navbar />}
        <main className={showNavbar ? 'pt-14' : ''}>
          <Outlet />
        </main>
      </div>
    </ThemeProvider>
  );
}
