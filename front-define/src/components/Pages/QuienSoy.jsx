import { useReveal } from '../../hooks/useMotion';

const VIDEO = 'https://res.cloudinary.com/ddjy2qnvw/video/upload/v1767924214/queesdefine_ivbrih.mp4';
const RETRATO = 'https://res.cloudinary.com/ddjy2qnvw/image/upload/v1767924215/fundadora_tec6w2.jpg';

export default function QuienSoy() {
  useReveal();

  return (
    <main className="quien-soy">
      <section className="banner">
        <div className="wrap">
          <p className="eyebrow">Studio de belleza · San Borja</p>
          <h1 className="d">Quiénes somos</h1>
          <div className="foot">
            <p>Estética integral con criterio clínico y trato humano. Conoce el studio y a quien está detrás de cada tratamiento.</p>
            <p className="n">+10<em>Años del studio</em></p>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap about">
          <div className="vid rv">
            <video src={VIDEO} autoPlay loop muted playsInline controls />
          </div>
          <div className="about-copy rv" style={{ transitionDelay: '.1s' }}>
            <p className="eyebrow">El studio</p>
            <h2 className="d" style={{ marginTop: '1rem' }}>Estética integral, cuidada en cada detalle</h2>
            <p className="lead">
              Somos un centro especializado en estética integral, enfocado en realzar la belleza natural
              a través de tratamientos seguros, personalizados y respaldados por tecnología moderna.
            </p>
            <p className="body">
              Creemos en el cuidado consciente, la confianza y el bienestar como parte esencial de cada tratamiento.
            </p>
            <div className="pillars">
              <div><p className="k">01</p><p className="v">Cuidado consciente</p></div>
              <div><p className="k">02</p><p className="v">Confianza</p></div>
              <div><p className="k">03</p><p className="v">Bienestar</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="founder sec">
        <div className="wrap grid">
          <div className="portrait rv">
            <img src={RETRATO} alt="Mirella Cienfuegos, fundadora de Define" loading="lazy" />
          </div>
          <div className="rv" style={{ transitionDelay: '.1s' }}>
            <p className="eyebrow">La fundadora</p>
            <h2 className="d">Mirella Cienfuegos</h2>
            <p className="role">Especialista en estética integral</p>
            <p className="t">
              Profesional en estética con más de 15 años de experiencia, especializada en tratamientos
              faciales y corporales. Su trayectoria se basa en la formación continua, la ética profesional
              y el trato humano con cada paciente.
            </p>
            <p className="t">
              Su misión es acompañar a cada persona en su proceso de cuidado personal, ofreciendo
              resultados reales y seguros.
            </p>
            <div className="stats">
              <div><b>+15</b><span>Años de experiencia</span></div>
              <div><b>Facial</b><span>y corporal</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec cta-soft">
        <div className="wrap rv">
          <p className="eyebrow">Agenda tu cita</p>
          <h2 className="d">Conversemos sobre lo que buscas</h2>
          <p>Te damos un diagnóstico honesto y una recomendación clara, sin compromiso.</p>
          <a href="https://wa.me/51958336208" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            Escribir por WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
