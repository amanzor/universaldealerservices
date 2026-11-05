const phone = '(239) 204-2208';
const phoneHref = 'tel:+12392042208';
const emailHref =
  'mailto:universalinsurancebroker@gmail.com?subject=Dealer%20walkthrough%20request%20%E2%80%94%20Universal%20Dealer%20Services';

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-navy-900/95 backdrop-blur">
      <div className="mx-auto flex max-w-site items-center justify-between px-5 py-3">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-display text-xl font-bold tracking-tight text-white">
            Universal Dealer Services
          </span>
          <span className="hidden text-xs text-paper/60 sm:inline">
            by Universal Insurance Brokers
          </span>
        </a>
        <nav className="hidden items-center gap-7 text-sm text-paper/80 md:flex">
          <a href="#unlock" className="hover:text-white">Back-end unlock</a>
          <a href="#bilingual" className="hover:text-white">Bilingual advantage</a>
          <a href="#shield" className="hover:text-white">Compliance Shield</a>
          <a href="#pilot" className="hover:text-white">The pilot</a>
        </nav>
        <a
          href="#contact"
          className="rounded-sm bg-cyan-brand px-4 py-2 text-sm font-semibold text-navy-950 hover:bg-white"
        >
          Book a walkthrough
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-navy-900">
      <div className="mx-auto grid max-w-site items-center gap-10 px-5 pb-16 pt-14 lg:grid-cols-[1.1fr_1fr] lg:pb-24 lg:pt-20">
        <div>
          <p className="hero-reveal mb-5 inline-block border-l-2 border-cyan-brand pl-3 text-sm font-medium text-paper/75">
            On-site insurance services for Florida dealerships — in English and Spanish
          </p>
          <h1 className="hero-reveal hero-reveal-2 font-display text-5xl font-bold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Your F&I menu isn&rsquo;t losing to objections. It&rsquo;s losing to the
            insurance bill.
          </h1>
          <p className="hero-reveal hero-reveal-3 mt-6 max-w-xl text-lg leading-relaxed text-paper/80">
            Our licensed, bilingual agents shop every customer&rsquo;s insurance across
            any carrier at delivery — free. The monthly savings go back into the
            budget your F&I office sells against. It costs your store nothing, and we
            pay rent for the desk.
          </p>
          <div className="hero-reveal hero-reveal-3 mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-sm bg-cyan-brand px-6 py-3 font-semibold text-navy-950 hover:bg-white"
            >
              Book a dealer walkthrough
            </a>
            <a
              href="#numbers"
              className="rounded-sm border border-paper/30 px-6 py-3 font-semibold text-paper hover:border-cyan-brand hover:text-cyan-brand"
            >
              See the numbers
            </a>
          </div>
          <p className="hero-reveal hero-reveal-3 mt-6 text-sm text-paper/60">
            Hablamos español. Serving dealers across Florida from Doral, Boca Raton,
            and Lehigh Acres.
          </p>
        </div>
        <div className="hero-reveal hero-reveal-3 relative">
          <img
            src="https://d8j0ntlcm91z4.cloudfront.net/user_3KZOsOFTTcGuVNkHbHD4aNfk63r/hf_20261105_145650_c4dfe02e-47a8-44a5-aa8b-c3f52cab9081.png"
            alt="An insurance agent reviewing coverage with customers inside a dealership showroom"
            className="aspect-[3/2] w-full rounded-sm object-cover shadow-2xl ring-1 ring-white/10"
          />
          <div className="absolute -bottom-4 left-4 rounded-sm bg-white px-4 py-3 shadow-xl">
            <p className="font-display text-sm font-semibold text-ink">
              Coverage verified before the keys move
            </p>
            <p className="text-xs text-ink/60">Every delivery. Any carrier. Documented.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

const stats = [
  {
    value: '$1,986',
    label: 'Average F&I profit per vehicle retailed, Q1 2026',
    note: 'StoneEagle benchmark data',
  },
  {
    value: '37–53%',
    label: 'Share of total dealership gross profit produced by F&I',
    note: 'NADA department data',
  },
  {
    value: '70–80%',
    label: 'GAP penetration target on financed deals — most stores sit at 40–50%',
    note: 'Industry F&I benchmarks',
  },
  {
    value: '$0',
    label: 'What our in-store verification program costs your dealership',
    note: 'We pay rent — you collect it',
  },
];

