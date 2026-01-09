export default function QuienSoy() {
  return (
    <section className="bg-hueso py-16">
      <div className="container mx-auto px-4 space-y-12">
      {/* ===== CARD 1: VIDEO + TEXTO ===== */}
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          
          {/* Video */}
          <div className="md:w-1/2 shrink-0">
            <div className="aspect-[16/5]">
              <video
                src="/src/assets/images/quiensoy/queesdefine.mp4"
                autoPlay
                loop
                playsInline
                controls
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Texto */}
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center space-y-6">
            <h2 className="text-3xl lg:text-4xl font-secondary text-morado font-medium">
              Quiénes somos
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Somos un centro especializado en estética integral, enfocado en
              realzar la belleza natural a través de tratamientos seguros,
              personalizados y respaldados por tecnología moderna.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Creemos en el cuidado consciente, la confianza y el bienestar
              como parte esencial de cada tratamiento.
            </p>
          </div>

        </div>
      </div>

        {/* ===== CARD 2: FUNDADORA ===== */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-8">
            {/* Imagen circular con borde decorativo */}
            <div className="relative">
              <div className="absolute inset-0 bg-morado/10 rounded-full blur-2xl"></div>
              <img
                src="/src/assets/images/quiensoy/fundadora.jpg"
                alt="Fundadora"
                className="relative w-48 h-48 rounded-full object-cover shadow-xl border-4 border-white"
              />
            </div>
            {/* Texto fundadora */}
            <div className="space-y-6">
              <h3 className="text-2xl lg:text-3xl font-secondary text-morado font-medium">
                Mirella Cienfuegos
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Profesional en estética con más de 15 años de experiencia,
                especializada en tratamientos faciales y corporales. Su
                trayectoria se basa en la formación continua, la ética
                profesional y el trato humano con cada paciente.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Su misión es acompañar a cada persona en su proceso de cuidado
                personal, ofreciendo resultados reales y seguros.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}