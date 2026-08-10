import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { Section } from '@/components/section';
import { siteConfig } from '@/config/site';
import { trackEvent, AnalyticsEvents } from '@/lib/analytics';

const EMAIL = 'adithyn.krshna@gmail.com';

const elsewhere = [
  { label: 'GitHub', href: siteConfig.social.github },
  { label: 'LinkedIn', href: siteConfig.social.linkedin },
  { label: 'X', href: siteConfig.social.twitter },
  { label: 'Résumé', href: '/resume.pdf' },
];

/* One primary action, a copyable address, everything else on one quiet line. */
export function ContactPage() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      trackEvent(AnalyticsEvents.SOCIAL_CLICK, { link: 'Email copied' });
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      // clipboard unavailable — the mailto link still works
    }
  };

  return (
    <Section id="contact" label="Contact">
      <div className="rounded-lg border border-border p-6 md:p-8">
        <p className="max-w-prose text-lead text-foreground/90">
          Open to research and applied AI roles.
        </p>
        <p className="mt-2 max-w-prose text-muted-foreground">
          Happy to talk about anything on this page — the papers especially.
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${EMAIL}`}
            onClick={() =>
              trackEvent(AnalyticsEvents.SOCIAL_CLICK, { link: 'Email' })
            }
            className="rounded-md bg-primary px-4 py-2 text-small font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Get in touch
          </a>

          <button
            type="button"
            onClick={copy}
            aria-label={copied ? 'Email address copied' : `Copy ${EMAIL}`}
            className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 font-mono text-micro text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
          >
            {EMAIL}
            {copied ? (
              <Check className="h-3 w-3 text-primary" />
            ) : (
              <Copy className="h-3 w-3" />
            )}
          </button>
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-border pt-5">
          {elsewhere.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('/') ? undefined : '_blank'}
              rel="noopener noreferrer"
              onClick={() =>
                trackEvent(
                  link.label === 'Résumé'
                    ? AnalyticsEvents.RESUME_DOWNLOAD
                    : AnalyticsEvents.SOCIAL_CLICK,
                  { link: link.label }
                )
              }
              className="meta inline-flex items-center gap-1 transition-colors hover:text-primary"
            >
              {link.label}
              <span aria-hidden>↗</span>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
