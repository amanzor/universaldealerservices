// Renders print/leave-behind.html to two one-page, letter-size PDFs:
//   public/universal-dealer-services-one-pager.pdf     (English)
//   public/universal-dealer-services-one-pager-es.pdf  (Spanish)
// Needs Playwright with Chromium:
//   npx playwright install chromium   (once)
//   node scripts/build-leave-behind.mjs
import { createRequire } from 'node:module';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

const require = createRequire(import.meta.url);
const { chromium } = require('playwright');

const root = process.cwd();
const src = pathToFileURL(join(root, 'print', 'leave-behind.html')).href;
const outputs = {
  en: join(root, 'public', 'universal-dealer-services-one-pager.pdf'),
  es: join(root, 'public', 'universal-dealer-services-one-pager-es.pdf'),
};

const browser = await chromium.launch();
for (const [lang, out] of Object.entries(outputs)) {
  const page = await browser.newPage();
  await page.goto(`${src}?lang=${lang}`, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);

  // Refuse to print a clipped or two-page sheet.
  const over = await page.$eval('.page', (p) => p.scrollHeight - p.clientHeight);
  if (over > 0) {
    console.error(`${lang}: content overflows the page by ${over}px`);
    process.exit(1);
  }
  await page.pdf({ path: out, format: 'Letter', printBackground: true, preferCSSPageSize: true, pageRanges: '1' });
  await page.close();
  console.log(`Wrote ${out}`);
}
await browser.close();
