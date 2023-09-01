import Image from "next/image";

export default function Perfiles() {
  const data = {
      img: "/img/landing/perfiles/bgCifras.webp",
      title: "Los números nos respaldan",
      cardItems:[
        {
          cant: "300+",
          text: "Clientes satisfechos"
        },
        {
          cant: "1200+",
          text: "Transacciones / día"
        },
        {
          cant: "10+",
          text: "Años en el mercado"
        }
      ],
      titleSub: "Gestiona tus perfiles de usuario según el alcance",
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
      items:[
        {
          icon: "/img/landing/perfiles/icons/administrador.svg",
          title: "Administrador",
          desc: "Este perfil tiene acceso a todos los módulos existente en la plataforma"
        },
        {
          icon: "/img/landing/perfiles/icons/aprobador.svg",
          title: "Aprobador",
          desc: "Es el encargado de aprobar o rechazar las solicitudes asignadas"
        },
        {
          icon: "/img/landing/perfiles/icons/viajero.svg",
          title: "Viajero",
          desc: "Colaborador que tiene viajes planeados en la plataforma"
        },

      ]
    
  }
    return (
      <section id="perfiles" className="w-full h-auto">
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
                    <p className="w-auto md:w-[450px] font-medium">{data.description}</p>
                  </div>
                  <div className="w-full flex flex-col gap-4 md:gap-3 md:w-1/2 ">
                    {data.items.map((item, index) =>(
                      <div key={item.title+index} className="flex flex-col md:flex-row items-center gap-8 p-4 md:p-0 rounded-lg md:rounded-[0px] shadow-lg md:shadow-none bg-white md:bg-transparent">
                          <Image src={item.icon} width={62} height={62} alt={item.icon} className="object-cover object-center"/>
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