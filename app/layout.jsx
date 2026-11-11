import './globals.css';

import { siteUrl } from './seo';

// Page-level title, description, hreflang and Open Graph live in app/seo.js.
export const metadata = {
  metadataBase: new URL(siteUrl),
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'InsuranceAgency',
  name: 'Universal Dealer Services',
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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600&family=Barlow+Semi+Condensed:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
