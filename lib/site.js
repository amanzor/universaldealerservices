export const siteUrl = 'https://universaldealerservices.com';
export const phone = '(239) 204-2208';
export const phoneHref = 'tel:+12392042208';
export const contactEmail = 'universalinsurancebroker@gmail.com';
export const heroImage = { src: '/hero.jpg', width: 1344, height: 752 };

export function buildMetadata(c) {
  const url = `${siteUrl}${c.path}`;
  return {
    metadataBase: new URL(siteUrl),
    title: c.meta.title,
    description: c.meta.description,
    keywords: c.meta.keywords,
    alternates: {
      canonical: url,
      languages: { en: `${siteUrl}/`, es: `${siteUrl}/es/`, 'x-default': `${siteUrl}/` },
    },
    openGraph: {
      type: 'website',
      url,
      siteName: 'Universal Dealer Services',
      locale: c.meta.ogLocale,
      title: c.meta.ogTitle,
      description: c.meta.ogDescription,
      images: [{ url: heroImage.src, width: heroImage.width, height: heroImage.height, alt: c.meta.heroAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Universal Dealer Services',
      description: c.meta.twitterDescription,
      images: [heroImage.src],
    },
    robots: { index: true, follow: true },
  };
}

export function buildJsonLd(c) {
  return {
    '@context': 'https://schema.org',
    '@type': 'InsuranceAgency',
    name: 'Universal Dealer Services',
    parentOrganization: {
      '@type': 'InsuranceAgency',
      name: 'Universal Insurance Brokers',
      url: 'https://universalinsurancebroker.com',
    },
    url: `${siteUrl}${c.path}`,
    inLanguage: c.lang,
    image: `${siteUrl}${heroImage.src}`,
    telephone: '+1-239-204-2208',
    email: contactEmail,
    areaServed: { '@type': 'State', name: 'Florida' },
    availableLanguage: ['English', 'Spanish'],
    description: c.meta.description,
    location: ['Doral', 'Boca Raton', 'Lehigh Acres'].map((city) => ({
      '@type': 'Place',
      name: `${city} Office`,
      address: { '@type': 'PostalAddress', addressLocality: city, addressRegion: 'FL' },
    })),
  };
}
