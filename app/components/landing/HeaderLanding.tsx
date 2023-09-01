'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { FireOutlined, WhatsAppOutlined } from '@ant-design/icons';
import useDeviceType from '@/app/helpers/useDeviceType';

export default function HeaderLanding() {
  const { isMobile } = useDeviceType();
  const [whatsAppLink, setWhatsAppLink] = useState<string>('');

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_LINK_WHATSAPP) {
      setWhatsAppLink(process.env.NEXT_PUBLIC_LINK_WHATSAPP);
    }
  }, []);

  const [navItems, setNavItems] = useState([
    { title: "Inicio", url: "#inicio", active: true },
    { title: "Servicios", url: "#servicios", active: false },
    { title: "Testimonios", url: "#testimonios", active: false },
    { title: "Nosotros", url: "#nosotros", active: false },
  ]);

  const handleClick = (index: number) => {
    const updatedNavItems = [...navItems];
    updatedNavItems.forEach((item, i) => {
      item.active = i === index;
    });
    setNavItems(updatedNavItems);
  };
  
  return (
    <header>
      <nav className="w-full h-[80px] px-5 bg-white flex justify-between items-center shadow drop-shadow-md text-[14px] fixed top-0 z-50">
        <div className='flex items-center justify-center gap-2'>
          <FireOutlined className='text-4xl text-[#5A1482] mb-2' />
          <div className='flex flex-col items-start'>
            <span className='text-lg md:text-2xl font-bold leading-6'>Amarres México</span>
            <span className='font-medium leading-6 tracking-widest md:tracking-[.25em]'>Manantial del amor</span>
          </div>
        </div>
        <div className="flex items-center md:gap-[56px]">
          <ul className="hidden md:flex items-center gap-[56px] text-[16px] text-[#323237] font-medium">
            {navItems.map((item, index) => (
              <li
                key={index}
                className={`border-b-2 hover:border-[#5A1482] ${
                  item.active ? "border-[#5A1482] " : "border-gray-300"
                } cursor-pointer`}
                onClick={() => handleClick(index)}
              >
                <Link href={item.url}>{item.title}</Link>
              </li>
            ))}
          </ul>
          <Link href={whatsAppLink} target='_blank'>
            <button className={`bg-green-600 hover:bg-green-700 ${isMobile ? 'w-[40px] h-[40px] rounded-full' : 'w-[163px] h-[48px] rounded-[5px]'} text-white font-bold text-[16px] flex items-center justify-center gap-2`}>
            <WhatsAppOutlined className='text-white text-xl mb-1' /> 
            <div className={`${isMobile ? 'hidden' :'flex'}`}>WhatsApp</div>
            </button>
          </Link>
        </div>
      </nav>
    </header>
  )
}
