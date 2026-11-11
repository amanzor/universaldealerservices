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

- **Hero image** lives in `public/hero.jpg` (1344×752) and `hero-sm.jpg` (672×376, phones and the one-pager). Generated with Higgsfield (GPT Image): a Latina advisor with a Black and a white customer; the desk sign and folder carry the Universal Dealer Services logo and the clipboard shows a sample quote table. If you replace it, keep the same sizes and rebuild the one-pagers with `node scripts/build-leave-behind.mjs`.
- **Logo:** source files are in `brand/` (`uds-mark.svg` rounded, `uds-mark-square.svg` full-bleed, plus PNG exports for directories). The site uses `app/icon.png`, `app/apple-icon.png`, `app/favicon.ico` and `public/logo.png` (structured data); regenerate all of them from the SVG if the mark changes.
- **Contact form** (`app/ContactForm.jsx`) posts to FormSubmit using the same inbox alias as universalinsurancebroker.com. FormSubmit activates each site origin once: the first submission from `https://universaldealerservices.com/` sends an "Activate Form" email to the lead inbox, and nothing is delivered until it is clicked.
- **Sources** for every statistic are listed in the footer. Keep claims tied to a source and have the legal/liability wording reviewed by an attorney before changing it.

- **Two languages:** all copy lives in `app/content.js` (`en` and `es`); `app/DealerPage.jsx` is the shared layout. Change a claim, number or source in both languages. `npm run build` runs `scripts/set-es-lang.mjs`, which marks `out/es/` pages as `lang="es"`. Page titles, descriptions and hreflang live in `app/seo.js`; `app/sitemap.js` and `app/robots.js` generate `sitemap.xml` and `robots.txt`.

- **Leave-behind:** `print/leave-behind.html` is a one-page, letter-size summary (open with `?lang=en` or `?lang=es`), with a QR code to `/` or `/es/`. Run `node scripts/build-leave-behind.mjs` (needs Playwright with Chromium) to rebuild `public/universal-dealer-services-one-pager.pdf` and `public/universal-dealer-services-one-pager-es.pdf`; the script refuses to write a PDF that runs past one page. Each language's contact section links to its own PDF. Keep it short: one idea, three benefits, three steps, the terms.

## To do

- [x] Spanish version at `/es/` (hreflang, sitemap, `lang="es"`).
