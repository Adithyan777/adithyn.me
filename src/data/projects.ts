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
  coldReboot?: boolean;
}

export const projects: Project[] = [
  {
    title: 'Metafog - Decentralized AI Search Platform',
    description: 'A decentralized AI search platform with real-time web crawling and LLM summarization.',
    longDescription: 'A comprehensive decentralized AI search platform featuring high-performance APIs, real-time web crawling for accurate data retrieval, and LLM integration for intelligent summarization. Built with scalable infrastructure using Docker and Nginx.',
    tech: ['Next.js', 'Docker', 'Nginx', 'Ollama', 'LlamaIndex'],
    image: 'metafog.jpg',
    features: [
      'High-performance API for decentralized web search',
      'Real-time web crawling for accurate data retrieval',
      'LLM integration for intelligent content summarization',
      'Scalable provider infrastructure with Docker and Nginx',
      'Full-stack development with modern technologies'
    ],
    demoUrl: 'https://metafog.io/',
    // githubUrl: '', // Add GitHub URL when available
    featured: true,
    notCompleted: false
  },
  {
    title: 'ArXiv RAG System - AI-Powered Research Assistant',
    description: 'An AI-powered research assistant enabling semantic search, Q&A, and paper analysis over ArXiv research papers.',
    longDescription: 'A comprehensive Retrieval Augmented Generation (RAG) system designed for ArXiv research papers, featuring automated PDF ingestion, fine-tuned domain-specific LLMs, and multi-provider inference. Built with LangChain, Qdrant, and Streamlit, the system enables intelligent semantic search, targeted question answering, and deep paper exploration.',
    tech: ['LangChain', 'Qdrant', 'Docling', 'Unsloth', 'Hugging Face', 'Ollama', 'Streamlit', 'Docker', 'Python'],
    image: 'arxiv-rag.jpg',
    features: [
      'Built a LangChain + Qdrant RAG pipeline for semantic search and contextual Q&A',
      'Automated data ingestion and processing using Docling for PDF parsing and content extraction',
      'Fine-tuned Qwen 8B & 14B models using Unsloth + QLoRA for domain-specific responses',
      'Integrated multiple LLM providers (LMStudio, OpenRouter, IO.NET) for flexible generation',
      'Interactive Streamlit UI for global Q&A and targeted paper exploration',
      'Deployed using Docker Compose for seamless orchestration of vector DB and inference services'
    ],
    githubUrl: 'https://github.com/Adithyan777/arxiv-rag',
    featured: true,
    notCompleted: false
  },
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
    coldReboot: true,
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
