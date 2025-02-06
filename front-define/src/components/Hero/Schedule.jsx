import { Phone, MapPin, Instagram, Facebook, PhoneIcon as WhatsApp, Clock } from 'lucide-react';

export default function NosotrosSection() {
  return (
    <section className="bg-lila relative w-full bg-cover bg-center bg-no-repeat py-20 px-8">
      <div className="container mx-auto py-10">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Información de contacto */}
          <div className="space-y-8 flex flex-col items-center md:items-start">
            <div className="text-center md:text-left w-full">
              <h2 className="text-xl md:text-4xl font-secondary text-morado mb-4 py-1">Dirección</h2>              
              <div className="flex items-start gap-2 text-plomo justify-center md:justify-start">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p>Av. Aviación N° 3367 - San Borja</p>
                  <p>Galeria Costa Azul Studio N° 105</p>
                </div>
              </div>
            </div>

            <div className="text-center md:text-left w-full">
              <h2 className="text-xl md:text-4xl font-secondary text-morado mb-4 py-1">Teléfono:</h2>
              <div className="flex items-center gap-2 text-plomo justify-center md:justify-start">
                <Phone className="w-5 h-5" />
                <a href="tel: 958 336 208" className="hover:text-morado">
                  +51 958 336 208
                </a>
              </div>
            </div>

            <div className="text-center md:text-left w-full">
              <h2 className="text-xl md:text-4xl font-secondary text-morado mb-4 py-1">Horario de atención:</h2>
              <div className="flex items-center gap-2 text-plomo justify-center md:justify-start">
                <Clock className="w-5 h-5" />
                <div>
                  <p>Lunes - Sábado</p>
                  <p>9:00 - 20:00</p>
                </div>
              </div>
            </div>

            <div className="text-center md:text-left w-full">
              <h2 className="text-xl md:text-4xl font-secondary text-morado mb-4 py-1">Mis perfiles:</h2>
              <div className="flex gap-4 justify-center md:justify-start">
                <a 
                  href="https://wa.me/51958336208" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-morado p-3 rounded-full text-white hover:opacity-90 transition-opacity"
                >
                  <WhatsApp className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.instagram.com/define.belleza.integral" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-morado p-3 rounded-full text-white hover:opacity-90 transition-opacity"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.facebook.com/Define.Belleza.Integral" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-morado p-3 rounded-full text-white hover:opacity-90 transition-opacity"
                >
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Mapa de Google */}
          <div className="w-full h-[400px] md:h-[500px] overflow-hidden shadow-lg p-1 rounded-xl bg-gradient-to-tl from-morado to-transparent">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d975.2780305790475!2d-77.001136!3d-12.1044761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c7e69d78fe31%3A0x5ea94e8f49664191!2sDefin%C3%A9%20Dermopigmentaci%C3%B3n!5e0!3m2!1ses!2spe!4v1738299709487!5m2!1ses!2spe"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"

            />
          </div>
        </div>
      </div>
    </section>
  )
}