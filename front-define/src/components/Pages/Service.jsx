import { useEffect, useMemo } from "react";
import { useParams, useSearchParams, Link, useNavigate } from "react-router-dom";
import ServiceCard from "../ui/ServiceCard";
import { useTilt } from "../../hooks/useMotion";
import { BUSINESS } from "../../seo/site";

// Los datos se importan en el build (eager): así la lista de tratamientos sale
// ya escrita en el HTML prerenderizado y un robot la lee sin ejecutar JS.
const servicesModules = import.meta.glob("../../data/services-*.json", { eager: true });

// Servicios por slug, con un id único por archivo para no repetir keys.
const SERVICES_BY_SLUG = Object.fromEntries(
  Object.entries(servicesModules)
    .map(([path, mod]) => {
      const slug = path.match(/services-(.+)\.json$/)?.[1];
      const list = Array.isArray(mod.default?.services) ? mod.default.services : [];
      return [slug, list.map((s) => ({ ...s, __uid: `${slug}-${s.id}` }))];
    })
    .filter(([slug]) => slug)
);
const CATEGORY_SLUGS = Object.keys(SERVICES_BY_SLUG);

// Nombre visible por slug. El campo `category` de los JSON no sirve para esto:
// unos traen tildes, "Depilacion" no, y uno guarda el slug crudo.
const CATEGORY_LABELS = {
  "peelings-y-limpiezas-faciales": "Peelings y Limpiezas Faciales",
  "cejas-pestanas-micropigmentacion": "Cejas, Pestañas y Micropigmentación",
  rejuvenecimiento: "Rejuvenecimiento",
  depilacion: "Depilación",
  "tratamientos-reductores-esteticos": "Tratamientos Reductores y Estéticos",
};

// Categorías sin tratamientos listados: se atienden tras una evaluación.
const CONSULT_ONLY = {
  rejuvenecimiento:
    "Diseñamos un plan facial personalizado para revitalizar tu piel, mejorar su firmeza y devolverle luminosidad. Escríbenos por WhatsApp y te orientamos tras una evaluación sin costo.",
};

// Normaliza para comparar: minúsculas, sin tildes y con guiones simples.
const slugify = (value) =>
  String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

// Compara subcategorías ignorando tildes, signos y el plural final.
const looseKey = (value) => slugify(value).replace(/-/g, "").replace(/s$/, "");

