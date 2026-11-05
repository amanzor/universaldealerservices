import ContactForm from './ContactForm';
import { phone, phoneHref, contactEmail, heroImage } from '../lib/site';

function Ledger({ stats }) {
  return (
    <div className="mt-10">
      {stats.map((s) => (
        <div
          key={s.value + s.label}
          className="ledger-row grid gap-2 py-5 sm:grid-cols-[10rem_1fr_auto] sm:items-baseline sm:gap-6"
        >
          <span className="font-display text-4xl font-bold text-cyan-brand">{s.value}</span>
          <span className="text-paper/85">{s.label}</span>
          <span className="text-sm text-paper/50">{s.note}</span>
        </div>
      ))}
    </div>
  );
}

function Header({ c }) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-navy-900/95 backdrop-blur">
      <div className="mx-auto flex max-w-site items-center justify-between gap-4 px-5 py-3">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-display text-xl font-bold tracking-tight text-white">
            Universal Dealer Services
          </span>
          <span className="hidden text-xs text-paper/60 sm:inline">{c.header.byline}</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm text-paper/80 lg:flex">
          {c.header.nav.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-white">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <a
            href={c.altLang.href}
            hrefLang={c.altLang.hreflang}
            lang={c.altLang.hreflang}
            className="text-sm font-medium text-paper/80 underline-offset-4 hover:text-white hover:underline"
          >
            {c.altLang.label}
          </a>
          <a
            href="#contact"
            className="hidden rounded-sm bg-cyan-brand px-4 py-2 text-sm font-semibold text-navy-950 hover:bg-white sm:inline-block"
          >
            {c.header.cta}
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero({ c }) {
  const h = c.hero;
  return (
    <section id="top" className="relative overflow-hidden bg-navy-900">
      <div className="mx-auto grid max-w-site items-center gap-10 px-5 pb-16 pt-14 lg:grid-cols-[1.1fr_1fr] lg:pb-24 lg:pt-20">
        <div>
          <p className="hero-reveal mb-5 inline-block border-l-2 border-cyan-brand pl-3 text-sm font-medium text-paper/75">
            {h.eyebrow}
          </p>
          <h1 className="hero-reveal hero-reveal-2 font-display text-5xl font-bold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
            {h.title}
          </h1>
          <p className="hero-reveal hero-reveal-3 mt-6 max-w-xl text-lg leading-relaxed text-paper/80">
            {h.sub}
          </p>
          <div className="hero-reveal hero-reveal-3 mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="rounded-sm bg-cyan-brand px-6 py-3 font-semibold text-navy-950 hover:bg-white">
              {h.primary}
            </a>
            <a
              href="#numbers"
              className="rounded-sm border border-paper/30 px-6 py-3 font-semibold text-paper hover:border-cyan-brand hover:text-cyan-brand"
            >
              {h.secondary}
            </a>
          </div>
          <p className="hero-reveal hero-reveal-3 mt-6 text-sm text-paper/60">{h.footnote}</p>
        </div>
        <div className="hero-reveal hero-reveal-3 relative">
          <img
            src={heroImage.src}
            width={heroImage.width}
            height={heroImage.height}
            alt={c.meta.heroAlt}
            fetchPriority="high"
            className="aspect-[3/2] w-full rounded-sm object-cover shadow-2xl ring-1 ring-white/10"
          />
          <div className="absolute -bottom-4 left-4 rounded-sm bg-white px-4 py-3 shadow-xl">
            <p className="font-display text-sm font-semibold text-ink">{h.badgeTitle}</p>
            <p className="text-xs text-ink/60">{h.badgeSub}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Numbers({ c }) {
  return (
    <section id="numbers" className="bg-navy-950 py-16 lg:py-20">
      <div className="mx-auto max-w-site px-5">
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">{c.numbers.title}</h2>
        <p className="mt-3 max-w-2xl text-paper/70">{c.numbers.intro}</p>
        <Ledger stats={c.numbers.stats} />
      </div>
    </section>
  );
}

function Unlock({ c }) {
  const u = c.unlock;
  return (
    <section id="unlock" className="bg-paper py-16 text-ink lg:py-24">
      <div className="mx-auto max-w-site px-5">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold text-cyan-deep">{u.eyebrow}</p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">{u.title}</h2>
          <p className="mt-4 leading-relaxed text-ink/75">{u.intro}</p>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {u.cards.map((card) => (
            <div key={card.title} className="border-t-2 border-cyan-deep pt-4">
              <h3 className="font-display text-xl font-semibold">{card.title}</h3>
              <p className="mt-2 text-ink/70">{card.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 rounded-sm bg-white p-6 shadow-sm ring-1 ring-ink/10">
          <p className="leading-relaxed text-ink/80">
            <span className="font-display font-semibold text-ink">{u.mathLead}</span> {u.math}
          </p>
        </div>
      </div>
    </section>
  );
}

function Bilingual({ c }) {
  const b = c.bilingual;
  return (
    <section id="bilingual" className="bg-navy-900 py-16 lg:py-24">
      <div className="mx-auto max-w-site px-5">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">{b.title}</h2>
          <p className="mt-4 leading-relaxed text-paper/80">{b.intro}</p>
        </div>
        <Ledger stats={b.stats} />
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {b.cards.map((card) => (
            <div key={card.title} className="rounded-sm bg-navy-800 p-6 ring-1 ring-white/10">
              <p className="font-display text-lg font-semibold text-white">{card.title}</p>
              <p className="mt-2 text-paper/75">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Exposure({ c }) {
  const x = c.exposure;
  return (
    <section id="exposure" className="bg-paper py-16 text-ink lg:py-20">
      <div className="mx-auto max-w-site px-5">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">{x.title}</h2>
          <p className="mt-4 leading-relaxed text-ink/75">{x.intro}</p>
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

function Shield({ c }) {
  const s = c.shield;
  return (
    <section id="shield" className="bg-navy-900 py-16 lg:py-24">
      <div className="mx-auto grid max-w-site gap-12 px-5 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mb-3 text-sm font-semibold text-cyan-brand">{s.eyebrow}</p>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">{s.title}</h2>
          <p className="mt-4 leading-relaxed text-paper/80">{s.intro}</p>
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
            {s.ledger.map((row) => (
              <div key={row.label} className="flex items-center justify-between gap-4 border-b border-white/10 pb-3">
                <span>{row.label}</span>
                <span className="font-display font-semibold text-white">{row.value}</span>
              </div>
            ))}
            <div className="flex items-center justify-between gap-4 pb-1">
              <span>{s.rentLabel}</span>
              <span className="whitespace-nowrap font-display text-xl font-bold text-amber-rent">{s.rentValue}</span>
            </div>
          </div>
          <p className="mt-5 text-sm text-paper/60">{s.ledgerNote}</p>
        </div>
      </div>
    </section>
  );
}

function Pilot({ c }) {
  return (
    <section id="pilot" className="bg-navy-950 py-16 lg:py-24">
      <div className="mx-auto max-w-site px-5">
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">{c.pilot.title}</h2>
        <p className="mt-3 max-w-2xl text-paper/70">{c.pilot.intro}</p>
        <ol className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {c.pilot.steps.map((s, i) => (
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

function About({ c }) {
  return (
    <section className="border-y border-ink/10 bg-paper py-12 text-ink">
      <div className="mx-auto flex max-w-site flex-wrap items-center justify-between gap-6 px-5">
        <div className="max-w-2xl">
          <h2 className="font-display text-2xl font-bold">{c.about.title}</h2>
          <p className="mt-2 text-ink/70">{c.about.body}</p>
        </div>
        <a
          href="https://universalinsurancebroker.com"
          className="rounded-sm border border-ink/25 px-5 py-3 font-semibold text-ink hover:border-cyan-deep hover:text-cyan-deep"
        >
          {c.about.cta}
        </a>
      </div>
    </section>
  );
}

function Contact({ c, emailHref }) {
  const k = c.contact;
  return (
    <section id="contact" className="bg-navy-950 py-16 lg:py-24">
      <div className="mx-auto grid max-w-site gap-10 px-5 lg:grid-cols-[1fr_1.2fr] lg:items-start">
        <div>
          <h2 className="font-display text-4xl font-bold text-white sm:text-5xl">{k.title}</h2>
          <p className="mt-4 max-w-xl text-paper/75">{k.intro}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href={phoneHref} className="rounded-sm border border-paper/30 px-6 py-3 font-semibold text-paper hover:border-cyan-brand hover:text-cyan-brand">
              {k.callPrefix} {phone}
            </a>
            <a href={emailHref} className="text-sm font-semibold text-paper/80 underline underline-offset-4 hover:text-cyan-brand">
              {k.emailLabel}
            </a>
          </div>
        </div>
        <ContactForm t={k.form} lang={c.lang} subject={k.emailSubject} />
      </div>
    </section>
  );
}

function Footer({ c, emailHref }) {
  return (
    <footer className="border-t border-white/10 bg-navy-950 py-10">
      <div className="mx-auto max-w-site px-5 text-sm text-paper/55">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="font-display text-base font-semibold text-paper/80">Universal Dealer Services</p>
          <nav className="flex flex-wrap gap-6">
            <a href="https://universalinsurancebroker.com" className="hover:text-white">
              Universal Insurance Brokers
            </a>
            <a href={phoneHref} className="hover:text-white">
              {phone}
            </a>
            <a href={emailHref} className="hover:text-white">
              {c.footer.emailLabel}
            </a>
            <a href={c.altLang.href} hrefLang={c.altLang.hreflang} className="hover:text-white">
              {c.altLang.label}
            </a>
          </nav>
        </div>
        <div className="mt-8">
          <p className="font-semibold text-paper/70">{c.sources.title}</p>
          <ul className="mt-2 space-y-1">
            {c.sources.items.map((s) => (
              <li key={s.href}>
                <a href={s.href} rel="noopener" target="_blank" className="underline-offset-4 hover:text-white hover:underline">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-6 max-w-3xl leading-relaxed">{c.footer.legal}</p>
        <p className="mt-4">{c.footer.rights}</p>
      </div>
    </footer>
  );
}

export default function DealerPage({ c }) {
  const emailHref = `mailto:${contactEmail}?subject=${encodeURIComponent(c.contact.emailSubject)}`;
  return (
    <main>
      <Header c={c} />
      <Hero c={c} />
      <Numbers c={c} />
      <Unlock c={c} />
      <Bilingual c={c} />
      <Exposure c={c} />
      <Shield c={c} />
      <Pilot c={c} />
      <About c={c} />
      <Contact c={c} emailHref={emailHref} />
      <Footer c={c} emailHref={emailHref} />
    </main>
  );
}
