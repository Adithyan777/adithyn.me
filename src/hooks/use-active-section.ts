import { useEffect, useState } from 'react';

/*
  Which section is in view. Not an IntersectionObserver: with several sections
  on screen, "topmost intersecting" means the last one can never win — the page
  ends before it reaches the top. Hence the explicit bottom-of-document case.
*/
const ACTIVATION_LINE = 140; // px below the viewport top, clearing the navbar

export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string | null>(null);
  const key = ids.join(',');

  useEffect(() => {
    const resolve = () => {
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;

      if (atBottom) {
        setActive(ids[ids.length - 1]);
        return;
      }

      let current: string | null = null;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= ACTIVATION_LINE) {
          current = id;
        }
      }
      setActive(current);
    };

    resolve();
    window.addEventListener('scroll', resolve, { passive: true });
    window.addEventListener('resize', resolve);
    return () => {
      window.removeEventListener('scroll', resolve);
      window.removeEventListener('resize', resolve);
    };
  }, [key]); // eslint-disable-line react-hooks/exhaustive-deps

  return active;
}
