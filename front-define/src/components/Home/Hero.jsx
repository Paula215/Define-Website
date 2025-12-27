import fondo from '../../assets/images/fondo-landing.png';

const Hero = () => {
  return (
    <div className="hero-container relative w-full h-[50vh] md:h-[80vh] lg:h-[85vh]">
      {/* Imagen de fondo */}
      <img
        src={fondo || "/placeholder.svg"}
        alt="fondo"
        className="absolute inset-0 w-full h-full object-cover object-left-top md:object-center"
        style={{
          objectPosition: '20% center' // Ajusta este valor para centrar la cara en mobile 
        }}
      />

      {/* Texto superpuesto */}
      <div className="absolute top-16 right-6 md:right-12 md:inset-y-0 md:flex md:items-center md:justify-center lg:left-34 px-5">
        <h1 className="font-secondary text-2xl md:text-4xl lg:text-4xl text-white font-bold drop-shadow-lg md:text-center max-w-[100px] md:max-w-3xl">
          Define y realza tu belleza natural
        </h1>
      </div>
    </div>
  );
};

export default Hero;
