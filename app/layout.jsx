import "./style.scss";
import Header from './components/header.jsx';
import Footer from "./components/footer.jsx";
 

export const metadata = {

  //GENERIC
  title: 'GARTALIA | Jardinería en Valencia para particulares y empresas',
  description: '20 años de experiencia como jardinero en Valencia. Ofrecemos poda en altura, diseño de jardines, y mantenimiento integral para particulares y empresas. Servicio barato y eficiente.',
  applicationName: 'GARTALIA',
  keywords: [
    'jardinero particular en La Eliana', 
    'servicios de jardinería en Rocafort', 
    'mantenimiento de jardines en Godella', 
    'diseño de jardines en Bétera', 
    'poda y tala en Paterna', 
    'instalación de sistemas de riego en La Pobla de Vallbona', 
    'jardinero profesional en Torrent', 
    'cuidado de jardines en Llíria', 
    'jardinero barato en Cullera', 
    'limpieza de parcelas en Alzira',
    'jardinero empresa en Chiva', 
    'diseño paisajístico en Benaguasil', 
    'jardinero a domicilio en Montserrat', 
    'servicio de poda en Náquera', 
    'mantenimiento de piscinas en Alboraya', 
    'renovación de jardines en Puçol', 
    'jardinería sostenible en Vilamarxant', 
    'cuidado de césped en Cheste', 
    'jardinero profesional en Gilet', 
    'servicios de paisajismo en Moncada',
    'planificación de jardines en Alfafar', 
    'jardinero económico en Sedaví', 
    'tala de árboles en Canet Berenguer', 
    'mantenimiento de zonas verdes en Sagunto', 
    'jardinero experto en Oliva', 
    'diseño de exteriores en Xàtiva', 
    'servicios de jardinería ecológica en Carcaixent', 
    'mantenimiento de parques en Tavernes de la Valldigna', 
    'jardinero con experiencia en Ontinyent', 
    'contratar jardinero en Requena'
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
    title: 'GARTALIA | Jardinería en Valencia para particulares y empresas',
    description: '20 años de experiencia como jardinero en Valencia. Ofrecemos poda, diseño de jardines, y mantenimiento integral para particulares y empresas. Servicio barato y eficiente. Llámanos.',
    url: 'https://gartalia.com',
    type: 'website',
    images: [
      {
        url: 'https://gartalia.com/seo/meta-1200x630.jpg',
        width: 1200,
        height: 630,
        alt: 'Descripción de la imagen',
      },
    ],
    site_name: 'GARTALIA | Jardinería en Valencia para particulares y empresas',
    locale: 'es_ES',
  },

  // TWITTER
  twitter: {
    card: 'summary_large_image',
    site: '@gartalia',
    creator: '@gartalia',
    title: 'GARTALIA | Jardinería en Valencia para particulares y empresas',
    description: '20 años de experiencia como jardinero en Valencia. Ofrecemos poda, diseño de jardines, y mantenimiento integral para particulares y empresas. Servicio barato y eficiente. Llámanos.',
    image: 'https://gartalia.com/seo/twitter-1200-600.jpg',
    imageAlt: 'Jardinería integral en Valencia con 20 años de experiencia',
  },

  //APPLE
  appleTouchIcon: 'https://gartalia.com/seo/favicon_500x500.png', 
  appleTouchStartupImage: 'https://gartalia.com/seo/favicon_500x500.png',

  



  //SECURITY
  contentSecurityPolicy: "default-src 'self'; img-src 'self' https://www.gartalia.com; script-src 'self' https://apis.google.com",
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

        {/* Google Tag Manager Script */}
          <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WGNGCX77');`,
          }}
        />
       
        <meta name="theme-color" content="#6BDB8A" />
        <meta name="background-color" content="#0D403B" />
        <link rel="canonical" href="https://gartalia.com" hrefLang="es-ES" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="https://gartalia.com/seo/favicon_500x500.jpg" title="Ícono de la pestaña" type="image/png" />
        <link rel="apple-touch-icon" sizes="180x180" href="https://gartalia.com/seo/ios_180x180.jpg" />
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
                "description": "Jardinería integral en Valencia con 20 años de experiencia",
                "email": "jardin@gartalia.com",
                "logo": "https://gartalia.com/seo/favicon_500x500.jpg",
                "url": "https://gartalia.com"
              },
              {
                "@context": "http://schema.org",
                "@type": "LocalBusiness",
                "logo": "https://gartalia.com/seo/favicon_500x500.jpg",
                "name": "Gartalia",
                "description": "Jardinería integral en Valencia con 20 años de experiencia",
                "image": "https://gartalia.com/seo/meta-1200x630.jpg",
                "url": "https://gartalia.com",
                "hasMap": "#",
                "telephone": "658677423",
                "priceRange": "$",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Av. de l'Equador, 103, Benicalap",
                  "addressLocality": "València",
                  "addressRegion": "València",
                  "postalCode": "46025"
                }
              }
            ])
          }}
        />
      </head>
      <body>

        {/* Google Tag Manager (noscript) */}
                <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WGNGCX77"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}




        <div className="master__gartalia">
        <Header />
          {children}
        <Footer />
        </div>
      </body>
    </html>
  );
}