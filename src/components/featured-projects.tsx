import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProjectCard } from '@/components/project-card';
import { projects } from '@/data/projects';

export function FeaturedProjects() {
    const featuredProjects = projects.filter(p => p.featured);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto py-12"
    >
    <div className="flex flex-col gap-10">
          <div className="flex justify-between items-start px-4">
            <h2 className="text-5xl font-bold">Featured Projects</h2>
            <Button variant="ghost" asChild className="mt-2">
              <a href="/projects" className="flex items-center gap-2">
                View all projects <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                variant="featured"
              />
            ))}
          </div>
        </div>
    </motion.div>
  );
}