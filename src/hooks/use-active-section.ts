import { useEffect, useState } from 'react';

/*
  Reports which section is currently in view. This is a state indicator, not a
  scroll animation — it tells you where you are, it doesn't reveal content.

  Deliberately not an IntersectionObserver: with several short sections on
  screen at once you have to pick a winner, and "topmost intersecting" means
  the final section can never win — the page runs out before it reaches the
  top. Reading positions directly makes the rule explicit, and the last
  section gets an override when the document is scrolled to the end.
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
