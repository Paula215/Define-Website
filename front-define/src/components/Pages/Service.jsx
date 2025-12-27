import { useState, useEffect } from "react";
import { useParams, useSearchParams, Link } from "react-router-dom";
import ServiceCard from "../ui/ServiceCard";

// ========================================
// MAPEO: Slug normalizado → Nombre de archivo JSON
// ========================================
const FILE_MAP = {
  'aplicaciones-intravenosas': 'services-aplicaciones-intravenosas.json',
  'cejas-pestanas-micropigmentacion': 'services-cejas-pestanas-micropigmentacion.json',
  'depilacion': 'services-depilacion.json',
  'peelings-limpiezas-faciales': 'services-peelings-y-limpiezas-faciales.json',
  'rejuvenecimiento': 'services-rejuvenecimiento.json',
  'tratamientos-reductores-esteticos': 'services-tratamientos-reductores-esteticos.json',
};

// Lista de categorías para mostrar títulos bonitos
const CATEGORIES_DISPLAY = {
  'aplicaciones-intravenosas': 'Aplicaciones Intravenosas',
  'cejas-pestanas-micropigmentacion': 'Cejas, Pestañas y Micropigmentación',
  'depilacion': 'Depilación',
  'peelings-limpiezas-faciales': 'Peelings y Limpiezas Faciales',
  'rejuvenecimiento': 'Rejuvenecimiento',
  'tratamientos-reductores-esteticos': 'Tratamientos Reductores y Estéticos',
};

// Importar todos los JSON de forma dinámica
const servicesModules = import.meta.glob("../../data/services-*.json");

// Función para normalizar strings (solo para comparación)
const normalizeString = (str) =>
  String(str || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-z0-9]/g, "")
    .replace(/s$/i, "");

export default function ServicesPage() {
  const { category, subcategory: pathSubcategory } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const subcategory = searchParams.get("subcategory");
  
  const [services, setServices] = useState([]);
  const [subcategories, setSubcategories] = useState(["all"]);
  const [loading, setLoading] = useState(true);
  const [activeSubcategory, setActiveSubcategory] = useState(subcategory || "all");
  const [error, setError] = useState(null);
  const [categoryTitle, setCategoryTitle] = useState("");

  // Cargar servicios cuando cambia la categoría o subcategoría
  useEffect(() => {
    const loadServices = async () => {
      setLoading(true);
      setError(null);

      try {
        let loadedServices = [];

        // Función auxiliar para cargar un JSON por nombre de archivo
        const loadJsonByFilename = async (filename) => {
          const path = `../../data/${filename}`;
          
          if (!servicesModules[path]) {
            console.warn(`No se encontró: ${path}`);
            return [];
          }

          const module = await servicesModules[path]();
          const categoryServices = Array.isArray(module.default.services)
            ? module.default.services
            : [];
          
          return categoryServices.map((s, idx) => ({ 
            ...s, 
            __uid: `${filename}-${s.id}-${idx}` 
          }));
        };

        if (category) {
          // Cargar UNA categoría específica
          const filename = FILE_MAP[category];
          
          if (!filename) {
            setError(`Categoría "${category}" no encontrada`);
            setLoading(false);
            return;
          }

          loadedServices = await loadJsonByFilename(filename);
          setCategoryTitle(CATEGORIES_DISPLAY[category] || category);
        } else {
          // Cargar TODAS las categorías
          for (const [slug, filename] of Object.entries(FILE_MAP)) {
            try {
              const categoryServices = await loadJsonByFilename(filename);
              loadedServices.push(...categoryServices);
            } catch (e) {
              console.warn(`No se pudo cargar ${filename}:`, e);
            }
          }

          setCategoryTitle("Todos los Servicios");
        }

        // Extraer subcategorías únicas
        const uniqueSubcategories = [
          "all",
          ...new Set(loadedServices.map(s => s.subcategory).filter(Boolean)),
        ];

        // Resolver subcategoría desde URL (tolerante a variaciones)
        const incomingSub = subcategory || pathSubcategory || null;
        let resolvedSubcategory = incomingSub;

        if (incomingSub) {
          const normParam = normalizeString(incomingSub);
          const found = uniqueSubcategories.find((u) => normalizeString(u) === normParam);
          
          if (found) {
            resolvedSubcategory = found;
          } else {
            const partial = uniqueSubcategories.find((u) => 
              normalizeString(u).startsWith(normParam)
            );
            if (partial) resolvedSubcategory = partial;
          }
        }

        setServices(loadedServices);
        setSubcategories(uniqueSubcategories);

        // Actualizar subcategoría activa
        if (resolvedSubcategory && !uniqueSubcategories.includes(resolvedSubcategory)) {
          setActiveSubcategory("all");
          setSearchParams({});
        } else {
          setActiveSubcategory(resolvedSubcategory || "all");
          
          // Sincronizar URL con subcategoría resuelta
          if (resolvedSubcategory && resolvedSubcategory !== subcategory) {
            setSearchParams({ subcategory: resolvedSubcategory });
          }
        }

      } catch (err) {
        console.error('Error cargando servicios:', err);
        setError("Error al cargar los servicios.");
      } finally {
        setLoading(false);
      }
    };

    loadServices();
  }, [category, subcategory, pathSubcategory, setSearchParams]);

  // Cambiar subcategoría
  const handleSubcategoryChange = (newSubcategory) => {
    setActiveSubcategory(newSubcategory);
    if (newSubcategory === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ subcategory: newSubcategory });
    }
  };
  
  // Filtrar servicios por subcategoría
  const filteredServices = activeSubcategory === "all" 
    ? services 
    : services.filter(service => service.subcategory === activeSubcategory);
  
  // Mostrar estado de carga
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#4A235A] mx-auto"></div>
          <p className="mt-4 text-[#4A235A]">Cargando servicios...</p>
        </div>
      </div>
    );
  }
  
  // Mostrar mensaje de error
  if (error) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <p>{error}</p>
          <Link to="/services" className="underline mt-2 block">
            Ver todos los servicios
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Banner superior */}
      <div className="bg-[#4A235A] text-white py-10 px-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">Nuestros Servicios</h1>
          <p className="mt-2">Descubre todos los tratamientos que tenemos para ti</p>
        </div>
      </div>

      {/* Título de categoría actual */}
      <div className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-4">
          <div className="py-4">
            <h2 className="text-2xl font-bold text-[#4A235A]">
              {categoryTitle}
            </h2>
          </div>
        </div>
      </div>

      {/* Filtro de subcategorías */}
      {subcategories.length > 1 && (
        <div className="container mx-auto px-4 py-4">
          <h3 className="text-lg font-medium text-gray-700 mb-2">Filtrar por subcategoría:</h3>
          <div className="flex flex-wrap gap-2">
            {subcategories.map((sub) => (
              <button
                key={sub}
                onClick={() => handleSubcategoryChange(sub)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  activeSubcategory === sub 
                    ? "bg-[#4A235A] text-white" 
                    : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
                }`}
              >
                {sub === "all" ? "Todas" : sub}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Lista de servicios */}
      <div className="container mx-auto px-4 py-8">
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <ServiceCard key={service.__uid} service={service} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-lg shadow">
            <h3 className="text-xl text-gray-700">No se encontraron servicios</h3>
            <p className="mt-2 text-gray-500">Intenta con otra categoría o subcategoría</p>
            {category && (
              <Link to="/services" className="mt-4 inline-block text-[#4A235A] underline">
                Ver todos los servicios
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}