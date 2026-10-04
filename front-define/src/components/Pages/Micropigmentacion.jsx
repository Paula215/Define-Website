import { Link } from 'react-router-dom';
import { useReveal } from '../../hooks/useMotion';
import { BUSINESS } from '../../seo/site';
import { TECHNIQUES, COMPARISON, STEPS, FAQ } from '../../seo/micropigmentacion';

const WA = `${BUSINESS.whatsapp}?text=${encodeURIComponent('Hola, quiero información sobre la micropigmentación de cejas.')}`;

// Landing pensada para búsquedas como "microblading San Borja" o "maquillaje
// permanente de cejas natural". El H1 y los H2 llevan esos términos tal cual
// los escribe la gente; el texto tiene que responder lo que buscan saber.
export default function Micropigmentacion() {
  useReveal();

  return (
    <main className="micro">
      <section className="banner">
        <div className="wrap">
          <p className="eyebrow">Maquillaje permanente · San Borja</p>
          <h1 className="d">Micropigmentación de cejas en San Borja</h1>
          <div className="foot">
            <p>Microblading, microshading y técnica híbrida para unas cejas definidas que se ven naturales. Diseñamos cada ceja según tu rostro en nuestro studio de la Av. Aviación.</p>
            <p className="n">+10<em>Años diseñando cejas</em></p>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap micro-intro">
          <div className="rv">
            <p className="eyebrow">Maquillaje permanente natural</p>
            <h2 className="d">Cejas que no parecen maquilladas</h2>
          </div>
          <div className="rv" style={{ transitionDelay: '.1s' }}>
            <p>La micropigmentación deposita pigmento en la capa superficial de la piel para redibujar la ceja, rellenar huecos y darle forma. Es un maquillaje semipermanente: dura entre uno y dos años y se va aclarando con el tiempo.</p>
            <p>Lo que hace que se vea natural no es solo la técnica, sino el diseño. Por eso empezamos siempre con un diagnóstico sin costo, medimos tu rostro y dibujamos la ceja contigo antes de pigmentar.</p>
            <div className="micro-actions">
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-solid">Agendar diagnóstico</a>
              <a href="#preguntas" className="btn btn-ghost" style={{ color: 'var(--plum)' }}>Preguntas frecuentes</a>
            </div>
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: 'var(--sand)' }}>
        <div className="wrap">
          <div className="sec-head rv">
            <div>
              <p className="eyebrow">Técnicas</p>
              <h2 className="d" style={{ marginTop: '1.25rem' }}>Microblading, microshading y más</h2>
            </div>
            <p>Cada técnica deja un acabado distinto. Te recomendamos la que mejor va con tu tipo de piel, tu vello y el resultado que buscas.</p>
          </div>
          <div className="micro-techs">
            {TECHNIQUES.map((t, i) => (
              <article key={t.name} className="micro-tech rv" style={{ transitionDelay: `${(i % 2) * 0.1}s` }}>
                <div className="ph"><img src={t.img} alt={`Cejas con ${t.name.toLowerCase()} en Define, San Borja`} loading="lazy" width="960" height="600" /></div>
                <div className="body">
                  <p className="aka">{t.aka}</p>
                  <h3>{t.name}</h3>
                  <p>{t.text}</p>
                  <p className="ideal"><b>Ideal para:</b> {t.ideal}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head rv">
            <div>
              <p className="eyebrow">Comparación</p>
              <h2 className="d" style={{ marginTop: '1.25rem' }}>¿Microblading o microshading?</h2>
            </div>
            <p>Es la duda más común. En resumen: el microblading se ve más natural de cerca y el microshading dura más en pieles grasas. La técnica híbrida combina lo mejor de ambos.</p>
          </div>
          <div className="micro-table rv" role="table" aria-label="Diferencias entre microblading y microshading">
            <div className="row head" role="row">
              <span role="columnheader"></span>
              <span role="columnheader">Microblading</span>
              <span role="columnheader">Microshading</span>
            </div>
            {COMPARISON.map((r) => (
              <div key={r.k} className="row" role="row">
                <span role="rowheader">{r.k}</span>
                <span role="cell">{r.a}</span>
                <span role="cell">{r.b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: 'var(--plum)', color: '#fff' }}>
        <div className="wrap">
          <div className="sec-head rv">
            <div>
              <p className="eyebrow" style={{ color: 'rgba(255,255,255,.55)' }}>Proceso</p>
              <h2 className="d" style={{ marginTop: '1.25rem', color: '#fff' }}>Cómo es la sesión</h2>
            </div>
            <p style={{ color: 'rgba(255,255,255,.72)' }}>Nunca pigmentamos sin antes acordar contigo el diseño y el tono.</p>
          </div>
          <div className="steps micro-steps">
            {STEPS.map((s, i) => (
              <div key={s.t} className="step rv" style={{ transitionDelay: `${i * 0.08}s` }}>
                <b>{String(i + 1).padStart(2, '0')}</b>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap micro-more rv">
          <p className="eyebrow">También hacemos</p>
          <h2 className="d">Maquillaje permanente de labios y ojos</h2>
          <p>Delineado y full color de labios, delineado de párpados y tricopigmentación, con el mismo cuidado en el diseño y el tono.</p>
          <Link to="/services/cejas-pestanas-micropigmentacion/micropigmentacion" className="btn btn-ghost" style={{ color: 'var(--plum)' }}>Ver todos los tratamientos</Link>
        </div>
      </section>

      <section id="preguntas" className="sec" style={{ background: 'var(--sand)' }}>
        <div className="wrap micro-faq">
          <div className="rv">
            <p className="eyebrow">Preguntas frecuentes</p>
            <h2 className="d" style={{ marginTop: '1.25rem' }}>Lo que nos preguntan antes de su cita</h2>
          </div>
          <div className="rv" style={{ transitionDelay: '.1s' }}>
            {FAQ.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="sec band">
        <div className="wrap rv">
          <p className="eyebrow" style={{ color: 'rgba(255,255,255,.55)' }}>Agenda tu cita</p>
          <h2 className="d" style={{ marginTop: '1.25rem' }}>Tu diagnóstico de cejas<br />es sin costo</h2>
          <p>Escríbenos y coordinamos una visita al studio en San Borja. Te decimos qué técnica te conviene, sin compromiso.</p>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ marginTop: '2.25rem', color: '#fff' }}>Escribir por WhatsApp</a>
        </div>
      </section>
    </main>
  );
}
