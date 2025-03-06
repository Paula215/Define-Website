
export const NavLinks = [
  { 
    id: 1, 
    title: "Inicio", 
    link: "/" 
  },
  {
    id: 2,
    title: "Servicios",
    link: "#/services",
    submenu: [
      {
        id: "service-1",
        title: "Cejas, Pestañas y Micropigmentación",
        link: "/services/cejas-pestaas-y-micropigmentacin",
        submenu: [
          { id: "subservice-1", title: "Cejas", link: "/services/cejas-pestaas-y-micropigmentacin/cejas" },
          { id: "subservice-2", title: "Pestañas", link: "/services/cejas-pestaas-y-micropigmentacin/pestanas" },
          { id: "subservice-3", title: "Micropigmentación", link: "/services/cejas-pestaas-y-micropigmentacin/micropigmentacion" },
        ],
      },
      {
        id: "service-2", 
        title: "Peelings y Limpiezas Faciales", 
        link: "/services/peelings-y-limpiezas-faciales",
        submenu: [
          { id: "subservice-1", title: "Peelings", link: "#/services/peelings-y-limpiezas-faciales/peelings" },
          { id: "subservice-2", title: "Limpiezas Faciales", link: "/services/peelings-y-limpiezas-faciales/limpiezas" },
        ],
      },
      {
        id: "service-3", 
        title: "Rejuvenecimiento", 
        link: "/services/rejuvenecimiento",
        submenu: [
          { id: "subservice-1", title: "Acido Hialuronico", link: "/services/rejuvenecimiento/acido-hialuronico" },
          { id: "subservice-2", title: "Botox", link: "/services/rejuvenecimiento/botox" },
          { id: "subservice-3", title: "Plasma rico en plaquetas", link: "/services/rejuvenecimiento/plasma" },
          { id: "subservice-4", title: "Enzimas", link: "/services/rejuvenecimiento/enzimas" },
        ],
      },
      { id: "service-4", title: "Depilación", link: "/services/depilacin" },
      {
        id: "service-5", 
        title: "Tratamientos Reductores y Estéticos", 
        link: "/services/tratamientos-reductores-y-estticos",
        submenu: [
          { id: "subservice-1", title: "Mesoterapia", link: "/services/tratamientos-reductores-y-estticos/mesoterapia" },
          { id: "subservice-2", title: "Carboxiterapia", link: "/services/tratamientos-reductores-y-estticos/carboxiterapia" },
          { id: "subservice-3", title: "Reafirmantes", link: "/services/tratamientos-reductores-y-estticos/reafirmantes" },
          { id: "subservice-4", title: "Bronceado", link: "/services/tratamientos-reductores-y-estticos/bronceado" },
        ],
      },
      { id: "service-6", title: "Aplicaciones Intravenosas", link: "/services/aplicaciones-intravenosa" }
    ],
  },
  { id: 3, title: "Quien soy", link: "/quien-soy" },
  {
    id: 4,
    title: "Cursos Define",
    link: "/cursos",
    submenu: [
      { id: "curso-1", title: "Básico: Micropigmentación cejas, labios, ojos", link: "/cursos/basico" },
      { id: "curso-2", title: "Intermedio: Micropigmentación labios", link: "/cursos/intermedio-labios" },
      { id: "curso-3", title: "Intermedio: Micropigmentación ojos", link: "/cursos/intermedio-ojos" },
    ],
  },
  { id: 5, title: "Contacto", link: "/contacto" }
];