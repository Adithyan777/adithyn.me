import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/theme-provider';
import { trackEvent, AnalyticsEvents } from '@/lib/analytics';

/*
  Both icons render; CSS swaps them off the `dark` class. Branching on theme in
  JSX caused a hydration mismatch — the prerender has no localStorage.
*/
export function ModeToggle() {
  const { setTheme } = useTheme();

  const handleToggle = () => {
    /* Read the applied class — `theme` may be "system", which can't be inverted. */
    const isDark = document.documentElement.classList.contains('dark');
    const next = isDark ? 'light' : 'dark';
    trackEvent(AnalyticsEvents.THEME_TOGGLE, { theme: next });
    setTheme(next);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleToggle}
      aria-label="Toggle theme"
      className="relative"
    >
      <Sun className="h-[18px] w-[18px] rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[18px] w-[18px] rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
