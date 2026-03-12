import posthog from 'posthog-js';

export const AnalyticsEvents = {
  PROJECT_CLICK: 'project_click',
  SOCIAL_CLICK: 'social_click',
  RESUME_DOWNLOAD: 'resume_download',
  SECTION_VIEW: 'section_view',
  THEME_TOGGLE: 'theme_toggle',
  NAV_CLICK: 'nav_click',
  OUTBOUND_CLICK: 'outbound_click',
  CASE_STUDY_VIEW: 'case_study_view',
  CASE_STUDY_SECTION: 'case_study_section',
  EXPERIENCE_COMPANY_CLICK: 'experience_company_click',
} as const;

export function trackEvent(event: string, properties?: Record<string, unknown>) {
  try {
    posthog.capture(event, properties);
  } catch {
    // silently fail — analytics should never break the app
  }
}

export function trackOutboundClick(url: string, label?: string) {
  try {
    const domain = new URL(url).hostname;
    trackEvent(AnalyticsEvents.OUTBOUND_CLICK, { url, domain, label });
  } catch {
    // invalid URL or capture failure
  }
}

export function captureUTMParams() {
  try {
    const params = new URLSearchParams(window.location.search);
    const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'] as const;

    for (const key of utmKeys) {
      const value = params.get(key);
      if (value) {
        posthog.register({ [key]: value });
      } else {
        posthog.unregister(key);
      }
    }
  } catch {
    // silently fail
  }
}
