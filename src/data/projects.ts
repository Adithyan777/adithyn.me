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
  notCompleted?: boolean;
  testCredentials?: TestCredentials;
}

export const projects: Project[] = [
  {
    title: 'BiasBalance',
    description: 'A dataset bias detection and augmentation tool.',
    longDescription: 'A Streamlit-based web application for analyzing categorical data, detecting bias, performing independence testing, and augmenting data with AI.',
    tech: ['Streamlit', 'OpenAI API', 'Pydantic', 'Docker', 'GitHub Actions'],
    image: 'bias-balance.jpg',
    features: [
      'Dataset upload with automatic categorical column detection',
      'Bias detection using Chi-squared tests',
      'Independence testing between categorical variables',
      'AI-powered data augmentation to balance bias',
    ],
    demoUrl: 'https://biasbalance.onrender.com/',
    githubUrl: 'https://github.com/Adithyan777/BiasBalance',
    featured: true,
    notCompleted: false,
  },
  {
    title: 'Kanban-Board Task Manager',
    description: 'A task management dashboard with list and Kanban board views.',
    longDescription: 'A web app for managing tasks with drag-and-drop Kanban board functionality, user authentication, and advanced task filtering and sorting features.',
    tech: ['Next.js', 'Express.js', 'MongoDB', 'Shadcn', 'dnd-kit'],
    image: 'kanban.jpg',
    features: [
      'JWT-based user authentication',
      'CRUD operations for tasks',
      'Task filtering and sorting by status, priority, and due date',
      'Drag-and-drop functionality for Kanban board',
    ],
    demoUrl: 'https://kanban-frontend-4iqd.vercel.app/', 
    githubUrl: 'https://github.com/Adithyan777/kanban-frontend',
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
    image: 'bunk-better.jpg',
    features: [
      'Secure authentication using JWT',
      'Real-time attendance tracking',
      'Live deployment on Vercel'
    ],
    demoUrl: 'https://bunk-better.vercel.app/', 
    githubUrl: 'https://github.com/Adithyan777/bunk-better',
    featured: true,
    testCredentials: {
      email: "test@gmail.com",
      password: "12345678"
    }
  },
  {
    title: 'CodeCatalyst',
    description: 'A CLI tool to streamline developer environment setup.',
    longDescription: 'A Python-based CLI tool that automates and simplifies developer environment setup using AI-powered agents, reducing setup time by over 65%.',
    tech: ['Python', 'AutoGen', 'Docker', 'Typer', 'Rich', 'OpenAI API'],
    image: 'code-catalyst.jpg',
    features: [
      'AI-driven automation with AutoGen and OpenAI APIs',
      'Custom AutoGen Agent classes for specialized tasks',
      'Supports both traditional and Docker-based environments'
    ],
    // demoUrl: 'https://codecatalyst.demo', 
    githubUrl: 'https://github.com/Adithyan777/code-catalyst',
    featured: false,
    notCompleted: true
  },
  {
    title: 'AI Database Q&A Agent',
    description: 'An AI agent for natural language database queries.',
    longDescription: 'A Streamlit-based AI tool that enables users to interact with databases using natural language, automating SQL query generation and execution.',
    tech: ['Python', 'LangChain', 'Streamlit', 'OpenAI API', 'PostgreSQL'],
    image: 'https://via.placeholder.com/800x600.png?text=AI+Database+Q&A+Agent',
    features: [
      'Natural language database querying',
      'Automated SQL command generation',
      'Context-aware responses',
      'User-friendly interface with Streamlit'
    ],
    // demoUrl: 'https://aidatabaseqa.demo',
    githubUrl: 'https://github.com/Adithyan777/database-agent', // Add your GitHub URL here
    featured: false,
    notCompleted: false
  }
];
