/*
 * Dealer guides, English and Spanish. Each guide is a list of blocks:
 *   { p }            paragraph
 *   { h }            section heading (h2)
 *   { ul: [...] }    bullet list       { ol: [...] }  numbered list
 *   { table: { head: [...], rows: [[...], ...] } }
 *   { note }         highlighted callout
 * Facts about Florida rules come from the FLHSMV procedures and statutes listed
 * in each guide's sources. Re-check them when REVIEWED changes, and keep both
 * languages saying the same thing.
 */

export const REVIEWED = { en: 'November 2026', es: 'noviembre de 2026', iso: '2026-11-11' };

const SRC = {
  flhsmvInsurance: { label: 'FLHSMV: Insurance requirements', href: 'https://www.flhsmv.gov/insurance/' },
  rs36: {
    label: 'FLHSMV Procedure RS-36, Insurance Verification (rev. 04/25)',
    href: 'https://www.flhsmv.gov/pdf/proc/rs/rs-36.pdf',
  },
  rs31: {
    label: 'FLHSMV Procedure RS-31, Temporary Tags (rev. 04/25)',
    href: 'https://www.flhsmv.gov/pdf/proc/rs/rs-31.pdf',
  },
  pinellas: {
    label: 'Pinellas County Tax Collector: dealer training, insurance',
    href: 'https://pinellastaxcollector.gov/dealer-training-materials/motor-vehicle/insurance',
  },
  fs324022: { label: 'Florida Statutes s. 324.022 (property damage liability)', href: 'https://www.flsenate.gov/Laws/Statutes/2025/324.022' },
  fs324021: { label: 'Florida Statutes s. 324.021 (owner liability; dealer loaners)', href: 'https://www.flsenate.gov/Laws/Statutes/2025/324.021' },
  fs626112: { label: 'Florida Statutes s. 626.112 (license required to solicit insurance)', href: 'https://www.flsenate.gov/Laws/Statutes/2025/626.112' },
  fallsLake: {
    label: 'Falls Lake Insurance loss control: Spot deliveries',
    href: 'https://jrvrgroup.com/falls-lake-insurance/loss-control/loss-control-resource-library/spot-deliveries',
  },
  canopy: { label: 'Canopy Connect: dealership plans', href: 'https://www.usecanopy.com/solutions/dealerships' },
  dealerware: { label: 'Dealerware: insurance verification', href: 'https://www.dealerware.com/insurance-verification/' },
  checkmydriver: {
    label: 'WardsAuto: CheckMyDriver insurance verification',
    href: 'https://wardsauto.com/finance-insurance/checkmydriver-accelerates-accurate-confidential-insurance-verification',
  },
  demandLocal: {
    label: 'Demand Local: multicultural marketing statistics for dealerships',
    href: 'https://www.demandlocal.com/blog/multicultural-marketing-for-dealerships-statistics/',
  },
  autoproyecto: { label: 'AutoProyecto: Hispanic buyers and industry growth (S&P Global Mobility)', href: 'https://sales.autoproyecto.com/?p=35' },
};

