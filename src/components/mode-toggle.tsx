import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/theme-provider';
import { trackEvent, AnalyticsEvents } from '@/lib/analytics';

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  const handleToggle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    trackEvent(AnalyticsEvents.THEME_TOGGLE, { theme: newTheme });
    setTheme(newTheme);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleToggle}
      className="mode-toggle"
    >
      <motion.div
        initial={{ scale: 0.5, rotate: 0 }}
        animate={{ scale: 1, rotate: theme === 'dark' ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'light' ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Moon className="h-5 w-5" />
        )}
      </motion.div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}