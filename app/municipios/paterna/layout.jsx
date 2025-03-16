import "../../style.scss";
import Header from '../../components/header.jsx';
import Footer from "../../components/footer.jsx";

const municipio = "Paterna";

export const metadata = {
  title: `ENTRE PRENDAS | Arreglo de ropa en ${municipio} y alrededores`,
  description: `10 años de experiencia como modista en ${municipio}. Realizamos composturas de pantalones, camisas, faldas, vestidos de novia, trajes de fallera y mucho más. Servicio profesional y eficiente.`,
  applicationName: 'ENTRE PRENDAS',
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
};

export default function SedaviLayout({ children }) {
  return (
    <div className="master__gartalia">
      {children}
    </div>
  );
}