export const GUIDES = [
  /* ------------------------------------------------------------------ */
  {
    key: 'proof',
    en: {
      slug: 'florida-proof-of-insurance-for-dealers',
      title: 'Florida Proof of Insurance for Car Dealers: What Counts and When to Check',
      short: 'Florida proof of insurance for dealers',
      description:
        'What Florida accepts as proof of insurance for registration and temporary tags, the $10,000 PIP and PDL minimum, binder rules and the grace-period trap.',
      lede: 'Every Florida deal that ends in a registration or a temporary tag needs proof of insurance. The state’s procedure manuals spell out what counts. Here is the plain version for your desk, title clerks and F&I office.',
      blocks: [
        { h: 'The minimum coverage to register a car in Florida' },
        {
          p: 'FLHSMV requires every vehicle with a Florida registration to carry Personal Injury Protection (PIP) and Property Damage Liability (PDL) at the time of registration, with at least $10,000 of each, and to keep that coverage in force continuously.',
        },
        {
          p: 'Bodily injury liability is not part of that registration minimum for most private vehicles. A buyer can leave your lot fully legal while carrying no bodily injury coverage at all, which is the gap that matters most when something goes wrong on the drive home.',
        },
        {
          note: 'Bills to replace PIP with bodily injury liability have been filed in recent legislative sessions. As of November 2026, FLHSMV still lists PIP and PDL as the requirement. Check the FLHSMV insurance page before relying on these amounts.',
        },
        { h: 'What counts as proof of insurance' },
        { p: 'FLHSMV Procedure RS-36 lists the acceptable forms of proof:' },
        {
          ol: [
            'A Florida Automobile Insurance Identification Card showing the VIN, the type of coverage and the effective date, marked “Florida Insurance Card.”',
            'The same card in electronic form on a phone or tablet, as long as it shows the same information: insurer, policy number with the company code, effective date, coverage, named insured and the vehicle’s year, make and VIN (or “Fleet Coverage”). A card is not valid more than one year from its effective date.',
            'A Florida insurance policy issued by a Florida agent for a carrier authorized in Florida.',
            'An insurance binder. A binder is good for no more than 60 days from the date it is issued and must show the insurance company’s full name.',
            'Form HSMV 83330, the Florida Insurance Affidavit, with the VIN entered accurately.',
            'A Florida policy issued by a risk retention group.',
          ],
        },
        {
          p: 'Every form of proof should show the insurer’s five-digit company code. RS-36 says a card without it should not be accepted. Out-of-state insurance is generally not acceptable for a Florida registration, with narrow exceptions such as military members stationed out of state.',
        },
        { h: 'Temporary tags need proof too' },
        {
          p: 'Procedure RS-31 lists proof of insurance among the requirements for a dealer-issued temporary tag (motorcycles, trailers and federally owned vehicles excepted), and RS-36 states that proof of Florida insurance is required for temporary plates. For a buyer who will register the car in another state, home-state insurance is acceptable, and the insurer’s name, policy number, effective date and phone number go in the comments field. A Florida binder is also acceptable.',
        },
        { h: 'The grace-period trap' },
        {
          p: 'Many buyers believe their current policy automatically covers a newly purchased car for a few days. RS-36 addresses this directly: the policy must be bound on the date of registration, and insurance on the customer’s other vehicles should not be relied on alone. The state matches the VIN against policy data that insurers report. If the insurer cannot confirm coverage, the customer’s driver license and registration can be suspended.',
        },
        {
          p: 'For the dealership, that means a card for a different car, or an affidavit signed on the assumption that “my insurance covers it,” is a deal that can come back after delivery.',
        },
        { h: 'A practical checklist for your desk' },
        {
          ul: [
            'Match the VIN on the card or binder to the vehicle you are selling.',
            'Look for the five-digit company code and the insurer’s full name.',
            'Confirm the coverage is bound today, not “once I call my agent.”',
            'Check that the coverage fits the deal, including what the lender requires on a financed vehicle.',
            'Treat an affidavit, or a card for another vehicle, as a reason to call the carrier before the keys move.',
            'Keep a copy of the proof, and a note of how it was verified, in the deal jacket.',
          ],
        },
        { h: 'Where Universal Dealer Services fits' },
        {
          p: 'Our licensed, bilingual agent works inside your store, verifies each customer’s coverage with the carrier, documents it for the deal jacket and can bind a policy the same day when something is missing. It costs your dealership nothing, and we pay you rent for the desk.',
        },
      ],
      disclaimer:
        'This guide summarizes FLHSMV Procedures RS-36 and RS-31 (revised April 2025) and FLHSMV’s insurance requirements page. County tax collectors may apply these rules differently. It is general information, not legal advice.',
      sources: [SRC.flhsmvInsurance, SRC.rs36, SRC.rs31, SRC.pinellas, SRC.fs324022],
    },
    es: {
      slug: 'comprobante-de-seguro-florida-concesionarios',
      title: 'Comprobante de seguro en Florida para concesionarios: qué se acepta y cuándo verificarlo',
      short: 'Comprobante de seguro en Florida',
      description:
        'Qué acepta Florida como comprobante de seguro para registrar un auto y emitir una placa temporal, el mínimo de $10,000 en PIP y PDL, los binders y la trampa del período de gracia.',
      lede: 'Toda venta en Florida que termina en un registro o una placa temporal necesita un comprobante de seguro. Los manuales de procedimiento del estado explican qué se acepta. Esta es la versión clara para su escritorio de ventas, sus encargados de títulos y su oficina de F&I.',
      blocks: [
        { h: 'La cobertura mínima para registrar un auto en Florida' },
        {
          p: 'El FLHSMV exige que todo vehículo con registro de Florida tenga Protección contra Lesiones Personales (PIP) y Responsabilidad por Daños a la Propiedad (PDL) al momento del registro, con un mínimo de $10,000 de cada una, y que esa cobertura se mantenga sin interrupción.',
        },
        {
          p: 'La responsabilidad por lesiones corporales (bodily injury) no forma parte de ese mínimo para la mayoría de los vehículos particulares. Un comprador puede salir de su lote cumpliendo la ley sin ninguna cobertura por lesiones a terceros, y esa es la brecha que más pesa cuando algo sale mal camino a casa.',
        },
        {
          note: 'En las últimas sesiones legislativas se han presentado proyectos para reemplazar el PIP con responsabilidad por lesiones corporales. A noviembre de 2026, el FLHSMV sigue indicando PIP y PDL como el requisito. Revise la página de seguros del FLHSMV antes de basarse en estos montos.',
        },
        { h: 'Qué se acepta como comprobante de seguro' },
        { p: 'El Procedimiento RS-36 del FLHSMV enumera los comprobantes aceptados:' },
        {
          ol: [
            'La Tarjeta de Identificación de Seguro de Auto de Florida, con el VIN, el tipo de cobertura y la fecha de vigencia, marcada “Florida Insurance Card”.',
            'La misma tarjeta en formato electrónico en un teléfono o tableta, siempre que muestre la misma información: aseguradora, número de póliza con el código de la compañía, fecha de vigencia, cobertura, asegurado y el año, la marca y el VIN del vehículo (o “Fleet Coverage”). La tarjeta no es válida más de un año después de su fecha de vigencia.',
            'Una póliza de seguro de Florida emitida por un agente de Florida para una aseguradora autorizada en el estado.',
            'Un binder (nota de cobertura). El binder vale por un máximo de 60 días desde su emisión y debe mostrar el nombre completo de la aseguradora.',
            'El formulario HSMV 83330, la Declaración Jurada de Seguro de Florida, con el VIN anotado correctamente.',
            'Una póliza de Florida emitida por un grupo de retención de riesgos (risk retention group).',
          ],
        },
        {
          p: 'Todo comprobante debe mostrar el código de cinco dígitos de la aseguradora. El RS-36 indica que una tarjeta sin ese código no debe aceptarse. En general, un seguro de otro estado no se acepta para un registro en Florida, salvo excepciones limitadas como militares destacados fuera del estado.',
        },
        { h: 'Las placas temporales también requieren comprobante' },
        {
          p: 'El Procedimiento RS-31 incluye el comprobante de seguro entre los requisitos para que un concesionario emita una placa temporal (salvo motocicletas, remolques y vehículos del gobierno federal), y el RS-36 indica que se requiere comprobante de seguro de Florida para las placas temporales. Si el comprador va a registrar el auto en otro estado, se acepta el seguro de su estado, y el nombre de la aseguradora, el número de póliza, la fecha de vigencia y el teléfono de la aseguradora se anotan en el campo de comentarios. También se acepta un binder de Florida.',
        },
        { h: 'La trampa del período de gracia' },
        {
          p: 'Muchos compradores creen que su póliza actual cubre automáticamente un auto recién comprado por unos días. El RS-36 lo aborda directamente: la póliza debe estar emitida (bound) en la fecha del registro, y no se debe depender solo del seguro de los otros vehículos del cliente. El estado compara el VIN con los datos de pólizas que reportan las aseguradoras. Si la aseguradora no puede confirmar la cobertura, se le pueden suspender al cliente la licencia de conducir y el registro.',
        },
        {
          p: 'Para el concesionario, una tarjeta de otro auto o una declaración jurada firmada pensando que “mi seguro lo cubre” es una venta que puede regresar después de la entrega.',
        },
        { h: 'Lista práctica para su escritorio' },
        {
          ul: [
            'Compare el VIN de la tarjeta o el binder con el vehículo que está vendiendo.',
            'Busque el código de cinco dígitos y el nombre completo de la aseguradora.',
            'Confirme que la cobertura está emitida hoy, no “cuando llame a mi agente”.',
            'Verifique que la cobertura corresponda a la venta, incluido lo que exige el prestamista en un vehículo financiado.',
            'Si recibe una declaración jurada o una tarjeta de otro vehículo, llame a la aseguradora antes de entregar las llaves.',
            'Guarde una copia del comprobante, y una nota de cómo se verificó, en el expediente de la venta.',
          ],
        },
        { h: 'Cómo ayuda Universal Dealer Services' },
        {
          p: 'Nuestro agente licenciado y bilingüe trabaja dentro de su concesionario, verifica con la aseguradora la cobertura de cada cliente, la documenta para el expediente de la venta y puede emitir una póliza el mismo día si falta algo. A su concesionario no le cuesta nada, y nosotros le pagamos renta por el escritorio.',
        },
      ],
      disclaimer:
        'Esta guía resume los Procedimientos RS-36 y RS-31 del FLHSMV (revisados en abril de 2025) y la página de requisitos de seguro del FLHSMV. Los recaudadores de impuestos de cada condado pueden aplicar estas reglas de forma distinta. Es información general, no asesoría legal.',
      sources: [SRC.flhsmvInsurance, SRC.rs36, SRC.rs31, SRC.pinellas, SRC.fs324022],
    },
  },

  /* ------------------------------------------------------------------ */
  {
    key: 'spot',
    en: {
      slug: 'spot-delivery-insurance-checklist',
      title: 'Spot Deliveries and Insurance: A Checklist for Florida Dealers',
      short: 'Spot deliveries and insurance',
      description:
        'Why spot deliveries carry extra insurance risk for Florida dealers, a real loss example, and a step-by-step checklist to verify coverage before the customer drives away.',
      lede: 'A spot delivery lets the customer drive home before financing is final. It sells cars. It also means a vehicle leaves your lot while the paperwork, and sometimes the insurance, is still in motion.',
      blocks: [
        { h: 'A real loss, and how it started' },
        {
          p: 'Falls Lake Insurance’s loss-control library describes a dealership that spot delivered a car to a young buyer with good credit, a negotiable trade-in title and a proof-of-insurance card. Before the financing was approved, she was in a fatal crash. Her “insurance” turned out to be a 7-day binder for physical damage only, with no liability coverage at all.',
        },
        {
          p: 'Nothing on the card looked wrong at the desk. The coverage simply was not what the deal needed, and nobody checked it with the carrier.',
        },
        { h: 'Why insurance is the weak link in a spot delivery' },
        {
          ul: [
            'Florida’s dangerous instrumentality doctrine can make a vehicle’s owner liable when someone drives it with permission and hurts somebody. If a spot deal unwinds before ownership transfers, who owned the car becomes the question.',
            'Florida’s registration minimum is $10,000 of PIP and $10,000 of property damage liability. Bodily injury liability is not part of it for most private vehicles, so a “fully insured” buyer may carry no coverage for injuring someone else.',
            'Buyers often assume their existing policy covers a new car for a few days. FLHSMV Procedure RS-36 says the policy must be bound on the date of registration and that insurance on other vehicles should not be relied on alone.',
            'Issuing a temporary tag requires proof of insurance under FLHSMV Procedures RS-31 and RS-36, so a weak proof becomes part of your own paperwork.',
          ],
        },
        { h: 'What Florida law says about dealer loaners' },
        {
          p: 'For loaner vehicles given to service customers, section 324.021(9)(c)3 of the Florida Statutes protects a dealer from liability based only on ownership, absent the dealer’s own negligence or criminal wrongdoing, when the dealer executes a written rental or use agreement and obtains a copy of the customer’s driver license and insurance information reflecting at least the state minimum coverage.',
        },
        {
          p: 'That provision covers loaners, not spot deliveries. It does show how much weight Florida law puts on collecting and documenting insurance before a vehicle leaves the lot. Ask your attorney how your store’s exposure on spot deliveries is treated.',
        },
        { h: 'Checklist before the keys move' },
        {
          ol: [
            'Verify coverage live with the carrier for this VIN, bound today.',
            'Confirm the coverage fits the deal: at least the Florida minimum, plus the comprehensive, collision and loss-payee terms most lenders require on a financed vehicle.',
            'Read the proof itself. A short-term or physical-damage-only binder is not liability coverage.',
            'Record the carrier, policy number, company code and effective date in the deal jacket and in the temporary tag system.',
            'Use the spot delivery or conditional delivery agreement your attorney approved, signed before the car leaves.',
            'If the customer is uninsured, or the coverage is wrong, fix it first: bind a policy or hold the delivery.',
            'If the deal unwinds, recover the vehicle promptly and note the insurance status at return.',
          ],
        },
        {
          p: 'The same loss-control guidance suggests limiting spot deliveries to regular or repeat customers and giving employees a written checklist so every step happens every time.',
        },
        { h: 'Where Universal Dealer Services fits' },
        {
          p: 'Our licensed, bilingual agent sits in your store, verifies coverage with the carrier on every spot delivery, documents it and can bind a policy on the spot when the coverage falls short. There is no cost to your dealership, and we pay you rent for the desk.',
        },
      ],
      disclaimer:
        'General information about dealership risk, not legal advice. Have your attorney review your spot delivery agreement and how Florida law applies to your store.',
      sources: [SRC.fallsLake, SRC.fs324021, SRC.rs36, SRC.rs31, SRC.flhsmvInsurance],
    },
    es: {
      slug: 'entrega-inmediata-seguro-lista',
      title: 'Entregas inmediatas y seguro: lista de verificación para concesionarios en Florida',
      short: 'Entregas inmediatas y seguro',
      description:
        'Por qué las entregas inmediatas (spot delivery) traen más riesgo de seguro para los concesionarios en Florida, un caso real y una lista para verificar la cobertura antes de que el cliente se lleve el auto.',
      lede: 'Una entrega inmediata (spot delivery) permite que el cliente se lleve el auto antes de que el financiamiento sea definitivo. Vende autos. También significa que un vehículo sale de su lote mientras los papeles, y a veces el seguro, todavía están en proceso.',
      blocks: [
        { h: 'Un caso real, y cómo empezó' },
        {
          p: 'La biblioteca de prevención de pérdidas de Falls Lake Insurance describe un concesionario que hizo una entrega inmediata a una compradora joven con buen crédito, un título de intercambio negociable y una tarjeta de seguro. Antes de que se aprobara el financiamiento, tuvo un accidente mortal. Su “seguro” resultó ser un binder de 7 días solo por daños físicos, sin ninguna cobertura de responsabilidad civil.',
        },
        {
          p: 'Nada en la tarjeta parecía estar mal en el escritorio. Simplemente la cobertura no era la que la venta necesitaba, y nadie la verificó con la aseguradora.',
        },
        { h: 'Por qué el seguro es el punto débil de una entrega inmediata' },
        {
          ul: [
            'La doctrina de instrumento peligroso de Florida puede hacer responsable al dueño de un vehículo cuando alguien lo maneja con su permiso y lastima a otra persona. Si una venta inmediata se cae antes de que cambie la propiedad, quién era el dueño del auto pasa a ser la pregunta.',
            'El mínimo para registrar un auto en Florida es $10,000 de PIP y $10,000 de responsabilidad por daños a la propiedad. La responsabilidad por lesiones corporales no forma parte de ese mínimo para la mayoría de los vehículos particulares, así que un comprador “asegurado” puede no tener cobertura por lesionar a otra persona.',
            'Los compradores suelen suponer que su póliza actual cubre un auto nuevo por unos días. El Procedimiento RS-36 del FLHSMV indica que la póliza debe estar emitida en la fecha del registro y que no se debe depender solo del seguro de otros vehículos.',
            'Emitir una placa temporal requiere comprobante de seguro según los Procedimientos RS-31 y RS-36 del FLHSMV, así que un comprobante débil queda en sus propios papeles.',
          ],
        },
        { h: 'Lo que dice la ley de Florida sobre los autos de cortesía' },
        {
          p: 'Para los autos de cortesía (loaners) que se prestan a clientes de servicio, la sección 324.021(9)(c)3 de los Estatutos de Florida protege al concesionario de la responsabilidad basada solo en ser el dueño, salvo negligencia o conducta delictiva del propio concesionario, cuando el concesionario firma un contrato escrito de alquiler o uso y obtiene una copia de la licencia de conducir del cliente y de su información de seguro que muestre al menos la cobertura mínima del estado.',
        },
        {
          p: 'Esa disposición cubre los autos de cortesía, no las entregas inmediatas. Pero muestra cuánto peso da la ley de Florida a obtener y documentar el seguro antes de que un vehículo salga del lote. Consulte con su abogado cómo se trata la exposición de su concesionario en las entregas inmediatas.',
        },
        { h: 'Lista de verificación antes de entregar las llaves' },
        {
          ol: [
            'Verifique la cobertura en vivo con la aseguradora para este VIN, emitida hoy.',
            'Confirme que la cobertura corresponde a la venta: al menos el mínimo de Florida, más la cobertura amplia, de choque y el beneficiario de pérdida (loss payee) que exigen la mayoría de los prestamistas en un vehículo financiado.',
            'Lea el comprobante. Un binder de corto plazo o solo por daños físicos no es cobertura de responsabilidad civil.',
            'Anote la aseguradora, el número de póliza, el código de la compañía y la fecha de vigencia en el expediente de la venta y en el sistema de placas temporales.',
            'Use el contrato de entrega inmediata o entrega condicional que aprobó su abogado, firmado antes de que salga el auto.',
            'Si el cliente no tiene seguro, o la cobertura no es la correcta, resuélvalo primero: emita una póliza o detenga la entrega.',
            'Si la venta se cae, recupere el vehículo de inmediato y anote el estado del seguro al recibirlo.',
          ],
        },
        {
          p: 'La misma guía de prevención de pérdidas sugiere limitar las entregas inmediatas a clientes habituales o recurrentes y dar a los empleados una lista escrita para que cada paso se cumpla siempre.',
        },
        { h: 'Cómo ayuda Universal Dealer Services' },
        {
          p: 'Nuestro agente licenciado y bilingüe trabaja en su concesionario, verifica con la aseguradora la cobertura en cada entrega inmediata, la documenta y puede emitir una póliza en el momento si la cobertura no alcanza. No tiene costo para su concesionario, y nosotros le pagamos renta por el escritorio.',
        },
      ],
      disclaimer:
        'Información general sobre los riesgos de un concesionario, no asesoría legal. Pida a su abogado que revise su contrato de entrega inmediata y cómo se aplica la ley de Florida a su concesionario.',
      sources: [SRC.fallsLake, SRC.fs324021, SRC.rs36, SRC.rs31, SRC.flhsmvInsurance],
    },
  },

  /* ------------------------------------------------------------------ */
  {
    key: 'software',
    en: {
      slug: 'insurance-verification-software-vs-in-store-agent',
      title: 'Insurance Verification Software vs. an In-Store Agent',
      short: 'Verification software vs. an in-store agent',
      description:
        'How dealer insurance verification software compares with a licensed agent in your store: cost, what gets checked, who fixes gaps, Spanish-speaking buyers and documentation.',
      lede: 'Search for dealership insurance verification and most of what you find is software. These are useful tools. Here is an honest comparison with a licensed agent working inside your store, so you can choose, or use both.',
      blocks: [
        { h: 'How verification software works' },
        {
          p: 'Products such as Canopy Connect, Dealerware and CheckMyDriver typically send the customer a link or QR code. The customer signs in to their insurer, and the platform pulls the policy details into a record the dealership can review. Some focus on sales, others on loaner and rental fleets.',
        },
        {
          p: 'Pricing varies by product and volume. As one example, Canopy Connect’s website lists dealership plans at $150 a month ($1,800 a year, paid annually) for a single location selling fewer than 100 vehicles a month, and $600 a month ($7,200 a year) for up to 400.',
        },
        { h: 'How an in-store agent works' },
        {
          p: 'A licensed insurance agent works from a desk in your dealership. At delivery, the agent confirms the customer’s coverage with the carrier, documents it for the deal jacket and, when coverage is missing or wrong, quotes and binds a policy on the spot. The agent can also shop the customer’s insurance, which often lowers the monthly payment.',
        },
        { h: 'Side by side' },
        {
          table: {
            head: ['', 'Verification software', 'In-store agent (Universal Dealer Services)'],
            rows: [
              ['Cost to the dealership', 'Monthly subscription (for example, Canopy lists plans from $150 a month)', '$0. Our agency pays your store rent for the desk'],
              ['What gets checked', 'Policy data the customer connects from their insurer', 'Live confirmation with the carrier for the vehicle being sold'],
              ['When coverage is missing or wrong', 'The platform flags it; your staff has to solve it', 'A licensed agent quotes and binds a policy the same day'],
              ['Spanish-speaking customers', 'Depends on the product', 'Bilingual agents handle every step in English or Spanish'],
              ['Shopping the customer’s insurance', 'Not the purpose of the tool', 'Free and optional for the customer'],
              ['Hours', 'Available any time, at any rooftop', 'While the agent is staffed in your store'],
              ['Documentation', 'Digital record in the platform', 'Documented verification for the deal jacket'],
            ],
          },
        },
        { h: 'When software is the better fit' },
        {
          ul: [
            'You need verification around the clock, including online and after-hours deals.',
            'You run a large loaner or rental fleet and want automated checks on every vehicle.',
            'You have many rooftops and no space for an agent at each.',
          ],
        },
        { h: 'When an in-store agent is the better fit' },
        {
          ul: [
            'You want someone who can fix a coverage problem, not just find it, so the deal still closes today.',
            'A large share of your customers prefer Spanish.',
            'You want the insurance step to lower the customer’s monthly payment, which leaves room in the budget for F&I products.',
            'You would rather collect rent than pay a subscription.',
          ],
        },
        {
          note: 'They are not mutually exclusive. Some stores use software for loaners and online deals and an agent on the sales floor.',
        },
      ],
      disclaimer:
        'Product descriptions and pricing are taken from each vendor’s public pages in November 2026 and may change. Check with the vendor for current terms.',
      sources: [SRC.canopy, SRC.dealerware, SRC.checkmydriver],
    },
    es: {
      slug: 'software-de-verificacion-vs-agente-en-sitio',
      title: 'Software de verificación de seguros vs. un agente dentro del concesionario',
      short: 'Software vs. agente en sitio',
      description:
        'Cómo se compara un software de verificación de seguros para concesionarios con un agente licenciado en su tienda: costo, qué se verifica, quién resuelve los problemas, clientes hispanohablantes y documentación.',
      lede: 'Si busca verificación de seguros para concesionarios, casi todo lo que encuentra es software. Son herramientas útiles. Esta es una comparación honesta con un agente licenciado que trabaja dentro de su concesionario, para que usted elija, o use los dos.',
      blocks: [
        { h: 'Cómo funciona el software de verificación' },
        {
          p: 'Productos como Canopy Connect, Dealerware y CheckMyDriver normalmente le envían al cliente un enlace o un código QR. El cliente entra a la cuenta de su aseguradora y la plataforma trae los datos de la póliza a un registro que el concesionario puede revisar. Algunos se enfocan en ventas y otros en flotas de autos de cortesía y alquiler.',
        },
        {
          p: 'Los precios varían según el producto y el volumen. Por ejemplo, el sitio web de Canopy Connect muestra planes para concesionarios de $150 al mes ($1,800 al año, pago anual) para un local que vende menos de 100 vehículos al mes, y de $600 al mes ($7,200 al año) para hasta 400.',
        },
        { h: 'Cómo funciona un agente en sitio' },
        {
          p: 'Un agente de seguros licenciado trabaja desde un escritorio en su concesionario. Al momento de la entrega, confirma con la aseguradora la cobertura del cliente, la documenta para el expediente de la venta y, si la cobertura falta o no es la correcta, cotiza y emite una póliza en el momento. El agente también puede cotizar el seguro del cliente, lo que muchas veces baja su pago mensual.',
        },
        { h: 'Lado a lado' },
        {
          table: {
            head: ['', 'Software de verificación', 'Agente en sitio (Universal Dealer Services)'],
            rows: [
              ['Costo para el concesionario', 'Suscripción mensual (por ejemplo, Canopy muestra planes desde $150 al mes)', '$0. Nuestra agencia le paga renta por el escritorio'],
              ['Qué se verifica', 'Los datos de la póliza que el cliente conecta desde su aseguradora', 'Confirmación en vivo con la aseguradora para el vehículo que se vende'],
              ['Si la cobertura falta o no es la correcta', 'La plataforma lo señala; su personal tiene que resolverlo', 'Un agente licenciado cotiza y emite una póliza el mismo día'],
              ['Clientes hispanohablantes', 'Depende del producto', 'Agentes bilingües atienden cada paso en español o en inglés'],
              ['Cotizar el seguro del cliente', 'No es el propósito de la herramienta', 'Gratis y opcional para el cliente'],
              ['Horario', 'Disponible a cualquier hora, en cualquier concesionario', 'Mientras el agente esté en su concesionario'],
              ['Documentación', 'Registro digital en la plataforma', 'Verificación documentada para el expediente de la venta'],
            ],
          },
        },
        { h: 'Cuándo conviene más el software' },
        {
          ul: [
            'Necesita verificación a toda hora, incluidas las ventas en línea y fuera de horario.',
            'Maneja una flota grande de autos de cortesía o alquiler y quiere verificaciones automáticas en cada vehículo.',
            'Tiene muchos concesionarios y no hay espacio para un agente en cada uno.',
          ],
        },
        { h: 'Cuándo conviene más un agente en sitio' },
        {
          ul: [
            'Quiere a alguien que resuelva el problema de cobertura, no solo que lo encuentre, para que la venta se cierre hoy.',
            'Una gran parte de sus clientes prefiere el español.',
            'Quiere que el paso del seguro baje el pago mensual del cliente, lo que deja espacio en el presupuesto para los productos de F&I.',
            'Prefiere cobrar renta en vez de pagar una suscripción.',
          ],
        },
        {
          note: 'No son excluyentes. Algunos concesionarios usan software para los autos de cortesía y las ventas en línea, y un agente en el piso de ventas.',
        },
      ],
      disclaimer:
        'Las descripciones y los precios de los productos se tomaron de las páginas públicas de cada proveedor en noviembre de 2026 y pueden cambiar. Consulte con el proveedor las condiciones actuales.',
      sources: [SRC.canopy, SRC.dealerware, SRC.checkmydriver],
    },
  },

  /* ------------------------------------------------------------------ */
  {
    key: 'spanish',
    en: {
      slug: 'spanish-speaking-customers-f-and-i',
      title: 'Serving Spanish-Speaking Buyers in F&I: Insurance Without the Language Barrier',
      short: 'Spanish-speaking buyers in F&I',
      description:
        'Why the insurance step stalls Spanish-first buyers in Florida showrooms, a bilingual glossary of coverage terms, and how licensed bilingual agents keep the deal and the F&I menu moving.',
      lede: 'Hispanic buyers account for roughly one in five new-vehicle purchases nationally, according to NADA data reported by Demand Local, and S&P Global Mobility research reported by AutoProyecto attributes most of the industry’s recent sales growth to them. In much of Florida, Spanish is the first language for a large share of the people at your desk.',
      blocks: [
        { h: 'Where the deal stalls' },
        {
          p: 'The insurance step is often the one part of the purchase that still happens only in English: a call to a carrier’s call center, an ID card and declarations page in English, and terms like PIP, PDL and deductible that are confusing in any language. A buyer who is not sure what they are covered for slows down, delivery waits, and the F&I conversation starts with a customer who is already worried about the payment.',
        },
        { h: 'A bilingual glossary for your desk' },
        {
          table: {
            head: ['English', 'Español', 'What it means'],
            rows: [
              ['Personal Injury Protection (PIP)', 'Protección contra Lesiones Personales (PIP)', 'Pays part of your own medical costs after a crash, whoever caused it. Florida requires at least $10,000.'],
              ['Property Damage Liability (PDL)', 'Responsabilidad por Daños a la Propiedad (PDL)', 'Pays for damage you cause to someone else’s property. Florida requires at least $10,000.'],
              ['Bodily Injury Liability (BIL)', 'Responsabilidad por Lesiones Corporales (BIL)', 'Pays for injuries you cause to other people. Not part of Florida’s registration minimum for most private vehicles.'],
              ['Comprehensive', 'Cobertura amplia (comprehensive)', 'Damage to your car from theft, weather, fire and similar events.'],
              ['Collision', 'Choque (collision)', 'Damage to your car from a crash.'],
              ['Deductible', 'Deducible', 'The part of a covered repair the customer pays first.'],
              ['Loss payee / lienholder', 'Beneficiario de pérdida / acreedor prendario', 'The lender listed on the policy on a financed vehicle.'],
              ['Binder', 'Binder (nota de cobertura)', 'Temporary proof of coverage. In Florida it is good for no more than 60 days.'],
              ['Declarations page', 'Página de declaraciones', 'The summary of the policy: who and what is covered, limits and dates.'],
            ],
          },
        },
        { h: 'What good bilingual service looks like' },
        {
          ul: [
            'A licensed agent explains the coverage in the customer’s language. In Florida, soliciting insurance requires a license, so a salesperson translating an insurance call is not a substitute.',
            'The customer leaves knowing what they are covered for, with documents they can read.',
            'Verification and, when needed, a new policy happen at the store, so delivery does not wait on a phone call.',
            'If the agent finds a lower rate, the monthly savings stay in the customer’s budget, which is room for the F&I menu.',
          ],
        },
        { h: 'Where Universal Dealer Services fits' },
        {
          p: 'Every Universal agent is licensed in Florida and works in English and Spanish. Our agent verifies coverage, explains it and, when needed, binds a policy the same day, at no cost to your dealership. We pay you rent for the desk.',
        },
      ],
      disclaimer:
        'Glossary definitions are simplified for conversation at the desk. The policy itself governs what is covered. Coverage minimums are from FLHSMV as of November 2026.',
      sources: [SRC.demandLocal, SRC.autoproyecto, SRC.flhsmvInsurance, SRC.rs36, SRC.fs626112],
    },
    es: {
      slug: 'clientes-hispanohablantes-en-fi',
      title: 'Clientes hispanohablantes en F&I: el seguro sin barrera de idioma',
      short: 'Clientes hispanohablantes en F&I',
      description:
        'Por qué el paso del seguro detiene a los compradores que prefieren el español en Florida, un glosario bilingüe de coberturas y cómo los agentes bilingües licenciados mantienen en marcha la venta y el menú de F&I.',
      lede: 'Los compradores hispanos representan cerca de una de cada cinco compras de vehículos nuevos a nivel nacional, según datos de NADA publicados por Demand Local, y un estudio de S&P Global Mobility publicado por AutoProyecto les atribuye la mayor parte del crecimiento reciente en ventas de la industria. En buena parte de Florida, el español es el primer idioma de muchas de las personas que se sientan en su escritorio.',
      blocks: [
        { h: 'Dónde se detiene la venta' },
        {
          p: 'El paso del seguro muchas veces es la única parte de la compra que todavía ocurre solo en inglés: una llamada al centro de atención de una aseguradora, una tarjeta y una página de declaraciones en inglés, y términos como PIP, PDL y deducible que confunden en cualquier idioma. Un comprador que no sabe bien qué le cubre su seguro se frena, la entrega espera y la conversación de F&I empieza con un cliente que ya está preocupado por el pago.',
        },
        { h: 'Glosario bilingüe para su escritorio' },
        {
          table: {
            head: ['Inglés', 'Español', 'Qué significa'],
            rows: [
              ['Personal Injury Protection (PIP)', 'Protección contra Lesiones Personales (PIP)', 'Paga parte de sus propios gastos médicos después de un accidente, sin importar quién lo causó. Florida exige al menos $10,000.'],
              ['Property Damage Liability (PDL)', 'Responsabilidad por Daños a la Propiedad (PDL)', 'Paga los daños que usted cause a la propiedad de otra persona. Florida exige al menos $10,000.'],
              ['Bodily Injury Liability (BIL)', 'Responsabilidad por Lesiones Corporales (BIL)', 'Paga las lesiones que usted cause a otras personas. No forma parte del mínimo para registrar la mayoría de los vehículos particulares en Florida.'],
              ['Comprehensive', 'Cobertura amplia (comprehensive)', 'Daños a su auto por robo, clima, incendio y eventos similares.'],
              ['Collision', 'Choque (collision)', 'Daños a su auto por un accidente.'],
              ['Deductible', 'Deducible', 'La parte de una reparación cubierta que el cliente paga primero.'],
              ['Loss payee / lienholder', 'Beneficiario de pérdida / acreedor prendario', 'El prestamista que aparece en la póliza de un vehículo financiado.'],
              ['Binder', 'Binder (nota de cobertura)', 'Comprobante temporal de cobertura. En Florida vale por un máximo de 60 días.'],
              ['Declarations page', 'Página de declaraciones', 'El resumen de la póliza: quién y qué está cubierto, límites y fechas.'],
            ],
          },
        },
        { h: 'Cómo se ve un buen servicio bilingüe' },
        {
          ul: [
            'Un agente licenciado explica la cobertura en el idioma del cliente. En Florida, ofrecer seguros requiere licencia, así que un vendedor que traduce una llamada de seguros no es un sustituto.',
            'El cliente se va sabiendo qué le cubre su seguro, con documentos que puede leer.',
            'La verificación y, si hace falta, una póliza nueva se resuelven en el concesionario, para que la entrega no espere una llamada.',
            'Si el agente encuentra una tarifa más baja, el ahorro mensual se queda en el presupuesto del cliente, y ese es espacio para el menú de F&I.',
          ],
        },
        { h: 'Cómo ayuda Universal Dealer Services' },
        {
          p: 'Cada agente de Universal tiene licencia en Florida y atiende en español y en inglés. Nuestro agente verifica la cobertura, la explica y, si hace falta, emite una póliza el mismo día, sin costo para su concesionario. Nosotros le pagamos renta por el escritorio.',
        },
      ],
      disclaimer:
        'Las definiciones del glosario están simplificadas para la conversación en el escritorio. Lo que está cubierto lo determina la póliza. Los mínimos de cobertura son del FLHSMV a noviembre de 2026.',
      sources: [SRC.demandLocal, SRC.autoproyecto, SRC.flhsmvInsurance, SRC.rs36, SRC.fs626112],
    },
  },
];

