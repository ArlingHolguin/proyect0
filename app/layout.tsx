import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Amarres de amor',
  description: 'Somos Un Equipo De Maestros  Expertos En Amarres De Amor Con Años De Experiencia. Nuestro Objetivo Es Ayudarte A Encontrar La Felicidad Y El Amor Duradero Mediante Nuestras Técnicas Y Rituales.',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head
      dangerouslySetInnerHTML={{
        __html: `
          <script>
            (function(w,d,s,l,i){
              w[l] = w[l] || [];
              w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
              var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != 'dataLayer' ? '&l=' + l : '';
              j.async = true;
              j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_TAG_MANAGER}');
          </script>
        `,
      }}>

      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
