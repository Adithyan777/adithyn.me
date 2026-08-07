export type Paper = {
  title: string;
  authors: string;
  venue: string;
  arxiv: string;
  href: string;
  date: string;
  /* What I did on it — stated as work, not as authorship position. */
  contribution: string;
};

export const papers: Paper[] = [
  {
    title:
      'Scrouting: Cost-Aware Routing of Coding Agents by Scouting the Repository First',
    authors: 'Bhola, Krishnan, NS',
    venue: 'SuperAGI Research',
    arxiv: 'arXiv:2608.04804',
    href: 'https://arxiv.org/abs/2608.04804',
    date: 'Aug 2026',
    contribution:
      'Built the system and ran the experiments — training pipeline for the 7B searcher, the verification gate that strips unsupported claims, the cost-aware router, and the evaluation harness.',
  },
  {
    title:
      'Code Isn’t Memory: A Structural Codebase Index Inside a Coding Agent',
    authors: 'Bhola, Krishnan, Kurmala, NS',
    venue: 'SuperAGI Research',
    arxiv: 'arXiv:2606.22417',
    href: 'https://arxiv.org/abs/2606.22417',
    date: 'Jun 2026',
    contribution:
      'Built the evaluation platform and ran a three-arm, three-seed ablation over 819 agent runs, including the leak-audit protocol and a localisation metric designed not to flatter our own system.',
  },
];
