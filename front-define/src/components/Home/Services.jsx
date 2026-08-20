import { Link } from 'react-router-dom';
import { useTilt } from '../../hooks/useMotion';
import skincare from '../../assets/images/icons/skincare.jpg';
import lashing from '../../assets/images/icons/lashing.jpg';
import rejuvenecimiento from '../../assets/images/icons/rejuvencimiento.jpg';
import depi from '../../assets/images/icons/depi.jpg';
import body from '../../assets/images/icons/body.jpg';
import intra from '../../assets/images/icons/intravenosa.jpeg';

const services = [
  { n: '01', img: skincare, t: 'Peelings y limpiezas faciales', d: 'Elimina impurezas, manchas y signos de envejecimiento para un rostro luminoso y uniforme.', to: '/services/peelings-y-limpiezas-faciales' },
  { n: '02', img: lashing, t: 'Cejas, pestañas y micropigmentación', d: 'Realza tu mirada con diseño de cejas, extensiones de pestañas y micropigmentación de acabado natural.', to: '/services/cejas-pestanas-micropigmentacion' },
  { n: '03', img: rejuvenecimiento, t: 'Rejuvenecimiento', d: 'Tratamientos para reducir arrugas, mejorar la firmeza y revitalizar la piel del rostro y el cuello.', to: '/services/rejuvenecimiento' },
  { n: '04', img: depi, t: 'Depilación', d: 'Piel suave y libre de vello con técnicas seguras, higiénicas y efectivas para cada zona.', to: '/services/depilacion' },
  { n: '05', img: body, t: 'Tratamientos reductores y estéticos', d: 'Moldea tu cuerpo con mesoterapia, carboxiterapia y protocolos reafirmantes personalizados.', to: '/services/tratamientos-reductores-esteticos' },
  { n: '06', img: intra, t: 'Aplicaciones intravenosas', d: 'Vitaminas y cócteles formulados para mejorar energía, inmunidad y la apariencia de la piel.', to: '/services/aplicaciones-intravenosas' },
];

const Arrow = () => (
  <svg width="18" height="8" viewBox="0 0 18 8" fill="none" stroke="currentColor" strokeWidth="1.2">
    <path d="M0 4h16M13 1l3 3-3 3" />
  </svg>
);

export default function Services() {
  useTilt('.card');

  return (
    <section id="servicios" className="sec" style={{ background: 'var(--sand)', paddingBottom: 0 }}>
      <div className="wrap">
        <div className="sec-head rv">
          <div>
            <p className="eyebrow">Servicios</p>
            <h2 className="d" style={{ marginTop: '1.25rem' }}>Tratamientos<br />pensados para ti</h2>
          </div>
          <p>Seis líneas de trabajo que combinan diagnóstico, técnica y productos de alta calidad. Cada tratamiento se adapta a tu piel y a tus rasgos.</p>
        </div>
      </div>
      <div className="wrap" style={{ paddingInline: 0 }}>
        <div className="cards">
          {services.map((s) => (
            <Link key={s.n} to={s.to} className="card rv">
              <div className="c-top">
                <span className="c-num">{s.n}</span>
                <span className="ph c-img"><img src={s.img} alt="" loading="lazy" /></span>
              </div>
              <h3 className="c-t">{s.t}</h3>
              <p className="c-d">{s.d}</p>
              <span className="glare"></span>
              <span className="c-more">Ver más <Arrow /></span>
            </Link>
          ))}
        </div>
      </div>
      <div style={{ height: 'clamp(4.5rem,10vw,9rem)' }}></div>
    </section>
  );
}
