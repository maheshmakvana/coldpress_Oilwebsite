import posthog from "posthog-js";

let isLoaded = false;

export function initPosthog() {
  if (import.meta.env.VITE_ENABLE_POSTHOG !== "true" || isLoaded) {
    return;
  }
  const key = import.meta.env.VITE_POSTHOG_KEY;
  const host = import.meta.env.VITE_POSTHOG_HOST ?? "https://app.posthog.com";
  if (!key) return;

  posthog.init(key, {
    api_host: host,
    autocapture: false,
    capture_pageview: true,
    persistence: "localStorage",
  });
  isLoaded = true;
}

export function trackEvent(event: string, properties?: Record<string, unknown>) {
  if (!isLoaded) return;
  posthog.capture(event, properties);
}
