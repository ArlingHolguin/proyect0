'use client'
import Image from 'next/image';
import React from 'react'
import Carousel from "react-multi-carousel"; 
import "react-multi-carousel/lib/styles.css";

export default function Aliados() {

    const data = {
      title: "Nuestros aliados",
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
      items: [
        {
          img: "/img/landing/aliados/logos/latam.png",
          name: "latam",
        },
        {
          img: "/img/landing/aliados/logos/avianca.png",
          name: "avianca",
        },
        {
          img: "/img/landing/aliados/logos/anato.png",
          name: "anato",
        },
        { img: "/img/landing/aliados/logos/iata.png", 
          name: "iata" 
        },
        {
          img: "/img/landing/aliados/logos/aeromexico.png",
          name: "aeromexico",
        },
        {
          img: "/img/landing/aliados/logos/jetblue.png",
          name: "jetblue",
        },
        {
          img: "/img/landing/aliados/logos/british.png",
          name: "british",
        },
        { img: "/img/landing/aliados/logos/copa.png", 
          name: "copa" 
        },
        {
          img: "/img/landing/aliados/logos/united.png",
          name: "united",
        },
      ],
    };
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 8
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6
        },
        tablet: {
          breakpoint: { max: 1024, min: 667 },
          items: 4.5
        },
        mobile: {
          breakpoint: { max: 667, min: 0 },
          items: 2.5
        }
      };
  return (
    <div className='max-w-6xl mx-auto'>
    <div className='bg-white py-10 w-full flex flex-col px-6'>
        <h1 className='font-bold text-[30px] md:text-[40px] text-[#5A1482] text-center md:text-left'>{data.title}</h1>
        <p className='hidden md:block text-medium text-[#000000DE] w-[800px]'>{data.description}</p>
        <Carousel itemClass='flex items-center justify-center' 
            responsive={responsive} 
            showDots={true} 
            renderArrowsWhenDisabled={false} 
            arrows={false}>
            {data.items.map((item, index) => (                
                <div key={item.name + index} className=" py-12">
                    {/* <Image className='object-center object-cover' src={item.img} width={110} height={50} alt={item.name} />    */}
                    <Image alt={item.name} src={item.img}  width={100} height={100} style={{
                      width: '100%',
                      height: '100%',
                    }}/>               
                </div>
                
             ))
            }        
        </Carousel>


    </div>

    </div>
  )
}
