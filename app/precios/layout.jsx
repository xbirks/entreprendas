// app/layout.jsx
import "../style.scss";
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";

export const metadata = {
  metadataBase: new URL("https://entreprendas.es"),
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
    canonical: "/precios",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://entreprendas.es",
    siteName: "ENTRE PRENDAS",
    title:
      "Precios de arreglos de ropa en Valencia | ENTRE PRENDAS",
    description:
      "10 años de experiencia como modista en Valencia. Composturas de pantalones, camisas, faldas, vestidos de novia, trajes de fallera...",
    images: [
      {
        url: "https://entreprendas.es/seo/meta-1200x630.jpg",
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
    title:
      "Precios de arreglos de ropa en Valencia | ENTRE PRENDAS",
    description:
      "10 años de experiencia como modista en Valencia. Composturas de pantalones, camisas, faldas, vestidos de novia, trajes de fallera...",
    images: ["https://entreprendas.es/seo/twitter-1200-600.jpg"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/seo/favicon_500x500.png", type: "image/png", sizes: "any" },
    ],
    apple: [{ url: "/seo/ios_180x180.png", sizes: "180x180" }],
  },
};

export default function RootLayout({ children }) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Entre Prendas",
    url: "https://entreprendas.es",
    logo: "https://entreprendas.es/seo/favicon_500x500.png",
    email: "hola@soyandres.es",
    sameAs: [
      "https://www.facebook.com/entreprendas.es",
      "https://www.instagram.com/entreprendas.es",
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Entre Prendas",
    url: "https://entreprendas.es",
    image: "https://entreprendas.es/seo/meta-1200x630.jpg",
    telephone: "+34680593195",
    priceRange: "€",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Pl. Rafael Atard, 20A, piso 2 puerta 3",
      addressLocality: "Manises",
      addressRegion: "València",
      postalCode: "46940",
      addressCountry: "ES",
    },
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

        {/* Hreflang separado del canonical */}
        <link rel="canonical" href="https://entreprendas.es/precios" />

        {/* Favicon correcto */}
        <link
          rel="icon"
          href="https://entreprendas.es/seo/favicon_500x500.png"
          type="image/png"
        />

        {/* CSP razonable para tipografías e imágenes */}
        <meta
          httpEquiv="Content-Security-Policy"
          content="
            default-src 'self';
            img-src 'self' https://entreprendas.es data:;
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
            __html: JSON.stringify([orgSchema, localBusinessSchema]),
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
