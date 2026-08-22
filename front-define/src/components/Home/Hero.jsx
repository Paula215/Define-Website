import { useRef } from 'react';
import { useParallax } from '../../hooks/useMotion';
import retrato from '../../assets/images/quiensoy/fundadora.jpg';

export default function Hero() {
  const img = useRef(null);
  useParallax(img);

  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div className="rv hero-copy" data-par="0.06">
          <p className="eyebrow">Studio de belleza · San Borja, Lima</p>
          <h1 className="d" style={{ marginTop: '1.5rem' }}>
            Define y realza<br />tu <em style={{ fontStyle: 'italic', color: 'var(--plum)' }}>belleza</em> natural
          </h1>
          <p className="lede">
            Micropigmentación y tratamientos estéticos con más de diez años de experiencia.
            Diagnóstico personalizado, técnicas avanzadas y resultados que se ven naturales.
          </p>
          <div className="hero-actions">
            <a href="#servicios" className="btn btn-solid">Ver servicios</a>
            <a href="https://wa.me/51958336208" target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ color: 'var(--plum)' }}>Agendar cita</a>
          </div>
        </div>
        <div className="rv" style={{ transitionDelay: '.12s' }}>
          <div className="ph hero-media">
            <div className="hero-frame">
              <img ref={img} src={retrato} alt="Fundadora de Define en el studio" fetchPriority="high" />
            </div>
            <div className="hero-badge" data-par="-0.09">
              <b>+15</b><span>Años realzando belleza natural</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
