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

## To do

- [ ] **Localize the hero image**: the hero currently hotlinks a Higgsfield-generated image from its CDN. Download it to `public/hero.jpg` and change the `src` in `app/page.jsx` (Hero section) and the OpenGraph image URL in `app/layout.jsx` to `/hero.jpg` so it never breaks.
- [ ] Add a Spanish (`/es`) version of the page for bilingual SEO.
- [ ] Wire the contact section to a form endpoint (currently tel/mailto links).
