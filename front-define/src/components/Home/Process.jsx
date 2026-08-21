const steps = [
  { n: '01', t: 'Diagnóstico', d: 'Evaluamos tu piel y tus rasgos en una consulta sin costo para definir el tratamiento adecuado.' },
  { n: '02', t: 'Diseño y procedimiento', d: 'Acordamos contigo el diseño cuando el servicio lo lleva, y en todos te explicamos el procedimiento antes de comenzar.' },
  { n: '03', t: 'Seguimiento', d: 'Acompañamos el proceso de cicatrización y programamos el retoque cuando corresponde.' },
];

export default function Process() {
  return (
    <section id="proceso" className="sec" style={{ background: 'var(--plum)', color: '#fff' }}>
      <div className="wrap">
        <div className="sec-head rv">
          <div>
            <p className="eyebrow" style={{ color: 'rgba(255,255,255,.55)' }}>Proceso</p>
            <h2 className="d" style={{ marginTop: '1.25rem', color: '#fff' }}>Cómo trabajamos</h2>
          </div>
          <p style={{ color: 'rgba(255,255,255,.72)' }}>Cada cita empieza con una conversación. Nunca aplicamos un tratamiento sin antes entender tu piel, tus rasgos y lo que buscas.</p>
        </div>
        <div className="steps">
          {steps.map((s, i) => (
            <div key={s.n} className="step rv" style={{ transitionDelay: `${i * 0.1}s` }}>
              <b>{s.n}</b>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
