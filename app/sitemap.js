import { languageAlternates, siteUrl } from './seo';

export const dynamic = 'force-static';

export default function sitemap() {
  const lastModified = new Date('2026-11-11');
  return [
    { url: `${siteUrl}/`, lastModified, changeFrequency: 'monthly', priority: 1, alternates: { languages: languageAlternates } },
    { url: `${siteUrl}/es/`, lastModified, changeFrequency: 'monthly', priority: 0.9, alternates: { languages: languageAlternates } },
  ];
}
