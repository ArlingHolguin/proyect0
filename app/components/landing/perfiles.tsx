'use client'
import Link from "next/link";
import {  WhatsAppOutlined } from '@ant-design/icons';
import { useEffect, useState } from "react";

export default function Perfiles() {

  const [whatsAppLink, setWhatsAppLink] = useState<string>('');

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_LINK_WHATSAPP) {
      setWhatsAppLink(process.env.NEXT_PUBLIC_LINK_WHATSAPP);
    }
  }, []);

  const data = {
      img: "/img/landing/fondo_amor.webp",
      title: "Maestros A Tu Servicio",
      cardItems:[
        {
          cant: "3000+",
          text: "Clientes satisfechos"
        },
        {
          cant: "120+",
          text: "Trabajos / día"
        },
        {
          cant: "15+",
          text: "Años de experiencia"
        }
      ],
      titleSub: "Escríbenos Ahora la consulta incial es gratis",
      description: "Encuentra El Amor Perdido Y Fortalece Tus Vínculos Emocionales. Descubre La Formas Que Tenemos Par Aayudarte. El Amor Verdadero Está A Tu Alcance.",
      items:[
        {
          title: "Amarres",
          desc: "¡Recupera El Amor Perdido! Este Poderoso Amarre De Amor Te Ayudará A Reconstruir Los Lazos Emocionales Y Revivir La Pasión En Tu Relación"
        },
        {
          title: "Feromonas",
          desc: "¡Descubre El Secreto De La Atracción!"
        },
        {
          title: "Maestros a tu servicio",
          desc: "Somos Un Equipo De Maestros  Expertos En Amarres De Amor Con Años De Experiencia. Nuestro Objetivo Es Ayudarte A Encontrar La Felicidad Y El Amor Duradero Mediante Nuestras Técnicas Y Rituales."
        },

      ]
    
  }
    return (
      <section id="nosotros" className="w-full h-auto">
        {/* cifras  */}
         <div className="pb-20" style={{backgroundImage: `url(${data.img})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
          <div className="flex flex-col justify-center items-center px-4 md:px-0">
            <h1 className="py-8 text-[30px] md:text-[40px] font-bold text-white text-center md:text-left">{data.title}</h1>
            <div className="max-w-5xl w-full flex flex-col md:flex-row items-center justify-center bg-[#5A1482] opacity-[60%] md:h-[233px] rounded-lg p-10">
              {
                data.cardItems.map((item, index) =>(
                  <>
                    <div key={item.cant+index} className="flex flex-col items-center">
                        <div className="text-[#FFFFFF] font-bold text-[80px]">{item.cant}</div>
                        <div className="font-semibold text-[20px] text-white -mt-4 mb-4 md:mb-0">{item.text}</div>
                    </div>
                    {index !== data.cardItems.length - 1 && <div className=" w-full md:w-[2px] h-[2px] md:h-[70px] mx-12 bg-white"></div>}                    
                  </>

                ))
              }

            </div>
        </div>

         </div>
         {/* perfiles  */}
        <div className="bg-[#F5F5F5] py-16">
          <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row px-8 gap-12">
                  <div className="w-full md:w-1/2">
                    <h1 className="text-[24px] md:text-[40px] text-[#A2C217] font-bold leading-9 md:w-[400px] mb-6">{data.titleSub}</h1>
                    <p className="w-auto md:w-[450px] font-medium mb-8">{data.description}</p>
                    <Link className="mt-8" target="_blank" href={'https://api.whatsapp.com/send?phone=5219862170861&text=Hola%20quiero%20mi%20consulta%20inicial%2C%20deseo%20iniciar%20el%20cambio'}>
                      <div className="flex justify-center items-center gap-2 bg-[#5A1482] hover:bg-[#380057] text-white text-[16px] w-[216px] h-[48px] rounded">
                        <WhatsAppOutlined className='text-white text-xl mb-1' />
                        <span> Consulta Inicial</span>
                      </div>
                    </Link>
                  </div>
                  <div className="w-full flex flex-col gap-4 md:gap-3 md:w-1/2 ">
                    {data.items.map((item, index) =>(
                      <div key={item.title+index} className="flex flex-col md:flex-row items-center gap-8 p-4 md:p-0 rounded-lg md:rounded-[0px] shadow-lg md:shadow-none bg-white md:bg-transparent">
                          {/* <Image src={item.icon} width={62} height={62} alt={item.icon} className="object-cover object-center"/> */}
                        <div className="flex flex-col items-center md:items-start mb-4">
                          <div className="font-bold text-[#5A1482] text-[25px]">{item.title}</div>
                          <p className="text-[#323237] text-md text-center md:text-left">{item.desc}</p>
                        </div>
                      </div>

                    ))}

                  </div>
          </div>
        </div>
      </section>
    );
  }