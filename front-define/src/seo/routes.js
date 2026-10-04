// Metadatos por ruta. Cada URL indexable necesita su propio título y su propia
// descripción: si se repiten, Google elige una sola página y descarta el resto
// como contenido duplicado.
import { OG_IMAGE, breadcrumbLd } from './site.js';
import { microRoute } from './micropigmentacion.js';

const BRAND = 'Define';
const PLACE = 'San Borja, Lima';

export const CATEGORIES = [
  {
    slug: 'cejas-pestanas-micropigmentacion',
    label: 'Cejas, Pestañas y Micropigmentación',
    title: `Micropigmentación de Cejas, Microblading y Pestañas en San Borja | ${BRAND}`,
    description:
      'Micropigmentación de cejas con microblading y microshading, diseño de cejas y extensiones de pestañas con acabado natural en San Borja, Lima. Diagnóstico sin costo.',
    subs: [
      {
        slug: 'cejas',
        label: 'Cejas',
        title: `Diseño y Depilación de Cejas en ${PLACE} | ${BRAND}`,
        description:
          'Diseño de cejas según la forma de tu rostro: perfilado, henna y visagismo en nuestro studio de San Borja. Resultado natural y simétrico.',
      },
      {
        slug: 'pestanas',
        label: 'Pestañas',
        title: `Extensiones de Pestañas en ${PLACE} | ${BRAND}`,
        description:
          'Extensiones de pestañas pelo a pelo, volumen y lifting en San Borja, Lima. Materiales de alta calidad y aplicación segura para tu mirada.',
      },
      {
        slug: 'micropigmentacion',
        label: 'Micropigmentación',
        title: `Maquillaje Permanente de Cejas, Labios y Ojos en ${PLACE} | ${BRAND}`,
        description:
          'Microblading, powder brows, técnica híbrida, delineado y full color de labios y ojos. Maquillaje permanente natural con más de 10 años de experiencia en San Borja.',
      },
    ],
  },
  {
    slug: 'peelings-y-limpiezas-faciales',
    label: 'Peelings y Limpiezas Faciales',
    title: `Limpieza Facial Profunda y Peeling en ${PLACE} | ${BRAND}`,
    description:
      'Limpiezas faciales profundas, peelings químicos e hidratación para tratar acné, manchas y poros abiertos en San Borja, Lima. Protocolo según tu tipo de piel.',
    subs: [
      {
        slug: 'Peeling',
        label: 'Peeling',
        title: `Peeling Facial para Manchas y Acné en ${PLACE} | ${BRAND}`,
        description:
          'Peelings químicos y despigmentantes para manchas, cicatrices de acné y textura irregular. Studio de estética en San Borja, Lima.',
      },
      {
        slug: 'Facial',
        label: 'Facial',
        title: `Limpieza Facial Profunda en ${PLACE} | ${BRAND}`,
        description:
          'Limpieza facial profunda con extracción, hidratación y protección solar. Piel luminosa y libre de impurezas en nuestro studio de San Borja.',
      },
    ],
  },
  {
    slug: 'rejuvenecimiento',
    label: 'Rejuvenecimiento',
    title: `Rejuvenecimiento Facial en ${PLACE} | ${BRAND}`,
    description:
      'Tratamientos de rejuvenecimiento facial para arrugas, flacidez y pérdida de firmeza en San Borja, Lima. Resultados progresivos y naturales.',
    subs: [],
  },
  {
    slug: 'depilacion',
    label: 'Depilación',
    title: `Depilación Corporal y Facial en ${PLACE} | ${BRAND}`,
    description:
      'Depilación de piernas, axilas, bikini y rostro con técnicas seguras e higiénicas en San Borja, Lima. Piel suave y cuidada en cada sesión.',
    subs: [
      {
        slug: 'depilacion-corporal',
        label: 'Depilación Corporal',
        title: `Depilación Corporal: Piernas, Axilas y Bikini | ${BRAND}`,
        description:
          'Depilación de piernas, axilas, brazos y bikini en San Borja, Lima. Técnicas seguras, materiales descartables y atención personalizada.',
      },
      {
        slug: 'depilacion-facial',
        label: 'Depilación Facial',
        title: `Depilación Facial: Bozo, Cejas y Rostro | ${BRAND}`,
        description:
          'Depilación facial de bozo, cejas y rostro completo con acabado preciso y sin irritación. Studio de belleza en San Borja, Lima.',
      },
    ],
  },
  {
    slug: 'tratamientos-reductores-esteticos',
    label: 'Tratamientos Reductores y Estéticos',
    title: `Tratamientos Reductores Corporales en ${PLACE} | ${BRAND}`,
    description:
      'Mesoterapia, carboxiterapia y protocolos reductores y reafirmantes para moldear tu figura en San Borja, Lima. Plan personalizado por zona.',
    subs: [],
  },
  {
    slug: 'aplicaciones-intravenosas',
    label: 'Aplicaciones Intravenosas',
    title: `Sueroterapia y Vitaminas Intravenosas en San Borja | ${BRAND}`,
    description:
      'Cócteles vitamínicos y sueroterapia para energía, defensas y luminosidad de la piel, aplicados por personal capacitado en San Borja, Lima.',
    subs: [],
  },
];

