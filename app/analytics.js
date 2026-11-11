// GA4 for universaldealerservices.com. This is its own property, separate from
// universalinsurancebroker.com, so dealer traffic never mixes with consumer traffic.
export const GA_ID = 'G-L8Y0GCT4CR';

// Only the production domain reports; Vercel previews and local builds stay out.
export const isProdHost = () =>
  typeof window !== 'undefined' && /(^|\.)universaldealerservices\.com$/.test(window.location.hostname);

export const siteLanguage = (path) => (path === '/es' || path.startsWith('/es/') ? 'es' : 'en');

export function track(event, params = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', event, params);
}
