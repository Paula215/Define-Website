import { BUSINESS } from '../../seo/site';

const Star = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="m12 2.6 2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.5l-5.9 3.1 1.2-6.5L2.5 9.5l6.6-.9L12 2.6Z" />
  </svg>
);

// La reseña va a Google, que es la que suma en el mapa y en la búsqueda local.
export default function Review() {
  return (
    <section id="opiniones" className="sec review" style={{ background: 'var(--lila)' }}>
      <div className="wrap rv">
        <p className="eyebrow">Tu opinión</p>
        <h2 className="d" style={{ marginTop: '1.25rem' }}>¿Ya nos visitaste?</h2>
        <div className="review-stars"><Star /><Star /><Star /><Star /><Star /></div>
        <p>Cuéntanos cómo te fue. Tu reseña nos ayuda a mejorar cada tratamiento y orienta a quienes están por elegir dónde atenderse. Toma menos de un minuto.</p>
        <a href={BUSINESS.reviews} target="_blank" rel="noopener noreferrer" className="btn btn-solid" style={{ marginTop: '2.25rem' }}>Dejar reseña en Google</a>
      </div>
    </section>
  );
}
