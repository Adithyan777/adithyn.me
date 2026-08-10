import { Head } from 'vite-react-ssg';
import { siteConfig } from '@/config/site';

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  noindex?: boolean;
  /* Articles get richer Open Graph tags. */
  article?: { publishedTime?: string };
}

/* Emitted at build time, so social unfurlers (no JS) see real tags. */
export function SEO({
  title,
  description = siteConfig.description,
  path = '/',
  noindex = false,
  article,
}: SEOProps) {
  const fullTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title;
  const canonicalUrl = `${siteConfig.url}${path}`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {noindex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:type" content={article ? 'article' : 'website'} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={siteConfig.name} />
      {article?.publishedTime && (
        <meta property="article:published_time" content={article.publishedTime} />
      )}

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:creator" content="@adithyn_krshna" />

      {path === '/' && (
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: siteConfig.name,
            jobTitle: 'AI Research Engineer',
            url: siteConfig.url,
            sameAs: [
              siteConfig.social.github,
              siteConfig.social.linkedin,
              siteConfig.social.twitter,
            ],
          })}
        </script>
      )}
    </Head>
  );
}
