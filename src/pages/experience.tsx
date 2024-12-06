import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const experiences = [
  {
    company: 'TechCorp Inc.',
    position: 'Senior Frontend Developer',
    period: '2021 - Present',
    description: 'Led the development of the companys flagship product, improving performance by 40%.',
    technologies: ['React', 'TypeScript', 'GraphQL'],
  },
  {
    company: 'InnovateLabs',
    position: 'Full Stack Developer',
    period: '2019 - 2021',
    description: 'Developed and maintained multiple client projects using modern web technologies.',
    technologies: ['Node.js', 'React', 'PostgreSQL'],
  },
];

export function ExperiencePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto py-12"
    >
      <h1 className="text-5xl font-bold mb-8">Experience</h1>
      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.company}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>{experience.position}</CardTitle>
                <CardDescription>{experience.company} • {experience.period}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{experience.description}</p>
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