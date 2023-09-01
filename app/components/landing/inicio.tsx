'use client'
import Link from "next/link"
import { useEffect, useState } from "react";
import { ArrowDownOutlined, WhatsAppOutlined } from '@ant-design/icons';

export default function Inicio() {
  const [whatsAppLink, setWhatsAppLink] = useState('');

  useEffect(() => {
    setWhatsAppLink(process.env.NEXT_PUBLIC_LINK_WHATSAPP || '');
  }, []);  

  return (
    <section id="inicio" className="flex flex-col justify-around bg-cover bg-center h-screen md:h-[656px]"
      style={{ backgroundImage: 'url("/img/landing/inicio.webp")' }}
    >
      {/* ver video mobile */}
      <div className="w-full flex md:hidden justify-center pt-36" >
              
      </div>

      <div className="max-w-5xl mx-auto px-2 flex flex-col md:pt-36">
        <div className=" w-full md:w-[55%]">
          <h1 className="text-[50px] text-center md:text-left md:text-[90px] font-black text-[#fff] leading-[50px] md:leading-[60px]">
            Amarres de amor
          </h1>
        </div>
        <div className="block md:w-[50%] mt-[50px] bg-[#ebc5ff75] p-4">
          <h2 className="text-[#380057] text-[20px] font-medium leading-6">
          Buscas Soluciones Para Recuperar El Amor Perdido? Descubre Poderosos Amarres De Amor Que Pueden Ayudarte A Reconstruir Relaciones Y Fortalecer Los Lazos Emocionales.
          </h2>
        </div>
        {/* botones desktop  */}
        <div className="hidden md:flex items-center gap-5 md:mt-[55px]">
          <Link href={whatsAppLink}  passHref target='_blank'>
            <div className="flex justify-center items-center gap-2 bg-[#5A1482] hover:bg-[#380057] text-white text-[16px] w-[216px] h-[48px] rounded">
            <WhatsAppOutlined className='text-white text-xl mb-1' /> 
            <span>Escríbenos ahora</span>
            </div>
          </Link>
        </div>
      </div>
      {/* register mobile  */}
      <div className="w-full flex md:hidden justify-center">        
        <Link href={whatsAppLink}>
          <div className="flex justify-center items-center gap-2 bg-[#5A1482] hover:bg-[#380057] text-white text-[16px] w-[216px] h-[48px] rounded">
          <WhatsAppOutlined className='text-white text-xl mb-1' /> 
            <span> Escríbenos ahora</span>
          </div>
        </Link>  
      </div>
      {/* ArrowDown mobile  */}
      <div className="flex md:hidden w-full justify-center">
        <div className="w-12 h-12 flex justify-center border-[2px] rounded-full items-center">
          <ArrowDownOutlined className="!text-white text-[28px]"/>
        </div>
      </div>
    </section>
  );
}
