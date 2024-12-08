import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProjectCard } from '@/components/project-card';
import { ProjectCardMobile } from '@/components/project-card-mobile';
import { projects } from '@/data/projects';
import { useMediaQuery } from '@/hooks/use-media-query';

export function FeaturedProjects() {
    const featuredProjects = projects.filter(p => p.featured);
    const ref = useRef(null);
    const isInView = useInView(ref, { 
      once: true,
      margin: "0px 0px -200px 0px"
    });
    
    const isMobile = useMediaQuery('(max-width: 640px)');

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.8 }}
      className="max-w-6xl mx-auto py-12 px-2"
    >
    <div className="flex flex-col gap-10">
          <div className="flex justify-between items-start">
            <h2 className="text-5xl font-bold">Featured Projects</h2>
            <Button variant="ghost" asChild className="mt-2">
              <a href="/projects" className="flex items-center gap-2">
                View all projects <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 px-2">
            {featuredProjects.map((project, index) => (
              isMobile ? (
                <ProjectCardMobile
                  key={project.title}
                  project={project}
                  index={index}
                  variant="featured"
                />
              ) : (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                  variant="featured"
                />
              )
            ))}
          </div>
        </div>
    </motion.div>
  );
}