import PropTypes from "prop-types"
import { useState } from "react"
import { PhoneIcon as WhatsappIcon } from "lucide-react"

export default function ServiceCard({ service }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [imageError, setImageError] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === service.images.length - 1 ? 0 : prev + 1))
    setImageError(false)
    setImageLoaded(false)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? service.images.length - 1 : prev - 1))
    setImageError(false)
    setImageLoaded(false)
  }

  const handleWhatsApp = () => {
    const message = `Hola, estoy interesado/a en el servicio de ${service.title}`
    const url = `https://wa.me/51958336208?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  const handleImageError = () => {
    setImageError(true)
  }

  const handleImageLoad = () => {
    setImageLoaded(true)
  }

  return (
    // h-full + flex-col => todas las tarjetas tienen la misma altura dentro de la grilla
    <div className="h-full flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 ease-out hover:shadow-2xl hover:-translate-y-1">
      {/* Carrusel de imágenes (altura fija => uniforme) */}
      <div className="relative h-56 sm:h-64 flex-shrink-0 group">
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#4A235A]"></div>
          </div>
        )}
        <img
          src={imageError ? "/placeholder.png" : service.images[currentImageIndex]}
          alt={service.title}
          className={`w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 ${!imageLoaded && !imageError ? "hidden" : ""}`}
          onError={handleImageError}
          onLoad={handleImageLoad}
        />
        {service.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              aria-label="Imagen anterior"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-9 h-9 flex items-center justify-center rounded-full transition-colors"
            >
              ←
            </button>
            <button
              onClick={nextImage}
              aria-label="Imagen siguiente"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-9 h-9 flex items-center justify-center rounded-full transition-colors"
            >
              →
            </button>
          </>
        )}
      </div>

      {/* Contenido: flex-1 para llenar la tarjeta y empujar el botón abajo */}
      <div className="flex-1 flex flex-col p-6">
        <span className="text-xs sm:text-sm text-[#4A235A] font-medium">{service.subcategory}</span>
        <h3 className="text-lg sm:text-xl font-bold mt-1">{service.title}</h3>

        {/* flex-grow => la descripción ocupa el espacio disponible, alineando el botón */}
        <p className="text-sm sm:text-base text-gray-600 mt-3 mb-6 leading-relaxed flex-grow">
          {service.description}
        </p>

        <button
          onClick={handleWhatsApp}
          className="mt-auto w-full bg-[#4A235A] text-white py-2.5 px-4 rounded-lg hover:bg-[#3A1B47] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 text-sm sm:text-base"
        >
          <WhatsappIcon size={20} />
          Consultar por WhatsApp
        </button>
      </div>
    </div>
  )
}

ServiceCard.propTypes = {
  service: PropTypes.shape({
    id: PropTypes.number.isRequired,
    subcategory: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
}
