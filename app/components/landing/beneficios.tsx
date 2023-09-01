'use client'
import Image from "next/image";
import Carousel from "react-multi-carousel"; //https://www.npmjs.com/package/react-multi-carousel
import "react-multi-carousel/lib/styles.css";

const beneficios = [
  {
    icon: "/img/landing/beneficios/politicas.svg",
    title: "Política de viaje",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente possimus accusamus cupiditate incidunt nobis cumque, repudiandae quae."
  },
  {
    icon: "/img/landing/beneficios/tarifas.svg",
    title: "Tarifas",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente possimus accusamus cupiditate incidunt nobis cumque, repudiandae quae."
  },
  {
    icon: "/img/landing/beneficios/pagos.svg",
    title: "Pagos",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente possimus accusamus cupiditate incidunt nobis cumque, repudiandae quae."
  },
  {
    icon: "/img/landing/beneficios/convenios.svg",
    title: "Convenios",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente possimus accusamus cupiditate incidunt nobis cumque, repudiandae quae."
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
      <section id="beneficios" className="max-w-7xl mx-auto px-8 bg-center min-h-[400px] h-auto flex flex-col justify-center py-10 pl-10">
      <h1 className="text-[30px] md:text-[40px] font-bold text-[#5A1482]">Beneficios de ser parte de Go</h1>
      <Carousel responsive={responsive} showDots={true} renderArrowsWhenDisabled={false} arrows={false}
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
