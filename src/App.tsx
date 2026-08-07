import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { motion } from 'framer-motion';
import { Hero } from '@/pages/hero';
import { Research } from '@/pages/research';
import { SelectedWork } from '@/pages/selected-work';
import { ExperiencePage } from '@/pages/experience';
import { ContactPage } from '@/pages/contact';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ProjectsPage } from './pages/all-projects';
import { BeyondCode } from './pages/beyond-code';
import { LoadingPage } from './pages/loading';
import { LifiePage } from './pages/lifie';
import { useEffect } from 'react';
import { SEO } from '@/components/seo';
import { trackEvent, captureUTMParams } from '@/lib/analytics';
import { useSectionTrack } from '@/hooks/use-section-track';

function AppContent() {
  const location = useLocation();
  const showNavbar = !['/projects', '/loading', '/lifie'].includes(location.pathname);

  const homeRef = useSectionTrack('home');
  const experienceRef = useSectionTrack('experience');
  const projectsRef = useSectionTrack('projects');
  const beyondCodeRef = useSectionTrack('beyond-code');
  const contactRef = useSectionTrack('contact');

  useEffect(() => {
    captureUTMParams();
  }, []);

  useEffect(() => {
    trackEvent('$pageview', { path: location.pathname, search: location.search });
  }, [location]);

  return (
    <motion.div
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {showNavbar && <Navbar />}
      <main className={showNavbar ? 'pt-14' : ''}>
        <Routes>
          <Route path="/" element={
            <>
              <SEO />
              <section ref={homeRef} id="home">
                <Hero />
              </section>
              <section ref={projectsRef}>
                <Research />
                <SelectedWork />
              </section>
              <section ref={experienceRef}>
                <ExperiencePage />
              </section>
              <section ref={beyondCodeRef}>
                <BeyondCode />
              </section>
              <section ref={contactRef}>
                <ContactPage />
              </section>
            </>
          }/>
          <Route path="/projects" element={
            <>
              <SEO title="Projects" description="Projects by Adithyan K — AI systems, developer tools, and full-stack applications." path="/projects" />
              <ProjectsPage />
            </>
          } />
          <Route path="/lifie" element={
            <>
              <SEO title="The Lifie Story" description="How a consumer AI assistant became a voice and chat platform for businesses — a case study by Adithyan K." path="/lifie" />
              <LifiePage />
            </>
          } />
          <Route path="/loading" element={
            <>
              <SEO title="Loading" noindex path="/loading" />
              <LoadingPage />
            </>
          } />
        </Routes>
      </main>
    </motion.div>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;