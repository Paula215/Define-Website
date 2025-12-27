import { Link } from 'react-router-dom';
import { Card, CardContent } from '../ui/card';
import Body from '../../assets/images/icons/body.jpg';
import Depi from '../../assets/images/icons/depi.jpg';
import Skin from '../../assets/images/icons/skincare.jpg';
import Eye from '../../assets/images/icons/lashing.jpg';
import Micropigmantation from '../../assets/images/icons/lashing.jpg';

export default function Services() {
  const services = [
    {
      image: Skin,
      title: "Peelings y Limpiezas faciales",
      description: "Elimina impurezas, manchas y signos de envejecimiento para un rostro luminoso.",
      link: "/services/peelings-y-limpiezas-faciales"
    },
    {
      image: Eye,
      title: "Cejas, Pestañas y Micropigmentación",
      description: "Realza tu mirada con diseño de cejas, extensiones de pestañas y micropigmentación.",
      link: "/services/cejas-pestaas-y-micropigmentacin"
    },
    {
      image: Micropigmantation,
      title: "Rejuvenecimiento",
      description: "Tratamientos para reducir arrugas, mejorar firmeza y revitalizar tu piel.",
      link: "/services/rejuvenecimiento"
    },
    {
      image: Depi,
      title: "Depilación",
      description: "Piel suave y libre de vello con técnicas seguras y efectivas.",
      link: "/services/depilacin"
    },
    {
      image: Body,
      title: "Tratamientos Reductores y esteticos",
      description: "Moldea tu cuerpo con mesoterapia, carboxiterapia y reafirmantes.",
      link: "/services/tratamientos-reductores-y-estticos"
    },
    {
      image: Body,
      title: "Aplicaciones Intravenosas",
      description: "Vitaminas y cócteles para mejorar energía, inmunidad y apariencia.",
      link: "/services/aplicaciones-intravenosa"
    },
  ];

  return (
    <section className="py-10 bg-hueso">
      <h2 className="text-xl md:text-2xl lg:text-2xl font-medium text-center font-secondary stext-morado">
        Nuestros servicios
      </h2>
      <p className="text-sm md:text-base lg:text-sm text-gray-700 py-10 text-center">
        Conoce todos los servicios que ofrecemos para ti.
      </p>
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {services.map((service, index) => (
          <Link to={service.link} key={index} className="mx-auto">
            <Card className="bg-gris mx-auto transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg cursor-pointer">
              <CardContent className="space-x-4 py-10 flex flex-col items-center">
                <img 
                  src={service.image || "/placeholder.svg"} 
                  alt={service.title} 
                  className="w-24 h-24 md:w-15 md:h-15 rounded-full"
                />
                <div className="text-center">
                  <h3 className="text-xl md:text-xl lg:text-2xl py-6 text-morado font-secondary font-medium">
                    {service.title}
                  </h3>
                  <p className="text-plomo text-sm md:text-base lg:text-sm">
                    {service.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}

