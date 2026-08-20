import studio from '../../assets/images/services/faciales/facial2-1.jpg';
import cabina from '../../assets/images/micropigmentacion2-1.jpeg';

export default function Us() {
  return (
    <section id="nosotros" className="sec">
      <div className="wrap about">
        <div className="about-media rv">
          <div className="ph"><img src={studio} alt="Especialista de Define atendiendo en cabina" loading="lazy" /></div>
          <div className="ph"><img src={cabina} alt="Tratamiento facial en el studio" loading="lazy" /></div>
        </div>
        <div className="about-copy rv" style={{ transitionDelay: '.1s' }}>
          <p className="eyebrow">Nosotros</p>
          <h2 className="d" style={{ margin: '1.25rem 0 1.75rem' }}>Precisión, confianza y excelencia en cada detalle</h2>
          <p><strong>Define</strong> es un studio de belleza especializado en micropigmentación, con más de <strong>10 años de experiencia</strong> realzando la belleza natural de cada persona.</p>
          <p>Ofrecemos un servicio personalizado, basado en un diagnóstico detallado y en el uso de técnicas avanzadas y productos de alta calidad, para garantizar resultados armónicos, seguros y duraderos.</p>
          <p>Nuestro compromiso es que cada tratamiento refleje confianza, precisión y excelencia en cada detalle.</p>
          <a href="#contacto" className="btn btn-ghost" style={{ color: 'var(--plum)', marginTop: '2rem' }}>Conversemos</a>
        </div>
      </div>
    </section>
  );
}
