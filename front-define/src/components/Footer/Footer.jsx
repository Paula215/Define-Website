import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#4A235A] text-white py-9">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contacto */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="flex items-center gap-2">
              <Phone size={20} />
              <span>958 336 208</span>
            </div>
            <div className="flex items-start gap-2">
              <MapPin size={20} className="flex-shrink-0 mt-1" />
              <span className="text-sm">
              Av. Aviación N° 3367 - San Borja
              </span>
            </div>
          </div>

          {/* Trabaja con nosotros */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Trabaja con nosotros</h3>
            <div className="flex items-center gap-2">
              <Mail size={20} />
              <a href="mailto:definebellezaintegral@gmail.com" className="text-sm hover:underline">
                definebellezaintegral@gmail.com
              </a>
            </div>
          </div>

          {/* Redes sociales */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Redes</h3>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/define.belleza.integral/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://www.facebook.com/Define.Belleza.Integral" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}