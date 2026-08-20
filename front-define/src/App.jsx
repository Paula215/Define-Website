import { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import WhatsappFab from './components/ui/WhatsappFab';
import Home from './components/Home/Home';
import QuienSoy from './components/Pages/QuienSoy';
import Contacto from './components/Pages/Contacto';
import ServicesPage from './components/Pages/Service';

// Al navegar: arriba de todo, o al ancla si la URL trae hash (#servicios, #contacto…).
const ScrollToLocation = () => {
  const { pathname, hash, key } = useLocation();
  const prevPathname = useRef(null);

  // `key` cambia en cada navegación, así que volver a pulsar el mismo
  // enlace (p. ej. Contacto) vuelve a llevar a la sección.
  useEffect(() => {
    const samePage = prevPathname.current === pathname;
    prevPathname.current = pathname;

    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    let tries = 0;
    let timer;
    let expectedY = null;

    const goToAnchor = () => {
      // Si el usuario ya movió la página, no le peleamos el scroll.
      if (expectedY !== null && Math.abs(window.scrollY - expectedY) > 4) return;

      const target = document.querySelector(hash);
      if (!target) return;

      // Dentro de la misma página el desplazamiento es suave. Al llegar desde
      // otra ruta se salta directo y se reajusta unas veces, porque las
      // imágenes cambian el alto del documento mientras cargan.
      target.scrollIntoView({ behavior: samePage ? 'smooth' : 'auto' });
      expectedY = window.scrollY;

      if (!samePage && ++tries < 5) timer = setTimeout(goToAnchor, 300);
    };

    goToAnchor();
    return () => clearTimeout(timer);
  }, [pathname, hash, key]);

  return null;
};

const Layout = () => {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <div className="overflow-x-hidden">
      <ScrollToLocation />
      <Navbar />
      {/* El header es fijo: las páginas internas necesitan compensar su alto. */}
      <div className={isHome ? undefined : 'page-offset'}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:category" element={<ServicesPage />} />
          <Route path="/services/:category/:subcategory" element={<ServicesPage />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/quien-soy" element={<QuienSoy />} />
        </Routes>
      </div>
      <Footer />
      <WhatsappFab />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Layout />
    </Router>
  );
};

export default App;
