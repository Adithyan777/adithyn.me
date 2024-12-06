import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { motion } from 'framer-motion';
import { HomePage } from '@/pages/home';
import { ExperiencePage } from '@/pages/experience';
import { BlogPage } from '@/pages/blog';
import { ContactPage } from '@/pages/contact';
import { FeaturedProjects } from './components/featured-projects';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ProjectsPage } from './components/all-projects';

function AppContent() {
  const location = useLocation();
  const showNavbar = location.pathname !== '/projects';

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
              <section id="blog" className="min-h-screen md:min-h-[50vh]">
                <BlogPage />
              </section>
              <section id="contact" className="min-h-screen md:min-h-[50vh]">
                <ContactPage />
              </section>
            </>
          }/>
          <Route path="/projects" element={<ProjectsPage />} />
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