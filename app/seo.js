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
    title: 'Agentes de seguros bilingües para concesionarios en Florida | Universal Dealer Services',
    description:
      'Agentes de seguros licenciados y bilingües dentro de su concesionario en Florida: verifican la cobertura en cada entrega y cotizan el seguro de cada cliente gratis. El ahorro regresa al presupuesto de F&I, y nosotros le pagamos renta.',
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
