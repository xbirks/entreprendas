import "../../style.scss";

const municipio = "Manises";

export const metadata = {
  title: `Arreglo de ropa en ${municipio} y alrededores | ENTRE PRENDAS`,
  description: `10 años de experiencia como modista en ${municipio}. Realizamos composturas de pantalones, camisas, faldas, vestidos de novia, trajes de fallera y mucho más. Servicio profesional y eficiente.`,
  applicationName: "ENTRE PRENDAS",
  keywords: [
    `arreglo de ropa en ${municipio}`,
    `ajuste de vestidos en ${municipio}`,
    `modista profesional en ${municipio}`,
    `arreglo de trajes en ${municipio}`,
    `ajuste de pantalones en ${municipio}`,
    `servicio de sastrería en ${municipio}`,
    `reparación de cremalleras en ${municipio}`,
    `arreglo de camisas en ${municipio}`,
    `ajuste de faldas en ${municipio}`,
    `modista a domicilio en ${municipio}`,
    `personalización de ropa en ${municipio}`,
    `reemplazo de botones en ${municipio}`,
    `ajuste de chaquetas en ${municipio}`,
    `costurera profesional en ${municipio}`,
    `servicio de arreglos de ropa en ${municipio}`,
    `ajuste de ropa de fiesta en ${municipio}`,
    `transformación de prendas en ${municipio}`
  ],
  alternates: {
    canonical: "https://www.entreprendas.es/municipios/manises",   // ✅ canonical correcto
    languages: {
      "es-ES": "https://www.entreprendas.es/municipios/manises",   // ✅ hreflang aquí
    },
  },
};

export default function ManisesLayout({ children }) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Entre Prendas - Arreglo de ropa en Manises",
    "description": "Servicio profesional de arreglo de ropa en Manises con 10 años de experiencia. Ajustes, composturas y arreglos de todo tipo de prendas.",
    "url": "https://www.entreprendas.es/municipios/manises",
    "telephone": "+34680593195",
    "email": "hola@soyandres.es",
    "image": "https://www.entreprendas.es/seo/meta-1200x630.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Pl. Rafael Atard, 20A, piso 2 puerta 3",
      "addressLocality": "Manises",
      "addressRegion": "València",
      "postalCode": "46940",
      "addressCountry": "ES"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "39.4858",
      "longitude": "-0.4668"
    },
    "areaServed": {
      "@type": "City",
      "name": "Manises"
    },
    "priceRange": "€€",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "19:00"
      }
    ],
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
        "name": "Manises",
        "item": "https://www.entreprendas.es/municipios/manises"
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
