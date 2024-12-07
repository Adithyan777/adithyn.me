import { motion, useInView } from 'framer-motion';
import { Github, Linkedin, Mail, Terminal, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useRef } from 'react';
import { scrollToSection } from '@/lib/scroll-utils';

const skills = {
  'Programming Languages': ['Python', 'JavaScript', 'TypeScript', 'Java', 'C', 'SQL', 'HTML', 'CSS'],
  'Frameworks & Libraries': [
    'React', 'Next.js', 'Express.js', 'Node.js', 'Zustand',
    'Drizzle ORM', 'LangChain', 'AutoGen', 'Typer', 'Rich', 'Streamlit'
  ],
  'AI/ML': [
    'Core ML Concepts', 'LLM Integration', 'Prompt Engineering',
    'Structured Output Handling', 'AI Automation'
  ],
  'Databases': ['PostgreSQL', 'MongoDB'],
  'DevOps & Tools': [
    'Docker', 'Docker Compose', 'Git', 'GitHub Actions',
    'Google Cloud Platform', 'Vercel', 'Vite'
  ]
};

const about_me = [
  `Hey there! I'm Adithyan, a 3rd-year Computer Science undergrad specializing in AI and ML, with a passion for building impactful solutions at the intersection of software engineering and AI.`,
  "With experience spanning full-stack development, DevOps, and AI-driven automation, I've worked on diverse projects that demonstrate my versatility and problem-solving skills. From creating scalable web applications using modern frameworks to developing intelligent GenAI tools with advanced LLM APIs, I'm always striving for solutions that stand out for being both innovative and reliable.",
  "Combining technical depth with hands-on experience, I thrive in crafting solutions that enhance efficiency and solve complex problems. Whether you're looking for someone to build robust software systems, automate workflows, or tackle AI-driven challenges, I'm here to add value to your team with a creative, collaborative, and detail-oriented approach."
];

const details = {
  'Hero Line': "From building robust full-stack applications to crafting innovative GenAI tools, I'm all in for the challenge of translating ideas into meaningful solutions.",
  'About Me': about_me
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function HomePage() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const techRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isAboutInView = useInView(aboutRef, { once: true });
  const isTechInView = useInView(techRef, { once: true });

  return (
    <div className="max-w-6xl mx-auto py-12 px-2">
      <div className="flex flex-col gap-10">
        <motion.div
          ref={heroRef}
          initial={{ opacity: 0, x: -20 }}
          animate={isHeroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="space-y-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Badge variant="secondary" className="mb-4">
                Available for hire
              </Badge>
            </motion.div>
            <h1 className="text-6xl font-bold leading-tight">
              Hi, I'm{' '}
              <span className="text-primary relative">
                Adithyan K
                <motion.div
                  className="absolute -bottom-2 left-0 w-full h-2 bg-primary/20 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5 }}
                />
              </span>
            </h1>
            <br></br>
            <p className="text-xl text-muted-foreground">
              {details['Hero Line']}
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button 
              variant="default" 
              size="lg" 
              onClick={() => scrollToSection('#projects')}
            >
              <Terminal className="mr-2 h-4 w-4" />
              View Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('#contact')}
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
          </div>

          <div className="flex gap-4">
            <Button variant="ghost" size="icon">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Linkedin className="h-5 w-5" />
            </Button>
          </div>
        </motion.div>

        <div ref={aboutRef}>
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <motion.div
            variants={container}
            initial="hidden"
            animate={isAboutInView ? "show" : "hidden"}
          >
            <motion.p
              variants={item}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              {details['About Me'][0]}
            </motion.p>
            <br></br>
            <motion.p
              variants={item}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              {details['About Me'][1]}
            </motion.p>
            <br></br>
            <motion.p
              variants={item}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              {details['About Me'][2]}
            </motion.p>
          </motion.div>
        </div>

        <motion.div
          ref={techRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isTechInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className=""
        >
          <h2 className="text-3xl font-bold mb-6">Core Skills & Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, categorySkills]) => (
              <motion.div
                key={category}
                variants={container}
                initial="hidden"
                animate={isTechInView ? "show" : "hidden"}
                className="space-y-3"
              >
                <h3 className="text-xl font-semibold text-primary">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {categorySkills.map((skill) => (
                    <motion.div
                      key={skill}
                      variants={item}
                      whileHover={{ scale: 1.05 }}
                      className="transition-colors"
                    >
                      <Badge
                        variant="secondary"
                        className="text-sm hover:bg-primary hover:text-primary-foreground cursor-default"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}