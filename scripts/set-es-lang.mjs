// The site has one root layout, which renders <html lang="en">. After the static
// export, mark every page under out/es/ as Spanish so browsers, screen readers
// and search engines read it as Spanish.
import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const root = join(process.cwd(), 'out', 'es');
let count = 0;
function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (name.endsWith('.html')) {
      const html = readFileSync(p, 'utf8');
      const next = html.replace('<html lang="en"', '<html lang="es"');
      if (next !== html) {
        writeFileSync(p, next);
        count++;
      }
    }
  }
}
walk(root);
if (count === 0) {
  console.error('set-es-lang: no Spanish pages were updated');
  process.exit(1);
}
console.log(`set-es-lang: marked ${count} page(s) as lang="es"`);
