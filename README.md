# Universal Dealer Services

Dedicated B2B site for the auto dealer program of [Universal Insurance Brokers](https://universalinsurancebroker.com): on-site insurance verification inside Florida dealerships, free to the dealer, with rent paid to the store.

Built with Next.js 14 (static export) + Tailwind CSS. Part of the UIB website ecosystem.

## Develop

```bash
npm install
npm run dev
```

## Structure

- `content/en.js`, `content/es.js` — all page copy (English at `/`, Spanish at `/es/`). Edit copy here; both pages share `components/DealerPage.jsx`.
- `app/(en)` and `app/(es)/es` — one root layout per language so each page ships the right `<html lang>`, canonical, and hreflang tags.
- `lib/site.js` — phone, email, hero image, metadata and InsuranceAgency JSON-LD builders.
- `public/hero.jpg` — hero / OpenGraph image (served locally).

## Deploy

`npm run build` outputs a fully static site to `out/`. The repo is set up for Vercel with zero config; `universaldealerservices.com` is registered on Vercel — attach it under Project → Settings → Domains.

### Contact form

The walkthrough form posts JSON to `NEXT_PUBLIC_FORM_ENDPOINT` if that environment variable is set (any Formspree / Basin / Getform-style endpoint). Without it, the form opens the visitor's email app with the request pre-filled to universalinsurancebroker@gmail.com. To turn on direct submissions: create a form at formspree.io, then in Vercel add `NEXT_PUBLIC_FORM_ENDPOINT=https://formspree.io/f/<id>` and redeploy.

## To do

- [x] Localize the hero image (`public/hero.jpg`)
- [x] Spanish `/es/` page with hreflang + sitemap
- [x] Contact form (set `NEXT_PUBLIC_FORM_ENDPOINT` to receive submissions directly)
- [ ] Attach `universaldealerservices.com` to the Vercel project
- [ ] Add a "Dealer Ventures" link from universalinsurancebroker.com to this site to pass link equity both ways
