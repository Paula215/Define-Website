import { useEffect } from 'react';
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
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

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
