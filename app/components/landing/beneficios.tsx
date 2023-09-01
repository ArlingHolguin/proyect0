'use client'
import Image from "next/image";
import Carousel from "react-multi-carousel"; //https://www.npmjs.com/package/react-multi-carousel
import "react-multi-carousel/lib/styles.css";

const beneficios = [
  {
    icon: "/img/landing/Mexico.svg",
    title: "Miguel C.",
    description: "El amarre de sexo y pasión fue una experiencia increíble para mi pareja y para mí. Después de años de relación, estábamos buscando un impulso y este servicio superó todas nuestras expectativas. La conexión y el placer que experimentamos son indescriptibles. ¡Definitivamente recomendado!"
  },
  {
    icon: "/img/landing/Mexico.svg",
    title: "Sofía M.",
    description: "Después de probar los endulzamientos, nuestra relación dio un giro completo. Los conflictos y tensiones que teníamos se han ido suavizando y hemos recuperado la dulzura en nuestra comunicación. Estoy muy feliz de haber encontrado esta solución. ¡Gracias por devolvernos la armonía!"
  },
  {
    icon: "/img/landing/Mexico.svg",
    title: "Juanita B.",
    description: "¡Estoy maravillada con los resultados del amarre de amor! Mi relación estaba en un punto crítico, pero gracias a los rituales y la guía del equipo de expertos, logramos superar nuestros problemas y fortalecer nuestro amor. ¡Gracias por devolvernos la felicidad en el corazón, Infinitas Graciassssss.!"
  },
  {
    icon: "/img/landing/Mexico.svg",
    title: "Carlos H.",
    description: "Los amarres del mismo sexo me dieron la confianza y la seguridad para consolidar mi relación con mi pareja. Gracias a los rituales personalizados, hemos superado obstáculos y fortalecido nuestro amor. Ahora nos enfrentamos juntos a cualquier desafío que se presente. ¡Estamos muy agradecidos!"
  }
];
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3.25
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2.5
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1.1
  }
};

export default function Beneficios() {
  
  return (
    <div className=" bg-[#F5F5F5] ">
      <section id="testimonios" className="max-w-7xl mx-auto px-8 bg-center min-h-[400px] h-auto flex flex-col justify-center py-10 pl-10">
      <div className="flex flex-col justify-center items-center">
      <h1 className="text-[30px] md:text-[40px] font-bold text-[#5A1482]">¡ El Siguiente Eres Tu !</h1>
      <span className="text-lg font-medium">Ellos Ahora Son Felices</span>
      </div>
      <Carousel responsive={responsive} showDots={true} renderArrowsWhenDisabled={false} arrows={true}
        className="bg-[#F5F5F5] flex items-center py-12 px-2">
        {beneficios.map((item, index) => (
          <div key={item.title + index} className="mr-5 rounded-lg bg-white shadow-xl p-3">
            <div className="flex items-center justify-between">
              <div className="text-[20px] md:text-[28px] font-bold text-[#5A1482]">{item.title}</div>
              <div className="h-[50px] w-[50px]">
                <Image className="object-center object-cover" src={item.icon} width={100} height={100} alt={item.icon} />
              </div>
            </div>
            <div className="mt-3">
              <p className="">{item.description}</p>
            </div>
          </div>

        ))}

      </Carousel>
      </section>      
    </div>
  );
}
