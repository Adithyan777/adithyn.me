import { useRef, useEffect } from 'react';
import { trackEvent, AnalyticsEvents } from '@/lib/analytics';

export function useSectionTrack(section: string) {
  const ref = useRef<HTMLElement>(null);
  const hasFired = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasFired.current) {
          hasFired.current = true;
          trackEvent(AnalyticsEvents.SECTION_VIEW, { section });
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [section]);

  return ref;
}
