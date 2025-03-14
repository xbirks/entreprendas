import "../../style.scss";
import Header from '../../components/header.jsx';
import Footer from "../../components/footer.jsx";

const municipio = "Picassent";

export const metadata = {
  title: `GARTALIA | Jardinería en ${municipio} para particulares y empresas`,
  description: `20 años de experiencia como jardinero en ${municipio}. Ofrecemos poda en altura, diseño de jardines, y mantenimiento integral para particulares y empresas. Servicio barato y eficiente.`,
  applicationName: 'GARTALIA',
  keywords: [
    `jardinero particular en ${municipio}`, 
    `servicios de jardinería en ${municipio}`, 
    `mantenimiento de jardines en ${municipio}`, 
    `diseño de jardines en ${municipio}`, 
    `poda y tala en ${municipio}`, 
    `instalación de sistemas de riego en ${municipio}`, 
    `jardinero profesional en ${municipio}`, 
    `cuidado de jardines en ${municipio}`, 
    `jardinero barato en ${municipio}`, 
    `limpieza de parcelas en ${municipio}`,
    `jardinero empresa en ${municipio}`, 
    `diseño paisajístico en ${municipio}`, 
    `jardinero a domicilio en ${municipio}`, 
    `servicio de poda en ${municipio}`, 
    `mantenimiento de piscinas en ${municipio}`, 
    `renovación de jardines en ${municipio}`, 
    `jardinería sostenible en ${municipio}`, 
    `cuidado de césped en ${municipio}`, 
    `jardinero profesional en ${municipio}`, 
    `servicios de paisajismo en ${municipio}`,
    `planificación de jardines en ${municipio}`, 
    `jardinero económico en ${municipio}`, 
    `tala de árboles en ${municipio}`, 
    `mantenimiento de zonas verdes en ${municipio}`, 
    `jardinero experto en ${municipio}`, 
    `diseño de exteriores en ${municipio}`, 
    `servicios de jardinería ecológica en ${municipio}`, 
    `mantenimiento de parques en ${municipio}`, 
    `jardinero con experiencia en ${municipio}`, 
    `contratar jardinero en ${municipio}`
  ],
};

export default function SedaviLayout({ children }) {
  return (
    <div className="master__gartalia">
      {children}
    </div>
  );
}
