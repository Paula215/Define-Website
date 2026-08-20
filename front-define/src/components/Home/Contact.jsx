const MAP_SRC = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d975.2780305790475!2d-77.001136!3d-12.1044761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c7e69d78fe31%3A0x5ea94e8f49664191!2sDefin%C3%A9%20Dermopigmentaci%C3%B3n!5e0!3m2!1ses!2spe!4v1738299709487';

export default function Contact() {
  return (
    <section id="contacto" className="sec" style={{ background: 'var(--sand)' }}>
      <div className="wrap">
        <div className="sec-head rv">
          <div>
            <p className="eyebrow">Contacto</p>
            <h2 className="d" style={{ marginTop: '1.25rem' }}>Visítanos</h2>
          </div>
          <p>Estamos en San Borja, a pasos de la avenida Aviación. Escríbenos por WhatsApp para agendar tu cita.</p>
        </div>
        <div className="contact">
          <div className="rv">
            <div className="info">
              <div className="info-row">
                <div className="k">Dirección</div>
                <div className="v">Av. Aviación N° 3367 — San Borja<br />Galería Costa Azul, Studio N° 105</div>
              </div>
              <div className="info-row">
                <div className="k">Teléfono</div>
                <div className="v"><a href="tel:+51958336208">+51 958 336 208</a></div>
              </div>
              <div className="info-row">
                <div className="k">Horario</div>
                <div className="v">Lunes a sábado<br />9:00 — 20:00</div>
              </div>
            </div>
            <div className="socials">
              <a href="https://wa.me/51958336208" target="_blank" rel="noopener noreferrer">WhatsApp</a>
              <a href="https://www.instagram.com/define.belleza.integral" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://www.facebook.com/Define.Belleza.Integral" target="_blank" rel="noopener noreferrer">Facebook</a>
            </div>
          </div>
          <div className="map rv" style={{ transitionDelay: '.1s' }}>
            <iframe title="Ubicación de Define en San Borja" src={MAP_SRC} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
