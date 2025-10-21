import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

type Experience = {
  company: string;
  position: string;
  period: string;
  description: string[];
  technologies: string[];
  link?: string;
};

const experiences: Experience[] = [
  {
    company: 'Lifie',
    position: 'Co-Founder & Lead AI Product Developer',
    period: 'August 2025 - Present',
    description: [
      'Building the core AI infrastructure for Lifie — an autonomous commerce platform with products like Lifie Agents and Lifie Hub',
      'Designed and implemented the complete LLM layer covering tool orchestration, context management, retrieval grounding, and guardrail systems for reliable agent behavior',
      'Developed the Lifie MCP server to enable discovery and interoperability of A2A (Agent-to-Agent) agents across the ecosystem',
      'Leading end-to-end AI system architecture, from model routing and retrieval grounding to production-ready agent orchestration and evaluation frameworks'
    ],
    technologies: ['Typescript', 'Mastra', 'Groq', 'FastEmbed', 'PostgreSQL', 'Docker', "AI SDK", "ExpressJS", "ChromaDB"],
    link: 'https://lifie.ai'
  },  
  {
    company: 'QpiAI',
    position: 'AI Product Developer Intern',
    period: 'June 2025 - July 2025',
    description: [
      "Developed internal tools and PoC use cases on QpiAI's Agent Hive platform, focusing on agent-based automation for lead intelligence and outreach",
      'Delivered a complete sales support agent used internally, resulting in measurable improvements in research efficiency and personalization quality',
      'Designed user-friendly interfaces and supported deployment for internal teams',
      'Integrated state-of-the-art LLM APIs and internal SLMs to enhance decision-making and outreach relevance'
    ],
    technologies: ['Python', 'QpiAI Agent Hive', 'Streamlit', 'BeautifulSoup', 'Selenium', 'CSV I/O'],
    link: 'https://qpiai.tech/'
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
    technologies: ['Next.js', 'Docker', 'PostgreSQL', 'Google Cloud', 'DrizzleORM'],
    link : 'https://messenlabs.com/'
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
                  {' '}
                  {experience.link ? (
                    <a
                      href={experience.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold underline underline-offset-2 decoration-muted-foreground/40 hover:decoration-current"
                    >
                      {experience.company}
                    </a>
                  ) : (
                    <span className='font-bold'>{experience.company}</span>
                  )}
                  {' '}• {experience.period}
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