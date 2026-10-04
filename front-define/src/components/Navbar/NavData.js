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
            link: "/services/depilacion/depilacion-corporal",
            slug: "depilacion-corporal"
          },
          { 
            id: "subservice-2", 
            title: "Depilación Facial", 
            link: "/services/depilacion/depilacion-facial",
            slug: "depilacion-facial"
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
  {
    id: 5,
    title: "Información",
    link: "/micropigmentacion-cejas-san-borja",
    slug: "informacion"
  },
  {
    id: 4,
    title: "Contacto",
    link: "/#contacto",
    slug: "contacto"
  }
];
