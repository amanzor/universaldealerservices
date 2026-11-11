import ContactForm from './ContactForm';
import { content, email, onePagerHref, phone, phoneHref } from './content';
import { pageMetadata, siteUrl } from './seo';

const ledgerGrid = 'ledger-row grid gap-2 py-5 sm:grid-cols-[10rem_1fr_auto] sm:items-baseline sm:gap-6';

function Header({ t }) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-navy-900/95 backdrop-blur">
      <div className="mx-auto flex max-w-site items-center justify-between gap-3 px-5 py-3">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-display text-xl font-bold tracking-tight text-white">
            Universal Dealer Services
          </span>
          <span className="hidden text-xs text-paper/60 sm:inline">{t.header.byline}</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm text-paper/80 lg:flex">
          {t.header.nav.map(([href, label]) => (
            <a key={href} href={href} className="hover:text-white">
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={t.switchLang.href}
            hrefLang={t.switchLang.hrefLang}
            lang={t.switchLang.hrefLang}
            aria-label={t.switchLang.aria}
            className="text-sm font-medium text-paper/80 underline decoration-paper/30 underline-offset-4 hover:text-white"
          >
            {t.switchLang.label}
          </a>
          <a
            href="#contact"
            className="hidden rounded-sm bg-cyan-brand px-4 py-2 text-sm font-semibold text-navy-950 hover:bg-white sm:inline-block"
          >
            {t.header.cta}
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero({ t }) {
  const h = t.hero;
  return (
    <section id="top" className="relative overflow-hidden bg-navy-900">
      <div className="mx-auto grid max-w-site items-center gap-10 px-5 pb-16 pt-14 lg:grid-cols-[1.1fr_1fr] lg:pb-24 lg:pt-20">
        <div>
          <p className="hero-reveal mb-5 inline-block border-l-2 border-cyan-brand pl-3 text-sm font-medium text-paper/75">
            {h.eyebrow}
          </p>
          <h1
            className={`hero-reveal hero-reveal-2 font-display font-bold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl ${
              t.lang === 'es' ? 'text-[2.6rem]' : 'text-5xl'
            }`}
          >
            {h.title}
          </h1>
          <p className="hero-reveal hero-reveal-3 mt-6 max-w-xl text-lg leading-relaxed text-paper/80">
            {h.body}
          </p>
          <div className="hero-reveal hero-reveal-3 mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-sm bg-cyan-brand px-6 py-3 font-semibold text-navy-950 hover:bg-white"
            >
              {h.primary}
            </a>
            <a
              href="#numbers"
              className="rounded-sm border border-paper/30 px-6 py-3 font-semibold text-paper hover:border-cyan-brand hover:text-cyan-brand"
            >
              {h.secondary}
            </a>
          </div>
          <p className="hero-reveal hero-reveal-3 mt-6 text-sm text-paper/60">{h.note}</p>
        </div>
        <div className="hero-reveal hero-reveal-3 relative">
          <img
            src="/hero.jpg"
            srcSet="/hero-sm.jpg 672w, /hero.jpg 1344w"
            sizes="(min-width: 1024px) 34rem, 100vw"
            width="1344"
            height="752"
            fetchPriority="high"
            alt={h.imageAlt}
            className="aspect-[3/2] w-full rounded-sm object-cover shadow-2xl ring-1 ring-white/10"
          />
          <div className="absolute -bottom-4 left-4 rounded-sm bg-white px-4 py-3 shadow-xl">
            <p className="font-display text-sm font-semibold text-ink">{h.badgeTitle}</p>
            <p className="text-xs text-ink/60">{h.badgeBody}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatRows({ stats }) {
  return (
    <div className="mt-10">
      {stats.map((s) => (
        <div key={s.value + s.label} className={ledgerGrid}>
          <span className="font-display text-4xl font-bold text-cyan-brand">{s.value}</span>
          <span className="text-paper/85">{s.label}</span>
          <span className="text-sm text-paper/50">{s.note}</span>
        </div>
      ))}
    </div>
  );
}

function Numbers({ t }) {
  return (
    <section id="numbers" className="bg-navy-950 py-16 lg:py-20">
      <div className="mx-auto max-w-site px-5">
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">{t.numbers.title}</h2>
        <p className="mt-3 max-w-2xl text-paper/70">{t.numbers.body}</p>
        <StatRows stats={t.numbers.stats} />
      </div>
    </section>
  );
}

function Unlock({ t }) {
  const u = t.unlock;
  return (
    <section id="unlock" className="bg-paper py-16 text-ink lg:py-24">
      <div className="mx-auto max-w-site px-5">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold text-cyan-deep">{u.eyebrow}</p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">{u.title}</h2>
          <p className="mt-4 leading-relaxed text-ink/75">{u.body}</p>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {u.cards.map((c) => (
            <div key={c.title} className="border-t-2 border-cyan-deep pt-4">
              <h3 className="font-display text-xl font-semibold">{c.title}</h3>
              <p className="mt-2 text-ink/70">{c.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 rounded-sm bg-white p-6 shadow-sm ring-1 ring-ink/10">
          <p className="leading-relaxed text-ink/80">
            <span className="font-display font-semibold text-ink">{u.mathLead}</span> {u.mathBody}
          </p>
        </div>
      </div>
    </section>
  );
}

function Bilingual({ t }) {
  const b = t.bilingual;
  return (
    <section id="bilingual" className="bg-navy-900 py-16 lg:py-24">
      <div className="mx-auto max-w-site px-5">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">{b.title}</h2>
          <p className="mt-4 leading-relaxed text-paper/80">{b.body}</p>
        </div>
        <StatRows stats={b.stats} />
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {b.cards.map((c) => (
            <div key={c.title} className="rounded-sm bg-navy-800 p-6 ring-1 ring-white/10">
              <p className="font-display text-lg font-semibold text-white">{c.title}</p>
              <p className="mt-2 text-paper/75">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Exposure({ t }) {
  const x = t.exposure;
  return (
    <section id="exposure" className="bg-paper py-16 text-ink lg:py-20">
      <div className="mx-auto max-w-site px-5">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">{x.title}</h2>
          <p className="mt-4 leading-relaxed text-ink/75">{x.body}</p>
        </div>
        <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {x.items.map((e) => (
            <div key={e.title} className="border-t-2 border-ink/15 pt-4">
              <h3 className="font-display text-xl font-semibold">{e.title}</h3>
              <p className="mt-2 text-ink/70">{e.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-sm text-ink/50">{x.disclaimer}</p>
      </div>
    </section>
  );
}

function Shield({ t }) {
  const s = t.shield;
  return (
    <section id="shield" className="bg-navy-900 py-16 lg:py-24">
      <div className="mx-auto grid max-w-site gap-12 px-5 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mb-3 text-sm font-semibold text-cyan-brand">{s.eyebrow}</p>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">{s.title}</h2>
          <p className="mt-4 leading-relaxed text-paper/80">{s.body}</p>
          <ul className="mt-6 space-y-4 text-paper/85">
            {s.bullets.map((b) => (
              <li key={b} className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-cyan-brand" />
                {b}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-sm bg-navy-800 p-8 ring-1 ring-white/10">
          <p className="font-display text-lg font-semibold text-white">{s.ledgerTitle}</p>
          <div className="mt-5 space-y-3 text-paper/85">
            {s.ledger.map(([label, value]) => (
              <div key={label} className="flex items-center justify-between gap-4 border-b border-white/10 pb-3">
                <span>{label}</span>
                <span className="font-display font-semibold text-white">{value}</span>
              </div>
            ))}
            <div className="flex items-center justify-between gap-4 pb-1">
              <span>{s.rentLine}</span>
              <span className="shrink-0 font-display text-xl font-bold text-amber-rent">{s.rentValue}</span>
            </div>
          </div>
          <p className="mt-5 text-sm text-paper/60">{s.rentNote}</p>
          <div className="mt-6 border-t border-white/10 pt-5 text-sm leading-relaxed text-paper/70">
            <p className="font-display text-base font-semibold text-white">{s.arrangementTitle}</p>
            <ul className="mt-2 space-y-2">
              {s.arrangement.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pilot({ t }) {
  const p = t.pilot;
  return (
    <section id="pilot" className="bg-navy-950 py-16 lg:py-24">
      <div className="mx-auto max-w-site px-5">
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">{p.title}</h2>
        <p className="mt-3 max-w-2xl text-paper/70">{p.body}</p>
        <ol className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {p.steps.map((s, i) => (
            <li key={s.title}>
              <span className="font-display text-5xl font-bold text-navy-700">{i + 1}</span>
              <h3 className="mt-2 font-display text-xl font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-paper/70">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Faq({ t }) {
  return (
    <section id="faq" className="bg-navy-900 py-16 lg:py-20">
      <div className="mx-auto max-w-site px-5">
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">{t.faq.title}</h2>
        <div className="mt-8 divide-y divide-white/10 border-y border-white/10">
          {t.faq.items.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-display text-lg font-semibold text-white marker:hidden">
                <h3>{item.q}</h3>
                <span aria-hidden="true" className="mt-1 text-cyan-brand transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 max-w-3xl leading-relaxed text-paper/75">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

// Page-level structured data: the service itself and the FAQ, in this page's language.
// The InsuranceAgency (#organization) is declared once in app/layout.jsx.
function PageJsonLd({ t }) {
  const url = `${siteUrl}${t.home}`;
  const inLanguage = t.lang === 'es' ? 'es-US' : 'en-US';
  const meta = pageMetadata[t.lang];
  const data = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: 'Universal Dealer Services',
      inLanguage: ['en-US', 'es-US'],
      publisher: { '@id': `${siteUrl}/#organization` },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: meta.title,
      description: meta.description,
      inLanguage,
      isPartOf: { '@id': `${siteUrl}/#website` },
      about: { '@id': `${siteUrl}/#service` },
      primaryImageOfPage: `${siteUrl}/hero.jpg`,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${siteUrl}/#service`,
      name: t.lang === 'es' ? 'Verificación de seguros en el concesionario' : 'In-dealership insurance verification',
      serviceType: t.lang === 'es' ? 'Verificación de seguros para concesionarios' : 'Dealership insurance verification',
      description: meta.description,
      provider: { '@id': `${siteUrl}/#organization` },
      areaServed: { '@type': 'State', name: 'Florida' },
      availableLanguage: ['English', 'Spanish'],
      audience: { '@type': 'BusinessAudience', audienceType: t.lang === 'es' ? 'Concesionarios de autos' : 'Auto dealerships' },
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      inLanguage,
      mainEntity: t.faq.items.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
  ];
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

function About({ t }) {
  return (
    <section className="border-y border-ink/10 bg-paper py-12 text-ink">
      <div className="mx-auto flex max-w-site flex-wrap items-center justify-between gap-6 px-5">
        <div className="max-w-2xl">
          <h2 className="font-display text-2xl font-bold">{t.about.title}</h2>
          <p className="mt-2 text-ink/70">{t.about.body}</p>
        </div>
        <a
          href={t.uibUrl}
          className="rounded-sm border border-ink/25 px-5 py-3 font-semibold text-ink hover:border-cyan-deep hover:text-cyan-deep"
        >
          {t.about.link}
        </a>
      </div>
    </section>
  );
}

function Contact({ t, emailHref }) {
  return (
    <section id="contact" className="bg-navy-950 py-16 lg:py-24">
      <div className="mx-auto max-w-site px-5 text-center">
        <h2 className="mx-auto max-w-3xl font-display text-4xl font-bold text-white sm:text-5xl">
          {t.contact.title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-paper/75">{t.contact.body}</p>
        <ContactForm lang={t.lang} strings={t.form} />
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={phoneHref}
            className="rounded-sm bg-cyan-brand px-7 py-3 font-semibold text-navy-950 hover:bg-white"
          >
            {t.contact.call}
          </a>
          <a
            href={emailHref}
            className="rounded-sm border border-paper/30 px-7 py-3 font-semibold text-paper hover:border-cyan-brand hover:text-cyan-brand"
          >
            {email}
          </a>
        </div>
        <p className="mt-6 text-sm">
          <a
            href={onePagerHref}
            download
            className="text-paper/70 underline decoration-paper/30 underline-offset-4 hover:text-white"
          >
            {t.contact.pdf}
          </a>
        </p>
      </div>
    </section>
  );
}

function Footer({ t, emailHref }) {
  const f = t.footer;
  return (
    <footer className="border-t border-white/10 bg-navy-950 py-10">
      <div className="mx-auto max-w-site px-5 text-sm text-paper/55">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="font-display text-base font-semibold text-paper/80">Universal Dealer Services</p>
          <nav className="flex flex-wrap gap-6">
            <a href={t.uibUrl} className="hover:text-white">
              Universal Insurance Brokers
            </a>
            <a href={phoneHref} className="hover:text-white">
              {phone}
            </a>
            <a href={emailHref} className="hover:text-white">
              {f.emailLabel}
            </a>
            <a href={t.switchLang.href} hrefLang={t.switchLang.hrefLang} lang={t.switchLang.hrefLang} className="hover:text-white">
              {t.switchLang.label}
            </a>
          </nav>
        </div>
        <p className="mt-6 max-w-3xl leading-relaxed">{f.legal}</p>
        <div className="mt-6">
          <p className="font-semibold text-paper/75">{f.sourcesTitle}</p>
          <ul className="mt-2 space-y-1">
            {f.sources.map((src) => (
              <li key={src.href}>
                <a
                  href={src.href}
                  className="underline decoration-paper/30 underline-offset-2 hover:text-white"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {src.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-4">{f.copyright}</p>
      </div>
    </footer>
  );
}

export default function DealerPage({ lang }) {
  const t = content[lang];
  const emailHref = `mailto:${email}?subject=${encodeURIComponent(t.emailSubject)}`;
  return (
    <main lang={lang}>
      <PageJsonLd t={t} />
      <Header t={t} />
      <Hero t={t} />
      <Numbers t={t} />
      <Unlock t={t} />
      <Bilingual t={t} />
      <Exposure t={t} />
      <Shield t={t} />
      <Pilot t={t} />
      <Faq t={t} />
      <About t={t} />
      <Contact t={t} emailHref={emailHref} />
      <Footer t={t} emailHref={emailHref} />
    </main>
  );
}