export default function ServicesPage() {
  // La subcategoría puede venir en el path (/services/depilacion/facial, como
  // enlaza el submenú del navbar) o en el query (?subcategory=…).
  const { category, subcategory: subcategoryFromPath } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const subcategory = subcategoryFromPath || searchParams.get("subcategory");
  const navigate = useNavigate();

  // El slug de la URL se resuelve contra los archivos que existen de verdad.
  const currentSlug = category
    ? CATEGORY_SLUGS.find((slug) => slug === slugify(category)) || slugify(category)
    : null;

  const services = useMemo(
    () =>
      currentSlug
        ? SERVICES_BY_SLUG[currentSlug] || []
        : CATEGORY_SLUGS.flatMap((slug) => SERVICES_BY_SLUG[slug]),
    [currentSlug]
  );

  const subcategories = useMemo(
    () => ["all", ...new Set(services.map((s) => s.subcategory).filter(Boolean))],
    [services]
  );

  // La subcategoría de la URL se resuelve de forma tolerante: "pestanas"
  // encuentra "Pestañas", "peeling" encuentra "Peelings".
  const resolvedSubcategory = useMemo(() => {
    if (!subcategory) return null;
    const key = looseKey(subcategory);
    return (
      subcategories.find((u) => looseKey(u) === key) ||
      subcategories.find((u) => looseKey(u).startsWith(key)) ||
      null
    );
  }, [subcategory, subcategories]);

  const activeSubcategory = resolvedSubcategory || "all";

  // Mantiene el query en sintonía con el nombre real de la subcategoría (o lo
  // limpia si no existe). Solo aplica cuando la subcategoría venía en el query.
  useEffect(() => {
    if (subcategoryFromPath || !subcategory) return;
    if (!resolvedSubcategory) setSearchParams({}, { replace: true });
    else if (resolvedSubcategory !== subcategory)
      setSearchParams({ subcategory: resolvedSubcategory }, { replace: true });
  }, [subcategory, subcategoryFromPath, resolvedSubcategory, setSearchParams]);

  // Cambiar subcategoría. Navega en vez de tocar solo el query, porque si la
  // subcategoría venía en el path hay que salir de esa ruta para poder quitarla.
  const handleSubcategoryChange = (newSubcategory) => {
    const base = `/services${category ? `/${category}` : ""}`;
    navigate(
      newSubcategory === "all"
        ? base
        : `${base}?subcategory=${encodeURIComponent(newSubcategory)}`
    );
  };

  // Filtrar servicios por subcategoría
  const filteredServices =
    activeSubcategory === "all"
      ? services
      : services.filter((service) => service.subcategory === activeSubcategory);

  // Inclinación 3D en las cards (solo escritorio)
  useTilt(".svc", filteredServices.length);

  const consultOnly = services.length === 0 ? CONSULT_ONLY[currentSlug] : null;

  const currentTitle = currentSlug
    ? CATEGORY_LABELS[currentSlug] ||
      currentSlug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())
    : "Todos los Servicios";

  // El H1 es la señal más fuerte de tema para el buscador: las categorías
  // comparten plantilla, así que si todas dicen "Nuestros servicios" ninguna
  // puede posicionar por su propio término.
  const heading = currentSlug ? currentTitle : "Nuestros servicios";
  const intro = currentSlug
    ? `Tratamientos de ${currentTitle.toLowerCase()} en nuestro studio de San Borja, Lima. Cada uno parte de un diagnóstico y se adapta a tu piel.`
    : "Descubre todos los tratamientos que tenemos para ti. Cada uno parte de un diagnóstico y se adapta a tu piel.";

  return (
    <main>
      {/* Banner superior */}
      <section className="banner">
        <div className="wrap">
          <p className="eyebrow">Studio de belleza · San Borja</p>
          <h1 className="d">{heading}</h1>
          <div className="foot">
            <p>{intro}</p>
            {!consultOnly && (
              <p className="n">
                <span>{filteredServices.length}</span>
                <em>{filteredServices.length === 1 ? "Tratamiento" : "Tratamientos"}</em>
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Título de categoría + filtro de subcategorías */}
      <div className="catbar">
        <div className="wrap in">
          <h2>{consultOnly ? "Plan personalizado" : activeSubcategory === "all" ? "Todos los tratamientos" : activeSubcategory}</h2>
          {subcategories.length > 1 && (
            <div className="filters">
              {subcategories.map((sub) => (
                <button
                  key={sub}
                  className="chip"
                  aria-pressed={activeSubcategory === sub}
                  onClick={() => handleSubcategoryChange(sub)}
                >
                  {sub === "all" ? "Todas" : sub}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* La categoría de cejas enlaza a la guía de micropigmentación: es la
          página que posiciona por "microblading" y "microshading". */}
      {currentSlug === "cejas-pestanas-micropigmentacion" && (
        <div className="wrap">
          <Link to="/micropigmentacion-cejas-san-borja" className="svc-guide">
            <span>¿Microblading o microshading? Conoce las técnicas, el proceso y los cuidados</span>
            <svg width="18" height="8" viewBox="0 0 18 8" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true"><path d="M0 4h16M13 1l3 3-3 3" /></svg>
          </Link>
        </div>
      )}

      {/* Lista de servicios */}
      <section>
        <div className="wrap">
          {consultOnly ? (
            <div className="empty">
              <h3>Consulta personalizada</h3>
              <p style={{ maxWidth: "52ch", marginInline: "auto" }}>{consultOnly}</p>
              <a href={`${BUSINESS.whatsapp}?text=${encodeURIComponent(`Hola, quiero información sobre ${currentTitle.toLowerCase()}`)}`} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ color: "var(--plum)", marginTop: "1.75rem" }}>Consultar por WhatsApp</a>
            </div>
          ) : filteredServices.length > 0 ? (
            <div className="svc-grid">
              {filteredServices.map((service, i) => (
                <ServiceCard key={service.__uid || service.id} service={service} eager={i < 3} />
              ))}
            </div>
          ) : (
            <div className="empty">
              <h3>No se encontraron servicios</h3>
              <p>Intenta con otra categoría o subcategoría</p>
              {category && (
                <Link to="/services" className="btn btn-ghost" style={{ color: "var(--plum)", marginTop: "1.75rem" }}>Ver todos los servicios</Link>
              )}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
