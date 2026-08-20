const items = ['Micropigmentación', 'Diseño de cejas', 'Limpieza facial', 'Rejuvenecimiento', 'Depilación', 'Tratamientos corporales'];

export default function Marquee() {
  return (
    <div className="strip" aria-hidden="true">
      <div className="track">
        {[...items, ...items].map((t, i) => <span key={i}>{t}</span>)}
      </div>
    </div>
  );
}
