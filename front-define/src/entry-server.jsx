/* eslint-disable react-refresh/only-export-components -- entrada del build SSR, no se usa en el navegador */
// Render en el build (no en un servidor): scripts/prerender.js llama a
// render(url) por cada ruta y escribe el HTML resultante dentro de #root.
// Así el contenido viaja en el HTML inicial y quien no ejecuta JavaScript
// (el rastreador de Meta, curl, la primera pasada de Google) lo ve igual.
import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Layout } from './App.jsx';

export { ROUTES } from './seo/routes.js';
export * as site from './seo/site.js';

export function render(url) {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <Layout />
      </StaticRouter>
    </StrictMode>
  );
}
