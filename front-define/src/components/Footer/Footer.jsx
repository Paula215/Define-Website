import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo-sinfondo.png';

export default function Footer() {
  return (
    <footer>
      <div className="wrap foot">
        <div>
          <img className="foot-logo" src={logo} alt="Define" />
          <p style={{ marginTop: '1.25rem', maxWidth: '30ch' }}>
            Studio especializado en micropigmentación y estética integral en San Borja, Lima.
          </p>
        </div>
        <div className="fcol">
          <h4>Navegación</h4>
          <Link to="/">Inicio</Link>
          <Link to="/services">Servicios</Link>
          <Link to="/quien-soy">Nosotros</Link>
          <Link to="/contacto">Contacto</Link>
          <Link to="/#proceso">Proceso</Link>
          <Link to="/#galeria">Galería</Link>
        </div>
        <div className="fcol">
          <h4>Contacto</h4>
          <a href="tel:+51958336208">+51 958 336 208</a>
          <a href="mailto:definebellezaintegral@gmail.com">definebellezaintegral@gmail.com</a>
          <a href="https://wa.me/51958336208" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <a href="https://www.instagram.com/define.belleza.integral" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.facebook.com/Define.Belleza.Integral" target="_blank" rel="noopener noreferrer">Facebook</a>
        </div>
      </div>
      <div className="wrap fbot">
        <span>© {new Date().getFullYear()} Define. Todos los derechos reservados.</span>
        <span>Av. Aviación 3367, San Borja — Lima</span>
      </div>
    </footer>
  );
}
