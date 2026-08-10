import { Container } from '@/components/section';
import { LinkChips, type Chip } from '@/components/link-chips';
import { siteConfig } from '@/config/site';
import { trackEvent, AnalyticsEvents } from '@/lib/analytics';

const EMAIL = 'adithyn.krshna@gmail.com';

const chips: Chip[] = [
  {
    mark: 'resume',
    label: 'Résumé',
    href: '/resume.pdf',
    onClick: () => trackEvent(AnalyticsEvents.RESUME_DOWNLOAD, { link: 'Résumé' }),
  },
  {
    mark: 'github',
    label: 'GitHub',
    href: siteConfig.social.github,
    onClick: () => trackEvent(AnalyticsEvents.SOCIAL_CLICK, { link: 'GitHub' }),
  },
  {
    mark: 'linkedin',
    label: 'LinkedIn',
    href: siteConfig.social.linkedin,
    onClick: () => trackEvent(AnalyticsEvents.SOCIAL_CLICK, { link: 'LinkedIn' }),
  },
  {
    mark: 'email',
    label: 'Email',
    href: `mailto:${EMAIL}`,
    onClick: () => trackEvent(AnalyticsEvents.SOCIAL_CLICK, { link: 'Email' }),
  },
];

/*
  Hero and About are one block. No entrance animation: framer-motion serialises
  its initial state into the prerendered HTML, so the hero shipped at opacity:0
  and stayed invisible until hydration.
*/
export function Hero() {
  return (
    <Container className="pt-20 md:pt-28">
      <div>
        <p className="meta mb-6 flex items-center gap-2.5">
          {/* Live status — the one ambient animation on the page. */}
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
          </span>
          Open to research and applied AI roles
        </p>

        <h1 className="max-w-[18ch] text-display font-semibold">
          I build AI systems, and the tools that prove they work.
        </h1>

        <div className="mt-6 max-w-prose space-y-4">
          <p className="text-lead text-foreground/90">
            I'm Adithyan — an AI research engineer at SuperAGI. I trained a 7B
            model that reads a codebase before an agent tries to fix it, built
            the retrieval layer inside our coding agent, and wrote the
            evaluation platform that tells us whether any of it actually helped.
          </p>
          <p className="text-muted-foreground">
            Two papers came out of that this year. Before the research work I
            shipped the sandbox and deploy infrastructure behind SuperAGI's app
            builder, and the backend for AI agents that join live meetings with
            voice and avatar. On the side I co-founded{' '}
            <a
              href="https://lifie.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-foreground"
            >
              Lifie
            </a>
            , where we build voice and chat AI for businesses.
          </p>
        </div>

        <div className="mt-8">
          <LinkChips chips={chips} />
        </div>
      </div>
    </Container>
  );
}
