'use client'
import React, { useState } from 'react'
import Link from 'next/link';

export default function HeaderLanding() {
    const [navItems, setNavItems] = useState([
        { title: "Inicio", url: "#inicio", active: true },
        { title: "Servicios", url: "#servicios", active: false },
        { title: "Beneficios", url: "#beneficios", active: false },
        { title: "Perfiles", url: "#perfiles", active: false },
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
        <span>Logo</span>
        <div className="flex items-center md:gap-[56px]">
          <ul className="hidden md:flex items-center gap-[56px] text-[16px] text-[#323237] font-medium">
            {navItems.map((item, index) => (
              <li
                key={index}
                className={`border-b-2 hover:border-[#A2C217] ${
                  item.active ? "border-[#A2C217] " : "border-gray-300"
                } cursor-pointer`}
                onClick={() => handleClick(index)}
              >
                <Link href={item.url}>{item.title}</Link>
              </li>
            ))}
          </ul>
          <Link href="/auth/login/">
            <button className="bg-[#A2C217] rounded-[5px] w-[163px] h-[48px] text-white font-bold text-[16px] flex items-center justify-center">
              Ingresar
            </button>
          </Link>
        </div>
      </nav>
    </header>
  )
}
