'use client'
import useDeviceType from "@/app/helpers/useDeviceType";
import { WhatsAppOutlined } from '@ant-design/icons';
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Servicios() {
  const services = [
    {
      img: "/img/landing/amarres.webp",
      title: "Amarres De Amor",
      description:"¿Has perdido a tu ser amado? Nuestros amarres de amor están diseñados para restaurar y fortalecer los lazos emocionales. A través de poderosos rituales y hechizos, podemos ayudarte a recuperar el amor perdido y a construir relaciones sólidas y duraderas.",
    },
    {
      img: "/img/landing/feromonas.webp",
      title: "Feromonas",
      description:"Eleva Tu Atractivo Y Despierta El Deseo Con Nuestras Feromonas Exclusivas. Nuestras Feromonas Están Diseñadas Para Aumentar Tu Magnetismo Y Generar Una Atracción Irresistible En Los Demás. Experimenta Un Impulso En Tu Vida Romántica Y Social Con Estas Poderosas Fragancias.",
    },
    {
      img: "/img/landing/recupera_la_suerte.webp",
      title: "Recupera La Suerte",
      description:"¿Sientes Que La Suerte No Está De Tu Lado? Nuestro Servicio De Mejora De La Suerte Te Ofrece Técnicas Y Herramientas Para Atraer La Buena Fortuna En Todas Las Áreas De Tu Vida. A Través De Rituales, Energía Positiva Y Enfoque Mental, Puedes Abrirte A Nuevas Oportunidades Y Alcanzar Tus Metas Con Éxito.",
    },
    {
      img: "/img/landing/endulzamientos.webp",
      title: "Endulzamientos",
      description:"Si Enfrentas Conflictos O Tensiones En Tus Relaciones, Nuestros Endulzamientos Te Ofrecen Una Solución. A Través De Rituales Y Hechizos, Buscamos Suavizar Las Energías Negativas Y Fomentar La Armonía Y El Entendimiento Entre Las Personas Involucradas. Reaviva La Dulzura En Tus Relaciones Y Alcanza Una Mayor Comprensión Y Felicidad.",
    },
    {
      img: "/img/landing/pasion.webp",
      title: "Amarres De Sexo Y Pasión",
      description:"Explora Un Mundo De Intensidad Y Satisfacción Sexual Con Nuestros Amarres De Sexo Y Pasión. Mediante Rituales Y Hechizos, Potenciamos La Conexión Sexual Y La Pasión En Tus Relaciones, Permitiéndote Experimentar Un Placer Más Profundo Y Gratificante.",
    },
    {
      img: "/img/landing/mismo_sexo.webp",
      title: "Amarres Del Mismo Sexo",
      description:"Si Buscas Fortalecer Y Consolidar Tu Amor En Una Relación Del Mismo Sexo, Nuestros Amarres Específicos Para Este Tipo De Vínculos Pueden Ayudarte. A Través De Rituales Personalizados Y Hechizos Poderosos, Creamos Una Conexión Sólida Y Duradera Entre Tú Y Tu Pareja, Permitiéndoles Enfrentar Juntos Los Desafíos Y Disfrutar De Un Amor Pleno.",
    },
  ];

  const { isMobile } = useDeviceType();
  const [whatsAppLink, setWhatsAppLink] = useState('');

  useEffect(() => {
    setWhatsAppLink(process.env.NEXT_PUBLIC_LINK_WHATSAPP || '');
  }, []); 
  
  return (
    <section id="servicios" className="max-w-[1440px] mx-auto bg-cover bg-center h-auto">
      <div className="pt-12 text-center">
        <h1 className="font-bold text-[#5A1482] text-[30px] md:text-[35px] mb-12 px-2 md:px-0">Recupera El Amor Y Descubre La Felicidad Que Te Esta Esperando</h1>
        {services.map((item, index) => (
          <div key={item.title} className="w-full flex flex-col md:flex-row justify-start">

            {isMobile ? 
            <>
            <div className="w-full min-h-[440px]" style={{backgroundImage: `url(${item.img})`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>

            <div className="w-full flex items-center justify-center px-2 border">
              <div className="flex flex-col items-center my-6">
                    <Link href={whatsAppLink}>
                      <div className="flex justify-center items-center gap-2 bg-[#5A1482] hover:bg-[#380057] text-white text-[16px] w-[216px] h-[48px] rounded">
                        <WhatsAppOutlined className='text-white text-xl mb-1' />
                        <span> Saber más</span>
                      </div>
                    </Link>
                <h2 className="font-bold text-[#5A1482] text-[30px] mt-4 mb-6">{item.title}</h2>
                <p className="text-center font-medium text-[#000000DE] mx-4">{item.description}</p>
              </div>
            </div>
            </>
            :
            index % 2 === 0 ? (
              <>
                <div className="w-1/2  min-h-[440px] h-auto" style={{backgroundImage: `url(${item.img})`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>

                <div className="w-1/2 flex items-center px-2">
                  <div className="flex flex-col items-start ml-10">
                  <Link href={whatsAppLink}>
                      <div className="flex justify-center items-center gap-2 bg-[#5A1482] hover:bg-[#380057] text-white text-[16px] w-[216px] h-[48px] rounded">
                        <WhatsAppOutlined className='text-white text-xl mb-1' />
                        <span> Saber más</span>
                      </div>
                    </Link>
                    <h2 className="font-bold text-[#5A1482] text-[30px] mt-4 mb-4">{item.title}</h2>
                    <p className="text-left font-medium text-[#000000DE]">{item.description}</p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="w-1/2 flex items-center px-2">
                  <div className="flex flex-col items-end mr-10">
                  <Link href={whatsAppLink}>
                      <div className="flex justify-center items-center gap-2 bg-[#5A1482] hover:bg-[#380057] text-white text-[16px] w-[216px] h-[48px] rounded">
                        <WhatsAppOutlined className='text-white text-xl mb-1' />
                        <span> Saber más</span>
                      </div>
                    </Link>
                    <h2 className="font-bold text-[#5A1482] text-[30px] mt-4 mb-4">{item.title}</h2>
                    <p className="text-right font-medium text-[#000000DE]">{item.description}</p>
                    </div>
                </div>
                <div className="w-1/2 min-h-[440px] h-auto" style={{backgroundImage: `url(${item.img})`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