const HOME = {
  path: '/',
  title: 'Define | Micropigmentación de Cejas y Microblading en San Borja, Lima',
  description:
    'Studio en San Borja con más de 10 años en micropigmentación de cejas: microblading, microshading y maquillaje permanente natural. También faciales y depilación.',
  breadcrumb: [{ name: 'Inicio', path: '/' }],
};

const STATIC_ROUTES = [
  HOME,
  {
    path: '/services',
    title: `Servicios de Estética y Belleza en ${PLACE} | ${BRAND}`,
    description:
      'Micropigmentación, limpiezas faciales, rejuvenecimiento, depilación, tratamientos reductores y sueroterapia. Todos los servicios de Define en San Borja, Lima.',
    breadcrumb: [
      { name: 'Inicio', path: '/' },
      { name: 'Servicios', path: '/services' },
    ],
  },
  {
    path: '/quien-soy',
    title: `Quiénes Somos | Studio de Belleza en ${PLACE}`,
    description:
      'Conoce Define: más de 10 años realzando la belleza natural con estética integral, criterio clínico y trato cercano en San Borja, Lima.',
    breadcrumb: [
      { name: 'Inicio', path: '/' },
      { name: 'Quiénes somos', path: '/quien-soy' },
    ],
  },
  {
    path: '/contacto',
    title: `Contacto y Ubicación | ${BRAND} ${PLACE}`,
    description:
      'Estamos en Av. Aviación 3367, Galería Costa Azul, San Borja. Lunes a sábado de 9:00 a 20:00. Escríbenos al +51 958 336 208 para agendar tu cita.',
    breadcrumb: [
      { name: 'Inicio', path: '/' },
      { name: 'Contacto', path: '/contacto' },
    ],
  },
];

// Todas las URLs indexables, en el orden en que las quiere el sitemap.
export const ROUTES = [
  ...STATIC_ROUTES,
  microRoute,
  ...CATEGORIES.flatMap((cat) => [
    {
      path: `/services/${cat.slug}`,
      title: cat.title,
      description: cat.description,
      priority: 0.8,
      breadcrumb: [
        { name: 'Inicio', path: '/' },
        { name: 'Servicios', path: '/services' },
        { name: cat.label, path: `/services/${cat.slug}` },
      ],
    },
    ...cat.subs.map((sub) => ({
      path: `/services/${cat.slug}/${sub.slug}`,
      title: sub.title,
      description: sub.description,
      priority: 0.6,
      breadcrumb: [
        { name: 'Inicio', path: '/' },
        { name: 'Servicios', path: '/services' },
        { name: cat.label, path: `/services/${cat.slug}` },
        { name: sub.label, path: `/services/${cat.slug}/${sub.slug}` },
      ],
    })),
  ]),
];

const byPath = new Map(ROUTES.map((r) => [r.path, r]));

// Resuelve la ruta actual. Lo que no esté en la tabla (una subcategoría por
// query, una URL inventada) cae en el Home para no quedarse sin metadatos.
export const seoFor = (pathname = '/') => {
  const clean = pathname.length > 1 ? pathname.replace(/\/+$/, '') : '/';
  const match = byPath.get(clean) || byPath.get(decodeURIComponent(clean));
  // Una URL que no está en la tabla no existe como página: se le dan los datos
  // del Home para que no quede vacía, pero se marca noindex. Indexar páginas
  // sin contenido propio ("soft 404") baja la calidad percibida del dominio.
  const route = match || { ...HOME, title: `Página no encontrada | ${BRAND}` };
  return {
    ...route,
    canonical: route.path,
    image: route.image || OG_IMAGE,
    noindex: !match,
    ld: [
      ...(route.breadcrumb && route.breadcrumb.length > 1 ? [breadcrumbLd(route.breadcrumb)] : []),
      ...(route.extraLd ? route.extraLd() : []),
    ],
  };
};
