import { Footer, Header } from './DealerPage';
import { content, email } from './content';
import { GUIDES, REVIEWED, guideIndex, guidePath } from './guides/data';
import { siteUrl } from './seo';

const emailHrefFor = (t) => `mailto:${email}?subject=${encodeURIComponent(t.emailSubject)}`;

function Blocks({ blocks }) {
  return blocks.map((b, i) => {
    if (b.h) return <h2 key={i} className="mt-12 first:mt-0 font-display text-2xl font-bold text-ink sm:text-3xl">{b.h}</h2>;
    if (b.p) return <p key={i} className="mt-4 leading-relaxed text-ink/80">{b.p}</p>;
    if (b.note)
      return (
        <p key={i} className="mt-6 border-l-4 border-amber-rent bg-white px-5 py-4 text-sm leading-relaxed text-ink/80 shadow-sm">
          {b.note}
        </p>
      );
    if (b.ul || b.ol) {
      const List = b.ul ? 'ul' : 'ol';
      return (
        <List key={i} className={`mt-4 space-y-3 pl-6 text-ink/80 ${b.ul ? 'list-disc' : 'list-decimal'} marker:text-cyan-deep`}>
          {(b.ul || b.ol).map((item) => (
            <li key={item} className="pl-1 leading-relaxed">{item}</li>
          ))}
        </List>
      );
    }
    if (b.table)
      return (
        <div key={i} className="mt-6">
          {/* Phones: one card per row, each value labelled with its column. */}
          <div className="space-y-4 sm:hidden">
            {b.table.rows.map((row) => (
              <div key={row[0]} className="rounded-sm bg-white p-4 shadow-sm ring-1 ring-ink/10">
                <p className="font-display text-base font-semibold text-ink">{row[0]}</p>
                <dl className="mt-2 space-y-2 text-sm">
                  {row.slice(1).map((cell, j) => (
                    <div key={j}>
                      <dt className="font-semibold text-cyan-deep">{b.table.head[j + 1]}</dt>
                      <dd className="text-ink/80">{cell}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        <div className="hidden overflow-x-auto rounded-sm ring-1 ring-ink/10 sm:block">
          <table className="w-full min-w-[36rem] border-collapse bg-white text-left text-sm">
            <thead className="bg-navy-900 text-paper">
              <tr>
                {b.table.head.map((h, j) => (
                  <th key={j} scope="col" className="px-4 py-3 font-display font-semibold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {b.table.rows.map((row) => (
                <tr key={row[0]} className="border-t border-ink/10 align-top">
                  {row.map((cell, j) =>
                    j === 0 ? (
                      <th key={j} scope="row" className="px-4 py-3 font-semibold text-ink">{cell}</th>
                    ) : (
                      <td key={j} className="px-4 py-3 text-ink/80">{cell}</td>
                    ),
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
      );
    return null;
  });
}

function Breadcrumbs({ lang, current }) {
  const g = guideIndex[lang];
  const t = content[lang];
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-paper/60">
      <a href={t.home} className="hover:text-white">Universal Dealer Services</a>
      <span className="mx-2">/</span>
      {current ? (
        <>
          <a href={g.path} className="hover:text-white">{g.crumb}</a>
          <span className="mx-2">/</span>
          <span className="text-paper/80">{current}</span>
        </>
      ) : (
        <span className="text-paper/80">{g.crumb}</span>
      )}
    </nav>
  );
}

function CtaBand({ lang }) {
  const g = guideIndex[lang];
  const t = content[lang];
  return (
    <section className="bg-navy-950 py-14">
      <div className="mx-auto flex max-w-site flex-wrap items-center justify-between gap-6 px-5">
        <p className="max-w-2xl font-display text-2xl font-bold text-white">{g.cta}</p>
        <a href={`${t.home}#contact`} className="rounded-sm bg-cyan-brand px-6 py-3 font-semibold text-navy-950 hover:bg-white">
          {g.ctaButton}
        </a>
      </div>
    </section>
  );
}

function JsonLd({ data }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

const crumbsLd = (lang, current) => {
  const g = guideIndex[lang];
  const items = [
    { '@type': 'ListItem', position: 1, name: 'Universal Dealer Services', item: `${siteUrl}${content[lang].home}` },
    { '@type': 'ListItem', position: 2, name: g.crumb, item: `${siteUrl}${g.path}` },
  ];
  if (current) items.push({ '@type': 'ListItem', position: 3, name: current.title, item: current.url });
  return { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: items };
};

export function GuideView({ guide, lang }) {
  const t = content[lang];
  const c = guide[lang];
  const other = lang === 'es' ? 'en' : 'es';
  const g = guideIndex[lang];
  const url = `${siteUrl}${guidePath(guide, lang)}`;
  const emailHref = emailHrefFor(t);
  const article = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: c.title,
    description: c.description,
    inLanguage: lang === 'es' ? 'es-US' : 'en-US',
    url,
    mainEntityOfPage: url,
    dateModified: REVIEWED.iso,
    image: `${siteUrl}/hero.jpg`,
    author: { '@id': `${siteUrl}/#organization` },
    publisher: { '@id': `${siteUrl}/#organization` },
    about: { '@type': 'Place', name: 'Florida' },
    citation: c.sources.map((s) => s.href),
  };
  return (
    <main lang={lang}>
      <JsonLd data={[article, crumbsLd(lang, { title: c.title, url })]} />
      <Header t={t} base={t.home} switchHref={guidePath(guide, other)} />
      <header className="bg-navy-900 py-12 lg:py-16">
        <div className="mx-auto max-w-3xl px-5">
          <Breadcrumbs lang={lang} current={c.short} />
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-white sm:text-5xl">{c.title}</h1>
          <p className="mt-5 text-lg leading-relaxed text-paper/80">{c.lede}</p>
          <p className="mt-5 text-sm text-paper/55">
            {g.reviewed} {REVIEWED[lang]} · Universal Dealer Services
          </p>
        </div>
      </header>
      <article className="bg-paper py-12 text-ink lg:py-16">
        <div className="mx-auto max-w-3xl px-5">
          <Blocks blocks={c.blocks} />
          <p className="mt-12 border-t border-ink/15 pt-6 text-sm leading-relaxed text-ink/60">{c.disclaimer}</p>
          <h2 className="mt-8 font-display text-lg font-semibold">{g.sources}</h2>
          <ul className="mt-2 space-y-1 text-sm">
            {c.sources.map((s) => (
              <li key={s.href}>
                <a href={s.href} rel="noopener noreferrer" target="_blank" className="text-cyan-deep underline underline-offset-2 hover:text-ink">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <h2 className="mt-12 font-display text-lg font-semibold">{g.more}</h2>
          <ul className="mt-3 space-y-2">
            {GUIDES.filter((x) => x.key !== guide.key).map((x) => (
              <li key={x.key}>
                <a href={guidePath(x, lang)} className="font-medium text-ink underline decoration-ink/25 underline-offset-4 hover:text-cyan-deep">
                  {x[lang].title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </article>
      <CtaBand lang={lang} />
      <Footer t={t} emailHref={emailHref} switchHref={guidePath(guide, other)} />
    </main>
  );
}

export function GuidesIndexView({ lang }) {
  const t = content[lang];
  const g = guideIndex[lang];
  const other = lang === 'es' ? 'en' : 'es';
  const emailHref = emailHrefFor(t);
  const list = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: GUIDES.map((x, i) => ({ '@type': 'ListItem', position: i + 1, url: `${siteUrl}${guidePath(x, lang)}`, name: x[lang].title })),
  };
  return (
    <main lang={lang}>
      <JsonLd data={[list, crumbsLd(lang)]} />
      <Header t={t} base={t.home} switchHref={guideIndex[other].path} />
      <header className="bg-navy-900 py-12 lg:py-16">
        <div className="mx-auto max-w-site px-5">
          <Breadcrumbs lang={lang} />
          <h1 className="mt-5 font-display text-4xl font-bold text-white sm:text-5xl">{g.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-paper/80">{g.lede}</p>
        </div>
      </header>
      <section className="bg-paper py-12 text-ink lg:py-16">
        <div className="mx-auto grid max-w-site gap-6 px-5 md:grid-cols-2">
          {GUIDES.map((x) => (
            <a key={x.key} href={guidePath(x, lang)} className="group block rounded-sm bg-white p-6 shadow-sm ring-1 ring-ink/10 transition hover:ring-cyan-deep">
              <h2 className="font-display text-xl font-semibold group-hover:text-cyan-deep">{x[lang].title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{x[lang].description}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-cyan-deep">{g.read} →</span>
            </a>
          ))}
        </div>
      </section>
      <CtaBand lang={lang} />
      <Footer t={t} emailHref={emailHref} switchHref={guideIndex[other].path} />
    </main>
  );
}
