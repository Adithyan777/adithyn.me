import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import './index.css';
import { PostHogProvider } from 'posthog-js/react'

const options = {
  api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
  autocapture: false,
  capture_pageview: false,
  capture_pageleave: true,
  disable_session_recording: true,
  persistence: 'localStorage' as const,
  loaded: (posthog: { opt_out_capturing: () => void }) => {
    if (import.meta.env.DEV) posthog.opt_out_capturing();
  },
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <PostHogProvider
        apiKey={import.meta.env.VITE_PUBLIC_POSTHOG_KEY}
        options={options}
      >
        <App />
      </PostHogProvider>
    </HelmetProvider>
  </StrictMode>
);
