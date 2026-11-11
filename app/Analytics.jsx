'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import { GA_ID, isProdHost, siteLanguage, track } from './analytics';

/*
 * GA4 for the dealer site (production domain only). Records:
 * - page views (Spanish pages are the ones whose path starts with /es/)
 * - phone_click, email_click, language_switch, one_pager_download, guide_click
 * Walkthrough form submissions are tracked as generate_lead in ContactForm.jsx.
 * Team members open any page with ?internal=1 once per browser; those visits get
 * traffic_type=internal so GA4's Internal Traffic filter can exclude them.
 */
export default function Analytics() {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => setEnabled(isProdHost()), []);

  useEffect(() => {
    if (!enabled) return;
    const onClick = (e) => {
      const a = e.target?.closest?.('a');
      if (!a) return;
      const href = a.getAttribute('href') || '';
      const base = {
        link_text: (a.textContent || a.getAttribute('aria-label') || '').trim().slice(0, 80),
        page_path: window.location.pathname,
        site_language: siteLanguage(window.location.pathname),
      };
      if (href.startsWith('tel:')) track('phone_click', { ...base, phone_number: href.slice(4) });
      else if (href.startsWith('mailto:')) track('email_click', base);
      else if (href.endsWith('.pdf')) track('one_pager_download', { ...base, file_name: href.split('/').pop() });
      else if (a.hasAttribute('hreflang')) track('language_switch', { ...base, to_language: a.getAttribute('hreflang') });
      else if (/^\/(es\/guias|guides)\/[^/]+\/$/.test(href)) track('guide_click', { ...base, guide_path: href });
    };
    document.addEventListener('click', onClick, { capture: true });
    return () => document.removeEventListener('click', onClick, { capture: true });
  }, [enabled]);

  if (!enabled) return null;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
// The internal flag must be set BEFORE gtag('js'): this property's Google tag sends
// its first page_view as soon as it starts, using only what was 'set' before then.
try {
  var q = new URLSearchParams(location.search).get('internal');
  if (q === '1') localStorage.setItem('uds_internal', '1');
  if (q === '0') localStorage.removeItem('uds_internal');
  if (localStorage.getItem('uds_internal') === '1') gtag('set', { traffic_type: 'internal' });
} catch (e) {}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
      </Script>
    </>
  );
}
