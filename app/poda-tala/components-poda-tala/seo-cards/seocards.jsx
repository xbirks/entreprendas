"use client";

import Image from 'next/image';
import Link from 'next/link';
import './seocards.scss';
import Card from './card';

//IMG
import emergencia from '../../../assets/img/emergencia.jpg';
import arbolcaio from '../../../assets/img/arbolcaio.jpg';
import licencia from '../../../assets/img/licencia.jpg';


function SeoCards({ municipio }) {
  return (
    <div className="seoCards">
      <Card
        title={`Actuamos en situaciones de emergencia 24/7 ${municipio}`}
        info={
          <>
            Cuando las tormentas o los vientos intensos, como los de la{" "}
            <strong>&quot;DANA&quot;</strong> que vivimos en Valencia en el año
            2024, afectan a los árboles de su propiedad, estamos disponibles 24/7
            para actuar de inmediato. <strong>Respondemos a emergencias con rapidez</strong>,
            evitando que árboles caídos o ramas peligrosas comprometan la seguridad
            de su jardín o de sus zonas verdes.
            <br />
            <br />
            Nuestra empresa se especializa en poda y tala de urgencia, con jardineros
            certificados listos para <strong>intervenir en cualquier momento</strong>,
            día o noche. Además, ofrecemos apuntalamiento y cableado para estabilizar
            árboles dañados, asegurando una solución integral que protege su hogar y
            sus zonas verdes sin importar la hora.
          </>
        }
        img={emergencia}
        alt="Un arbol caído en medio de la carretera en el monte de Bétera"
      ></Card>

      <Card
        title={`Contingencia contra los efectos de la DANA de Valencia`}
        info={
          <>
            La DANA que devastó Valencia en octubre de 2024 dejó un rastro de
            destrucción en jardines y zonas verdes, con inundaciones que arrasaron
            áreas como Paiporta y árboles desplomados por vientos extremos. Este
            evento mostró la vulnerabilidad de los espacios verdes ante fenómenos
            climáticos severos.
            <br />
            <br />
            Con más de 20 años de experiencia, nos especializamos en poda y tala
            para prevenir y gestionar estos riesgos, protegiendo su propiedad y
            a su familia. Si necesita ayuda urgente tras una tormenta como la{" "}
            <strong>&quot;DANA&quot;</strong>, contáctenos; estamos aquí para devolver
            la seguridad, la integridad y el orden a su jardín.
          </>
        }
        img={arbolcaio}
        alt="Una encina caída en medio de la carretera cerca de San Antonio de Benageber"
      ></Card>

      <Card
        title={`Consigue tu licencia para talar o trasplantar árboles ${municipio}`}
        info={
          <>
            Si necesitas <strong>talar o trasplantar un árbol en Valencia</strong>, ya
            sea en tu jardín o en un espacio público, el Ayuntamiento exige un permiso
            especial con el trámite <strong>MA.LC.15</strong>.
            <br />
            <br />
            Solo tienes que rellenar un formulario con tus datos, indicar la ubicación
            del árbol y explicar el motivo de la tala o trasplante.{" "}
            <strong>Si forma parte de una obra, es posible que necesites también la
            licencia de obra y la comunicación previa.</strong>
            <br />
            <br />
            Puedes presentar tu solicitud en:
            <ul>
              <li>
                <strong>Casa Consistorial</strong> (C/ Arquebisbe Mayoral, 1) – Horario:
                8:30 a 14:00
              </li>
              <li>
                <strong>Oficina de Tabacalera</strong> (C/ Amadeu de Savoia, 11)
              </li>
            </ul>
            <strong>Recomendación:</strong> Pide cita previa en{" "}
            <a href="https://www.valencia.es" target="_blank" rel="noopener noreferrer">
              www.valencia.es
            </a>{" "}
            o llamando al <strong>010</strong> para evitar esperas.
            <br />
            <br />
            También puedes hacerlo de forma rápida y sencilla en la{" "}
            <strong>Sede Electrónica</strong>.
            <br />
            <br />
            <strong>
              Si te parece complicado, no te preocupes, nosotros podemos ayudarte a
              gestionarlo sin líos.
            </strong>
          </>
        }
        img={licencia}
        alt="Jardinero de Gartalia cortando el tronco de un pino en Gilet, Valencia"
      ></Card>
    </div>
  );
}

export default SeoCards;