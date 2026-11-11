# Universal Dealer Services

Dedicated B2B site for the auto dealer program of [Universal Insurance Brokers](https://universalinsurancebroker.com): on-site insurance verification inside Florida dealerships, free to the dealer, with rent paid to the store.

Built with Next.js 14 (static export) + Tailwind CSS. Part of the UIB website ecosystem.

## Develop

```bash
npm install
npm run dev
```

## Deploy

`npm run build` outputs a fully static site to `out/`. Import the repo into Vercel (zero config) or Cloudflare Pages (build command `npm run build`, output directory `out`).

Point `universaldealerservices.com` at the deployment, then add a "Dealer Ventures" link from universalinsurancebroker.com to this site to pass link equity both ways.

## Notes

- **Hero image** lives in `public/hero.jpg` (and `hero-sm.jpg` for phones). It was generated with Higgsfield; the desk sign's Spanish text was corrected from "Segora de Auto" to "Seguro de Auto".
- **Contact form** (`app/ContactForm.jsx`) posts to FormSubmit using the same inbox alias as universalinsurancebroker.com. FormSubmit activates each site origin once: the first submission from `https://universaldealerservices.com/` sends an "Activate Form" email to the lead inbox, and nothing is delivered until it is clicked.
- **Sources** for every statistic are listed in the footer. Keep claims tied to a source and have the legal/liability wording reviewed by an attorney before changing it.

## To do

- [ ] Add a Spanish (`/es`) version of the page for bilingual SEO.
