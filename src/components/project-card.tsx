import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TestCredentials } from '@/data/projects';

export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  longDescription?: string;
  features?: string[];
  demoUrl?: string;
  githubUrl?: string;
  testCredentials?: TestCredentials;
}

export interface ProjectCardProps {
  project: Project;
  index: number;
  variant?: 'default' | 'featured';
}

function getImagePath(imagePath: string): string {
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath;
  }
  return `/images/${imagePath}`;
}

export function ProjectCard({ project, index, variant = 'default' }: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
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
        <Card 
          className="relative cursor-pointer hover:shadow-lg transition-all"
          onClick={() => setIsOpen(true)}
        >
          {variant === 'featured' && (
            <div className="absolute -top-2 -right-2 z-10">
              <Badge variant="default">Featured</Badge>
            </div>
          )}
          
          <CardHeader>
            <CardTitle className="flex justify-between items-center text-2xl">
              {project.title}
            </CardTitle>
            <CardDescription>{project.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <img
              src={getImagePath(project.image)}
              alt={project.title}
              className="w-full object-contain rounded-md mb-4 bg-secondary/30"
            />
            <div className="flex gap-2 flex-wrap">
              {project.tech.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-4 text-right italic">
              click for links and more info
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.3, bounce: 0.3 }}
              className="relative w-full max-w-2xl p-6 m-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Card className="overflow-hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-8 top-8 z-50"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
                
                <div className="relative"> {/* Removed fixed height */}
                  <img
                    src={getImagePath(project.image)}
                    alt={project.title}
                    className="w-full object-contain bg-secondary/30"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                  <h2 className="absolute bottom-4 left-4 text-3xl font-bold">{project.title}</h2>
                </div>

                <CardContent className="p-6 space-y-6">
                  <p className="text-lg text-muted-foreground">
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
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}