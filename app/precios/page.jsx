import Image from "next/image";
import Link from 'next/link';
import '../../app/style.scss';
import Intro from "../components/cabecera/introPrecios";
import GridMaster from "../components/grid/gridMaster";
import Location from "../components/location/location";
import Nosotros from "../components/nosotros&review/nosotros";
import Other from "../components/other/other";
import FaqMaster from "../components/faq/faqmaster";
import SeoCards from "../components/seo-cards/seocards";
import PreciosMaster from "../components/precios/preciosMaster";
 

export default function HomePage() {
  return (
    <div className="Gartalia">
      <div className="master">
        <Intro municipio="Valencia"></Intro>
        <PreciosMaster></PreciosMaster>
        <GridMaster municipio=""></GridMaster>
        <Location></Location>
        
        
        <Nosotros></Nosotros>
      </div>
      <div className="other">
        <div className="masterOther">
          <Other municipio=""></Other>
        </div>
      </div><div className="faq">
        <div className="masterFaq">
          <FaqMaster></FaqMaster>
        </div>
      </div>
      <div className="faq__banner">
      <span>¿Más preguntas? <Link href="tel:+34680593195">680 593 195</Link></span>
      </div>

      <div className="master">
        <SeoCards  municipio="" ></SeoCards>
      </div>
    </div>
    
  );
}
