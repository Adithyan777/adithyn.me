import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const experiences = [
  {
    company: 'Metafog',
    position: 'Lead Software Engineer',
    period: 'January 2025 - Present',
    description: [
        "Designed and developed frontend, backend, and infrastructure for a decentralized AI search platform.",
        "Built a high-performance API for decentralized web search, integrating real-time web crawling for accurate data and LLMs for summarization.",
        "Engineered the provider infrastructure using Docker and Nginx, ensuring scalability and resilience.",
        "Worked in a startup-like environment, owning the full development lifecycle while collaborating on ideas."
      ],
    technologies: ["Next.js", "Docker", "Nginx", "Ollama", "LlamaIndex"]
  },
  {
    company: 'Messen Labs',
    position: 'Full Stack Developer Intern',
    period: 'June 2024 - July 2024',
    description: [
      'Designed and implemented a license management website resulting in increased client retention', 
      'Developed CRUD features for licenses and clients with expiring license alerts and CSV export',
      'Implemented a three-tier user privilege system',
      'Dockerized Next.js app and PostgreSQL database, deployed on Google Cloud VM'
    ],
    technologies: ['Next.js', 'Docker', 'PostgreSQL', 'Google Cloud', 'DrizzleORM']
  },
  {
    company: 'Messen Controls LLC',
    position: 'Frontend Developer Intern',
    period: 'May 2024 - June 2024',
    description: [
      'Developed a static site using Next.js to calculate valve flow coefficients',
      'Used Zustand for state management',
      'Integrated site into existing PHP-based hosting environment',
      'Collaborated with client to design system architecture'
    ],
    technologies: ['Next.js', 'Zustand', 'PHP']
  }
];

export function ExperiencePage() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,  // reduced from 1.2
        when: "beforeChildren",
        staggerChildren: 0.2,  // reduced from 0.4
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.98,
      y: 30
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,  // reduced from 0.8
        type: "spring",
        stiffness: 100,  // increased from 50
        damping: 12     // reduced from 15
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="max-w-6xl mx-auto py-12 px-2"
    >
      <motion.h1 
        className="text-5xl font-bold mb-8"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Experience
      </motion.h1>
      <div className="space-y-6 px-2">
        {experiences.map((experience) => (
          <motion.div
            key={experience.company}
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className='text-2xl'>{experience.position}</CardTitle>
                <CardDescription>
                  <span className='font-bold'> {experience.company} </span> • {experience.period}
                  </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-4 mb-4 space-y-2">
                  {experience.description.map((desc, i) => (
                    <li key={i} className="text-muted-foreground">{desc}</li>
                  ))}
                </ul>
                <div className="flex gap-2 flex-wrap">
                  {experience.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}