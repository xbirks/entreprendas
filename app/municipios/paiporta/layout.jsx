import "../../style.scss";

const municipio = "Paiporta";

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
    canonical: "https://www.entreprendas.es/municipios/paiporta",   // ✅ canonical correcto
    languages: {
      "es-ES": "https://www.entreprendas.es/municipios/paiporta",   // ✅ hreflang aquí
    },
  },
};

export default function SedaviLayout({ children }) {
  return (
    <div className="master__gartalia">
      {children}
    </div>
  );
}
