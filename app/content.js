/*
 * All page copy, in English and Spanish. The page layout lives in DealerPage.jsx
 * and reads from here, so both languages always share the same structure.
 * When a claim, number or source changes, update it in BOTH languages.
 */

export const phone = '(239) 204-2208';
export const phoneHref = 'tel:+12392042208';
export const email = 'quotes@universalinsurancebroker.com';

const sourceLinks = {
  stoneeagle: 'https://www.autoremarketing.com/subprime/stoneeagle-sees-fi-trends-stay-strong-among-q1-dealer-profits/',
  rework: 'https://resources.rework.com/vi/libraries/automotive-sales-growth/fi-per-vehicle-retail',
  demandLocal: 'https://www.demandlocal.com/blog/multicultural-marketing-for-dealerships-statistics/',
  autoproyecto: 'https://sales.autoproyecto.com/?p=35',
  autoDealerToday:
    'https://www.autodealertodaymagazine.com/308753/sales-skyrocket-with-hispanic-market-focus-rr-auto-sales-thrives-in-orland-calif',
};

const en = {
  lang: 'en',
  home: '/',
  switchLang: { href: '/es/', hrefLang: 'es', label: 'Español', aria: 'Ver esta página en español' },
  emailSubject: 'Dealer walkthrough request — Universal Dealer Services',
  uibUrl: 'https://www.universalinsurancebroker.com',

  header: {
    byline: 'by Universal Insurance Brokers',
    nav: [
      ['#unlock', 'Back-end unlock'],
      ['#bilingual', 'Bilingual advantage'],
      ['#shield', 'Compliance Shield'],
      ['#pilot', 'The pilot'],
    ],
    cta: 'Book a walkthrough',
  },

  hero: {
    eyebrow: 'On-site insurance services for Florida dealerships — in English and Spanish',
    title: 'Your F&I menu isn’t losing to objections. It’s losing to the insurance bill.',
    body: 'Our licensed, bilingual agents shop every customer’s insurance across any carrier at delivery — free. The monthly savings go back into the budget your F&I office sells against. It costs your store nothing, and we pay rent for the desk.',
    primary: 'Book a dealer walkthrough',
    secondary: 'See the numbers',
    note: 'Hablamos español. Serving dealers across Florida from Hialeah, Doral, Boca Raton and Lehigh Acres.',
    imageAlt:
      'A bilingual insurance advisor reviewing coverage with customers inside a dealership showroom',
    badgeTitle: 'Coverage verified before the keys move',
    badgeBody: 'Every delivery. Any carrier. Documented.',
  },

  numbers: {
    title: 'The back end is the business now.',
    body: 'Front-end gross keeps compressing. F&I is where dealership profit is made — and every dollar your customer overpays an insurance company is a dollar your F&I office never sees.',
    stats: [
      { value: '$1,986', label: 'Average F&I profit per vehicle retailed, Q1 2026', note: 'StoneEagle benchmark data' },
      { value: '37–53%', label: 'Share of total dealership gross profit produced by F&I', note: 'NADA figures, via Rework' },
      {
        value: '70–80%',
        label: 'GAP penetration target on financed deals — most stores sit at 40–50%',
        note: 'Industry F&I benchmarks, via Rework',
      },
      { value: '$0', label: 'What our in-store verification program costs your dealership', note: 'We pay rent — you collect it' },
    ],
  },

  unlock: {
    eyebrow: 'Program one',
    title: 'The Back-End Budget Unlock',
    body: 'Your F&I office doesn’t lose product sales to objections. It loses them to the customer’s monthly budget. When a buyer is overpaying for auto insurance, that payment is crowding out the VSC, GAP, and protection products your menu runs on.',
    cards: [
      {
        title: 'We shop every carrier',
        body: 'At delivery, our agent quotes the customer’s insurance across the market — free, with whatever carrier fits them best. No obligation, no pressure, real savings.',
      },
      {
        title: 'Savings go back in the budget',
        body: 'Money saved on the insurance payment is monthly room your F&I manager can recapture in back-end products — on the same deal, in the same visit.',
      },
      {
        title: 'Customers come back to you',
        body: 'Every renewal is a touchpoint that routes your customer back to your service lane — retention your factory scores, loyalty your competitors can’t reach.',
      },
    ],
    mathLead: 'The math your group CFO will ask for:',
    mathBody:
      'GAP should penetrate 70–80% of financed deals; most stores run 40–50%. Faster proof of insurance also means faster deliveries, fewer unwound deals, and cleaner CSI. We put those numbers in a report, not a promise — that’s what the pilot below is for.',
  },

  bilingual: {
    title: '“Se habla español” isn’t a courtesy. It’s a production line.',
    body: 'In Florida showrooms, Spanish-first buyers are not a niche — they are the traffic. A deal that stalls in the box because the insurance call only happens in English is a dead deal. Every Universal agent closes the verification, quoting, and binding conversation in the customer’s language, so the deal keeps moving and the F&I menu stays alive.',
    stats: [
      { value: '~20%', label: 'Hispanic share of new-vehicle purchases nationally — and rising', note: 'NADA data, via Demand Local' },
      {
        value: '68%',
        label: 'Share of the auto industry’s sales growth driven by Hispanic buyers',
        note: 'S&P Global Mobility, via AutoProyecto',
      },
      { value: '$2.8T', label: 'Projected U.S. Hispanic buying power, up from $2.1 trillion', note: 'S&P Global Mobility, via AutoProyecto' },
      {
        value: '+10 cars',
        label: 'Monthly sales lift one dealer reported after adding a single bilingual salesperson',
        note: 'Auto Dealer Today',
      },
    ],
    cards: [
      {
        title: 'What it looks like on your floor',
        body: 'Dealers who built bilingual sales teams report doubling their sales to Hispanic customers. The stores winning this traffic aren’t translating — they’re staffing. Our agents give you that capability on day one, without a single hire.',
      },
      {
        title: 'Where it compounds',
        body: 'A Spanish-first buyer who gets insurance handled in their language refers family, returns to your service lane, and renews through us — which means they come back through you. Bilingual service is the loyalty program your competitors can’t copy with a banner.',
      },
    ],
  },

  exposure: {
    title: 'Florida treats a car as a dangerous instrumentality. Courts treat the owner as responsible.',
    body: 'Under Florida’s dangerous instrumentality doctrine, a vehicle’s owner can be held liable when someone drives it with permission and hurts somebody. Florida law gives dealers some protections in specific situations, such as loaner vehicles, but those protections generally depend on the driver carrying the required insurance. That makes documented, verified coverage before the keys move one of the best safeguards a store has. One uninsured drive-off is all it takes to turn a delivery into a lawsuit.',
    items: [
      {
        title: 'Spot deliveries',
        body: 'The customer drives home Friday night on a deal that funds Monday. If the deal unwinds or the paperwork is not final, who owned the car — and who answers for it — is exactly what an attorney will test.',
      },
      {
        title: 'Lapsed or false proof of insurance',
        body: 'A screenshot of a cancelled policy looks exactly like a real one. Without live verification against the carrier, your team cannot tell the difference.',
      },
      {
        title: 'Test drives and dealer plates',
        body: 'A vehicle operated on your plates, with your permission, can put your store in the chain of liability the moment something goes wrong.',
      },
      {
        title: 'State-minimum coverage on a $60,000 vehicle',
        body: 'Technically insured is not adequately insured. Underinsured buyers invite claims that reach past their policy — toward the deepest pockets in the transaction.',
      },
    ],
    disclaimer:
      'General information about dealer risk, not legal advice. Talk to your attorney about your store’s exposure.',
  },

  shield: {
    eyebrow: 'Program two',
    title: 'The Compliance Shield',
    body: 'A licensed, bilingual agent works inside your store and verifies coverage on every single delivery — live, against the carrier, before the keys move. Every verification is documented, so your deal jacket carries proof that your dealership did its diligence.',
    bullets: [
      'Live verification of active, adequate coverage — any carrier the customer has',
      'A documented audit trail for every delivery, test drive, and spot delivery',
      'Same-day binding when a customer shows up uninsured, so deals close instead of stalling',
      'Fourteen-plus years in Florida insurance, in English and Spanish',
    ],
    ledgerTitle: 'What your ledger sees',
    ledger: [
      ['Insurance verification, every delivery', '$0.00'],
      ['Compliance documentation & audit trail', '$0.00'],
    ],
    rentLine: 'Monthly desk rent, paid to your store',
    rentValue: '+ rent income',
    rentNote: 'Every other vendor in your building sends you an invoice. We send a rent check.',
    arrangementTitle: 'How the arrangement works',
    arrangement: [
      'A flat, fair-market monthly rent for the desk space, never tied to the number of policies written or customers referred.',
      'Customers are never required to buy insurance from us to buy a car. They can keep their current carrier; we verify it.',
      'Every agent on your floor is a licensed Florida insurance agent.',
    ],
  },

  pilot: {
    title: 'How the pilot works',
    body: 'Franchise executives don’t buy promises. They buy pilot data. Here is the sequence, start to rollout.',
    steps: [
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
    ],
  },

  about: {
    title: 'A Universal Insurance Brokers program',
    body: 'Independent Florida brokerage with offices in Hialeah, Doral, Boca Raton and Lehigh Acres. Fourteen-plus years in insurance, six in dealership sales — we’ve sat on both sides of the desk. Auto, home, commercial, and health, in English and Spanish.',
    link: 'Visit universalinsurancebroker.com',
  },

  contact: {
    title: 'Put an agent on your floor. Put rent on your books.',
    body: 'Request a walkthrough and claim the free 90-day delivery audit. We reply within one business day. Prefer the phone? Call Mon–Fri, 9:30 AM – 7:00 PM.',
    call: `Call ${phone}`,
  },

  footer: {
    emailLabel: 'Email us',
    legal:
      'Universal Dealer Services is a program of Universal Insurance Brokers, an independent Florida insurance brokerage (license #L099044). Hialeah · Doral · Boca Raton · Lehigh Acres. Content on this page is general information about dealership risk and F&I performance, not legal advice.',
    sourcesTitle: 'Sources',
    sources: [
      { label: 'StoneEagle Q1 2026 F&I report — Auto Remarketing', href: sourceLinks.stoneeagle },
      { label: 'F&I per-vehicle-retail and GAP penetration benchmarks — Rework', href: sourceLinks.rework },
      { label: 'Multicultural marketing statistics for dealerships — Demand Local', href: sourceLinks.demandLocal },
      { label: 'Hispanic buyers and industry growth (S&P Global Mobility) — AutoProyecto', href: sourceLinks.autoproyecto },
      { label: 'Bilingual sales lift at R&R Auto Sales — Auto Dealer Today', href: sourceLinks.autoDealerToday },
    ],
    copyright: '© 2026 Universal Insurance Brokers. All rights reserved.',
  },

  form: {
    name: 'Your name *',
    title: 'Title',
    titlePlaceholder: 'GM, Dealer Principal, F&I Director…',
    dealership: 'Dealership or dealer group *',
    phone: 'Phone *',
    email: 'Email *',
    rooftops: 'Number of rooftops',
    message: 'Anything we should know?',
    submit: 'Request a walkthrough',
    sending: 'Sending…',
    error: `We couldn’t send your request. Please call ${phone} or email ${email}.`,
    sentTitle: 'Request received.',
    sentBody:
      'A member of our dealer team will contact you within one business day to set up your walkthrough and the free 90-day delivery audit.',
    languageTag: 'English',
  },
};

