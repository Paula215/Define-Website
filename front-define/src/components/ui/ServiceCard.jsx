import { useState } from 'react';
import PropTypes from 'prop-types';
// No hay carpeta public/: el placeholder se importa como asset para que
// Vite lo incluya en el build con su hash.
import placeholder from '../../assets/images/placeholder.png';

const Chevron = ({ dir }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d={dir === 'l' ? 'M15 18l-6-6 6-6' : 'M9 6l6 6-6 6'} />
  </svg>
);
Chevron.propTypes = { dir: PropTypes.string };

export default function ServiceCard({ service, eager = false }) {
  const imgs = service.images?.length ? service.images : [placeholder];
  const [i, setI] = useState(0);
  const [fade, setFade] = useState(false);
  const [failed, setFailed] = useState(false);

  const go = (d) => (e) => {
    e.preventDefault();
    setFade(true);
    setTimeout(() => {
      setI((prev) => (prev + d + imgs.length) % imgs.length);
      setFailed(false);
      setFade(false);
    }, 180);
  };

  const wa = `https://wa.me/51958336208?text=${encodeURIComponent(`Hola, estoy interesado/a en el servicio de ${service.title}`)}`;

  return (
    <article className="svc">
      <div className="svc-img">
        <img
          src={failed ? placeholder : imgs[i]}
          alt={service.title}
          loading={eager ? 'eager' : 'lazy'}
          onError={() => setFailed(true)}
          style={{ opacity: fade ? 0 : 1 }}
        />
        {service.subcategory && <span className="svc-tag">{service.subcategory}</span>}
        {imgs.length > 1 && (
          <>
            <div className="dots">
              {imgs.map((src, k) => <i key={src + k} className={k === i ? 'on' : ''} />)}
            </div>
            <div className="svc-nav">
              <button onClick={go(-1)} aria-label="Imagen anterior"><Chevron dir="l" /></button>
              <button onClick={go(1)} aria-label="Imagen siguiente"><Chevron dir="r" /></button>
            </div>
          </>
        )}
      </div>
      <div className="svc-body">
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <a className="svc-cta" href={wa} target="_blank" rel="noopener noreferrer">
          Consultar
          <svg width="20" height="9" viewBox="0 0 20 9" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M0 4.5h18M15 1.5l3 3-3 3" /></svg>
        </a>
      </div>
    </article>
  );
}

ServiceCard.propTypes = {
  service: PropTypes.shape({
    subcategory: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  eager: PropTypes.bool,
};
