import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { motion } from 'framer-motion';
import { HomePage } from '@/pages/home';
import { ExperiencePage } from '@/pages/experience';
import { BlogPage, isBlogEmpty } from '@/pages/blog';
import { ContactPage } from '@/pages/contact';
import { FeaturedProjects } from './pages/featured-projects';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ProjectsPage } from './pages/all-projects';
import { BeyondCode } from './pages/beyond-code';
import { LoadingPage } from './pages/loading';
import posthog from 'posthog-js';
import { useEffect } from 'react';

function AppContent() {
  const location = useLocation();
  const showNavbar = !['/projects', '/loading'].includes(location.pathname);

  useEffect(() => {
    posthog.capture('$pageview');
  }, [location]);

  return (
    <motion.div
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {showNavbar && <Navbar />}
      <main className={showNavbar ? "pt-16" : ""}>
        <Routes>
          <Route path="/" element={
            <>
              <section id="home" className="min-h-screen md:min-h-[70vh]">
                <HomePage />
              </section>
              <section id="projects" className="min-h-screen md:min-h-[50vh]">
                <FeaturedProjects />
              </section>
              <section id="experience" className="min-h-screen md:min-h-[50vh]">
                <ExperiencePage />
              </section>
              <section id="blog" className={`min-h-[30vh] ${isBlogEmpty ? 'md:min-h-[10vh]' : 'md:min-h-[50vh]'}`}>
                <BlogPage />
              </section>
              <section id="beyond-code" className="min-h-screen md:min-h-[50vh]">
                <BeyondCode />
              </section>
              <section id="contact" className="min-h-screen md:min-h-[50vh]">
                <ContactPage />
              </section>
            </>
          }/>
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/loading" element={<LoadingPage />} />
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