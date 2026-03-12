import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { contentConfig, is } from '@/data/config';
import { trackEvent, AnalyticsEvents } from '@/lib/analytics';
import { Link } from 'react-router-dom';

type Experience = {
  company: string;
  position: string;
  period: string;
  summary?: string;
  summaryLinkText?: string;
  summaryLinkHref?: string;
  description: string[];
  technologies: string[];
  link?: string;
};

function getExperiences(): Experience[] {
  const superagiActive = is.superagiActive();
  const lifieActive = is.lifieActive();
  const jobHunting = contentConfig.mode === 'jobHunting';

  const entries: Experience[] = [];

  // SuperAGI — show when active or job hunting
  if (superagiActive || jobHunting) {
    entries.push({
      company: 'SuperAGI',
      position: 'AI Engineer Intern',
      period: superagiActive ? 'Jan 2026 - Present' : 'Jan 2026 - Mar 2026',
      summary: `${superagiActive ? 'Building' : 'Built'} AI products at SuperAGI \u2014 an AI native platform for sales, marketing, and support automation for enterprise teams.`,
      description: [
        "Built the sandbox infrastructure and deployment pipeline for Vibe Coder — SuperAGI's AI app builder where users describe applications and get live previews of generated code in real-time",
        'Architected the backend orchestration layer for Digital Employees — autonomous AI teammates that join client meetings with voice and avatar, conduct sales demos, manage onboarding, and orchestrate slide transitions in real-time',
        `${superagiActive ? 'Contributing' : 'Contributed'} to backend and AI integration across multiple products on SuperAGI's platform`,
      ],
      technologies: [],
      link: 'https://superagi.com',
    });
  }

  // Lifie — show when active or job hunting
  if (lifieActive || jobHunting) {
    const active = lifieActive;
    entries.push({
      company: 'Lifie',
      position: 'Co-Founder & Technical Lead',
      period: active ? 'Jul 2025 - Present' : 'Jul 2025 - Mar 2026',
      summary: `${active ? 'Building' : 'Built'} voice and chat AI for businesses. Two product lines — REACH for outbound customer engagement and ASSIST for inbound support workflows. The product ${active ? 'has evolved' : 'evolved'} a few times${contentConfig.showLifieCaseStudy ? ' — ' : '.'}`,
      summaryLinkText: contentConfig.showLifieCaseStudy ? 'more on that here' : undefined,
      summaryLinkHref: contentConfig.showLifieCaseStudy ? '/lifie' : undefined,
      description: [
        'Built the core intelligence layer — LLM orchestration, context management, retrieval grounding, and guardrail systems',
        'Built cross-platform interoperability infrastructure using MCP',
        `${active ? 'Own' : 'Owned'} the system architecture end-to-end`,
      ],
      technologies: ['TypeScript', 'Mastra', 'Groq', 'FastEmbed', 'PostgreSQL', 'Docker', 'AI SDK', 'ExpressJS', 'ChromaDB'],
      link: 'https://lifie.ai',
    });
  }

  // QpiAI — always shown
  entries.push({
    company: 'QpiAI',
    position: 'AI Product Developer Intern',
    period: 'June 2025 - July 2025',
    description: [
      "Developed internal tools and PoC use cases on QpiAI's Agent Hive platform, focusing on agent-based automation for lead intelligence and outreach",
      'Delivered a complete sales support agent used internally, resulting in measurable improvements in research efficiency and personalization quality',
      'Designed user-friendly interfaces and supported deployment for internal teams',
      'Integrated state-of-the-art LLM APIs and internal SLMs to enhance decision-making and outreach relevance',
    ],
    technologies: ['Python', 'QpiAI Agent Hive', 'Streamlit', 'BeautifulSoup', 'Selenium', 'CSV I/O'],
    link: 'https://qpiai.tech/',
  });

  // Messen Labs — always shown
  entries.push({
    company: 'Messen Labs',
    position: 'Full Stack Developer Intern',
    period: 'June 2024 - July 2024',
    description: [
      'Designed and implemented a license management website resulting in increased client retention',
      'Developed CRUD features for licenses and clients with expiring license alerts and CSV export',
      'Implemented a three-tier user privilege system',
      'Dockerized Next.js app and PostgreSQL database, deployed on Google Cloud VM',
    ],
    technologies: ['Next.js', 'Docker', 'PostgreSQL', 'Google Cloud', 'DrizzleORM'],
    link: 'https://messenlabs.com/',
  });

  return entries;
}

export function ExperiencePage() {
  const experiences = getExperiences();

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.2,
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
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 12
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
                      onClick={() => trackEvent(AnalyticsEvents.EXPERIENCE_COMPANY_CLICK, { company: experience.company })}
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
                {experience.summary && (
                  <p className="text-muted-foreground mb-4">
                    {experience.summary}
                    {experience.summaryLinkText && experience.summaryLinkHref && (
                      <Link
                        to={experience.summaryLinkHref}
                        className="text-foreground font-medium underline underline-offset-2 decoration-primary/40 hover:decoration-primary hover:text-primary transition-colors"
                      >
                        {experience.summaryLinkText}
                      </Link>
                    )}
                  </p>
                )}
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