function Numbers() {
  return (
    <section id="numbers" className="bg-navy-950 py-16 lg:py-20">
      <div className="mx-auto max-w-site px-5">
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
          The back end is the business now.
        </h2>
        <p className="mt-3 max-w-2xl text-paper/70">
          Front-end gross keeps compressing. F&I is where dealership profit is made —
          and every dollar your customer overpays an insurance company is a dollar
          your F&I office never sees.
        </p>
        <div className="mt-10">
          {stats.map((s) => (
            <div
              key={s.value + s.label}
              className="ledger-row grid gap-2 py-5 sm:grid-cols-[10rem_1fr_auto] sm:items-baseline sm:gap-6"
            >
              <span className="font-display text-4xl font-bold text-cyan-brand">
                {s.value}
              </span>
              <span className="text-paper/85">{s.label}</span>
              <span className="text-sm text-paper/50">{s.note}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const bilingualStats = [
  {
    value: '~20%',
    label: 'Hispanic share of new-vehicle purchases nationally — and rising',
    note: 'NADA, 2026',
  },
  {
    value: '68%',
    label: 'Share of the auto industry’s sales growth driven by Hispanic buyers',
    note: 'S&P Global Mobility',
  },
  {
    value: '$2.8T',
    label: 'Projected U.S. Hispanic buying power, up from $2.1 trillion',
    note: 'S&P Global Mobility data',
  },
  {
    value: '52%',
    label: 'How much less likely Spanish-speaking customers are to respond to English-only outreach',
    note: 'Industry language-gap data',
  },
  {
    value: '+10 cars',
    label: 'Monthly sales lift one dealer reported immediately after adding a single bilingual salesperson',
    note: 'Auto Dealer Today',
  },
];

function Bilingual() {
  return (
    <section id="bilingual" className="bg-navy-900 py-16 lg:py-24">
      <div className="mx-auto max-w-site px-5">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            &ldquo;Se habla español&rdquo; isn&rsquo;t a courtesy. It&rsquo;s a
            production line.
          </h2>
          <p className="mt-4 leading-relaxed text-paper/80">
            In Florida showrooms, Spanish-first buyers are not a niche — they are the
            traffic. A deal that stalls in the box because the insurance call only
            happens in English is a dead deal. Every Universal agent closes the
            verification, quoting, and binding conversation in the customer&rsquo;s
            language, so the deal keeps moving and the F&I menu stays alive.
          </p>
        </div>
        <div className="mt-10">
          {bilingualStats.map((s) => (
            <div
              key={s.value}
              className="ledger-row grid gap-2 py-5 sm:grid-cols-[10rem_1fr_auto] sm:items-baseline sm:gap-6"
            >
              <span className="font-display text-4xl font-bold text-cyan-brand">
                {s.value}
              </span>
              <span className="text-paper/85">{s.label}</span>
              <span className="text-sm text-paper/50">{s.note}</span>
            </div>
          ))}
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="rounded-sm bg-navy-800 p-6 ring-1 ring-white/10">
            <p className="font-display text-lg font-semibold text-white">
              What it looks like on your floor
            </p>
            <p className="mt-2 text-paper/75">
              Dealerships that committed to bilingual teams have doubled their sales
              to Hispanic customers and led their brand&rsquo;s region doing it. The
              stores winning this traffic aren&rsquo;t translating — they&rsquo;re
              staffing. Our agents give you that capability on day one, without a
              single hire.
            </p>
          </div>
          <div className="rounded-sm bg-navy-800 p-6 ring-1 ring-white/10">
            <p className="font-display text-lg font-semibold text-white">
              Where it compounds
            </p>
            <p className="mt-2 text-paper/75">
              A Spanish-first buyer who gets insurance handled in their language
              refers family, returns to your service lane, and renews through us —
              which means they come back through you. Bilingual service is the
              loyalty program your competitors can&rsquo;t copy with a banner.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const exposures = [
  {
    title: 'Spot deliveries',
    body: 'The customer drives home Friday night on a deal that funds Monday. Until title transfers, that vehicle is still yours — and so is the liability.',
  },
  {
    title: 'Lapsed or false proof of insurance',
    body: 'A screenshot of a cancelled policy looks exactly like a real one. Without live verification against the carrier, your team cannot tell the difference.',
  },
  {
    title: 'Test drives and dealer plates',
    body: 'A vehicle operated on your plates with your permission puts your store in the chain of liability the moment something goes wrong.',
  },
  {
    title: 'State-minimum coverage on a $60,000 vehicle',
    body: 'Technically insured is not adequately insured. Underinsured buyers invite claims that reach past their policy — toward the deepest pockets in the transaction.',
  },
];

function Exposure() {
  return (
    <section id="exposure" className="bg-paper py-16 text-ink lg:py-20">
      <div className="mx-auto max-w-site px-5">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Florida treats a car as a dangerous instrumentality. Courts treat the
            owner as responsible.
          </h2>
          <p className="mt-4 leading-relaxed text-ink/75">
            Under Florida&rsquo;s dangerous instrumentality doctrine, a vehicle&rsquo;s
            owner can be held strictly liable when someone drives it with permission
            and hurts somebody. For a dealership, the dangerous window is every moment
            a customer is behind the wheel before the paperwork, funding, and title
            are truly done. One uninsured drive-off is all it takes to turn a
            delivery into a lawsuit.
          </p>
        </div>
        <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {exposures.map((e) => (
            <div key={e.title} className="border-t-2 border-ink/15 pt-4">
              <h3 className="font-display text-xl font-semibold">{e.title}</h3>
              <p className="mt-2 text-ink/70">{e.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-sm text-ink/50">
          General information about dealer risk, not legal advice. Talk to your
          attorney about your store&rsquo;s exposure.
        </p>
      </div>
    </section>
  );
}

function Shield() {
  return (
    <section id="shield" className="bg-navy-900 py-16 lg:py-24">
      <div className="mx-auto grid max-w-site gap-12 px-5 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mb-3 text-sm font-semibold text-cyan-brand">Program two</p>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            The Compliance Shield
          </h2>
          <p className="mt-4 leading-relaxed text-paper/80">
            A licensed, bilingual agent works inside your store and verifies coverage
            on every single delivery — live, against the carrier, before the keys
            move. Every verification is documented, so your deal jacket carries proof
            that your dealership did its diligence.
          </p>
          <ul className="mt-6 space-y-4 text-paper/85">
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-cyan-brand" />
              Live verification of active, adequate coverage — any carrier the
              customer has
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-cyan-brand" />
              A documented audit trail for every delivery, test drive, and spot
              delivery
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-cyan-brand" />
              Same-day binding when a customer shows up uninsured, so deals close
              instead of stalling
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-cyan-brand" />
              Fourteen-plus years in Florida insurance, in English and Spanish
            </li>
          </ul>
        </div>
        <div className="rounded-sm bg-navy-800 p-8 ring-1 ring-white/10">
          <p className="font-display text-lg font-semibold text-white">
            What your ledger sees
          </p>
          <div className="mt-5 space-y-3 text-paper/85">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span>Insurance verification, every delivery</span>
              <span className="font-display font-semibold text-white">$0.00</span>
            </div>
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span>Compliance documentation &amp; audit trail</span>
              <span className="font-display font-semibold text-white">$0.00</span>
            </div>
            <div className="flex items-center justify-between pb-1">
              <span>Monthly desk rent, paid to your store</span>
              <span className="font-display text-xl font-bold text-amber-rent">
                + rent income
              </span>
            </div>
          </div>
          <p className="mt-5 text-sm text-paper/60">
            Every other vendor in your building sends you an invoice. We send a rent
            check.
          </p>
        </div>
      </div>
    </section>
  );
}

function Unlock() {
  return (
    <section id="unlock" className="bg-paper py-16 text-ink lg:py-24">
      <div className="mx-auto max-w-site px-5">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold text-cyan-deep">Program one</p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            The Back-End Budget Unlock
          </h2>
          <p className="mt-4 leading-relaxed text-ink/75">
            Your F&I office doesn&rsquo;t lose product sales to objections. It loses
            them to the customer&rsquo;s monthly budget. When a buyer is overpaying
            for auto insurance, that payment is crowding out the VSC, GAP, and
            protection products your menu runs on.
          </p>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          <div className="border-t-2 border-cyan-deep pt-4">
            <h3 className="font-display text-xl font-semibold">We shop every carrier</h3>
            <p className="mt-2 text-ink/70">
              At delivery, our agent quotes the customer&rsquo;s insurance across the
              market — free, with whatever carrier fits them best. No obligation, no
              pressure, real savings.
            </p>
          </div>
          <div className="border-t-2 border-cyan-deep pt-4">
            <h3 className="font-display text-xl font-semibold">
              Savings go back in the budget
            </h3>
            <p className="mt-2 text-ink/70">
              Money saved on the insurance payment is monthly room your F&I manager
              can recapture in back-end products — on the same deal, in the same
              visit.
            </p>
          </div>
          <div className="border-t-2 border-cyan-deep pt-4">
            <h3 className="font-display text-xl font-semibold">
              Customers come back to you
            </h3>
            <p className="mt-2 text-ink/70">
              Every renewal is a touchpoint that routes your customer back to your
              service lane — retention your factory scores, loyalty your competitors
              can&rsquo;t reach.
            </p>
          </div>
        </div>
        <div className="mt-12 rounded-sm bg-white p-6 shadow-sm ring-1 ring-ink/10">
          <p className="leading-relaxed text-ink/80">
            <span className="font-display font-semibold text-ink">
              The math your group CFO will ask for:
            </span>{' '}
            GAP should penetrate 70–80% of financed deals; most stores run 40–50%.
            Faster proof of insurance also means faster deliveries, fewer unwound
            deals, and cleaner CSI. We put those numbers in a report, not a promise —
            that&rsquo;s what the pilot below is for.
          </p>
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    title: 'Walkthrough',
    body: 'Thirty minutes in your store with your GM or group executive. We map your delivery process and where verification fits without slowing a single deal.',
  },
  {
    title: 'Free 90-day delivery audit',
    body: 'We review your last ninety days of deliveries for insurance-verification gaps and hand you a written risk report. No cost, no commitment — you keep the report either way.',
  },
  {
    title: '60-day single-rooftop pilot',
    body: 'One store, one agent, rent paid from day one. We track products per deal, F&I PVR, delivery time, and CSI against your baseline.',
  },
  {
    title: 'Group rollout',
    body: 'You take the pilot data to your dealer group. We scale agents across rooftops on the terms the numbers earned.',
  },
];

function Pilot() {
  return (
    <section id="pilot" className="bg-navy-950 py-16 lg:py-24">
      <div className="mx-auto max-w-site px-5">
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
          How the pilot works
        </h2>
        <p className="mt-3 max-w-2xl text-paper/70">
          Franchise executives don&rsquo;t buy promises. They buy pilot data. Here is
          the sequence, start to rollout.
        </p>
        <ol className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title}>
              <span className="font-display text-5xl font-bold text-navy-700">
                {i + 1}
              </span>
              <h3 className="mt-2 font-display text-xl font-semibold text-white">
                {s.title}
              </h3>
              <p className="mt-2 text-paper/70">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="border-y border-ink/10 bg-paper py-12 text-ink">
      <div className="mx-auto flex max-w-site flex-wrap items-center justify-between gap-6 px-5">
        <div className="max-w-2xl">
          <h2 className="font-display text-2xl font-bold">
            A Universal Insurance Brokers program
          </h2>
          <p className="mt-2 text-ink/70">
            Independent Florida brokerage with offices in Doral, Boca Raton, and
            Lehigh Acres. Fourteen-plus years in insurance, six in dealership sales —
            we&rsquo;ve sat on both sides of the desk. Auto, home, commercial, and
            health, in English and Spanish.
          </p>
        </div>
        <a
          href="https://universalinsurancebroker.com"
          className="rounded-sm border border-ink/25 px-5 py-3 font-semibold text-ink hover:border-cyan-deep hover:text-cyan-deep"
        >
          Visit universalinsurancebroker.com
        </a>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-navy-950 py-16 lg:py-24">
      <div className="mx-auto max-w-site px-5 text-center">
        <h2 className="mx-auto max-w-3xl font-display text-4xl font-bold text-white sm:text-5xl">
          Put an agent on your floor. Put rent on your books.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-paper/75">
          Call or email to schedule a walkthrough and claim the free 90-day delivery
          audit. Mon–Fri, 9:30 AM – 7:00 PM.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={phoneHref}
            className="rounded-sm bg-cyan-brand px-7 py-3 font-semibold text-navy-950 hover:bg-white"
          >
            Call {phone}
          </a>
          <a
            href={emailHref}
            className="rounded-sm border border-paper/30 px-7 py-3 font-semibold text-paper hover:border-cyan-brand hover:text-cyan-brand"
          >
            Email the dealer team
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-950 py-10">
      <div className="mx-auto max-w-site px-5 text-sm text-paper/55">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="font-display text-base font-semibold text-paper/80">
            Universal Dealer Services
          </p>
          <nav className="flex flex-wrap gap-6">
            <a href="https://universalinsurancebroker.com" className="hover:text-white">
              Universal Insurance Brokers
            </a>
            <a href={phoneHref} className="hover:text-white">
              {phone}
            </a>
            <a href={emailHref} className="hover:text-white">
              Email us
            </a>
          </nav>
        </div>
        <p className="mt-6 max-w-3xl leading-relaxed">
          Universal Dealer Services is a program of Universal Insurance Brokers, an
          independent Florida insurance brokerage. Doral · Boca Raton · Lehigh Acres.
          Content on this page is general information about dealership risk and F&I
          performance, not legal advice. Industry figures reflect published StoneEagle
          and NADA benchmark data.
        </p>
        <p className="mt-4">© 2026 Universal Insurance Brokers. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function Page() {
  return (
    <main>
      <Header />
      <Hero />
      <Numbers />
      <Unlock />
      <Bilingual />
      <Exposure />
      <Shield />
      <Pilot />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
