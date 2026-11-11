import './globals.css';

const siteUrl = 'https://universaldealerservices.com';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Universal Dealer Services | On-Site Insurance Verification for Auto Dealers',
  description:
    'Licensed, bilingual insurance agents inside your Florida dealership shop every customer across any carrier at delivery — free. Savings go back into the monthly budget your F&I office sells against, Spanish-first buyers close faster, and we pay your store rent.',
  keywords: [
    'auto dealer insurance verification',
    'dealership insurance compliance Florida',
    'F&I product penetration',
    'in-dealership insurance agent',
    'spot delivery insurance verification',
    'dealer liability uninsured driver Florida',
    'Universal Insurance Brokers',
  ],
  alternates: { canonical: siteUrl },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'Universal Dealer Services',
    title: 'Unlock your back-end budget — in English and Spanish.',
    description:
      'On-site, bilingual insurance shopping at delivery frees monthly budget your F&I office recaptures. Zero cost to the dealership — we pay rent. A Universal Insurance Brokers program.',
    images: [
      {
        url: '/hero.jpg',
        width: 1344,
        height: 752,
        alt: 'Insurance agent serving clients inside a dealership showroom',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Universal Dealer Services',
    description:
      'On-site insurance verification for every delivery. Zero cost — we pay your dealership rent.',
  },
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
