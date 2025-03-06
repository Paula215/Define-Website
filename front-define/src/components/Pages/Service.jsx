import { useState, useEffect } from "react";
import { useParams, useSearchParams, Link, useNavigate } from "react-router-dom";
import ServiceCard from "../ui/ServiceCard";

// Constantes y funciones auxiliares
const CATEGORIES = [
  "Peelings y Limpiezas Faciales",
  "Cejas, Pestañas y Micropigmentación",
  "Rejuvenecimiento",
  "Depilación",
  "Tratamientos Reductores y Estéticos",
  "Aplicaciones Intravenosa",
];

// Función para normalizar categorías para URLs y archivos
const normalizeCategory = (category) => {
  return category
    ?.toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
};

export default function ServicesPage() {
  const { category } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const subcategory = searchParams.get("subcategory");
  const navigate = useNavigate();
  
  const [services, setServices] = useState([]);
  const [subcategories, setSubcategories] = useState(["all"]);
  const [loading, setLoading] = useState(true);
  const [activeSubcategory, setActiveSubcategory] = useState(subcategory || "all");
  const [error, setError] = useState(null);

  // Determinar la categoría activa desde la URL
  const currentCategory = category ? normalizeCategory(category) : null;
  
  // Cargar servicios cuando cambia la categoría o subcategoría
  useEffect(() => {
    const loadServices = async () => {
      setLoading(true);
      setError(null);
      
      try {
        let loadedServices = [];
        
        if (category) {
          // Cargar servicios de una categoría específica
          const normalizedCategory = normalizeCategory(category);
          
          try {
            const response = await import(`/src/data/services-${normalizedCategory}.json`);
            loadedServices = response.default.services;
            
            if (!Array.isArray(loadedServices)) {
              throw new Error(`La propiedad 'services' en ${normalizedCategory} no es un array`);
            }
          } catch (error) {
            console.error(`Error al cargar la categoría ${normalizedCategory}:`, error);
            setError(`No se encontró la categoría ${category}. Por favor, verifica que exista el archivo JSON correspondiente.`);
            loadedServices = [];
          }
        } else {
          // Cargar todos los servicios de todas las categorías
          for (const cat of CATEGORIES) {
            const normalizedCat = normalizeCategory(cat);
            try {
              const response = await import(`/src/data/services-${normalizedCat}.json`);
              if (response.default && Array.isArray(response.default.services)) {
                loadedServices = [...loadedServices, ...response.default.services];
              }
            } catch (error) {
              console.error(`Error al cargar la categoría ${normalizedCat}:`, error);
              // Continuamos con las demás categorías aunque una falle
            }
          }
        }
        
        // Extraer subcategorías únicas
        const uniqueSubcategories = ["all", ...new Set(loadedServices.map(service => service.subcategory))];
        
        setServices(loadedServices);
        setSubcategories(uniqueSubcategories);
        
        // Reiniciar subcategoría si no existe en esta categoría
        if (subcategory && !uniqueSubcategories.includes(subcategory)) {
          setActiveSubcategory("all");
          setSearchParams({});
        } else {
          setActiveSubcategory(subcategory || "all");
        }
      } catch (error) {
        console.error("Error al cargar los servicios:", error);
        setError("Ocurrió un error al cargar los servicios. Por favor, inténtalo más tarde.");
      } finally {
        setLoading(false);
      }
    };
    
    loadServices();
  }, [category, subcategory, setSearchParams]);
  
  // Cambiar subcategoría
  const handleSubcategoryChange = (newSubcategory) => {
    setActiveSubcategory(newSubcategory);
    if (newSubcategory === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ subcategory: newSubcategory });
    }
  };
  
  // Cambiar categoría
  const handleCategoryChange = (newCategory) => {
    navigate(`/services/${newCategory}`);
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

      {/* Navegación de categorías */}
      <nav className="bg-white shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto py-4 gap-4 scrollbar-hide">
            <button
              onClick={() => navigate("/services")}
              className={`px-4 py-2 rounded-md whitespace-nowrap transition-colors ${
                !currentCategory
                  ? "bg-[#4A235A] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Todos
            </button>
            {CATEGORIES.map((cat) => {
              const normalizedCat = normalizeCategory(cat);
              return (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(normalizedCat)}
                  className={`px-4 py-2 rounded-md whitespace-nowrap transition-colors ${
                    currentCategory === normalizedCat
                      ? "bg-[#4A235A] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

{/* Título de categoría actual */}
<div className="bg-white border-b shadow-sm">
  <div className="container mx-auto px-4">
    <div className="py-4">
      <h2 className="text-2xl font-bold text-[#4A235A]">
        {category 
          ? CATEGORIES.find(cat => normalizeCategory(cat) === category) || category.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase())
          : "Todos los Servicios"}
      </h2>
    </div>
  </div>
</div>

      {/* Filtro de subcategorías - Solo mostrar si hay subcategorías disponibles */}
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
              <ServiceCard key={service.id} service={service} />
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