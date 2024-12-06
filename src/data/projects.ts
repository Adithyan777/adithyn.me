export interface TestCredentials {
  email: string;
  password: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  longDescription?: string;
  features?: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  testCredentials?: TestCredentials;
}

export const projects: Project[] = [
  {
    title: 'BiasBalance',
    description: 'A dataset bias detection and augmentation tool.',
    longDescription: 'A Streamlit-based web application for analyzing categorical data, detecting bias, performing independence testing, and augmenting data with AI.',
    tech: ['Streamlit', 'OpenAI API', 'Docker', 'GitHub Actions'],
    image: 'https://via.placeholder.com/800x600.png?text=BiasBalance',
    features: [
      'Dataset upload with automatic categorical column detection',
      'Bias detection using Chi-squared tests',
      'Independence testing between categorical variables',
      'AI-powered data augmentation',
      'Interactive visualizations and CSV export'
    ],
    demoUrl: 'https://biasbalance.demo', // Add your live demo URL here
    githubUrl: 'https://github.com/username/biasbalance', // Add your GitHub URL here
    featured: true,
  },
  {
    title: 'CodeCatalyst',
    description: 'A CLI tool to streamline developer environment setup.',
    longDescription: 'A Python-based CLI tool that automates and simplifies developer environment setup using AI-powered agents, reducing setup time by over 65%.',
    tech: ['Python', 'AutoGen', 'Docker', 'Typer', 'Rich'],
    image: 'https://via.placeholder.com/800x600.png?text=CodeCatalyst',
    features: [
      'AI-driven automation with AutoGen and OpenAI APIs',
      'Custom AutoGen Agent classes for specialized tasks',
      'Supports both traditional and Docker-based environments'
    ],
    demoUrl: 'https://codecatalyst.demo', // Add your live demo URL here
    githubUrl: 'https://github.com/username/codecatalyst', // Add your GitHub URL here
    featured: true
  },
  {
    title: 'Kanban-Board Task Manager',
    description: 'A task management dashboard with list and Kanban board views.',
    longDescription: 'A web app for managing tasks with drag-and-drop Kanban board functionality, user authentication, and advanced task filtering and sorting features.',
    tech: ['Next.js', 'Express.js', 'MongoDB', 'Shadcn', 'dnd-kit'],
    image: 'https://via.placeholder.com/800x600.png?text=Kanban-Board+Task+Manager',
    features: [
      'JWT-based user authentication',
      'CRUD operations for tasks',
      'Task filtering and sorting by status, priority, and due date',
      'Drag-and-drop functionality for Kanban board',
    ],
    demoUrl: 'https://kanbanmanager.demo', // Add your live demo URL here
    githubUrl: 'https://github.com/username/kanbanmanager', // Add your GitHub URL here
    featured: true,
    testCredentials: {
      email: "test@gmail.com",
      password: "12345678"
    }
  },
  {
    title: 'BunkBetter',
    description: 'A comprehensive attendance tracker for students.',
    longDescription: 'A web application for managing attendance records with user authentication, developed with the MERN stack for scalability and reliability.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Vite'],
    image: 'https://via.placeholder.com/800x600.png?text=BunkBetter',
    features: [
      'Secure authentication using JWT',
      'Real-time attendance tracking',
      'Live deployment on Vercel'
    ],
    demoUrl: 'https://bunkbetter.demo', // Add your live demo URL here
    githubUrl: 'https://github.com/username/bunkbetter', // Add your GitHub URL here
    featured: false,
    testCredentials: {
      email: "test@gmail.com",
      password: "12345678"
    }
  },
  {
    title: 'AI Database Q&A Agent',
    description: 'An AI agent for natural language database queries.',
    longDescription: 'A Streamlit-based AI tool that enables users to interact with databases using natural language, automating SQL query generation and execution.',
    tech: ['Python', 'LangChain', 'Streamlit', 'OpenAI API'],
    image: 'https://via.placeholder.com/800x600.png?text=AI+Database+Q&A+Agent',
    features: [
      'Natural language database querying',
      'Automated SQL command generation',
      'Context-aware responses',
      'User-friendly interface with Streamlit'
    ],
    demoUrl: 'https://aidatabaseqa.demo', // Add your live demo URL here
    githubUrl: 'https://github.com/username/aidatabaseqa', // Add your GitHub URL here
    featured: false
  }
];
