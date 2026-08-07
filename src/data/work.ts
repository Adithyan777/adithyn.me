export type WorkLink = {
  label: string;
  href: string;
};

export type WorkItem = {
  slug: string;
  title: string;
  /* One sentence: what it does, in the reader's language. */
  blurb: string;
  /* Where it was built. Omitted for independent work. */
  at?: string;
  stack: string[];
  period: string;
  /* Measured results only — never estimates, never self-graded. */
  metrics?: { value: string; label: string }[];
  links?: WorkLink[];
};

/*
  Ordered deliberately: research-adjacent systems first, then product-facing,
  then independent tools. A reader from any of the three audiences finds
  something they recognise inside the first two items.
*/
export const selectedWork: WorkItem[] = [
  {
    slug: 'superscout',
    title: 'SuperScout',
    blurb:
      'Cost-aware routing for coding agents. A 7B model I trained scouts the repository first, and its verified findings decide which frontier model is worth paying for. Matches the best single model at about a fifth the cost per solve.',
    at: 'SuperAGI',
    stack: ['Go', 'Python', 'Qwen2.5-Coder', 'LoRA', 'vLLM', 'H100'],
    period: '2026',
    metrics: [
      { value: '1/5', label: 'the cost per solve' },
      { value: '266', label: 'task census, SWE-bench Pro' },
      { value: '7B', label: 'searcher trained on one H100' },
    ],
    links: [
      { label: 'Paper', href: 'https://arxiv.org/abs/2608.04804' },
      { label: 'Code', href: 'https://github.com/TransformerOptimus/superscout' },
      { label: 'Models', href: 'https://huggingface.co/SuperAGI/SuperScout-7B' },
    ],
  },
  {
    slug: 'context-engine',
    title: 'Context Engine',
    blurb:
      'A code index inside SuperCoder, SuperAGI’s local-first coding agent. Lets the agent search a codebase by meaning, exact token, and call graph instead of grep alone — and runs entirely on the developer’s machine.',
    at: 'SuperAGI',
    stack: ['Rust', 'Go', 'tree-sitter', 'Qdrant', 'FalkorDB'],
    period: '2026',
    metrics: [
      { value: '819', label: 'agent runs evaluated' },
      { value: '10', label: 'languages parsed' },
      { value: '31', label: 'repositories indexed' },
    ],
    links: [
      { label: 'Paper', href: 'https://arxiv.org/abs/2606.22417' },
      {
        label: 'Artifact',
        href: 'https://github.com/TransformerOptimus/supercoder-eval',
      },
    ],
  },
  {
    slug: 'digital-employees',
    title: 'Digital Employees',
    blurb:
      'Autonomous AI teammates that join a live meeting with voice and avatar, run the sales demo, answer questions, and drive the slides themselves. I built the backend — the agent loop, the speech pipeline, and the meeting integration.',
    at: 'SuperAGI',
    stack: ['Go', 'LiveKit', 'Deepgram', 'ElevenLabs', 'cgo'],
    period: '2026',
  },
  {
    slug: 'vibe-coder',
    title: 'Vibe Coder',
    blurb:
      'Describe an app, watch it get built, and deploy it to its own subdomain. I owned the execution and deployment side — the sandboxed runtime the agent writes code inside, and the pipeline that ships the result.',
    at: 'SuperAGI',
    stack: ['Go', 'Modal', 'S3', 'CloudFront', 'Redis'],
    period: '2026',
  },
  {
    slug: 'lifie',
    title: 'Lifie',
    blurb:
      'Voice and chat AI for businesses, across outbound engagement and inbound support. Co-founded it and own the architecture — the intelligence layer, retrieval grounding, and guardrails.',
    stack: ['TypeScript', 'Mastra', 'Groq', 'PostgreSQL', 'MCP'],
    period: '2025 — present',
    links: [{ label: 'Site', href: 'https://lifie.ai' }],
  },
  {
    slug: 'cc-vault',
    title: 'cc-vault',
    blurb:
      'A terminal UI for browsing and managing Claude Code sessions — search across every conversation, preview them as rendered markdown, and resume any one of them in place.',
    stack: ['Go', 'Bubble Tea', 'Lip Gloss'],
    period: '2026',
    links: [{ label: 'Code', href: 'https://github.com/Adithyan777/cc-vault' }],
  },
];
