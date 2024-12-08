import { motion } from 'framer-motion';
import { ProjectCard } from '@/components/project-card';
import { projects } from '@/data/projects';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useMediaQuery } from '@/hooks/use-media-query';
import { ProjectCardMobile } from '@/components/project-card-mobile';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export function ProjectsPage() {
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width: 640px)');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto py-12 px-2 relative"
    >
      <div className="flex justify-between items-start mb-6">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold"
        >
          All Projects
        </motion.h1>
        
        <Button 
          variant="ghost"  className="mt-3 flex items-center gap-2"
          onClick={() => navigate(-1)}
        >
          Go Back <ArrowLeft className="h-4 w-4" />
        </Button>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-6 px-2 sm:grid-cols-2"
      >
        {projects.map((project, index) => (
          isMobile ? (
            <ProjectCardMobile
              key={project.title}
              project={project}
              index={index}
              variant={project.featured ? 'featured' : 'default'}
            />
          ) : (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              variant={project.featured ? 'featured' : 'default'}
            />
          )
        ))}
      </motion.div>
    </motion.div>
  );
}