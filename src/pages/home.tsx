import { SEO } from '@/components/seo';
import { Hero } from '@/pages/hero';
import { Research } from '@/pages/research';
import { SelectedWork } from '@/pages/selected-work';
import { Writing } from '@/pages/writing';
import { ExperiencePage } from '@/pages/experience';
import { BeyondCode } from '@/pages/beyond-code';
import { ContactPage } from '@/pages/contact';
import { useSectionTrack } from '@/hooks/use-section-track';

export function HomePage() {
  const homeRef = useSectionTrack('home');
  const workRef = useSectionTrack('work');
  const experienceRef = useSectionTrack('experience');
  const contactRef = useSectionTrack('contact');

  return (
    <>
      <SEO />
      <section ref={homeRef}>
        <Hero />
      </section>
      <Research />
      <section ref={workRef}>
        <SelectedWork />
      </section>
      <Writing />
      <section ref={experienceRef}>
        <ExperiencePage />
      </section>
      <BeyondCode />
      <section ref={contactRef}>
        <ContactPage />
      </section>
    </>
  );
}
