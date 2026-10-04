import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { seoFor } from '../seo/routes';
import { abs, businessLd, SITE_NAME, LOCALE } from '../seo/site';

// En una SPA el <head> del index.html se queda congelado: sin esto, las cuatro
// rutas comparten título, descripción y canonical. El build además deja una
// copia estática de estas mismas etiquetas en cada URL (scripts/prerender.js),
// así que el crawler ve lo correcto incluso antes de ejecutar el JS.

const setMeta = (selector, attrs) => {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement(attrs.rel ? 'link' : 'meta');
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
};

export default function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = seoFor(pathname);
    const url = abs(seo.canonical);

    document.title = seo.title;
    setMeta('meta[name="description"]', { name: 'description', content: seo.description });
    setMeta('link[rel="canonical"]', { rel: 'canonical', href: url });
    setMeta('meta[name="robots"]', {
      name: 'robots',
      content: seo.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1',
    });

    setMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' });
    setMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: SITE_NAME });
    setMeta('meta[property="og:locale"]', { property: 'og:locale', content: LOCALE });
    setMeta('meta[property="og:title"]', { property: 'og:title', content: seo.title });
    setMeta('meta[property="og:description"]', { property: 'og:description', content: seo.description });
    setMeta('meta[property="og:url"]', { property: 'og:url', content: url });
    setMeta('meta[property="og:image"]', { property: 'og:image', content: seo.image });

    setMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
    setMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: seo.title });
    setMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: seo.description });
    setMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: seo.image });

    // La ficha del negocio va en todas las páginas; las migas solo donde aplican.
    let script = document.getElementById('ld-json');
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = 'ld-json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify([businessLd(), ...seo.ld]);
  }, [pathname]);

  return null;
}
