import HeaderLanding from "./components/landing/HeaderLanding";
import Inicio from "./components/landing/inicio";
import Beneficios from "./components/landing/beneficios";
import Servicios from "./components/landing/servicios";
import Perfiles from "./components/landing/perfiles";
import Aliados from "./components/landing/aliados";
export default function Landing() {
  return (
    <>
      <HeaderLanding/>
      <Inicio/>
      <Servicios/> 
      <Beneficios/>
      <Perfiles/>
      <Aliados/> 
    </>
  )
}