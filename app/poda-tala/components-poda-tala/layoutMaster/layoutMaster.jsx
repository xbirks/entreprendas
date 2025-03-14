// app/components/layoutMaster/layoutMaster.jsx
import React from 'react';
import Head from 'next/head';
import Header from '../header.jsx';
import Footer from '../footer.jsx';

const LayoutMaster = ({ children, municipio }) => {
  const title = `GARTALIA | Jardinería en ${municipio} para particulares y empresas`;
  const description = `Información sobre jardinería en ${municipio}. Ofrecemos poda en altura, diseño de jardines, y mantenimiento integral para particulares y empresas en ${municipio}.`;
  const keywords = [
    `jardinero particular en ${municipio}`, 
    `servicios de jardinería en ${municipio}`, 
    `mantenimiento de jardines en ${municipio}`, 
    // Añadir otros keywords relevantes
  ].join(', ');

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://gartalia.com/municipios/${municipio.toLowerCase().replace(/\s+/g, '-')}`} hreflang="es-ES" />
        
        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`https://gartalia.com/municipios/${municipio.toLowerCase().replace(/\s+/g, '-')}`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://gartalia.com/seo/meta-1200x630.jpg" />
        <meta property="og:site_name" content="GARTALIA | Jardinería en Valencia para particulares y empresas" />
        <meta property="og:locale" content="es_ES" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@gartalia" />
        <meta name="twitter:creator" content="@gartalia" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://gartalia.com/seo/twitter-1200-600.jpg" />
        <meta name="twitter:image:alt" content={`Jardinería integral en ${municipio} con 20 años de experiencia`} />
        
        <meta name="theme-color" content="#6BDB8A" />
        <meta name="background-color" content="#0D403B" />
        <link rel="icon" href="https://gartalia.com/seo/favicon_500x500.jpg" title="Ícono de la pestaña" type="image/png" />
        <link rel="apple-touch-icon" sizes="180x180" href="https://gartalia.com/seo/ios_180x180.jpg" />
      </Head>
      <html lang="es">
        <body>
          <div className="master__gartalia">
            <Header />
            {children}
            <Footer />
          </div>
        </body>
      </html>
    </>
  );
};

export default LayoutMaster;
