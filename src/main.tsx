import { ViteReactSSG } from 'vite-react-ssg';
import posthog from 'posthog-js';
import { captureUTMParams } from './lib/analytics';
import { routes } from './routes';
import './index.css';

export const createRoot = ViteReactSSG(
  { routes },
  ({ isClient }) => {
    /* No window during the prerender pass. */
    if (!isClient) return;

    const key = import.meta.env.VITE_PUBLIC_POSTHOG_KEY;
    if (!key) return;

    posthog.init(key, {
      api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
      autocapture: false,
      /* Captures on history API changes and back/forward, which is what
         client-side routing needs. Capturing pageviews by hand instead raced
         init and silently lost five months of data. */
      capture_pageview: 'history_change',
      capture_pageleave: true,
      disable_session_recording: true,
      persistence: 'localStorage',
    });

    /* Registered before render so UTM params land on the first pageview. */
    captureUTMParams();

    if (import.meta.env.DEV) posthog.opt_out_capturing();
  }
);
