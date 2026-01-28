// app/precios/layout.jsx
import "../style.scss";
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";

export const metadata = {
  // Host preferido con www para coherencia en todas las señales
  metadataBase: new URL("https://www.entreprendas.es"),
  title: "Precios de arreglos de ropa BARATO en Valencia | ENTRE PRENDAS",
  description:
    "Consulta precios orientativos de arreglos de ropa en Valencia: bajos de pantalón, entalles, cremalleras, ajustes de vestidos, trajes de fallera y más. Servicio rápido y económico.",
  keywords: [
    "arreglo de ropa en Manises",
    "ajuste de vestidos en Mislata",
    "modista profesional en Quart de Poblet",
    "arreglo de trajes en Aldaia",
    "ajuste de pantalones en Burjassot",
    "servicio de sastrería en Xirivella",
    "reparación de cremalleras en Paterna",
    "arreglo de camisas en Alaquàs",
    "ajuste de faldas en Torrent",
    "modista a domicilio en Picanya",
    "personalización de ropa en Paiporta",
    "reemplazo de botones en Riba-roja de Túria",
    "ajuste de chaquetas en Godella",
    "costurera profesional en Montcada",
    "servicio de arreglos de ropa en La Cañada",
    "ajuste de ropa de fiesta en Benetússer",
    "transformación de prendas en Catarroja",
  ],
  alternates: {
    // Canónica ABSOLUTA con www
    canonical: "https://www.entreprendas.es/precios",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://www.entreprendas.es/precios",
    siteName: "ENTRE PRENDAS",
    title: "Precios de arreglos de ropa en Valencia | ENTRE PRENDAS",
    description:
      "10 años de experiencia como modista en Valencia. Composturas de pantalones, camisas, faldas, vestidos de novia, trajes de fallera...",
    images: [
      {
        url: "https://www.entreprendas.es/seo/meta-1200x630.jpg",
        width: 1200,
        height: 630,
        alt: "Arreglos de ropa a domicilio en Valencia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@entreprendas.es",
    creator: "@entreprendas.es",
    title: "Precios de arreglos de ropa en Valencia | ENTRE PRENDAS",
    description:
      "10 años de experiencia como modista en Valencia. Composturas de pantalones, camisas, faldas, vestidos de novia, trajes de fallera...",
    images: ["https://www.entreprendas.es/seo/twitter-1200-600.jpg"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/seo/favicon_500x500.png", type: "image/png", sizes: "any" }],
    apple: [{ url: "/seo/ios_180x180.png", sizes: "180x180" }],
  },
};

export default function PreciosLayout({ children }) {
  // Breadcrumb Schema
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
        "name": "Precios",
        "item": "https://www.entreprendas.es/precios"
      }
    ]
  };

  // Organization Schema
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Entre Prendas",
    url: "https://www.entreprendas.es",
    logo: "https://www.entreprendas.es/seo/favicon_500x500.png",
    email: "hola@soyandres.es",
    telephone: "+34680593195",
    sameAs: [
      "https://www.facebook.com/entreprendas.es",
      "https://www.instagram.com/entreprendas.es",
    ],
  };

  // LocalBusiness Schema con AggregateRating
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Entre Prendas",
    url: "https://www.entreprendas.es",
    image: "https://www.entreprendas.es/seo/meta-1200x630.jpg",
    telephone: "+34680593195",
    email: "hola@soyandres.es",
    priceRange: "€",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Pl. Rafael Atard, 20A, piso 2 puerta 3",
      addressLocality: "Manises",
      addressRegion: "València",
      postalCode: "46940",
      addressCountry: "ES",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "39.4699",
      longitude: "-0.3763"
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "47",
      bestRating: "5",
      worstRating: "1"
    },
    areaServed: [
      { "@type": "City", "name": "Valencia" },
      { "@type": "City", "name": "Manises" },
      { "@type": "City", "name": "Mislata" },
      { "@type": "City", "name": "Quart de Poblet" },
      { "@type": "City", "name": "Aldaia" }
    ]
  };

  // Service Schema - Servicios principales
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "Service",
        "name": "Arreglo de pantalones",
        "description": "Bajos, entalles, cremalleras y ajustes de pantalones",
        "provider": { "@type": "LocalBusiness", "name": "Entre Prendas" },
        "areaServed": { "@type": "City", "name": "Valencia" },
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "EUR",
          "lowPrice": "6",
          "highPrice": "16",
          "offerCount": "16"
        }
      },
      {
        "@type": "Service",
        "name": "Arreglo de vestidos",
        "description": "Ajustes, bajos, cremalleras y modificaciones de vestidos",
        "provider": { "@type": "LocalBusiness", "name": "Entre Prendas" },
        "areaServed": { "@type": "City", "name": "Valencia" },
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "EUR",
          "lowPrice": "4",
          "highPrice": "18",
          "offerCount": "12"
        }
      },
      {
        "@type": "Service",
        "name": "Arreglo de vestidos de novia",
        "description": "Ajustes profesionales para vestidos de novia, invitadas y damas de honor",
        "provider": { "@type": "LocalBusiness", "name": "Entre Prendas" },
        "areaServed": { "@type": "City", "name": "Valencia" },
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "EUR",
          "lowPrice": "25",
          "highPrice": "40",
          "offerCount": "8"
        }
      },
      {
        "@type": "Service",
        "name": "Arreglo de camisas",
        "description": "Cambio de cuello, puños, mangas y ajustes de camisas",
        "provider": { "@type": "LocalBusiness", "name": "Entre Prendas" },
        "areaServed": { "@type": "City", "name": "Valencia" },
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "EUR",
          "lowPrice": "8",
          "highPrice": "14",
          "offerCount": "10"
        }
      },
      {
        "@type": "Service",
        "name": "Arreglo de chaquetas",
        "description": "Ajuste de mangas, bajos y costados de chaquetas y americanas",
        "provider": { "@type": "LocalBusiness", "name": "Entre Prendas" },
        "areaServed": { "@type": "City", "name": "Valencia" },
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "EUR",
          "lowPrice": "12",
          "highPrice": "25",
          "offerCount": "6"
        }
      },
      {
        "@type": "Service",
        "name": "Arreglo de faldas",
        "description": "Bajos, cremalleras y ajustes de faldas",
        "provider": { "@type": "LocalBusiness", "name": "Entre Prendas" },
        "areaServed": { "@type": "City", "name": "Valencia" },
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "EUR",
          "lowPrice": "10",
          "highPrice": "16",
          "offerCount": "7"
        }
      }
    ]
  };

  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Tipografías */}
        <link rel="preconnect" href="https://use.typekit.net" />
        <link rel="stylesheet" href="https://use.typekit.net/usg7enf.css" />

        {/* Theming */}
        <meta name="theme-color" content="#6BDB8A" />
        <meta name="background-color" content="#0D403B" />

        {/* Favicon correcto */}
        <link
          rel="icon"
          href="https://www.entreprendas.es/seo/favicon_500x500.png"
          type="image/png"
        />

        {/* CSP razonable para tipografías e imágenes */}
        <meta
          httpEquiv="Content-Security-Policy"
          content="
            default-src 'self';
            img-src 'self' https://www.entreprendas.es data:;
            script-src 'self' https://apis.google.com;
            style-src 'self' 'unsafe-inline' https://use.typekit.net;
            font-src 'self' https://use.typekit.net data:;
            connect-src 'self';
            frame-ancestors 'none';
            upgrade-insecure-requests;
          "
        />

        {/* JSON-LD global */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([breadcrumbSchema, orgSchema, localBusinessSchema, servicesSchema]),
          }}
        />
      </head>
      <body>
        <div className="master__gartalia">
          {/* <Header /> */}
          {children}
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
