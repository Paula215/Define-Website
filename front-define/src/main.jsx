import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import './styles/define.css'
import './styles/servicios.css'
import './styles/quien-soy.css'
import './styles/micropigmentacion.css'
import App from './App.jsx'

const root = document.getElementById('root')
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// En producción #root ya trae el HTML prerenderizado (scripts/prerender.js):
// React lo "hidrata" en vez de volver a pintarlo. En `vite dev` llega vacío.
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)
