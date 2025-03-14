import "../../../style.scss";
import Header from '../../../components/header.jsx';
import Footer from "../../../components/footer.jsx";

const municipio = "Campo Olivar";

export const metadata = {
  title: `Poda de árboles en ${municipio} por jardineros expertos | GARTALIA`,
  description: `Poda de árboles en ${municipio} para un crecimiento sano y seguro. Expertos en mantenimiento y seguridad. ¡Presupuesto GRATIS!`,
  applicationName: 'GARTALIA',
  keywords: [
`poda de árboles en ${municipio}`,
    `servicio de poda en ${municipio}`,
    `jardinero experto en poda en ${municipio}`,
    `jardinero profesional en poda en ${municipio}`,
    `servicios de jardinería de poda en ${municipio}`,
    `jardinero económico para poda en ${municipio}`,
    `poda de árboles profesional en ${municipio}`,
    `jardinero particular para poda en ${municipio}`,
    `servicio de poda a domicilio en ${municipio}`,
    `mantenimiento de zonas verdes con poda en ${municipio}`,
    `poda de palmeras en ${municipio}`,
    `poda de árboles frutales en ${municipio}`,
    `poda de pinos en ${municipio}`,
    `poda de árboles altos en ${municipio}`,
    `poda de cipreses en ${municipio}`,
    `poda de árboles ornamentales en ${municipio}`,
    `poda de encinas en ${municipio}`,
    `poda de olivos en ${municipio}`,
    `poda de árboles exóticos en ${municipio}`,
    `jardinero para poda de árboles frutales en ${municipio}`,
    `servicio de poda de palmeras en ${municipio}`,
    `jardinero experto en poda de pinos en ${municipio}`,
    `poda de árboles en parques y jardines en ${municipio}`
  ],
};

export default function SedaviLayout({ children }) {
  return (
    <div className="master__gartalia">
      {children}
    </div>
  );
}
