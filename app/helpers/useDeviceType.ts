'use client'
import { useEffect, useState } from 'react';

const useDeviceType = () => {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [windowHeight, setWindowHeight] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isTablet, setIsTablet] = useState<boolean>(false);
  const [isPortatil, setIsPortatil] = useState<boolean>(false);
  const [isLarge, setIsLarge] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setWindowHeight(height);
      setWindowWidth(width);
      setIsMobile(width < 767);
      setIsTablet(width >= 768 && width <= 1024);
      setIsPortatil(width > 1024 && width <= 1440);
      setIsLarge(width > 1441);
    };

    // Escucha cambios en el ancho de la pantalla
    window.addEventListener('resize', handleResize);

    // Establece el ancho inicial de la pantalla
    handleResize();

    // Limpia el evento al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { isMobile, isTablet, isPortatil, isLarge, windowWidth, windowHeight };
};

export default useDeviceType;
