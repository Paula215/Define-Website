// Función de normalización consistente
export const normalizeSlug = (text) => {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ñ/g, 'n')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

export const NavLinks = [
  { 
    id: 1, 
    title: "Inicio", 
    link: "/",
    slug: "inicio"
  },
  {
    id: 2,
    title: "Servicios",
    link: "/services",
    slug: "servicios",
    submenu: [
      {
        id: "service-1",
        title: "Cejas, Pestañas y Micropigmentación",
        link: "/services/cejas-pestanas-micropigmentacion",
        slug: "cejas-pestanas-micropigmentacion",
        submenu: [
          { 
            id: "subservice-1", 
            title: "Cejas", 
            link: "/services/cejas-pestanas-micropigmentacion/cejas",
            slug: "cejas"
          },
          { 
            id: "subservice-2", 
            title: "Pestañas", 
            link: "/services/cejas-pestanas-micropigmentacion/pestanas",
            slug: "pestanas"
          },
          { 
            id: "subservice-3", 
            title: "Micropigmentación", 
            link: "/services/cejas-pestanas-micropigmentacion/micropigmentacion",
            slug: "micropigmentacion"
          },
        ],
      },
      {
        id: "service-2", 
        title: "Peelings y Limpiezas Faciales", 
        link: "/services/peelings-y-limpiezas-faciales",
        slug: "peelings-limpiezas-faciales",
        submenu: [
          { 
            id: "subservice-1", 
            title: "Peeling", 
            link: "/services/peelings-y-limpiezas-faciales/Peeling",
            slug: "Peeling"
          },
          { 
            id: "subservice-2", 
            title: "Facial", 
            link: "/services/peelings-y-limpiezas-faciales/Facial",
            slug: "Facial"
          },
        ],
      },
      {
        id: "service-3", 
        title: "Rejuvenecimiento", 
        link: "/services/rejuvenecimiento",
        slug: "rejuvenecimiento"
      },
      { 
        id: "service-4", 
        title: "Depilación", 
        link: "/services/depilacion",
        slug: "depilacion",
        submenu: [
          { 
            id: "subservice-1", 
            title: "Depilación Corporal", 
            link: "/services/depilacion/depilacion-laser",
            slug: "depilacion-laser"
          },
          { 
            id: "subservice-2", 
            title: "Depilación Facial", 
            link: "/services/depilacion/depilacion-electrica",
            slug: "depilacion-electrica"
          },
        ],
      },
      {
        id: "service-5", 
        title: "Tratamientos Reductores y Estéticos", 
        link: "/services/tratamientos-reductores-esteticos",
        slug: "tratamientos-reductores-esteticos"
      },
      { 
        id: "service-6", 
        title: "Aplicaciones Intravenosas", 
        link: "/services/aplicaciones-intravenosas",
        slug: "aplicaciones-intravenosas"
      }
    ],
  },
  { 
    id: 3, 
    title: "Nosotros", 
    link: "/quien-soy",
    slug: "quien-soy"
  },
  // {
  //   id: 4,
  //   title: "Cursos Define",
  //   link: "/cursos",
  //   slug: "cursos",
  //   submenu: [
  //     { 
  //       id: "curso-1", 
  //       title: "Básico: Micropigmentación cejas, labios, ojos", 
  //       link: "/cursos/basico",
  //       slug: "basico"
  //     },
  //     { 
  //       id: "curso-2", 
  //       title: "Intermedio: Micropigmentación labios", 
  //       link: "/cursos/intermedio-labios",
  //       slug: "intermedio-labios"
  //     },
  //     { 
  //       id: "curso-3", 
  //       title: "Intermedio: Micropigmentación ojos", 
  //       link: "/cursos/intermedio-ojos",
  //       slug: "intermedio-ojos"
  //     },
  //   ],
  // },
  {
    id: 4,
    title: "Contacto",
    link: "/#contacto",
    slug: "contacto"
  }
];

// Helper para buscar servicios por slug
export const findServiceBySlug = (slug) => {
  const services = NavLinks.find(link => link.id === 2)?.submenu || [];
  
  for (const service of services) {
    if (service.slug === slug) return service;
    
    if (service.submenu) {
      const subService = service.submenu.find(sub => sub.slug === slug);
      if (subService) return subService;
    }
  }
  
  return null;
};

// Helper para buscar cursos por slug
export const findCursoBySlug = (slug) => {
  const cursos = NavLinks.find(link => link.id === 4)?.submenu || [];
  return cursos.find(curso => curso.slug === slug);
};