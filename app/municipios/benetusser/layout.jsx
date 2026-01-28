import "../../style.scss";

const municipio = "Benetússer";

export const metadata = {
  title: `Arreglo de ropa en ${municipio} y alrededores | ENTRE PRENDAS`,
  description: `10 aÃ±os de experiencia como modista en ${municipio}. Realizamos composturas de pantalones, camisas, faldas, vestidos de novia, trajes de fallera y mucho mÃ¡s. Servicio profesional y eficiente.`,
  applicationName: "ENTRE PRENDAS",
  keywords: [
    `arreglo de ropa en ${municipio}`,
    `ajuste de vestidos en ${municipio}`,
    `modista profesional en ${municipio}`,
    `arreglo de trajes en ${municipio}`,
    `ajuste de pantalones en ${municipio}`,
    `servicio de sastrerÃ­a en ${municipio}`,
    `reparaciÃ³n de cremalleras en ${municipio}`,
    `arreglo de camisas en ${municipio}`,
    `ajuste de faldas en ${municipio}`,
    `modista a domicilio en ${municipio}`,
    `personalizaciÃ³n de ropa en ${municipio}`,
    `reemplazo de botones en ${municipio}`,
    `ajuste de chaquetas en ${municipio}`,
    `costurera profesional en ${municipio}`,
    `servicio de arreglos de ropa en ${municipio}`,
    `ajuste de ropa de fiesta en ${municipio}`,
    `transformaciÃ³n de prendas en ${municipio}`
  ],
  alternates: {
    canonical: "https://www.entreprendas.es/municipios/Benetússer",   // âœ… canonical correcto
    languages: {
      "es-ES": "https://www.entreprendas.es/municipios/Benetússer",   // âœ… hreflang aquÃ­
    },
  },
};

export default function BenetússerLayout({ children }) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Entre Prendas - Arreglo de ropa en Benetússer",
    "description": "Servicio profesional de arreglo de ropa en Benetússer con 10 aÃ±os de experiencia. Ajustes, composturas y arreglos de todo tipo de prendas.",
    "url": "https://www.entreprendas.es/municipios/Benetússer",
    "telephone": "+34680593195",
    "email": "hola@soyandres.es",
    "image": "https://www.entreprendas.es/seo/meta-1200x630.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Pl. Rafael Atard, 20A, piso 2 puerta 3",
      "addressLocality": "Manises",
      "addressRegion": "ValÃ¨ncia",
      "postalCode": "46940",
      "addressCountry": "ES"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "39.4699",
      "longitude": "-0.3763"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Benetússer"
      },
      {
        "@type": "City",
        "name": "Manises"
      }
    ],
    "priceRange": "â‚¬â‚¬",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "47",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://www.entreprendas.es"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Benetússer",
        "item": "https://www.entreprendas.es/municipios/Benetússer"
      }
    ]
  };

  return (
    <div className="master__gartalia">
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </div>
  );
}
