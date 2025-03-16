"use client";

import Image from 'next/image';
import Link from 'next/link';
import './seocards.scss';
import Card from './card';

//IMG
import seo1 from '../../assets/img/falleras.jpg';
import seo2 from '../../assets/img/novias.jpg';
import seo3 from '../../assets/img/traje.jpg';


function SeoCards({municipio}){

    return(

        <div className="seoCards">
            <Card
            title={`Protege tu traje de fallera en días lluviosos`}
            info="El traje de fallera es una prenda tradicional valiosa y delicada, por lo que en días lluviosos es fundamental protegerlo adecuadamente. Un chubasquero transparente se convierte en el mejor aliado: cubre el vestido por completo y evita que se moje, a la vez que permite lucir todos los detalles del diseño sin ocultarlos. Esta capa impermeable resguarda las telas y bordados de la lluvia, preservando su esplendor y evitando daños. Si no tienes un chubasquero, toma otras precauciones: camina con cuidado evitando charcos que puedan salpicar la falda y cubre las zonas más delicadas (como encajes o la manteleta) con un plástico o pañuelo al desplazarte. Con estas medidas, tu traje de fallera permanecerá seco y en perfectas condiciones incluso bajo la lluvia, listo para seguir brillando en la celebración."
            img={seo1}
            alt="Modista de Entre Prendas mostrando un chubasquero para trajes de fallera"
            >
            </Card>

            <Card
            title={`Ajustamos tu vestido de novia ${municipio}`}
            info="El vestido de novia es más que una prenda: es un sueño hecho realidad que refleja la personalidad de quien lo lleva. Por ello, ajustarlo a la medida y al gusto de cada novia es esencial para que se sienta única, cómoda y radiante en su gran día. Del mismo modo, las damas de honor e invitadas también merecen vestidos que les queden impecables y se adapten a su estilo, permitiéndoles lucir elegantes sin perder comodidad. Los complementos adecuados —desde un velo o unas joyas delicadas hasta un chal a juego o el calzado ideal— terminan de completar el look, aportando ese toque personal que realza la belleza de cada mujer. En conjunto, un vestido bien ajustado y los accesorios correctos logran que la novia, sus damas de honor e incluso las invitadas se sientan seguras, especiales y fieles a sí mismas."
            img={seo2}
            alt="Trabajador de Gartalia cortando el césped en Resort El Oasis La Eliana"
            >
            </Card>

            <Card
            title={`Ajustamos tu traje ${municipio} para que siempre lo luzcas perfecto`}
            info="En el ámbito profesional, la importancia de un traje bien ajustado no puede subestimarse. Un buen fit transmite seguridad y profesionalidad, marcando la diferencia en reuniones, eventos o negociaciones importantes. Además, un traje entallado a medida proyecta una imagen cuidada y demuestra atención al detalle, lo que te hace lucir más seguro de ti mismo. Para lograr ese look impecable, a menudo es necesario realizar ajustes en chaquetas y pantalones: por ejemplo, acortar el largo de las mangas de la chaqueta, entallar el cuerpo para que no sobre tela, y en el pantalón ajustar la cintura y el bajo a la altura correcta. Estos arreglos comunes aseguran que el traje quede como un guante, mejorando tu presencia y confianza en el entorno empresarial."
            img={seo3}
            alt="Trabajador de Gartalia cortando el césped en Resort El Oasis La Eliana"
            >
            </Card>

        </div>
    )

};

export default SeoCards;