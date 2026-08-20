import peeling from '../../assets/images/services/faciales/peeling1-1.jpg';
import meso from '../../assets/images/services/reductores/mesoterapia.png';
import bronce from '../../assets/images/services/reductores/bronceado.png';

/* Nota: cuando tengas fotos propias del studio, reemplaza estas tres. */
const shots = [
  { src: peeling, alt: 'Tratamiento facial para acné' },
  { src: meso, alt: 'Sesión de mesoterapia corporal' },
  { src: bronce, alt: 'Bronceado corporal' },
];

export default function Gallery() {
  return (
    <section id="galeria" className="sec" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="sec-head rv">
          <div>
            <p className="eyebrow">Galería</p>
            <h2 className="d" style={{ marginTop: '1.25rem' }}>Nuestros tratamientos</h2>
          </div>
          <p>Una muestra de lo que hacemos en cabina. Cada tratamiento respeta la anatomía y el tono natural de cada clienta.</p>
        </div>
        <div className="gal">
          {shots.map((s, i) => (
            <div key={s.src} className="ph rv" style={{ transitionDelay: `${i * 0.08}s` }}>
              <img src={s.src} alt={s.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
