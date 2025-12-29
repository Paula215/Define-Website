// Función de normalización consistente
export const normalizeSlug = (text) => {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Elimina acentos
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
        link: "/services/peelings-limpiezas-faciales",
        slug: "peelings-limpiezas-faciales",
        submenu: [
          { 
            id: "subservice-1", 
            title: "peeling", 
            link: "/services/peelings-limpiezas-faciales/peelings",
            slug: "peeling"
          },
          { 
            id: "subservice-2", 
            title: "Limpiezas Faciales", 
            link: "/services/peelings-limpiezas-faciales/limpiezas",
            slug: "limpiezas"
          },
        ],
      },
      {
        id: "service-3", 
        title: "Rejuvenecimiento", 
        link: "/services/rejuvenecimiento",
        slug: "rejuvenecimiento",
        submenu: [
          { 
            id: "subservice-1", 
            title: "Acido Hialuronico", 
            link: "/services/rejuvenecimiento/acido-hialuronico",
            slug: "acido-hialuronico"
          },
          { 
            id: "subservice-2", 
            title: "Botox", 
            link: "/services/rejuvenecimiento/botox",
            slug: "botox"
          },
          { 
            id: "subservice-3", 
            title: "Plasma rico en plaquetas", 
            link: "/services/rejuvenecimiento/plasma",
            slug: "plasma"
          },
          { 
            id: "subservice-4", 
            title: "Enzimas", 
            link: "/services/rejuvenecimiento/enzimas",
            slug: "enzimas"
          },
        ],
      },
      { 
        id: "service-4", 
        title: "Depilación", 
        link: "/services/depilacion",
        slug: "depilacion"
      },
      {
        id: "service-5", 
        title: "Tratamientos Reductores y Estéticos", 
        link: "/services/tratamientos-reductores-esteticos",
        slug: "tratamientos-reductores-esteticos",
        submenu: [
          { 
            id: "subservice-1", 
            title: "Mesoterapia", 
            link: "/services/tratamientos-reductores-esteticos/mesoterapia",
            slug: "mesoterapia"
          },
          { 
            id: "subservice-2", 
            title: "Carboxiterapia", 
            link: "/services/tratamientos-reductores-esteticos/carboxiterapia",
            slug: "carboxiterapia"
          },
          { 
            id: "subservice-3", 
            title: "Reafirmantes", 
            link: "/services/tratamientos-reductores-esteticos/reafirmantes",
            slug: "reafirmantes"
          },
          { 
            id: "subservice-4", 
            title: "Bronceado", 
            link: "/services/tratamientos-reductores-esteticos/bronceado",
            slug: "bronceado"
          },
        ],
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
    title: "Quien soy", 
    link: "/quien-soy",
    slug: "quien-soy"
  },
  {
    id: 4,
    title: "Cursos Define",
    link: "/cursos",
    slug: "cursos",
    submenu: [
      { 
        id: "curso-1", 
        title: "Básico: Micropigmentación cejas, labios, ojos", 
        link: "/cursos/basico",
        slug: "basico"
      },
      { 
        id: "curso-2", 
        title: "Intermedio: Micropigmentación labios", 
        link: "/cursos/intermedio-labios",
        slug: "intermedio-labios"
      },
      { 
        id: "curso-3", 
        title: "Intermedio: Micropigmentación ojos", 
        link: "/cursos/intermedio-ojos",
        slug: "intermedio-ojos"
      },
    ],
  },
  { 
    id: 5, 
    title: "Contacto", 
    link: "/contacto",
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