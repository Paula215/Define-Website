import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import QuienSoy from './components/Pages/QuienSoy';
import Contacto from './components/Pages/Contacto';
import ServicesPage from './components/Pages/Service';

const App = () => {
  return (
    <Router>
      <div className="overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:category" element={<ServicesPage />} />
          <Route path="/services/:category/:subcategory" element={<ServicesPage />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/quien-soy" element={<QuienSoy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;