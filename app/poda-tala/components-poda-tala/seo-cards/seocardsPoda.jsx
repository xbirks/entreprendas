"use client";

import Image from 'next/image';
import Link from 'next/link';
import './seocards.scss';
import Card from './card';

//IMG
import emergencia from '../../../assets/img/podaseo.jpg';
import licencia from '../../../assets/img/podahotel.jpg';
import arbolcaio from '../../../assets/img/palmerasseo.jpg';


function SeoCards({ municipio }) {
  return (
    <div className="seoCards">
      <Card
        title={`Importancia de la poda de árboles en tu jardín ${municipio}`}
        info={
          <>
            La poda de árboles es esencial para mantener la salud y seguridad de tu jardín o espacio verde. Ya sea para eliminar ramas muertas, reducir el tamaño o fomentar un crecimiento más saludable, un buen servicio de poda garantiza un entorno seguro y estéticamente agradable. Nuestro equipo especializado utiliza técnicas de poda adecuadas para cada tipo de árbol, adaptándose a sus necesidades específicas. Desde olivos hasta pinos, nos aseguramos de realizar cortes precisos que fomenten la vitalidad y el desarrollo adecuado de tus árboles, siempre priorizando la seguridad del entorno.
          </>
        }
        img={emergencia}
        alt="Un arbol caído en medio de la carretera en el monte de Bétera"
      ></Card>

      <Card
        title={`¿Por qué es fundamental podar tus palmeras ${municipio}?`}
        info={
          <>
            Las palmeras, especialmente en climas mediterráneos, requieren una poda periódica para mantener su belleza y evitar riesgos. <strong>La poda de palmeras ayuda a eliminar hojas secas, ramas dañadas y reduce el riesgo de caídas,</strong> garantizando un espacio más seguro y cuidado. Nuestros jardineros expertos realizan podas de palmeras de forma profesional, utilizando las herramientas más adecuadas para mantener la estructura y salud de la planta, sin dañarla. ¡Mantén tus palmeras en su mejor forma con nuestra ayuda!
          </>
        }
        img={arbolcaio}
        alt="Trabajador de Gartalia cortando el césped en Resort El Oasis La Eliana"
      ></Card>

      <Card
        title={`Poda profesional para mantener tu hotel ${municipio} impecable`}
        info={
          <>
            La poda de árboles y plantas <strong>en hoteles</strong> es clave para ofrecer a los huéspedes una experiencia visualmente agradable y un entorno seguro. En un espacio tan transitado, la poda regular no solo mejora la estética, sino que también previene accidentes al eliminar ramas o árboles que puedan representar un riesgo. Nuestro servicio especializado en <strong>poda para hoteles</strong> incluye un enfoque integral que garantiza la salud de las plantas, respetando el diseño y estilo del entorno. Desde la poda de árboles ornamentales hasta la eliminación de ramas en zonas de paso, aseguramos que tu hotel siempre luzca impecable y seguro.
          </>
        }
        img={licencia}
        alt="Trabajador de Gartalia cortando el césped en Resort El Oasis La Eliana"
      ></Card>
    </div>
  );
}

export default SeoCards;