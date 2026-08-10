export type ArchivedProject = {
  title: string;
  blurb: string;
  year: string;
  href?: string;
};

/* No write-up and never will have one, so plain data rather than content files. */
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
