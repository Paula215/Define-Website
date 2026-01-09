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
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Carrusel de imágenes */}
      <div className="relative h-64">
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#4A235A]"></div>
          </div>
        )}
        <img
          src={imageError ? "/placeholder.png" : service.images[currentImageIndex]}
          alt={service.title}
          className={`w-full h-full object-cover ${!imageLoaded && !imageError ? "hidden" : ""}`}
          onError={handleImageError}
          onLoad={handleImageLoad}
        />
        {service.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
            >
              ←
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
            >
              →
            </button>
          </>
        )}
      </div>

      {/* Contenido */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="text-sm text-[#4A235A] font-medium">{service.subcategory}</span>
            <h3 className="text-xl font-bold mt-1">{service.title}</h3>
          </div>
        </div>

        <p className="text-gray-600 mb-6">{service.description}</p>

        <button
          onClick={handleWhatsApp}
          className="w-full bg-[#4A235A] text-white py-2 px-4 rounded-md hover:bg-[#3A1B47] transition-colors flex items-center justify-center gap-2"
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

