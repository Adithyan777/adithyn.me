import { Helmet } from 'react-helmet-async';
import { siteConfig } from '@/config/site';

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  noindex?: boolean;
}

export function SEO({
  title,
  description = siteConfig.description,
  path = '/',
  noindex = false,
}: SEOProps) {
  const fullTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title;
  const canonicalUrl = `${siteConfig.url}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={siteConfig.name} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:creator" content="@adithyn_krshna" />

      {/* JSON-LD for homepage */}
      {path === '/' && (
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: siteConfig.name,
            jobTitle: 'AI/ML Engineer',
            url: siteConfig.url,
            sameAs: [
              siteConfig.social.github,
              siteConfig.social.linkedin,
              siteConfig.social.twitter,
            ],
          })}
        </script>
      )}
    </Helmet>
  );
}
