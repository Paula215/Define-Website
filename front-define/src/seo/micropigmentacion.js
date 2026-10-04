// Contenido de la landing de micropigmentación de cejas. Vive aquí, en JS
// plano, porque lo usan dos lados: la página (React) y el JSON-LD de
// preguntas frecuentes que scripts/prerender.js escribe en el HTML estático.
// Así lo que dice el schema y lo que ve la clienta no se pueden desalinear.
import { SITE_URL, abs, BUSINESS } from './site.js';

export const MICRO_PATH = '/micropigmentacion-cejas-san-borja';

const IMG = 'https://res.cloudinary.com/ddjy2qnvw/image/upload';

export const TECHNIQUES = [
  {
    name: 'Microblading',
    aka: 'Pelo a pelo',
    text: 'Trazos finos hechos a mano que imitan el vello natural. Rellena huecos y redibuja la forma sin que la ceja parezca maquillada.',
    ideal: 'Piel normal o seca y cejas con zonas despobladas.',
    img: `${IMG}/c_fill,w_960,h_600,g_auto,q_auto,f_auto/v1767586538/micropigmentacion_u6shwa.jpg`,
  },
  {
    name: 'Microshading',
    aka: 'Powder brows · efecto polvo',
    text: 'Sombreado punto a punto que deja un acabado suave, como una ceja rellenada con sombra. Da definición sin líneas marcadas.',
    ideal: 'Piel mixta o grasa y quien busca un look más pulido.',
    img: `${IMG}/c_fill,w_960,h_600,g_auto,q_auto,f_auto/v1767586539/micropigmentacion1-powder_tfyesg.jpg`,
  },
  {
    name: 'Técnica híbrida',
    aka: 'Microblading + microshading',
    text: 'Pelo a pelo al inicio de la ceja y sombreado hacia la cola. Combina la naturalidad del trazo con la duración del sombreado.',
    ideal: 'Quien quiere cejas definidas que se sigan viendo naturales.',
    img: `${IMG}/c_fill,w_960,h_600,g_auto,q_auto,f_auto/v1767586539/micropigmentacion_hibrida_k3djcy.jpg`,
  },
  {
    name: 'Hiperrealismo',
    aka: 'Pelo a pelo de alta precisión',
    text: 'Trazos con distintas direcciones, grosores y tonos que reproducen el vello real con mucho detalle. Es la opción más natural de cerca.',
    ideal: 'Cejas muy escasas o quien prioriza el realismo absoluto.',
    img: `${IMG}/c_fill,w_960,h_600,g_auto,q_auto,f_auto/v1767586538/hairstroke_jjsig2.jpg`,
  },
];

// Comparación directa: es lo que más se busca antes de elegir técnica.
export const COMPARISON = [
  { k: 'Acabado', a: 'Trazos pelo a pelo, muy natural', b: 'Sombreado suave, tipo maquillaje' },
  { k: 'Tipo de piel', a: 'Normal o seca', b: 'Mixta, grasa o sensible' },
  { k: 'Duración', a: 'Más corta en pieles grasas', b: 'Suele durar más' },
  { k: 'Ideal si', a: 'Tienes huecos o poco vello', b: 'Quieres más definición y color' },
];

export const STEPS = [
  { t: 'Diagnóstico', d: 'Revisamos tu piel, tu vello y lo que buscas en una consulta sin costo. Ahí elegimos la técnica.' },
  { t: 'Diseño a medida', d: 'Medimos y dibujamos la ceja según la proporción de tu rostro. No empezamos hasta que te guste el diseño.' },
  { t: 'Pigmentación', d: 'Elegimos el tono según tu color de piel y de cabello, y aplicamos el pigmento con la técnica acordada.' },
  { t: 'Retoque', d: 'Al cabo de unas semanas revisamos cómo cicatrizó y completamos lo que haga falta para fijar el resultado.' },
];

export const FAQ = [
  {
    q: '¿Cuánto dura la micropigmentación de cejas?',
    a: 'En general, entre uno y dos años. Depende del tipo de piel, de la técnica y de los cuidados: en pieles grasas y con mucho sol el pigmento se aclara antes. Para mantenerla se hace un retoque de mantenimiento cuando empieza a perder intensidad.',
  },
  {
    q: '¿Qué diferencia hay entre microblading y microshading?',
    a: 'El microblading dibuja trazos finos pelo a pelo y se ve muy natural. El microshading rellena la ceja con un sombreado suave, con un acabado parecido al maquillaje. Si tu piel es grasa, el microshading suele durar más. También existe la técnica híbrida, que combina ambas.',
  },
  {
    q: '¿Se ve natural?',
    a: 'Sí, cuando el diseño respeta tus rasgos y el tono se elige bien. Por eso diseñamos la ceja contigo antes de empezar y trabajamos con pigmentos que se acercan a tu color de vello.',
  },
  {
    q: '¿Duele?',
    a: 'La mayoría lo describe como una molestia leve. Se trabaja la zona para que el procedimiento sea lo más cómodo posible.',
  },
  {
    q: '¿Cuándo se hace el retoque?',
    a: 'El retoque se programa unas semanas después de la primera sesión, cuando la piel ya cicatrizó. Sirve para completar zonas que hayan absorbido menos pigmento y fijar el resultado.',
  },
  {
    q: '¿Qué cuidados hay que tener después?',
    a: 'Durante los primeros días no mojes ni maquilles la zona, no te rasques ni retires las costritas, y evita el sol directo, la piscina y el sauna. Te damos las indicaciones completas por escrito al terminar.',
  },
  {
    q: '¿La primera consulta tiene costo?',
    a: 'No. La consulta de diagnóstico es sin costo: evaluamos tus cejas, te explicamos qué técnica te conviene y resolvemos tus dudas sin compromiso.',
  },
  {
    q: '¿Dónde están ubicados?',
    a: `En ${BUSINESS.street}, ${BUSINESS.district}, Lima. Atendemos de lunes a sábado de 9:00 a 20:00 y recibimos clientas de San Borja, Surco, San Isidro, La Molina, Surquillo y Miraflores.`,
  },
];

export const microRoute = {
  path: MICRO_PATH,
  title: 'Micropigmentación de Cejas en San Borja: Microblading y Microshading | Define',
  description:
    'Microblading, microshading y técnica híbrida en San Borja, Lima. Maquillaje permanente de cejas con acabado natural, diseño a medida y más de 10 años de experiencia.',
  priority: 0.9,
  breadcrumb: [
    { name: 'Inicio', path: '/' },
    { name: 'Micropigmentación de cejas', path: MICRO_PATH },
  ],
  extraLd: () => [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${abs(MICRO_PATH)}#service`,
      name: 'Micropigmentación de cejas',
      alternateName: ['Microblading', 'Microshading', 'Powder brows', 'Maquillaje permanente de cejas', 'Cejas pelo a pelo'],
      serviceType: 'Micropigmentación de cejas',
      description:
        'Maquillaje permanente de cejas con técnicas de microblading, microshading, técnica híbrida e hiperrealismo, con diseño a medida y retoque.',
      url: abs(MICRO_PATH),
      provider: { '@id': `${SITE_URL}/#business` },
      areaServed: ['San Borja', 'Surco', 'San Isidro', 'La Molina', 'Surquillo', 'Miraflores', 'Lima'].map((name) => ({
        '@type': 'Place',
        name,
      })),
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Técnicas de micropigmentación de cejas',
        itemListElement: TECHNIQUES.map((t) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: t.name, description: t.text },
        })),
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQ.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
};
