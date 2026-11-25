import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo-sinfondo.png';
import { BUSINESS, BUSINESS_DESCRIPTION, ADDRESS_FULL, HOURS_TEXT } from '../../seo/site';

// Los datos del negocio van en texto (no en imagen) en todas las páginas: es lo
// que leen Meta, Google y cualquier robot para saber quiénes somos.
export default function Footer() {
  return (
    <footer>
      <div className="wrap foot">
        <div>
          <img className="foot-logo" src={logo} alt="Define Belleza Integral" />
          <p className="foot-name">{`${BUSINESS.name} (${BUSINESS.shortName})`}</p>
          <p style={{ marginTop: '.75rem', maxWidth: '38ch' }}>{BUSINESS_DESCRIPTION}</p>
        </div>
        <div className="fcol">
          <h4>Navegación</h4>
          <Link to="/">Inicio</Link>
          <Link to="/services">Servicios</Link>
          <Link to="/micropigmentacion-cejas-san-borja">Micropigmentación de cejas</Link>
          <Link to="/quien-soy">Nosotros</Link>
          <Link to="/contacto">Contacto</Link>
          <Link to="/politica-de-privacidad">Política de privacidad</Link>
          <Link to="/terminos">Términos y condiciones</Link>
        </div>
        <div className="fcol">
          <h4>Contacto</h4>
          <address>{ADDRESS_FULL}</address>
          <a href={`tel:${BUSINESS.phone}`}>{`Teléfono / WhatsApp: ${BUSINESS.phoneDisplay}`}</a>
          <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
          <p>{HOURS_TEXT}</p>
          <a href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <a href={BUSINESS.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href={BUSINESS.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
        </div>
      </div>
      <div className="wrap fbot">
        <span>{`© ${new Date().getFullYear()} ${BUSINESS.name}. Todos los derechos reservados.`}</span>
        <span>
          <Link to="/politica-de-privacidad">Privacidad</Link> · <Link to="/terminos">Términos</Link>
        </span>
      </div>
    </footer>
  );
}
