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
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Los precios son cerrados?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Son orientativos; confirmamos el precio final tras revisar la prenda, tejido y complejidad."
        }
      },
      {
        "@type": "Question",
        name: "¿Cuál es el plazo de entrega?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ajustes básicos: 24–48 h. Trabajos complejos: 3–5 días según carga de trabajo."
        }
      },
      {
        "@type": "Question",
        name: "¿Ofrecéis servicio a domicilio?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, en Valencia y alrededores. El desplazamiento se calcula desde Manises."
        }
      },
      {
        "@type": "Question",
        name: "¿Trabajáis vestidos de novia y trajes de fallera?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, con cita previa para pruebas y ajustes."
        }
      },
      {
        "@type": "Question",
        name: "¿Aceptáis urgencias?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, según disponibilidad. Puede aplicarse un recargo por urgencia."
        }
      },
      {
        "@type": "Question",
        name: "¿Cómo pido presupuesto?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Envíanos fotos por WhatsApp indicando el arreglo que necesitas y el tipo de tejido."
        }
      }
    ]
  };

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
      </div>

      <div className="faq">
        <div className="masterFaq">
          <FaqMaster></FaqMaster>
        </div>
      </div>

      <div className="faq__banner">
        <span>¿Más preguntas? <Link href="tel:+34680593195">680 593 195</Link></span>
      </div>

      <div className="master">
        <SeoCards municipio=""></SeoCards>
      </div>

      {/* JSON-LD FAQ (solo aquí en page.jsx) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  );
}
