import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { BUSINESS, ADDRESS_FULL, HOURS_TEXT } from '../../seo/site';

// Textos base, en tono simple. Conviene que un abogado los revise antes de
// darlos por definitivos.
const UPDATED = '25 de noviembre de 2026';

const LegalLayout = ({ eyebrow, title, intro, children }) => (
  <main className="legal-page">
    <section className="banner">
      <div className="wrap">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="d">{title}</h1>
        <div className="foot">
          <p>{intro}</p>
        </div>
      </div>
    </section>
    <section className="sec">
      <div className="wrap legal">
        <p className="legal-note">
          {`Texto base pendiente de revisión legal. Última actualización: ${UPDATED}.`}
        </p>
        {children}
        <h2>Contacto</h2>
        <ul>
          <li><strong>{`${BUSINESS.name} (${BUSINESS.shortName})`}</strong></li>
          <li>{`Dirección: ${ADDRESS_FULL}`}</li>
          <li>Teléfono / WhatsApp: <a href={`tel:${BUSINESS.phone}`}>{BUSINESS.phoneDisplay}</a></li>
          <li>Correo: <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a></li>
          <li>{`Horario: ${HOURS_TEXT}`}</li>
        </ul>
      </div>
    </section>
  </main>
);

LegalLayout.propTypes = {
  eyebrow: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export function PoliticaPrivacidad() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Política de privacidad"
      intro={`Cómo ${BUSINESS.name} recoge, usa y protege tus datos personales.`}
    >
      <h2>Quién es responsable de tus datos</h2>
      <p>
        {BUSINESS.name} ({BUSINESS.shortName}), studio de belleza ubicado en {ADDRESS_FULL}, es
        responsable del tratamiento de los datos personales que nos compartes. Tratamos tus datos
        conforme a la Ley N.º 29733, Ley de Protección de Datos Personales del Perú, y su reglamento.
      </p>

      <h2>Qué datos recogemos</h2>
      <p>Cuando agendas una cita o nos escribes, podemos pedirte:</p>
      <ul>
        <li>Tu nombre.</li>
        <li>Tu número de teléfono o WhatsApp.</li>
        <li>Tu correo electrónico (opcional).</li>
      </ul>
      <p>No pedimos datos bancarios por WhatsApp ni por este sitio web.</p>

      <h2>Para qué los usamos</h2>
      <ul>
        <li>Agendar, confirmar, reprogramar o cancelar tus citas.</li>
        <li>Enviarte avisos y recordatorios sobre tus citas por WhatsApp.</li>
        <li>Responder tus consultas sobre nuestros servicios.</li>
      </ul>
      <p>
        Solo te enviaremos mensajes relacionados con tus citas y consultas. Si en algún momento
        quieres dejar de recibir mensajes, basta con decírnoslo.
      </p>

      <h2>Con quién los compartimos</h2>
      <p>
        <strong>No vendemos ni alquilamos tus datos.</strong> Solo los usamos dentro del studio.
        Para comunicarnos contigo usamos WhatsApp, un servicio de Meta, que trata los mensajes según
        sus propias condiciones.
      </p>

      <h2>Cuánto tiempo los guardamos</h2>
      <p>
        Guardamos tus datos mientras seas cliente del studio o hasta que nos pidas borrarlos.
      </p>

      <h2>Tus derechos y cómo pedir que se borren tus datos</h2>
      <p>
        Puedes pedirnos en cualquier momento acceder a tus datos, corregirlos o eliminarlos, u
        oponerte a que los usemos (derechos ARCO). Para hacerlo, escríbenos por WhatsApp
        al <a href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer">{BUSINESS.phoneDisplay}</a> o
        al correo <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a> indicando tu nombre y tu
        pedido. Te responderemos lo antes posible.
      </p>
      <p>
        Si consideras que no atendimos tu pedido, puedes acudir a la Autoridad Nacional de
        Protección de Datos Personales del Ministerio de Justicia y Derechos Humanos.
      </p>

      <h2>Este sitio web</h2>
      <p>
        Este sitio no tiene formularios de registro ni guarda tus datos: los botones de reserva te
        llevan directamente a WhatsApp. El mapa de Google y los enlaces a Instagram y Facebook
        pertenecen a esos servicios, que tienen sus propias políticas de privacidad.
      </p>
    </LegalLayout>
  );
}

export function Terminos() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Términos y condiciones"
      intro={`Condiciones básicas para reservar y recibir los servicios de ${BUSINESS.name}.`}
    >
      <h2>Nuestros servicios</h2>
      <p>
        {BUSINESS.name} ({BUSINESS.shortName}) es un studio de belleza en San Borja, Lima. Ofrecemos
        micropigmentación de cejas, labios y ojos, tricopigmentación, limpiezas faciales y peelings,
        lifting y extensiones de pestañas, rejuvenecimiento facial y depilación. Puedes ver el
        detalle en <Link to="/services">Servicios</Link>.
      </p>

      <h2>Consulta inicial sin costo</h2>
      <p>
        Antes de un tratamiento hacemos una consulta o diagnóstico inicial sin costo, para conocer
        tu piel y lo que buscas, y recomendarte la opción adecuada. La consulta no te obliga a
        contratar ningún servicio.
      </p>

      <h2>Reservas</h2>
      <ul>
        <li>{`Las citas se reservan por WhatsApp al ${BUSINESS.phoneDisplay} o en el studio.`}</li>
        <li>La cita queda confirmada cuando te enviamos la confirmación por WhatsApp.</li>
        <li>{`Atendemos de ${HOURS_TEXT.toLowerCase()}.`}</li>
        <li>Algunos tratamientos pueden requerir un adelanto para separar el horario. Si es así, te lo indicaremos antes de confirmar.</li>
      </ul>

      <h2>Cancelaciones y reprogramaciones</h2>
      <ul>
        <li>Si no puedes asistir, avísanos con al menos 24 horas de anticipación para reprogramar tu cita sin costo.</li>
        <li>Si llegas con más de 15 minutos de retraso, es posible que debamos reprogramar la cita para no afectar a las siguientes clientas y clientes.</li>
        <li>Si el studio necesita mover una cita, te avisaremos lo antes posible y te ofreceremos otro horario.</li>
      </ul>

      <h2>Antes y después del tratamiento</h2>
      <p>
        Te pediremos información básica sobre tu salud y tu piel para saber si un tratamiento es
        adecuado para ti. Es importante que sigas las indicaciones de cuidado que te damos: los
        resultados dependen también del tipo de piel y del cuidado posterior.
      </p>

      <h2>Precios y pagos</h2>
      <p>
        Los precios se informan por WhatsApp o en el studio antes de cada servicio y están en soles
        (PEN). Pueden cambiar sin previo aviso, pero siempre respetamos el precio confirmado para tu
        cita.
      </p>

      <h2>Datos personales</h2>
      <p>
        Usamos tus datos solo para gestionar tus citas. Más detalle en
        nuestra <Link to="/politica-de-privacidad">Política de privacidad</Link>.
      </p>
    </LegalLayout>
  );
}
