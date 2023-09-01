'use client'
import Link from "next/link"
import { useState } from "react";
import { ArrowDownOutlined } from '@ant-design/icons';
import ModalVideo from "./modalVideo";

export default function Inicio() {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <section id="inicio" className="flex flex-col justify-around bg-cover bg-center h-screen md:h-[656px]"
      style={{ backgroundImage: 'url("/img/landing/inicioLanding.webp")' }}
    >
      {/* ver video mobile */}
      <div className="w-full flex md:hidden justify-center pt-36" >
        <button onClick={handleOpenModal} className="border-2 border-white text-white text-[16px] rounded w-[163px] h-[48px] inline-flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  viewBox="0 0 29.25 29.25"
                >
                  <path
                    id="Icon_ionic-ios-play-circle"
                    data-name="Icon ionic-ios-play-circle"
                    d="M18,3.375A14.625,14.625,0,1,0,32.625,18,14.623,14.623,0,0,0,18,3.375Zm5.892,14.9L14.245,24.11a.313.313,0,0,1-.471-.274V12.164a.312.312,0,0,1,.471-.274l9.647,5.836A.322.322,0,0,1,23.892,18.274Z"
                    transform="translate(-3.375 -3.375)"
                    fill="#fff"
                  />
                </svg>
                Ver video
          </button>       
      </div>

      <div className="max-w-5xl mx-auto px-2 flex flex-col md:pt-36">
        <div className=" w-full md:w-[55%]">
          <h1 className="text-[30px] text-center md:text-left md:text-[45px] font-bold text-white leading-[30px] md:leading-[50px]">
            Obtén el control de tus viajes corporativos en un solo lugar
          </h1>
        </div>
        <div className="hidden md:block w-[40%] mt-[50px]">
          <h2 className="text-white text-[20px] font-normal leading-6">
            Go, es un sistema de viajes corporativos que te ayudará gestionar el
            proceso de reserva de tus vuelos.
          </h2>
        </div>
        {/* botones desktop  */}
        <div className="hidden md:flex items-center gap-5 md:mt-[55px]">
          <Link href='auth/register'>
            <div className="flex justify-center items-center bg-[#5A1482] hover:bg-[#380057] text-white text-[16px] w-[216px] h-[48px] rounded">
              Registro
            </div>
          </Link>
          <button onClick={handleOpenModal} className="border-2 border-white text-white text-[16px] rounded w-[163px] h-[48px] inline-flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              viewBox="0 0 29.25 29.25"
            >
              <path
                id="Icon_ionic-ios-play-circle"
                data-name="Icon ionic-ios-play-circle"
                d="M18,3.375A14.625,14.625,0,1,0,32.625,18,14.623,14.623,0,0,0,18,3.375Zm5.892,14.9L14.245,24.11a.313.313,0,0,1-.471-.274V12.164a.312.312,0,0,1,.471-.274l9.647,5.836A.322.322,0,0,1,23.892,18.274Z"
                transform="translate(-3.375 -3.375)"
                fill="#fff"
              />
            </svg>
            Ver video
          </button>
        </div>
      </div>
      {/* register mobile  */}
      <div className="w-full flex md:hidden justify-center">        
        <Link href='auth/register'>
          <div className="flex justify-center items-center bg-[#5A1482] hover:bg-[#380057] text-white text-[16px] w-[216px] h-[48px] rounded">
            Registro
          </div>
        </Link>  
      </div>
      {/* ArrowDown mobile  */}
      <div className="flex md:hidden w-full justify-center">
        <div className="w-12 h-12 flex justify-center border-[2px] rounded-full items-center">
          <ArrowDownOutlined className="!text-white text-[28px]"/>
        </div>
      </div>

      <ModalVideo status={openModal} onClose={handleCloseModal} />
    </section>
  );
}
