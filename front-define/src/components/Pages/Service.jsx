const servicesModules = import.meta.glob("../../data/services-*.json");
import { useState, useEffect } from "react";
import { useParams, useSearchParams, Link, useNavigate } from "react-router-dom";
import ServiceCard from "../ui/ServiceCard";
import { useTilt } from "../../hooks/useMotion";

// Los slugs existentes salen de los propios archivos de datos. Antes había una
// lista escrita a mano que se normalizaba quitando las tildes, y "Depilación"
// acababa en "depilacin": cuatro de las seis categorías no cargaban en /services.
const CATEGORY_SLUGS = Object.keys(servicesModules)
  .map((path) => path.match(/services-(.+)\.json$/)?.[1])
  .filter(Boolean);

// Nombre visible por slug. El campo `category` de los JSON no sirve para esto:
// unos traen tildes, "Depilacion" no, y uno guarda el slug crudo.
const CATEGORY_LABELS = {
  "peelings-y-limpiezas-faciales": "Peelings y Limpiezas Faciales",
  "cejas-pestanas-micropigmentacion": "Cejas, Pestañas y Micropigmentación",
  rejuvenecimiento: "Rejuvenecimiento",
  depilacion: "Depilación",
  "tratamientos-reductores-esteticos": "Tratamientos Reductores y Estéticos",
  "aplicaciones-intravenosas": "Aplicaciones Intravenosas",
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

  const [services, setServices] = useState([]);
  const [subcategories, setSubcategories] = useState(["all"]);
  const [loading, setLoading] = useState(true);
  const [activeSubcategory, setActiveSubcategory] = useState(subcategory || "all");
  const [error, setError] = useState(null);

  // El slug de la URL se resuelve contra los archivos que existen de verdad.
  const currentSlug = category
    ? CATEGORY_SLUGS.find((slug) => slug === slugify(category)) || slugify(category)
    : null;

  // Cargar servicios cuando cambia la categoría o subcategoría
  useEffect(() => {
    const loadServices = async () => {
      setLoading(true);
      setError(null);

      try {
        let loadedServices = [];

        const loadCategoryServices = async (slug) => {
          const path = `../../data/services-${slug}.json`;

          if (!servicesModules[path]) {
            throw new Error("Archivo no encontrado");
          }

          const module = await servicesModules[path]();
          const original = Array.isArray(module.default.services)
            ? module.default.services
            : [];
          // Add a unique id per-service to avoid duplicate React keys across files
          return original.map((s) => ({ ...s, __uid: `${slug}-${s.id}` }));
        };

        if (currentSlug) {
          // Cargar una categoría específica. Que el slug no exista no es un
          // fallo de carga: cae en el estado vacío, no en el de error.
          loadedServices = CATEGORY_SLUGS.includes(currentSlug)
            ? await loadCategoryServices(currentSlug)
            : [];
        } else {
          // Cargar todas las categorías
          for (const slug of CATEGORY_SLUGS) {
            try {
              const categoryServices = await loadCategoryServices(slug);
              loadedServices.push(...categoryServices);
            } catch {
              console.warn(`No se pudo cargar ${slug}`);
            }
          }
        }

        const uniqueSubcategories = [
          "all",
          ...new Set(loadedServices.map((s) => s.subcategory).filter(Boolean)),
        ];

        // La subcategoría de la URL se resuelve de forma tolerante: "pestanas"
        // encuentra "Pestañas", "peeling" encuentra "Peelings".
        let resolvedSubcategory = subcategory;
        if (subcategory) {
          const key = looseKey(subcategory);
          resolvedSubcategory =
            uniqueSubcategories.find((u) => looseKey(u) === key) ||
            uniqueSubcategories.find((u) => looseKey(u).startsWith(key)) ||
            subcategory;
        }

        setServices(loadedServices);
        setSubcategories(uniqueSubcategories);

        if (subcategory && !uniqueSubcategories.includes(resolvedSubcategory)) {
          setActiveSubcategory("all");
          if (!subcategoryFromPath) setSearchParams({});
        } else {
          setActiveSubcategory(resolvedSubcategory || "all");
          // Mantiene la URL en sintonía con el nombre real de la subcategoría.
          if (
            !subcategoryFromPath &&
            resolvedSubcategory &&
            resolvedSubcategory !== subcategory
          ) {
            setSearchParams({ subcategory: resolvedSubcategory });
          }
        }
      } catch (err) {
        console.error(err);
        setError("Error al cargar los servicios.");
      } finally {
        setLoading(false);
      }
    };

    loadServices();
  }, [currentSlug, subcategory, subcategoryFromPath, setSearchParams]);

  // Cambiar subcategoría. Navega en vez de tocar solo el query, porque si la
  // subcategoría venía en el path hay que salir de esa ruta para poder quitarla.
  const handleSubcategoryChange = (newSubcategory) => {
    setActiveSubcategory(newSubcategory);
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

  const currentTitle = currentSlug
    ? CATEGORY_LABELS[currentSlug] ||
      currentSlug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())
    : "Todos los Servicios";

  return (
    <main>
      {/* Banner superior */}
      <section className="banner">
        <div className="wrap">
          <p className="eyebrow">Studio de belleza · San Borja</p>
          <h1 className="d">Nuestros servicios</h1>
          <div className="foot">
            <p>Descubre todos los tratamientos que tenemos para ti. Cada uno parte de un diagnóstico y se adapta a tu piel.</p>
            {!loading && !error && (
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
          <h2>{activeSubcategory === "all" ? currentTitle : activeSubcategory}</h2>
          {!loading && !error && subcategories.length > 1 && (
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

      {/* Lista de servicios */}
      <section>
        <div className="wrap">
          {loading ? (
            <div className="svc-grid">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="skel"><div className="b b1"></div><div className="b b2"></div><div className="b b3"></div></div>
              ))}
            </div>
          ) : error ? (
            <div className="empty">
              <h3>{error}</h3>
              <p>Vuelve a intentarlo o revisa todos los servicios disponibles.</p>
              <Link to="/services" className="btn btn-ghost" style={{ color: "var(--plum)", marginTop: "1.75rem" }}>Ver todos los servicios</Link>
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
