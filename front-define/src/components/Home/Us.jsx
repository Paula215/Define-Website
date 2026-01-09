import flores from '../../assets/images/flores-landing.png';

export default function NosotrosSection() {
  return (
    <section className="relative w-full min-h-[400px] md:h-[800px]">
      {/* Fondo lila en móviles */}
      <div className="block md:hidden absolute inset-0 bg-lila"></div>

      {/* Imagen de fondo en desktop */}
      <img 
        src={flores} 
        alt="flores" 
        className="hidden md:block absolute w-full md:w-11/12 md:h-3/5 object-cover bg-center bg-no-repeat top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-50" 
      />

      {/* Contenedor de texto */}
      <div className="absolute w-full h-full">
        <div className="container mx-auto px-4 md:px-8 lg:px-20 py-8 md:py-20 lg:py-40 h-full flex items-center">
          <div className="max-w-full md:max-w-lg ">
            <h2 className="md:text-left text-center font-secondary text-xl md:text-2xl lg:text-2xl text-morado mb-3">
              Nosotros
            </h2>
<div className="md:text-left text-center text-plomo text-sm md:text-base lg:text-sm py-3 md:py-7 lg:py-8 space-y-4">
  <p>
    <strong>Define</strong> es un studio de belleza especializado en micropigmentación, con más de
    <strong> 10 años de experiencia</strong> realzando la belleza natural de cada persona.
  </p>

  <p>
    Ofrecemos un servicio personalizado, basado en un diagnóstico detallado y en el uso de
    técnicas avanzadas y productos de alta calidad, para garantizar resultados armónicos,
    seguros y duraderos.
  </p>

  <p>
    Nuestro compromiso es que cada tratamiento refleje confianza, precisión y excelencia
    en cada detalle.
  </p>
</div>

          </div>
        </div>
      </div>
    </section>
  );
}
