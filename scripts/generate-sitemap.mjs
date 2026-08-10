import { readdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';

/*
  Builds dist/sitemap.xml from the content files. Previously hand-maintained,
  so lastmod drifted every deploy.
*/

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const SITE = 'https://adithyn.me';

const today = new Date().toISOString().slice(0, 10);

function read(dir) {
  const path = join(root, 'src/content', dir);
  if (!existsSync(path)) return [];

  return readdirSync(path)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const { data } = matter(readFileSync(join(path, file), 'utf8'));
      return { slug: file.replace(/\.mdx$/, ''), ...data };
    })
    .filter((entry) => !entry.draft);
}

const posts = read('writing');
const work = read('work');

const urls = [
  { loc: '/', changefreq: 'monthly', priority: '1.0', lastmod: today },
  { loc: '/projects', changefreq: 'monthly', priority: '0.8', lastmod: today },
  ...(posts.length
    ? [{ loc: '/writing', changefreq: 'monthly', priority: '0.7', lastmod: today }]
    : []),
  ...posts.map((post) => ({
    loc: `/writing/${post.slug}`,
    changefreq: 'yearly',
    priority: '0.6',
    /* A post's own date is the honest lastmod. */
    lastmod: String(post.date ?? today).slice(0, 10),
  })),
  ...work
    .filter((item) => item.writeup)
    .map((item) => ({
      loc: `/work/${item.slug}`,
      changefreq: 'yearly',
      priority: '0.6',
      lastmod: today,
    })),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${SITE}${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

writeFileSync(join(root, 'dist/sitemap.xml'), xml);
console.log(`[sitemap] ${urls.length} urls → dist/sitemap.xml`);
