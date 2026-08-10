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
        {/*
          A masthead, not a stack: identity left, status right, one rule under
          both. The rule is what gives the name a slot and turns three loose
          blocks into a composition.
        */}
        <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-3 border-b border-border pb-4">
          <div>
            <h1 className="text-h2 font-semibold tracking-tight">Adithyan K</h1>
            <p className="meta mt-1">AI Research Engineer, SuperAGI</p>
          </div>

          <p className="meta flex items-center gap-2">
            {/* Live status — the one ambient animation on the page. */}
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            Open to research and applied AI roles
          </p>
        </div>

        <p className="mt-10 max-w-[18ch] text-display font-semibold">
          I build AI systems, and the tools that prove they work.
        </p>

        <div className="mt-6 max-w-prose space-y-4">
          <p className="text-lead text-foreground/90">
            I trained a 7B model that reads a codebase before an agent tries to
            fix it, built the retrieval layer inside our coding agent, and wrote
            the evaluation platform that tells us whether any of it actually
            helped.
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
