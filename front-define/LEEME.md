# Rediseño Define — cómo aplicarlo

## 1. Copiar archivos

| Desde `fixed/` | Hacia tu proyecto |
|---|---|
| `styles/define.css` | `src/styles/define.css` |
| `hooks/useMotion.js` | `src/hooks/useMotion.js` |
| `Navbar/Navbar.jsx` | `src/components/Navbar/Navbar.jsx` |
| `Home/*.jsx` | `src/components/Home/` |
| `Footer/Footer.jsx` | `src/components/Footer/Footer.jsx` |
| `ui/WhatsappFab.jsx` | `src/components/ui/WhatsappFab.jsx` |
| `ui/ServiceCard.jsx` | `src/components/ui/ServiceCard.jsx` (para la página de servicio) |

Archivos nuevos que no tenías: `Marquee.jsx`, `Process.jsx`, `Quote.jsx`, `Gallery.jsx`, `Contact.jsx`, `CtaBand.jsx`, `Navbar.jsx`, `useMotion.js`, `define.css`.
`Home.jsx`, `Hero.jsx`, `Us.jsx`, `Services.jsx`, `Footer.jsx` reemplazan los existentes.

## 2. Importar el CSS una sola vez

En `src/main.jsx`, después de `index.css`:

```js
import './index.css';
import './styles/define.css';
```

## 3. Fuentes

En `index.html`, dentro de `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Vidaloka&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
```

(Si ya cargas Vidaloka desde `index.css`, solo agrega Inter.)

## 4. Montar el layout

Donde tengas el layout de la app (`App.jsx` o similar):

```jsx
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import WhatsappFab from './components/ui/WhatsappFab';

// ...
<Navbar />
<Routes>{/* tus rutas */}</Routes>
<Footer />
<WhatsappFab />
```

## Notas

- **Tailwind sigue funcionando.** `define.css` usa clases propias (`.card`, `.sec`, `.wrap`…), no pisa las utilidades de Tailwind. Puedes migrar el resto de páginas poco a poco.
- **Cards uniformes**: la grilla `.cards` usa `1px` de gap con fondo `var(--line)` para las líneas divisorias, y cada `.card` es `flex-column` con `height:100%`, así todas miden igual sin importar el largo del texto.
- **Tipografía responsiva**: todo sale de tokens `clamp()` en `:root` (`--s1`, `--s2`, `--h1`, `--h2`, `--h3`). Cambia un token y escala toda la página.
- **Movimiento**: parallax y tilt 3D solo en escritorio con puntero fino, y ambos se desactivan con `prefers-reduced-motion`.
- **Fotos**: la galería usa imágenes de stock que ya estaban en tu repo. Cuando tengas fotos propias del studio, reemplázalas en `Gallery.jsx` y podrás volver a titular la sección "Resultados reales".