const es = {
  lang: 'es',
  home: '/es/',
  switchLang: { href: '/', hrefLang: 'en', label: 'English', aria: 'View this page in English' },
  emailSubject: 'Solicitud de visita — Universal Dealer Services',
  uibUrl: 'https://www.universalinsurancebroker.com/es',

  header: {
    byline: 'de Universal Insurance Brokers',
    nav: [
      ['#unlock', 'Presupuesto de F&I'],
      ['#bilingual', 'Ventaja bilingüe'],
      ['#shield', 'Escudo de Cumplimiento'],
      ['#pilot', 'El piloto'],
    ],
    cta: 'Agende una visita',
  },

  hero: {
    eyebrow: 'Servicios de seguros dentro de su concesionario en Florida — en español y en inglés',
    title: 'Su menú de F&I no está perdiendo ante las objeciones. Está perdiendo ante la factura del seguro.',
    body: 'Nuestros agentes licenciados y bilingües cotizan el seguro de cada cliente con cualquier aseguradora al momento de la entrega — gratis. El ahorro mensual regresa al presupuesto con el que vende su oficina de F&I. A su concesionario no le cuesta nada, y nosotros le pagamos renta por el escritorio.',
    primary: 'Agende una visita a su concesionario',
    secondary: 'Vea los números',
    note: 'Atendemos en español y en inglés a concesionarios de toda Florida desde Hialeah, Doral, Boca Raton y Lehigh Acres.',
    imageAlt:
      'Asesoría de seguros bilingüe con clientes en la sala de exhibición de un concesionario',
    badgeTitle: 'Cobertura verificada antes de entregar las llaves',
    badgeBody: 'Cada entrega. Cualquier aseguradora. Documentado.',
  },

  numbers: {
    title: 'Hoy el negocio está en F&I.',
    body: 'La ganancia bruta del front-end se sigue reduciendo. F&I es donde se genera la ganancia del concesionario — y cada dólar que su cliente le paga de más a una aseguradora es un dólar que su oficina de F&I nunca ve.',
    stats: [
      {
        value: '$1,986',
        label: 'Ganancia promedio de F&I por vehículo vendido al detalle, primer trimestre de 2026',
        note: 'Datos de referencia de StoneEagle',
      },
      {
        value: '37–53%',
        label: 'Porcentaje de la ganancia bruta total del concesionario que produce F&I',
        note: 'Cifras de NADA, vía Rework',
      },
      {
        value: '70–80%',
        label: 'Meta de penetración de GAP en ventas financiadas — la mayoría de los concesionarios está entre 40% y 50%',
        note: 'Referencias de F&I de la industria, vía Rework',
      },
      {
        value: '$0',
        label: 'Lo que le cuesta a su concesionario nuestro programa de verificación en sitio',
        note: 'Nosotros pagamos la renta — usted la cobra',
      },
    ],
  },

  unlock: {
    eyebrow: 'Programa uno',
    title: 'Más presupuesto para F&I',
    body: 'Su oficina de F&I no pierde ventas de productos por las objeciones. Las pierde por el presupuesto mensual del cliente. Cuando un comprador paga de más por su seguro de auto, ese pago le quita espacio al contrato de servicio (VSC), al GAP y a los productos de protección que sostienen su menú.',
    cards: [
      {
        title: 'Cotizamos con todas las aseguradoras',
        body: 'Al momento de la entrega, nuestro agente cotiza el seguro del cliente en todo el mercado — gratis, con la aseguradora que más le convenga. Sin compromiso, sin presión, con ahorro real.',
      },
      {
        title: 'El ahorro regresa al presupuesto',
        body: 'Lo que el cliente ahorra en el pago del seguro es espacio mensual que su gerente de F&I puede recuperar en productos de back-end — en la misma venta, en la misma visita.',
      },
      {
        title: 'Sus clientes regresan a usted',
        body: 'Cada renovación es un punto de contacto que lleva a su cliente de vuelta a su departamento de servicio — retención que cuenta en las evaluaciones de fábrica y lealtad que su competencia no puede alcanzar.',
      },
    ],
    mathLead: 'Los números que pedirá el CFO de su grupo:',
    mathBody:
      'El GAP debería estar en el 70–80% de las ventas financiadas; la mayoría de los concesionarios está entre 40% y 50%. Una prueba de seguro más rápida también significa entregas más rápidas, menos ventas que se caen y mejores resultados de CSI. Esos números los ponemos en un informe, no en una promesa — para eso es el piloto que verá más abajo.',
  },

  bilingual: {
    title: '“Se habla español” no es una cortesía. Es una línea de producción.',
    body: 'En las salas de exhibición de Florida, los compradores que prefieren el español no son un nicho — son el tráfico. Una venta que se detiene en la oficina de F&I porque la llamada del seguro solo se hace en inglés es una venta perdida. Cada agente de Universal hace la verificación, la cotización y la emisión de la póliza en el idioma del cliente, para que la venta siga avanzando y el menú de F&I siga vivo.',
    stats: [
      {
        value: '~20%',
        label: 'Participación hispana en las compras de vehículos nuevos a nivel nacional — y sigue creciendo',
        note: 'Datos de NADA, vía Demand Local',
      },
      {
        value: '68%',
        label: 'Porcentaje del crecimiento en ventas de la industria automotriz que impulsan los compradores hispanos',
        note: 'S&P Global Mobility, vía AutoProyecto',
      },
      {
        value: '$2.8T',
        label: 'Poder adquisitivo hispano proyectado en EE. UU.: 2.8 billones de dólares, frente a 2.1 billones',
        note: 'S&P Global Mobility, vía AutoProyecto',
      },
      {
        value: '+10 autos',
        label: 'Aumento mensual en ventas que reportó un concesionario tras sumar a un solo vendedor bilingüe',
        note: 'Auto Dealer Today',
      },
    ],
    cards: [
      {
        title: 'Cómo se ve en su piso de ventas',
        body: 'Los concesionarios que formaron equipos de ventas bilingües reportan haber duplicado sus ventas a clientes hispanos. Los que están ganando este tráfico no están traduciendo — están contratando a la gente correcta. Nuestros agentes le dan esa capacidad desde el primer día, sin una sola contratación.',
      },
      {
        title: 'Donde se multiplica',
        body: 'Un comprador que resuelve su seguro en su propio idioma recomienda a su familia, regresa a su departamento de servicio y renueva con nosotros — lo que significa que vuelve a pasar por usted. El servicio bilingüe es el programa de lealtad que su competencia no puede copiar con un letrero.',
      },
    ],
  },

  exposure: {
    title: 'En Florida, un auto es un “instrumento peligroso”. Y los tribunales responsabilizan al dueño.',
    body: 'Según la doctrina de instrumento peligroso de Florida (dangerous instrumentality doctrine), el dueño de un vehículo puede ser responsable cuando otra persona lo maneja con su permiso y lastima a alguien. La ley de Florida ofrece a los concesionarios algunas protecciones en situaciones específicas, como los vehículos de cortesía, pero esas protecciones por lo general dependen de que el conductor tenga el seguro requerido. Por eso, una cobertura documentada y verificada antes de entregar las llaves es una de las mejores protecciones que tiene un concesionario. Basta con un solo cliente sin seguro que se lleve un auto para que una entrega termine en una demanda.',
    items: [
      {
        title: 'Entregas inmediatas (spot delivery)',
        body: 'El cliente se lleva el auto el viernes por la noche con una venta que se financia el lunes. Si la venta se cae o los papeles no están finalizados, quién era el dueño del auto — y quién responde por él — es exactamente lo que un abogado va a cuestionar.',
      },
      {
        title: 'Prueba de seguro vencida o falsa',
        body: 'Una captura de pantalla de una póliza cancelada se ve exactamente igual que una vigente. Sin verificación en vivo con la aseguradora, su equipo no puede notar la diferencia.',
      },
      {
        title: 'Pruebas de manejo y placas de concesionario',
        body: 'Un vehículo que se maneja con sus placas y con su permiso puede poner a su concesionario en la cadena de responsabilidad en el momento en que algo sale mal.',
      },
      {
        title: 'Cobertura mínima estatal en un vehículo de $60,000',
        body: 'Estar asegurado no es lo mismo que estar bien asegurado. Los compradores con seguro insuficiente atraen reclamos que van más allá de su póliza — hacia los bolsillos más profundos de la transacción.',
      },
    ],
    disclaimer:
      'Información general sobre los riesgos de un concesionario, no asesoría legal. Consulte con su abogado sobre la exposición de su concesionario.',
  },

  shield: {
    eyebrow: 'Programa dos',
    title: 'El Escudo de Cumplimiento',
    body: 'Un agente licenciado y bilingüe trabaja dentro de su concesionario y verifica la cobertura en cada entrega — en vivo, con la aseguradora, antes de entregar las llaves. Cada verificación queda documentada, para que el expediente de cada venta (deal jacket) tenga la prueba de que su concesionario hizo su debida diligencia.',
    bullets: [
      'Verificación en vivo de cobertura activa y adecuada — con cualquier aseguradora que tenga el cliente',
      'Un registro documentado de cada entrega, prueba de manejo y entrega inmediata',
      'Emisión de póliza el mismo día cuando un cliente llega sin seguro, para que las ventas se cierren en vez de estancarse',
      'Más de catorce años en seguros en Florida, en español y en inglés',
    ],
    ledgerTitle: 'Lo que ve su contabilidad',
    ledger: [
      ['Verificación de seguro en cada entrega', '$0.00'],
      ['Documentación de cumplimiento y registro de auditoría', '$0.00'],
    ],
    rentLine: 'Renta mensual del escritorio, pagada a su concesionario',
    rentValue: '+ ingreso por renta',
    rentNote: 'Todos los demás proveedores en su edificio le mandan una factura. Nosotros le mandamos un cheque de renta.',
    arrangementTitle: 'Cómo funciona el acuerdo',
    arrangement: [
      'Una renta mensual fija, a precio justo de mercado, por el espacio del escritorio — nunca ligada al número de pólizas emitidas ni de clientes referidos.',
      'Nunca se le exige al cliente comprarnos un seguro para comprar un auto. Puede quedarse con su aseguradora actual; nosotros la verificamos.',
      'Cada agente en su piso de ventas es un agente de seguros con licencia en Florida.',
    ],
  },

  pilot: {
    title: 'Cómo funciona el piloto',
    body: 'Los ejecutivos de franquicias no compran promesas. Compran datos de un piloto. Esta es la secuencia, desde el inicio hasta la expansión.',
    steps: [
      {
        title: 'Visita',
        body: 'Treinta minutos en su concesionario con su gerente general o el ejecutivo de su grupo. Revisamos su proceso de entrega y dónde encaja la verificación sin frenar ni una sola venta.',
      },
      {
        title: 'Auditoría gratuita de 90 días de entregas',
        body: 'Revisamos sus últimos noventa días de entregas en busca de fallas en la verificación del seguro y le entregamos un informe de riesgos por escrito. Sin costo ni compromiso — el informe es suyo de todos modos.',
      },
      {
        title: 'Piloto de 60 días en un concesionario',
        body: 'Un concesionario, un agente, renta pagada desde el primer día. Medimos productos por venta, PVR de F&I, tiempo de entrega y CSI frente a su punto de partida.',
      },
      {
        title: 'Expansión al grupo',
        body: 'Usted presenta los datos del piloto a su grupo. Llevamos agentes a sus demás concesionarios en los términos que se ganaron los números.',
      },
    ],
  },

  about: {
    title: 'Un programa de Universal Insurance Brokers',
    body: 'Correduría de seguros independiente en Florida, con oficinas en Hialeah, Doral, Boca Raton y Lehigh Acres. Más de catorce años en seguros y seis en ventas de concesionarios — hemos estado en los dos lados del escritorio. Seguros de auto, hogar, comerciales y de salud, en español y en inglés.',
    link: 'Visite universalinsurancebroker.com',
  },

  contact: {
    title: 'Ponga un agente en su piso de ventas. Ponga renta en sus libros.',
    body: 'Solicite una visita y reciba la auditoría gratuita de 90 días de entregas. Respondemos en un día hábil. ¿Prefiere llamar? Lunes a viernes, de 9:30 AM a 7:00 PM.',
    call: `Llame al ${phone}`,
  },

  footer: {
    emailLabel: 'Escríbanos',
    legal:
      'Universal Dealer Services es un programa de Universal Insurance Brokers, una correduría de seguros independiente en Florida (licencia #L099044). Hialeah · Doral · Boca Raton · Lehigh Acres. El contenido de esta página es información general sobre los riesgos de un concesionario y el desempeño de F&I, no asesoría legal.',
    sourcesTitle: 'Fuentes',
    sources: [
      { label: 'Informe de F&I de StoneEagle, primer trimestre de 2026 — Auto Remarketing (en inglés)', href: sourceLinks.stoneeagle },
      { label: 'Referencias de F&I por vehículo y penetración de GAP — Rework (en inglés)', href: sourceLinks.rework },
      { label: 'Estadísticas de marketing multicultural para concesionarios — Demand Local (en inglés)', href: sourceLinks.demandLocal },
      { label: 'Compradores hispanos y crecimiento de la industria (S&P Global Mobility) — AutoProyecto', href: sourceLinks.autoproyecto },
      { label: 'Aumento de ventas con un vendedor bilingüe en R&R Auto Sales — Auto Dealer Today (en inglés)', href: sourceLinks.autoDealerToday },
    ],
    copyright: '© 2026 Universal Insurance Brokers. Todos los derechos reservados.',
  },

  form: {
    name: 'Su nombre *',
    title: 'Cargo',
    titlePlaceholder: 'Gerente general, Dealer Principal, Director de F&I…',
    dealership: 'Concesionario o grupo *',
    phone: 'Teléfono *',
    email: 'Correo electrónico *',
    rooftops: 'Número de concesionarios',
    message: '¿Algo que debamos saber?',
    submit: 'Solicitar una visita',
    sending: 'Enviando…',
    error: `No pudimos enviar su solicitud. Llame al ${phone} o escriba a ${email}.`,
    sentTitle: 'Solicitud recibida.',
    sentBody:
      'Un miembro de nuestro equipo para concesionarios se comunicará con usted en un día hábil para coordinar su visita y la auditoría gratuita de 90 días de entregas.',
    languageTag: 'Spanish',
  },
};

export const content = { en, es };
