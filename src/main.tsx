import { ViteReactSSG } from 'vite-react-ssg';
import posthog from 'posthog-js';
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
      capture_pageview: false,
      capture_pageleave: true,
      disable_session_recording: true,
      persistence: 'localStorage',
    });

    if (import.meta.env.DEV) posthog.opt_out_capturing();
  }
);
