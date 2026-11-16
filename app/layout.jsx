import './globals.css';
import { Barlow, Barlow_Semi_Condensed } from 'next/font/google';
import Analytics from './Analytics';

import { siteUrl } from './seo';

// Page-level title, description, hreflang and Open Graph live in app/seo.js.
export const metadata = {
  metadataBase: new URL(siteUrl),
  robots: { index: true, follow: true },
};

// Fonts are downloaded at build time and served from this site, so the first
// paint doesn't wait on a Google Fonts request.
const body = Barlow({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-body', display: 'swap', preload: false });
const display = Barlow_Semi_Condensed({ subsets: ['latin'], weight: ['500', '600', '700'], variable: '--font-display', display: 'swap' });

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'InsuranceAgency',
  '@id': `${siteUrl}/#organization`,
  name: 'Universal Dealer Services',
  logo: `${siteUrl}/logo.png`,
  image: `${siteUrl}/hero.jpg`,
  parentOrganization: {
    '@type': 'InsuranceAgency',
    name: 'Universal Insurance Brokers',
    url: 'https://universalinsurancebroker.com',
  },
  url: siteUrl,
  telephone: '+1-239-204-2208',
  email: 'quotes@universalinsurancebroker.com',
  areaServed: { '@type': 'State', name: 'Florida' },
  availableLanguage: ['English', 'Spanish'],
  description:
    'Universal Dealer Services places licensed, bilingual insurance agents inside auto dealerships to verify coverage on every delivery, protect dealers from uninsured drive-off liability, and increase back-end F&I product penetration. The service is free to the dealership — Universal pays rent for its in-store presence.',
  location: [
    { '@type': 'Place', name: 'Hialeah Office', address: { '@type': 'PostalAddress', streetAddress: '1943 W 68th St', addressLocality: 'Hialeah', addressRegion: 'FL', postalCode: '33014' } },
    { '@type': 'Place', name: 'Doral Office', address: { '@type': 'PostalAddress', addressLocality: 'Doral', addressRegion: 'FL' } },
    { '@type': 'Place', name: 'Boca Raton Office', address: { '@type': 'PostalAddress', addressLocality: 'Boca Raton', addressRegion: 'FL' } },
    { '@type': 'Place', name: 'Lehigh Acres Office', address: { '@type': 'PostalAddress', addressLocality: 'Lehigh Acres', addressRegion: 'FL' } },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
