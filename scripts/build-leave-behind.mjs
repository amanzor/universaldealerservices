// Renders print/leave-behind.html to a two-page, letter-size PDF
// (page 1 English, page 2 Spanish) at public/universal-dealer-services-one-pager.pdf,
// so it is also downloadable from the site. Needs Playwright with Chromium:
//   npx playwright install chromium   (once)
//   node scripts/build-leave-behind.mjs
import { createRequire } from 'node:module';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

const require = createRequire(import.meta.url);
const { chromium } = require('playwright');

const root = process.cwd();
const src = pathToFileURL(join(root, 'print', 'leave-behind.html')).href;
const out = join(root, 'public', 'universal-dealer-services-one-pager.pdf');

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto(src, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);

// Fail loudly if the content overflows a page instead of printing a clipped sheet.
const overflow = await page.$$eval('.page', (pages) =>
  pages.map((p) => ({ lang: p.lang, over: p.scrollHeight - p.clientHeight })).filter((x) => x.over > 0),
);
if (overflow.length) {
  console.error('Content overflows the page:', overflow);
  process.exit(1);
}

await page.pdf({ path: out, format: 'Letter', printBackground: true, preferCSSPageSize: true });
await browser.close();
console.log(`Wrote ${out}`);
