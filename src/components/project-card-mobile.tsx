import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ProjectCardProps } from './project-card';

function getImagePath(imagePath: string): string {
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath;
  }
  return `/images/${imagePath}`;
}

export function ProjectCardMobile({ project, index, variant = 'default' }: ProjectCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleDemoClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    if (project.coldReboot) {
      e.preventDefault();
      const params = new URLSearchParams({
        url,
        title: project.title
      });
      window.open(`/loading?${params.toString()}`, '_blank');
    }
  };

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ 
        delay: index * 0.2,
        duration: 0.5,
        ease: "easeOut"
      }}
      whileHover={{ y: -5 }}
    >
      <Card className="relative hover:shadow-lg transition-all">
        {variant === 'featured' && (
          <div className="absolute -top-2 -right-2 z-10">
            <Badge variant="default">Featured</Badge>
          </div>
        )}
        
        <CardHeader className="pb-4">
          <CardTitle className="flex justify-between items-center text-2xl">
            {project.title}
          </CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>

        {project.image && (
          <div className="px-6 pb-6">
            <div className="relative w-full h-56 overflow-hidden rounded-lg border">
              <img 
                src={getImagePath(project.image)} 
                alt={project.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        )}

        <CardContent className="pt-0 space-y-6">
          <div className="flex gap-2 flex-wrap">
            {project.tech.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>

          <p className="text-muted-foreground">
            {project.longDescription || project.description}
          </p>

          {project.features && (
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Key Features</h3>
              <ul className="list-disc list-inside space-y-1">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {project.testCredentials && (
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Test Credentials</h3>
              <div className="space-y-1 pl-4">
                <p><span className="font-medium">Email:</span> {project.testCredentials.email}</p>
                <p><span className="font-medium">Password:</span> {project.testCredentials.password}</p>
              </div>
            </div>
          )}

          <div className="flex gap-4">
            {project.demoUrl && (
              <Button asChild>
                <a 
                  href={project.demoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={(e) => handleDemoClick(e, project.demoUrl!)}
                >
                  View Demo
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button variant="outline" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  View Code
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}