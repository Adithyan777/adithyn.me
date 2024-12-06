import { motion } from 'framer-motion';
import { ProjectCard, type Project } from '@/components/project-card';

const projects: Project[] = [
  {
    title: 'EcoTracker',
    description: 'A sustainable living app that helps users track their carbon footprint.',
    longDescription: 'EcoTracker is a comprehensive solution for individuals and businesses to monitor and reduce their environmental impact. The app provides real-time insights and actionable recommendations.',
    tech: ['React Native', 'Node.js', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    features: [
      'Real-time carbon footprint tracking',
      'Personalized eco-friendly recommendations',
      'Community challenges and rewards',
      'Integration with smart home devices'
    ],
    demoUrl: 'https://ecotracker.demo',
    githubUrl: 'https://github.com/username/ecotracker'
  },
  {
    title: 'MindfulAI',
    description: 'AI-powered meditation and mindfulness platform.',
    longDescription: 'MindfulAI combines artificial intelligence with mindfulness practices to deliver personalized meditation experiences. The platform adapts to users\' needs and progress.',
    tech: ['React', 'Python', 'TensorFlow'],
    image: 'https://images.unsplash.com/photo-1522441815192-d9f04eb0615c?auto=format&fit=crop&q=80&w=800',
    features: [
      'AI-generated meditation sessions',
      'Mood tracking and analysis',
      'Progressive skill development',
      'Voice-guided exercises'
    ],
    demoUrl: 'https://mindfulai.demo',
    githubUrl: 'https://github.com/username/mindfulai'
  }
];

export function ProjectsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto py-12 px-4"
    >
      <h1 className="text-5xl font-bold mb-8">Featured Projects</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </motion.div>
  );
}