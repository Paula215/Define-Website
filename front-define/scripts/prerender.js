// Genera una copia estática de index.html por cada URL indexable, con su
// propio <head>, más el sitemap y el robots.txt.
//
// El sitio es una SPA: sin esto, todas las rutas devuelven el mismo HTML con
// el mismo título, y quien lee el HTML sin ejecutar JavaScript —el rastreador
// en su primera pasada, WhatsApp, Facebook, X— ve siempre la portada. Vercel
// sirve el archivo del disco antes de aplicar el rewrite comodín, así que
// /services/depilacion entrega su propio HTML y el router de React continúa
// como siempre desde ahí.
import fs from 'fs';
import path from 'path';
import { ROUTES } from '../src/seo/routes.js';
import { SITE_URL, SITE_NAME, LOCALE, OG_IMAGE, abs, businessLd, breadcrumbLd } from '../src/seo/site.js';

const DIST = path.resolve(process.cwd(), 'dist');
const START = '<!--seo-->';
const END = '<!--/seo-->';

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const head = (route) => {
  const url = abs(route.path);
  const image = route.image || OG_IMAGE;
  const ld = [businessLd()];
  if (route.breadcrumb && route.breadcrumb.length > 1) ld.push(breadcrumbLd(route.breadcrumb));
  if (route.extraLd) ld.push(...route.extraLd());

  return [
    START,
    `    <title>${esc(route.title)}</title>`,
    `    <meta name="description" content="${esc(route.description)}" />`,
    `    <link rel="canonical" href="${esc(url)}" />`,
    `    <meta property="og:type" content="website" />`,
    `    <meta property="og:site_name" content="${esc(SITE_NAME)}" />`,
    `    <meta property="og:locale" content="${LOCALE}" />`,
    `    <meta property="og:title" content="${esc(route.title)}" />`,
    `    <meta property="og:description" content="${esc(route.description)}" />`,
    `    <meta property="og:url" content="${esc(url)}" />`,
    `    <meta property="og:image" content="${esc(image)}" />`,
    `    <meta property="og:image:width" content="1200" />`,
    `    <meta property="og:image:height" content="630" />`,
    `    <meta name="twitter:card" content="summary_large_image" />`,
    `    <meta name="twitter:title" content="${esc(route.title)}" />`,
    `    <meta name="twitter:description" content="${esc(route.description)}" />`,
    `    <meta name="twitter:image" content="${esc(image)}" />`,
    `    <script type="application/ld+json" id="ld-json">${JSON.stringify(ld).replace(/</g, '\\u003c')}</script>`,
    `    ${END}`,
  ].join('\n');
};

const template = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8');
const from = template.indexOf(START);
const to = template.indexOf(END);
if (from === -1 || to === -1) {
  console.error(`prerender: faltan los marcadores ${START} … ${END} en index.html`);
  process.exit(1);
}

for (const route of ROUTES) {
  const html = template.slice(0, from) + head(route) + template.slice(to + END.length);
  const out =
    route.path === '/'
      ? path.join(DIST, 'index.html')
      : path.join(DIST, route.path.replace(/^\//, ''), 'index.html');

  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, html);
  console.log('prerender:', path.relative(DIST, out));
}

const today = new Date().toISOString().slice(0, 10);
const sitemap =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  ROUTES.map(
    (r) =>
      `  <url>\n    <loc>${abs(r.path)}</loc>\n    <lastmod>${today}</lastmod>\n` +
      `    <changefreq>${r.path === '/' ? 'weekly' : 'monthly'}</changefreq>\n` +
      `    <priority>${r.path === '/' ? '1.0' : (r.priority ?? 0.8).toFixed(1)}</priority>\n  </url>`
  ).join('\n') +
  `\n</urlset>\n`;
fs.writeFileSync(path.join(DIST, 'sitemap.xml'), sitemap);

fs.writeFileSync(
  path.join(DIST, 'robots.txt'),
  `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`
);

console.log(`prerender: ${ROUTES.length} rutas, sitemap.xml y robots.txt`);
