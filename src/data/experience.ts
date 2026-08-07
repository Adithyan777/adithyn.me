export type Role = {
  title: string;
  period: string;
  /* Scoped to the role, so a promotion shows what actually changed. */
  highlights?: string[];
};

export type Company = {
  name: string;
  href?: string;
  period: string;
  /* Newest first. More than one entry reads as progression. */
  roles: Role[];
  summary?: string;
  highlights?: string[];
  stack?: string[];
};

export const experience: Company[] = [
  {
    name: 'SuperAGI',
    href: 'https://superagi.com',
    period: 'Jan 2026 — Present',
    roles: [
      {
        title: 'AI Research Engineer',
        period: 'Jul 2026 — Present',
        highlights: [
          'Trained a 7B repository-search model end to end — data curation, a custom packing pipeline, and the training run — and built the verification gate and cost-aware router around it. Published as SuperScout.',
          'Built the evaluation platform behind both papers: sandboxed run orchestration, leak detection, and cost accounting across 800+ agent runs.',
          'Second author on two arXiv preprints, having built the systems and run the experiments for both.',
        ],
      },
      {
        title: 'AI Engineer, Intern',
        period: 'Jan 2026 — Jul 2026',
        highlights: [
          'Built the code index inside SuperCoder — structure-aware chunking, vector and call-graph retrieval, and a resumable sync protocol that runs entirely on the developer’s machine.',
          'Shipped the sandbox runtime and deployment pipeline for Vibe Coder, SuperAGI’s AI app builder.',
          'Built the backend for Digital Employees — the agent loop, speech pipeline, and meeting integration behind voice-and-avatar agents that run live sales demos.',
        ],
      },
    ],
    summary:
      'Training models, building the systems around them, and publishing the results — across coding agents, retrieval, and agent infrastructure.',
    stack: ['Go', 'Python', 'Rust', 'Modal', 'vLLM', 'Qdrant', 'LiveKit'],
  },
  {
    name: 'Lifie',
    href: 'https://lifie.ai',
    period: 'Jul 2025 — Present',
    roles: [{ title: 'Co-Founder & Technical Lead', period: 'Part-time' }],
    summary:
      'Voice and chat AI for businesses — outbound engagement and inbound support.',
    highlights: [
      'Own the architecture end to end: LLM orchestration, context management, retrieval grounding, and guardrails.',
      'Built cross-platform interoperability on MCP.',
    ],
    stack: ['TypeScript', 'Mastra', 'Groq', 'PostgreSQL', 'ChromaDB'],
  },
  {
    name: 'QpiAI',
    href: 'https://qpiai.tech/',
    period: 'Jun 2025 — Jul 2025',
    roles: [{ title: 'AI Product Developer, Intern', period: '' }],
    highlights: [
      'Built agent-based automation for lead intelligence and outreach on QpiAI’s Agent Hive platform.',
      'Delivered a sales support agent adopted by the internal team.',
    ],
    stack: ['Python', 'Agent Hive', 'Streamlit'],
  },
  {
    name: 'Messen Labs',
    href: 'https://messenlabs.com/',
    period: 'Jun 2024 — Jul 2024',
    roles: [{ title: 'Full Stack Developer, Intern', period: '' }],
    highlights: [
      'Built a license management platform with tiered access control, expiry alerts, and CSV export.',
    ],
    stack: ['Next.js', 'PostgreSQL', 'Docker', 'GCP'],
  },
];
