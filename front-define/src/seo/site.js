// Datos únicos del negocio. Todo el SEO (meta tags, JSON-LD, sitemap) sale de
// aquí, así que un cambio de dominio o de horario se toca en un solo sitio.

// ⚠️ Al conectar el dominio propio, cambia SOLO esta línea.
export const SITE_URL = 'https://define-website.vercel.app';

export const SITE_NAME = 'Define Belleza Integral';
export const LOCALE = 'es_PE';

// 1200×630 es la medida que piden Facebook, WhatsApp y X para la vista previa.
export const OG_IMAGE =
  'https://res.cloudinary.com/ddjy2qnvw/image/upload/c_fill,w_1200,h_630,g_auto,q_auto,f_jpg/v1767935457/Founder_idgl57.png';

// NAP (Name, Address, Phone): tiene que coincidir carácter por carácter con
// la ficha de Google Business Profile y con las redes. Google cruza esos datos
// para decidir si el negocio del sitio y el del mapa son el mismo.
export const BUSINESS = {
  name: 'Define Belleza Integral',
  legalName: 'Definé Dermopigmentación',
  street: 'Av. Aviación 3367, Galería Costa Azul, Studio 105',
  district: 'San Borja',
  city: 'Lima',
  region: 'Lima',
  postalCode: '15037',
  country: 'PE',
  phone: '+51958336208',
  phoneDisplay: '+51 958 336 208',
  email: 'definebellezaintegral@gmail.com',
  lat: -12.1044761,
  lng: -77.001136,
  whatsapp: 'https://wa.me/51958336208',
  instagram: 'https://www.instagram.com/define.belleza.integral',
  facebook: 'https://www.facebook.com/Define.Belleza.Integral',
  // Enlace por CID (el ID de la ficha, sale del embed del mapa). Con solo el
  // nombre y las coordenadas, Maps no encuentra la ficha y muestra un punto suelto.
  maps: 'https://www.google.com/maps?cid=6821069487948054929',
  // Enlace para dejar reseña. Lo ideal es el corto que da Google Business
  // Profile en "Pedir reseñas" (https://g.page/r/…/review): abre directo el
  // formulario de estrellas. Mientras tanto, la ficha del mapa.
  reviews: 'https://www.google.com/maps?cid=6821069487948054929',
  openingHours: [{ days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '09:00', closes: '20:00' }],
};

// El Home siempre con barra final, para que canonical, og:url y sitemap
// apunten exactamente a la misma cadena.
export const abs = (path = '/') => `${SITE_URL}${path === '/' ? '/' : path}`;

// Ficha del negocio. Va en todas las páginas: es la señal principal para el
// paquete local de Google (el mapa con tres resultados).
export const businessLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'BeautySalon',
  '@id': `${SITE_URL}/#business`,
  name: BUSINESS.name,
  alternateName: BUSINESS.legalName,
  description:
    'Studio de belleza en San Borja, Lima especializado en micropigmentación de cejas (microblading, microshading y técnica híbrida) y maquillaje permanente, además de tratamientos faciales, rejuvenecimiento, depilación y estética corporal.',
  knowsAbout: [
    'Micropigmentación de cejas',
    'Microblading',
    'Microshading',
    'Powder brows',
    'Maquillaje permanente',
    'Micropigmentación de labios',
    'Delineado permanente de ojos',
    'Tratamientos faciales',
  ],
  url: abs('/'),
  image: OG_IMAGE,
  logo: abs('/logo-define.png'),
  telephone: BUSINESS.phone,
  email: BUSINESS.email,
  priceRange: '$$',
  currenciesAccepted: 'PEN',
  address: {
    '@type': 'PostalAddress',
    streetAddress: BUSINESS.street,
    addressLocality: BUSINESS.district,
    addressRegion: BUSINESS.region,
    postalCode: BUSINESS.postalCode,
    addressCountry: BUSINESS.country,
  },
  geo: { '@type': 'GeoCoordinates', latitude: BUSINESS.lat, longitude: BUSINESS.lng },
  hasMap: BUSINESS.maps,
  openingHoursSpecification: BUSINESS.openingHours.map((h) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: h.days,
    opens: h.opens,
    closes: h.closes,
  })),
  areaServed: [
    { '@type': 'City', name: 'Lima' },
    { '@type': 'AdministrativeArea', name: 'San Borja' },
    { '@type': 'AdministrativeArea', name: 'Surco' },
    { '@type': 'AdministrativeArea', name: 'La Molina' },
    { '@type': 'AdministrativeArea', name: 'San Isidro' },
    { '@type': 'AdministrativeArea', name: 'Surquillo' },
    { '@type': 'AdministrativeArea', name: 'Miraflores' },
  ],
  sameAs: [BUSINESS.instagram, BUSINESS.facebook, BUSINESS.maps],
  potentialAction: {
    '@type': 'ReserveAction',
    target: { '@type': 'EntryPoint', urlTemplate: BUSINESS.whatsapp, inLanguage: 'es-PE' },
    result: { '@type': 'Reservation', name: 'Cita en Define Belleza Integral' },
  },
});

// Migas de pan: Google las usa para reemplazar la URL cruda en el resultado.
export const breadcrumbLd = (trail) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: trail.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    item: abs(item.path),
  })),
});
