import { motion, useInView } from 'framer-motion';
import { Mail, Terminal, ArrowRight, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useRef } from 'react';
import { scrollToSection } from '@/lib/scroll-utils';

// const resumeLink = "https://drive.google.com/file/d/1o2spqn1kc4i3bFTkqp_KwQDwSWmghBhR/view?usp=sharing"

const skills = {
  'Programming Languages': [
    { name: 'Python', frequentlyUsed: true },
    { name: 'JavaScript'},
    { name: 'TypeScript', frequentlyUsed: true },
    { name: 'Java', frequentlyUsed: false },
    { name: 'C', frequentlyUsed: false },
    { name: 'SQL'},
    { name: 'HTML'},
    { name: 'CSS', frequentlyUsed: false }
  ],
  'Frameworks & Libraries': [
    { name: 'React', frequentlyUsed: true },
    { name: 'Next.js', frequentlyUsed: true },
    { name: 'Express.js', frequentlyUsed: true },
    { name: 'Node.js', frequentlyUsed: true },
    { name: 'Zustand'},
    { name: 'Drizzle ORM'},
    { name: 'Prisma ORM', frequentlyUsed: true },
    { name: 'LangChain', frequentlyUsed: true },
    { name: 'AutoGen', frequentlyUsed: false },
    { name: 'Mastra', frequentlyUsed: true },
    { name: 'Streamlit', frequentlyUsed: true }
  ],
  'AI/ML': [
    { name: 'Core ML Concepts', frequentlyUsed: true },
    { name: 'Pandas', frequentlyUsed: true },
    { name: 'NumPy', frequentlyUsed: true },
    { name: 'Scikit-learn'},
    { name: 'Data Preprocessing', frequentlyUsed: true },
    { name: 'Model Evaluation', frequentlyUsed: true },
    { name: 'OpenCV', frequentlyUsed: false }
  ],
  'GenAI': [
    { name: 'LLM Integration', frequentlyUsed: true },
    { name: 'Context Enginnering', frequentlyUsed: true },
    { name: 'Structured Output Handling', frequentlyUsed: true },
    { name: 'AI Automation', frequentlyUsed: true },
  ],
  // 'Automation Platforms': [
  //  'n8n', 'Langflow',
  // ],
  'Databases': [
    { name: 'PostgreSQL', frequentlyUsed: true },
    { name: 'MongoDB', frequentlyUsed: false },
    { name: 'ChromaDB', frequentlyUsed: true },
    { name: 'Qdrant', frequentlyUsed: true },
  ],
  'DevOps & Tools': [
    { name: 'Docker', frequentlyUsed: true },
    { name: 'Docker Compose', frequentlyUsed: true },
    { name: 'Git', frequentlyUsed: true },
    { name: 'GitHub Actions'},
    { name: 'Google Cloud Platform'},
    { name: 'Vercel'},
    { name: 'Vite', frequentlyUsed: true }
  ]
};

const about_me = [
  `Hey, I’m Adithyan — a final-year CSE (AI) undergrad driven by one goal: to build AI systems that actually ship, scale, and make sense in production.`,
  "My work focuses on agentic infrastructure, LLM orchestration, and intelligent backends — turning abstract AI capabilities into reliable, autonomous systems.",
  "I’ve led the AI product layer at Lifie, where we’re building the foundation for autonomous commerce through agent frameworks, context engines, and guardrailed reasoning protocols.",
  "Beyond that, I’ve built developer tools, dataset bias detection systems, and adaptive knowledge agents — each project pushing a bit closer to machines that can reason, act, and learn responsibly.",
  "I like sitting where deep tech meets practicality — designing systems that balance speed, safety, and intelligence to move real products forward."
];

const details = {
  'Hero Line': "Building the intelligence layer for products that work reliably in the real world.",
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
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
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
                <span className="text-primary relative whitespace-nowrap">
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

            {/* Code for Photo */}
            {/* <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
              className="relative w-[280px] h-[280px] mx-auto md:mx-0"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-primary/10 rounded-[2.5rem] rotate-6" />
              <div className="absolute inset-0 bg-gradient-to-l from-primary/30 to-primary/10 rounded-[2.5rem] -rotate-6" />
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden border-2 border-primary/20">
                <img
                  src="/images/adithyan.jpg"
                  alt="Adithyan K"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </motion.div> */}
          </div>

          <div className="flex flex-wrap gap-4">
            <Button 
              variant="default" 
              size="lg" 
              onClick={() => scrollToSection('#experience')}
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

            <Button
              variant="outline"
              size="default"
              asChild
            >
              <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center"
              >
              <FileText className="mr-2 h-4 w-4" />
              Resume
              </a>
            </Button>
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
            {/* <Button
              variant="outline"
              size="default"
              className='mt-4'
              asChild
            >
              <a 
                href={resumeLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <FileText className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button> */}
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
                      key={skill.name}
                      variants={item}
                      whileHover={{ scale: 1.05 }}
                      className="transition-colors"
                    >
                      <Badge
                        variant={skill.frequentlyUsed ? "default" : "secondary"}
                        className={`text-sm hover:bg-primary hover:text-primary-foreground cursor-default ${
                          skill.frequentlyUsed 
                            ? "bg-primary text-primary-foreground" 
                            : ""
                        }`}
                      >
                        {skill.name}
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