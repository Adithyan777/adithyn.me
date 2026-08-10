import type { ComponentType } from 'react';

/*
  One MDX file per piece. Frontmatter feeds rows, SEO and the sitemap; the body
  is the long-form. Adding a piece means adding a file — no registry to sync.
*/

export type WorkLink = { label: string; href: string };
export type Metric = { value: string; label: string };

export type WorkMeta = {
  slug: string;
  title: string;
  blurb: string;
  /* Omitted for independent work. */
  at?: string;
  stack: string[];
  period: string;
  /* Lower sorts first. */
  order: number;
  /* Shows on the homepage as well as /projects. */
  featured?: boolean;
  /* Measured results only. */
  metrics?: Metric[];
  links?: WorkLink[];
  /* Earns a /work/<slug> page and a link from the row. */
  writeup?: boolean;
  draft?: boolean;
};

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  /* ISO date — sorted on, and used as sitemap lastmod. */
  date: string;
  readingTime?: string;
  draft?: boolean;
};

export type Entry<T> = {
  meta: T;
  Content: ComponentType;
};

type MdxModule = {
  meta?: Record<string, unknown>;
  default: ComponentType;
};

function slugFrom(filePath: string) {
  return filePath.split('/').pop()!.replace(/\.mdx$/, '');
}

/* A frontmatter typo should break the build, not ship quietly. */
function require<T>(value: T | undefined, field: string, filePath: string): T {
  if (value === undefined || value === null || value === '') {
    throw new Error(`Missing "${field}" in frontmatter of ${filePath}`);
  }
  return value;
}

const workModules = import.meta.glob<MdxModule>('/src/content/work/*.mdx', {
  eager: true,
});

const postModules = import.meta.glob<MdxModule>('/src/content/writing/*.mdx', {
  eager: true,
});

const isProd = import.meta.env.PROD;

export const work: Entry<WorkMeta>[] = Object.entries(workModules)
  .map(([filePath, mod]) => {
    const fm = mod.meta ?? {};
    return {
      meta: {
        slug: slugFrom(filePath),
        title: require(fm.title as string, 'title', filePath),
        blurb: require(fm.blurb as string, 'blurb', filePath),
        at: fm.at as string | undefined,
        stack: (fm.stack as string[]) ?? [],
        period: require(fm.period as string, 'period', filePath),
        order: (fm.order as number) ?? 99,
        featured: Boolean(fm.featured),
        metrics: fm.metrics as Metric[] | undefined,
        links: fm.links as WorkLink[] | undefined,
        writeup: Boolean(fm.writeup),
        draft: Boolean(fm.draft),
      },
      Content: mod.default,
    };
  })
  .filter((entry) => !(isProd && entry.meta.draft))
  .sort((a, b) => a.meta.order - b.meta.order);

export const posts: Entry<PostMeta>[] = Object.entries(postModules)
  .map(([filePath, mod]) => {
    const fm = mod.meta ?? {};
    return {
      meta: {
        slug: slugFrom(filePath),
        title: require(fm.title as string, 'title', filePath),
        description: require(fm.description as string, 'description', filePath),
        date: require(fm.date as string, 'date', filePath),
        readingTime: fm.readingTime as string | undefined,
        draft: Boolean(fm.draft),
      },
      Content: mod.default,
    };
  })
  .filter((entry) => !(isProd && entry.meta.draft))
  .sort((a, b) => b.meta.date.localeCompare(a.meta.date));

export const featuredWork = work.filter((entry) => entry.meta.featured);
export const otherWork = work.filter((entry) => !entry.meta.featured);

export const findWork = (slug: string) =>
  work.find((entry) => entry.meta.slug === slug);

export const findPost = (slug: string) =>
  posts.find((entry) => entry.meta.slug === slug);

/* Prerender targets, derived from the content. */
export const contentRoutes = [
  ...work.filter((e) => e.meta.writeup).map((e) => `/work/${e.meta.slug}`),
  ...posts.map((e) => `/writing/${e.meta.slug}`),
];
