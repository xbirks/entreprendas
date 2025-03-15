import "./style.scss";
import Header from './components/header.jsx';
import Footer from "./components/footer.jsx";
 

export const metadata = {

  //GENERIC
  title: 'Arreglo de ropa BARATO en Valencia y alrededores | ENTRE PRENDAS',
  description: '10 años de experiencia como modista en Valencia. Ofrecemos composturas de pantalones, camisas, faldas, vestidos de novia, trajes de fallera... Servicio barato y eficiente.',
  applicationName: 'GARTALIA',
  keywords: [
    'arreglo de ropa en Manises',
    'ajuste de vestidos en Mislata',
    'modista profesional en Quart de Poblet',
    'arreglo de trajes en Aldaia',
    'ajuste de pantalones en Burjassot',
    'servicio de sastrería en Xirivella',
    'reparación de cremalleras en Paterna',
    'arreglo de camisas en Alaquàs',
    'ajuste de faldas en Torrent',
    'modista a domicilio en Picanya',
    'personalización de ropa en Paiporta',
    'reemplazo de botones en Riba-roja de Túria',
    'ajuste de chaquetas en Godella',
    'costurera profesional en Montcada',
    'servicio de arreglos de ropa en La Cañada',
    'ajuste de ropa de fiesta en Benetússer',
    'transformación de prendas en Catarroja'
  ],
  
  authors: [{ name: 'Andrés Ortega', url: 'https://www.ermo.es' }],
  creator: 'Andrés Ortega',
  publisher: 'Andrés Ortega',
  robots: 'index, follow',
  revisitAfter: '7 days',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  contentLanguage: 'es',
  language: 'es',
  
  // META
  openGraph: {
    title: 'Arreglo de ropa BARATO en Valencia y alrededores | ENTRE PRENDAS',
    description: '10 años de experiencia como modista en Valencia. Ofrecemos composturas de pantalones, camisas, faldas, vestidos de novia, trajes de fallera... Servicio barato y eficiente.',
    url: 'https://entreprendas.es',
    type: 'website',
    images: [
      {
        url: 'https://entreprendas.es/seo/meta-1200x630.jpg',
        width: 1200,
        height: 630,
        alt: 'Descripción de la imagen',
      },
    ],
    site_name: 'Arreglo de ropa BARATO en Valencia y alrededores | ENTRE PRENDAS',
    locale: 'es_ES',
  },

  // TWITTER
  twitter: {
    card: 'summary_large_image',
    site: '@gartalia',
    creator: '@gartalia',
    title: 'Arreglo de ropa BARATO en Valencia y alrededores | ENTRE PRENDAS',
    description: '10 años de experiencia como modista en Valencia. Ofrecemos composturas de pantalones, camisas, faldas, vestidos de novia, trajes de fallera... Servicio barato y eficiente.',
    image: 'https://entreprendas.es/seo/twitter-1200-600.jpg',
    imageAlt: 'Jardinería integral en Valencia con 20 años de experiencia',
  },

  //APPLE
  appleTouchIcon: 'https://entreprendas.es/seo/favicon_500x500.png', 
  appleTouchStartupImage: 'https://entreprendas.es/seo/favicon_500x500.png',

  



  //SECURITY
  contentSecurityPolicy: "default-src 'self'; img-src 'self' https://www.entreprendas.es; script-src 'self' https://apis.google.com",
  referrerPolicy: 'no-referrer-when-downgrade', 
  xContentTypeOptions: 'nosniff', 
  xFrameOptions: 'DENY', 
  xXssProtection: '1; mode=block',
  permissionsPolicy: "geolocation=(self)",

  
}
 

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://use.typekit.net/usg7enf.css"></link>

       
        <meta name="theme-color" content="#6BDB8A" />
        <meta name="background-color" content="#0D403B" />
        <link rel="canonical" href="https://entreprendas.es" hrefLang="es-ES" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="https://entreprendas.es/seo/favicon_500x500.jpg" title="Ícono de la pestaña" type="image/png" />
        <link rel="apple-touch-icon" sizes="180x180" href="https://entreprendas.es/seo/ios_180x180.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "http://schema.org",
                "@type": "WebSite",
                "url": "https://gartalia.com",
                "name": "Gartalia"
              },
              {
                "@context": "http://schema.org",
                "@type": "Organization",
                "name": "Gartalia",
                "description": "Arreglo de ropa BARATO en Valencia con 10 años de experiencia",
                "email": "jardin@gartalia.com",
                "logo": "https://entreprendas.es/seo/favicon_500x500.jpg",
                "url": "https://entreprendas.es"
              },
              {
                "@context": "http://schema.org",
                "@type": "LocalBusiness",
                "logo": "https://entreprendas.es/seo/favicon_500x500.jpg",
                "name": "Gartalia",
                "description": "Arreglo de ropa BARATO en Valencia con 10 años de experiencia",
                "image": "https://entreprendas.es/seo/meta-1200x630.jpg",
                "url": "https://entreprendas.es",
                "hasMap": "#",
                "telephone": " 961848217",
                "priceRange": "$",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Pl. Rafael Atard, 20A, piso 2 puerta 3",
                  "addressLocality": "Manises",
                  "addressRegion": "València",
                  "postalCode": "46940"
                }
              }
            ])
          }}
        />
      </head>
      <body>

 



        <div className="master__gartalia">
        <Header />
          {children}
        <Footer />
        </div>
      </body>
    </html>
  );
}