'use client'

import useDeviceType from "@/app/helpers/useDeviceType";
import Image from "next/image";

export default function Servicios() {
  const services = [
    {
      img: "/img/landing/servicios/reservas.webp",
      icon: "/img/landing/servicios/icons/reservas.svg",
      title: "Reserva de vuelos",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente possimus accusamus cupiditate incidunt nobis cumque, repudiandae quae. Ut corporis illo, aperiam in adipisci vel magni repudiandae saepe esse, et unde.",
    },
    {
      img: "/img/landing/servicios/gastos.webp",
      icon: "/img/landing/servicios/icons/gastos.svg",
      title: "Gastos de viaje",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente possimus accusamus cupiditate incidunt nobis cumque, repudiandae quae. Ut corporis illo, aperiam in adipisci vel magni repudiandae saepe esse, et unde.",
    },
    {
      img: "/img/landing/servicios/aprobaciones.webp",
      icon: "/img/landing/servicios/icons/aprobaciones.svg",
      title: "Aprobaciones",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente possimus accusamus cupiditate incidunt nobis cumque, repudiandae quae. Ut corporis illo, aperiam in adipisci vel magni repudiandae saepe esse, et unde.",
    },
    {
      img: "/img/landing/servicios/reportes.webp",
      icon: "/img/landing/servicios/icons/reportes.svg",
      title: "Reportes de viajes",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente possimus accusamus cupiditate incidunt nobis cumque, repudiandae quae. Ut corporis illo, aperiam in adipisci vel magni repudiandae saepe esse, et unde.",
    },
  ];

  const { isMobile } = useDeviceType();
  
  return (
    <section id="servicios" className="max-w-[1440px] mx-auto bg-cover bg-center h-auto">
      <div className="pt-12 text-center">
        <h1 className="font-bold text-[#5A1482] text-[30px] md:text-[40px] mb-12 px-2 md:px-0">Tenemos para ti una gran oferta de valor</h1>
        {services.map((item, index) => (
          <div key={item.title} className="w-full flex flex-col md:flex-row justify-start">

            {isMobile ? 
            <>
            <div className="w-full min-h-[440px]" style={{backgroundImage: `url(${item.img})`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>

            <div className="w-full flex items-center justify-center px-2 border">
              <div className="flex flex-col items-center my-6">
                <Image src={item.icon} width={70} height={70} alt={item.icon}></Image>
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
                    <Image src={item.icon} width={70} height={70} alt={item.icon}></Image>
                    <h2 className="font-bold text-[#5A1482] text-[30px] mt-4 mb-4">{item.title}</h2>
                    <p className="text-left font-medium text-[#000000DE]">{item.description}</p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="w-1/2 flex items-center px-2">
                  <div className="flex flex-col items-end mr-10">
                    <Image src={item.icon} width={70} height={70} alt={item.icon}></Image>
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
