export const siteUrl = 'https://universaldealerservices.com';

// hreflang map shared by both pages and the sitemap (trailingSlash is on).
export const languageAlternates = {
  'en-US': `${siteUrl}/`,
  'es-US': `${siteUrl}/es/`,
  'x-default': `${siteUrl}/`,
};

const ogImage = {
  url: '/hero.jpg',
  width: 1344,
  height: 752,
};

export const pageMetadata = {
  en: {
    title: 'Florida Dealer Insurance Verification | Universal Dealer Services',
    description:
      'Licensed, bilingual agents in your Florida dealership verify insurance on every delivery and shop each customer’s coverage free. No cost to you: we pay you rent.',
    keywords: [
      'auto dealer insurance verification',
      'dealership insurance compliance Florida',
      'F&I product penetration',
      'in-dealership insurance agent',
      'spot delivery insurance verification',
      'dealer liability uninsured driver Florida',
      'Universal Insurance Brokers',
    ],
    alternates: { canonical: `${siteUrl}/`, languages: languageAlternates },
    openGraph: {
      type: 'website',
      url: `${siteUrl}/`,
      siteName: 'Universal Dealer Services',
      locale: 'en_US',
      alternateLocale: ['es_US'],
      title: 'Unlock your back-end budget — in English and Spanish.',
      description:
        'On-site, bilingual insurance shopping at delivery frees monthly budget your F&I office recaptures. Zero cost to the dealership — we pay rent. A Universal Insurance Brokers program.',
      images: [{ ...ogImage, alt: 'Insurance agent serving clients inside a dealership showroom' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Universal Dealer Services',
      description: 'On-site insurance verification for every delivery. Zero cost — we pay your dealership rent.',
    },
  },
  es: {
    title: 'Verificación de seguro para concesionarios | Universal Dealer Services',
    description:
      'Agentes licenciados y bilingües verifican el seguro en cada entrega y cotizan gratis el seguro de cada cliente. Sin costo para su concesionario: le pagamos renta.',
    keywords: [
      'verificación de seguro para concesionarios',
      'agente de seguros en el concesionario',
      'seguro de auto concesionario Florida',
      'agentes de seguros bilingües Florida',
      'responsabilidad del concesionario conductor sin seguro',
      'productos de F&I concesionario',
      'Universal Insurance Brokers',
    ],
    alternates: { canonical: `${siteUrl}/es/`, languages: languageAlternates },
    openGraph: {
      type: 'website',
      url: `${siteUrl}/es/`,
      siteName: 'Universal Dealer Services',
      locale: 'es_US',
      alternateLocale: ['en_US'],
      title: 'Más presupuesto para F&I — en español y en inglés.',
      description:
        'Agentes bilingües cotizan el seguro de cada cliente al momento de la entrega y liberan presupuesto mensual para su oficina de F&I. Sin costo para el concesionario — nosotros pagamos renta. Un programa de Universal Insurance Brokers.',
      images: [{ ...ogImage, alt: 'Asesoría de seguros con clientes en la sala de exhibición de un concesionario' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Universal Dealer Services — en español',
      description: 'Verificación de seguro en cada entrega, sin costo para su concesionario. Nosotros le pagamos renta.',
    },
  },
};
