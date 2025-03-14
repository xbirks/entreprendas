import "../style.scss";
import Header from '../components/header.jsx';
import Footer from "../components/footer.jsx";

const municipio = "Valencia";

export const metadata = {
  title: `Poda y tala de árboles en ${municipio} | Empresa de tala en altura`,
  description: `Expertos en poda, tala y destoconado de árboles y palmeras en ${municipio}. ¡Servicio profesional y económico para particulares y empresas en Valencia.`,
  applicationName: 'GARTALIA',
  keywords: [
    `poda de árboles en ${municipio}`,
    `tala de árboles en ${municipio}`,
    `destoconado de árboles en ${municipio}`,
    `servicio de poda en ${municipio}`,
    `servicio de tala en ${municipio}`,
    `jardinero experto en poda en ${municipio}`,
    `jardinero para tala de árboles en ${municipio}`,
    `poda y tala en ${municipio}`,
    `jardinero profesional en poda en ${municipio}`,
    `servicios de jardinería de poda en ${municipio}`,
    `jardinero a domicilio para tala en ${municipio}`,
    `tala y destoconado en ${municipio}`,
    `jardinero económico para poda en ${municipio}`,
    `servicio de destoconado en ${municipio}`,
    `jardinero con experiencia en tala en ${municipio}`,
    `poda de árboles profesional en ${municipio}`,
    `tala de árboles segura en ${municipio}`,
    `jardinero particular para poda en ${municipio}`,
    `servicios de tala y poda en ${municipio}`,
    `jardinero barato para tala en ${municipio}`,
    `limpieza de parcelas con tala en ${municipio}`,
    `jardinero empresa de poda en ${municipio}`,
    `mantenimiento de zonas verdes con poda en ${municipio}`,
    `jardinero experto en destoconado en ${municipio}`,
    `contratar jardinero para tala en ${municipio}`,
    `servicios de jardinería de tala en ${municipio}`,
    `poda y destoconado profesional en ${municipio}`,
    `jardinero para poda y tala en ${municipio}`,
    `tala de árboles económica en ${municipio}`,
    `servicio de poda y tala a domicilio en ${municipio}`,
    `poda de palmeras en ${municipio}`,
    `tala de palmeras en ${municipio}`,
    `destoconado de palmeras en ${municipio}`,
    `poda de árboles frutales en ${municipio}`,
    `tala de árboles frutales en ${municipio}`,
    `poda de pinos en ${municipio}`,
    `tala de pinos en ${municipio}`,
    `destoconado de pinos en ${municipio}`,
    `poda de árboles altos en ${municipio}`,
    `tala de árboles altos en ${municipio}`,
    `poda de cipreses en ${municipio}`,
    `tala de cipreses en ${municipio}`,
    `servicio de poda de palmeras en ${municipio}`,
    `servicio de tala de árboles frutales en ${municipio}`,
    `jardinero experto en poda de pinos en ${municipio}`,
    `jardinero para tala de palmeras en ${municipio}`,
    `poda de árboles ornamentales en ${municipio}`,
    `tala de árboles ornamentales en ${municipio}`,
    `destoconado de árboles altos en ${municipio}`,
    `poda de encinas en ${municipio}`,
    `tala de encinas en ${municipio}`,
    `jardinero profesional en poda de palmeras en ${municipio}`,
    `servicio de tala de cipreses en ${municipio}`,
    `poda de olivos en ${municipio}`,
    `tala de olivos en ${municipio}`,
    `destoconado de olivos en ${municipio}`,
    `poda de árboles exóticos en ${municipio}`,
    `tala de árboles exóticos en ${municipio}`,
    `jardinero para poda de árboles frutales en ${municipio}`,
    `servicio de destoconado de palmeras en ${municipio}`
  ],
};

export default function SedaviLayout({ children }) {
  return (
    <div className="master__gartalia">
      {children}
    </div>
  );
}
