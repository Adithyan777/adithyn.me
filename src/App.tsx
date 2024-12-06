import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { motion } from 'framer-motion';
import { HomePage } from '@/pages/home';
import { ProjectsPage } from '@/pages/projects';
import { ExperiencePage } from '@/pages/experience';
import { BlogPage } from '@/pages/blog';
import { ContactPage } from '@/pages/contact';

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
      <motion.div
        className="min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Navbar />
        <main className="pt-16 m-8">
            <section id="home" className="min-h-screen md:min-h-[70vh]"><HomePage /></section>
            <section id="projects" className="min-h-screen md:min-h-[50vh]"><ProjectsPage /></section>
            <section id="experience" className="min-h-screen md:min-h-[50vh]"><ExperiencePage /></section>
            <section id="blog" className="min-h-screen md:min-h-[50vh]"><BlogPage /></section>
            <section id="contact" className="min-h-screen md:min-h-[50vh]"><ContactPage /></section>
        </main>
      </motion.div>
    </ThemeProvider>
  );
}

export default App;