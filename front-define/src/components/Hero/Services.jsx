import { Card, CardContent } from '../../components/ui/card';
import Body from '../../assets/images/icons/body.jpg';
import Depi from '../../assets/images/icons/depi.jpg';
import Skin from '../../assets/images/icons/skincare.jpg';
import Eye from '../../assets/images/icons/lashing.jpg';
import Micropigmantation from '../../assets/images/icons/lashing.jpg';

export default function Services() {
  const services = [
    {
      image: <img src={Skin} alt="Peelings y Limpiezas faciales" className="w-24 h-24 md:w-15 md:h-15 rounded-full " />,
      title: "Peelings y Limpiezas faciales",
      description: "Elimina impurezas, manchas y signos de envejecimiento para un rostro luminoso.",
    },
    {
      image: <img src={Eye} alt="Cejas, Pestañas y Micropigmentación" className="w-24 h-24 md:w-15 md:h-15 rounded-full" />,
      title: "Cejas, Pestañas y Micropigmentación",
      description: "Realza tu mirada con diseño de cejas, extensiones de pestañas y micropigmentación.",
    },
    {
      image: <img src={Micropigmantation} alt="Rejuvenecimiento" className="w-24 h-24 md:w-15 md:h-15 rounded-full" />,
      title: "Rejuvenecimiento",
      description: "Tratamientos para reducir arrugas, mejorar firmeza y revitalizar tu piel.",
    },
    {
      image: <img src={Depi} alt="Depilación" className="w-24 h-24 md:w-15 md:h-15 rounded-full" />,
      title: "Depilación",
      description: "Piel suave y libre de vello con técnicas seguras y efectivas.",
    },
    {
      image: <img src={Body} alt="Tratamientos Reductores y esteticos" className="w-24 h-24 md:w-15 md:h-15 rounded-full" />,
      title: "Tratamientos Reductores y esteticos",
      description: "Moldea tu cuerpo con mesoterapia, carboxiterapia y reafirmantes.",
    },
    {
      image: <img src={Body} alt="Aplicaciones Intravenosas" className="w-24 h-24 md:w-15 md:h-15 rounded-full" />,
      title: "Aplicaciones Intravenosas",
      description: "Vitaminas y cócteles para mejorar energía, inmunidad y apariencia.",
    },
  ];

  return (
    <section className="py-10 bg-hueso">
      {/* Título principal */}
      <h2 className="text-2xl md:text-4xl lg:text-5xl text-center font-secondary text-morado mb-4 py-1">
        Nuestros servicios
      </h2>
      {/* Descripción general */}
      <p className="text-center text-gray-700 py-10 text-sm md:text-2xl lg:text-3xl">
        Conoce todos los servicios que ofrecemos para ti.
      </p>
  
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {services.map((service, index) => (
          <Card key={index} className="bg-gris w-full max-w-max min-h-min mx-auto">
            <CardContent className="space-x-4 py-10">
              {service.image}
              <div>
                {/* Título de cada servicio */}
                <h3 className="text-xl md:text-3xl py-6 text-center text-morado font-secondary">
                  {service.title}
                </h3>
                {/* Descripción de cada servicio */}
                <p className="text-plomo text-sm md:text-2xl text-center">
                  {service.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
