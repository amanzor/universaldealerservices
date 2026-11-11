import { GUIDES, REVIEWED, guideIndex, guidePath } from './guides/data';
import { languageAlternates, siteUrl } from './seo';

export const dynamic = 'force-static';

const pair = (en, es) => ({ 'en-US': `${siteUrl}${en}`, 'es-US': `${siteUrl}${es}`, 'x-default': `${siteUrl}${en}` });

export default function sitemap() {
  const lastModified = new Date(REVIEWED.iso);
  const entries = [
    { url: `${siteUrl}/`, lastModified, changeFrequency: 'monthly', priority: 1, alternates: { languages: languageAlternates } },
    { url: `${siteUrl}/es/`, lastModified, changeFrequency: 'monthly', priority: 0.9, alternates: { languages: languageAlternates } },
  ];
  const indexAlt = pair(guideIndex.en.path, guideIndex.es.path);
  for (const lang of ['en', 'es']) {
    entries.push({ url: `${siteUrl}${guideIndex[lang].path}`, lastModified, changeFrequency: 'monthly', priority: 0.7, alternates: { languages: indexAlt } });
  }
  for (const g of GUIDES) {
    const alt = pair(guidePath(g, 'en'), guidePath(g, 'es'));
    for (const lang of ['en', 'es']) {
      entries.push({ url: `${siteUrl}${guidePath(g, lang)}`, lastModified, changeFrequency: 'monthly', priority: 0.8, alternates: { languages: alt } });
    }
  }
  return entries;
}
