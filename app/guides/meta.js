import { siteUrl } from '../seo';
import { GUIDES, guideBySlug, guideIndex, guidePath } from './data';

const og = (lang, url, title, description, type = 'article') => ({
  type,
  url,
  siteName: 'Universal Dealer Services',
  locale: lang === 'es' ? 'es_US' : 'en_US',
  title,
  description,
  images: [{ url: '/hero.jpg', width: 1344, height: 752 }],
});

export function guideMetadata(slug, lang) {
  const guide = guideBySlug(slug, lang);
  const c = guide[lang];
  const url = `${siteUrl}${guidePath(guide, lang)}`;
  return {
    title: c.title,
    description: c.description,
    alternates: {
      canonical: url,
      languages: {
        'en-US': `${siteUrl}${guidePath(guide, 'en')}`,
        'es-US': `${siteUrl}${guidePath(guide, 'es')}`,
        'x-default': `${siteUrl}${guidePath(guide, 'en')}`,
      },
    },
    openGraph: og(lang, url, c.title, c.description),
    twitter: { card: 'summary_large_image', title: c.title, description: c.description },
  };
}

export function indexMetadata(lang) {
  const g = guideIndex[lang];
  const url = `${siteUrl}${g.path}`;
  return {
    title: g.metaTitle,
    description: g.description,
    alternates: {
      canonical: url,
      languages: {
        'en-US': `${siteUrl}${guideIndex.en.path}`,
        'es-US': `${siteUrl}${guideIndex.es.path}`,
        'x-default': `${siteUrl}${guideIndex.en.path}`,
      },
    },
    openGraph: og(lang, url, g.metaTitle, g.description, 'website'),
  };
}

export const slugParams = (lang) => GUIDES.map((g) => ({ slug: g[lang].slug }));
