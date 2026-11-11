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

- **Two languages:** all copy lives in `app/content.js` (`en` and `es`); `app/DealerPage.jsx` is the shared layout. Change a claim, number or source in both languages. `npm run build` runs `scripts/set-es-lang.mjs`, which marks `out/es/` pages as `lang="es"`. Page titles, descriptions and hreflang live in `app/seo.js`; `app/sitemap.js` and `app/robots.js` generate `sitemap.xml` and `robots.txt`.

- **Leave-behind:** `print/leave-behind.html` is a two-sided, letter-size one-pager (front English, back Spanish) with QR codes to `/` and `/es/`. Run `node scripts/build-leave-behind.mjs` (needs Playwright with Chromium) to rebuild `public/universal-dealer-services-one-pager.pdf`; the script refuses to write a PDF if either side overflows the page. The site links to it from the contact section. Keep its copy and sources in step with `app/content.js`.

## To do

- [x] Spanish version at `/es/` (hreflang, sitemap, `lang="es"`).
