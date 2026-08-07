import type { WorkItem } from '@/data/work';

/* Independent projects that don't make the homepage cut but still stand up. */
export const otherProjects: WorkItem[] = [
  {
    slug: 'metafog',
    title: 'Metafog',
    blurb:
      'A decentralised AI search platform running on contributed GPU and bandwidth, with a developer API over the top.',
    stack: ['Next.js', 'Ollama', 'LlamaIndex', 'SearXNG', 'Docker'],
    period: '2025',
    links: [{ label: 'Site', href: 'https://metafog.io/' }],
  },
  {
    slug: 'arxiv-rag',
    title: 'ArXiv RAG',
    blurb:
      'A research assistant over ArXiv papers — semantic search, targeted Q&A, and a fine-tuned Qwen model for domain answers.',
    stack: ['LangChain', 'Qdrant', 'Unsloth', 'Docling', 'Streamlit'],
    period: '2025',
    links: [{ label: 'Code', href: 'https://github.com/Adithyan777/arxiv-rag' }],
  },
  {
    slug: 'biasbalance',
    title: 'BiasBalance',
    blurb:
      'Detects bias in categorical datasets with chi-squared and independence testing, then rebalances them with generated data.',
    stack: ['Streamlit', 'Pydantic', 'OpenAI'],
    period: '2024',
    links: [
      { label: 'Demo', href: 'https://biasbalance.onrender.com/' },
      { label: 'Code', href: 'https://github.com/Adithyan777/BiasBalance' },
    ],
  },
  {
    slug: 'code-catalyst',
    title: 'CodeCatalyst',
    blurb:
      'A CLI that sets up a development environment from a description, using agents to resolve toolchains and dependencies.',
    stack: ['Python', 'AutoGen', 'Typer', 'Docker'],
    period: '2024',
    links: [{ label: 'Code', href: 'https://github.com/Adithyan777/code-catalyst' }],
  },
];

export type ArchivedProject = {
  title: string;
  blurb: string;
  year: string;
  href?: string;
};

/*
  Kept for completeness, presented as history. These are early full-stack
  builds and they're listed rather than argued for.
*/
export const archive: ArchivedProject[] = [
  {
    title: 'Kanban Task Manager',
    blurb: 'Task dashboard with list and drag-and-drop board views.',
    year: '2024',
    href: 'https://github.com/Adithyan777/kanban-frontend',
  },
  {
    title: 'BunkBetter',
    blurb: 'Attendance tracker for students.',
    year: '2024',
    href: 'https://github.com/Adithyan777/bunk-better',
  },
  {
    title: 'Database Q&A Agent',
    blurb: 'Natural-language querying over a SQL database.',
    year: '2024',
    href: 'https://github.com/Adithyan777/database-agent',
  },
];