export const guideIndex = {
  en: {
    path: '/guides/',
    title: 'Guides for Florida Dealers',
    metaTitle: 'Insurance Guides for Florida Car Dealers | Universal Dealer Services',
    description:
      'Plain-language guides for Florida dealers: proof of insurance rules, spot delivery checklists, verification software vs. an in-store agent, and serving Spanish-speaking buyers.',
    lede: 'Practical, sourced guides on insurance at the point of sale, written for GMs, F&I offices and title clerks in Florida.',
    crumb: 'Guides',
    read: 'Read the guide',
    reviewed: 'Reviewed',
    sources: 'Sources',
    cta: 'Want a licensed agent handling this in your store? Book a 30-minute walkthrough.',
    ctaButton: 'Book a walkthrough',
    more: 'More guides',
  },
  es: {
    path: '/es/guias/',
    title: 'Guías para concesionarios en Florida',
    metaTitle: 'Guías de seguros para concesionarios en Florida | Universal Dealer Services',
    description:
      'Guías claras para concesionarios en Florida: comprobantes de seguro, lista para entregas inmediatas, software de verificación vs. un agente en sitio y clientes hispanohablantes.',
    lede: 'Guías prácticas y con fuentes sobre el seguro en el punto de venta, escritas para gerentes generales, oficinas de F&I y encargados de títulos en Florida.',
    crumb: 'Guías',
    read: 'Leer la guía',
    reviewed: 'Revisada',
    sources: 'Fuentes',
    cta: '¿Quiere un agente licenciado que se encargue de esto en su concesionario? Agende una visita de 30 minutos.',
    ctaButton: 'Agende una visita',
    more: 'Más guías',
  },
};

export const guidePath = (guide, lang) =>
  lang === 'es' ? `/es/guias/${guide.es.slug}/` : `/guides/${guide.en.slug}/`;

export const guideBySlug = (slug, lang) => GUIDES.find((g) => g[lang].slug === slug);
