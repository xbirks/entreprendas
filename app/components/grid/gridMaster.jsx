"use client";

import Image from 'next/image';
import Link from 'next/link';
import './grid.scss';
import Grid from './grid';

// IMAGENES
import podatala from '../../assets/img/poda-tala.jpg';
import disenojardines from '../../assets/img/diseno-jardines.jpg';
import paisajismo from '../../assets/img/paisajismo.jpg';
import desrame from '../../assets/img/desrame.jpg';
import recogidaresiduos from '../../assets/img/recogida-residuos.jpg';
import parcelas from '../../assets/img/parcelas.jpg';

import mantcesped from '../../assets/img/mant-cesped.jpg';
import mantcomunidades from '../../assets/img/mant-comunidades.jpg';
import mantareasverdes from '../../assets/img/mant-areasverdes.jpg';

import instalariego from '../../assets/img/instala-riego.jpg';
import instalaluz from '../../assets/img/instala-luz.jpg';
import instalacercas from '../../assets/img/instala-cercas.jpg';



function GridMaster({municipio}){

    return(

    <div className="gridmaster" id="servicios"> 

        <h2>Servicios</h2>

        <div className="gridmaster__elements">

        <Grid
        service={`Poda y tala en altura ${municipio}`}
        description="Nos especializamos en poda y tala en altura, empleando técnicas seguras para gestionar árboles grandes y en ubicaciones complicadas. Este servicio previene riesgos y promueve la salud y el buen crecimiento de tus árboles."
        img={podatala}
        top="block"
        link="/poda-tala"
        ></Grid>

        <Grid
        service={`Diseño y construcción de jardines ${municipio}`}
        description="Ofrecemos servicios personalizados de diseño de jardines que transforman espacios exteriores en verdaderos oasis. Nuestros expertos trabajan contigo para crear diseños únicos, adaptados a tus gustos y las condiciones de tu entorno."
        img={disenojardines}
        top="none"
        link="/"
        ></Grid>

        <Grid
        service={`Paisajismo ${municipio}`}
        description="Creamos paisajes impresionantes que complementan tu hogar y estilo de vida, utilizando un enfoque integrado que considera tanto la estética como la funcionalidad. Nuestro equipo utiliza su experiencia en horticultura para asegurar que cada elemento del paisaje esté en perfecta armonía."
        img={paisajismo}
        top="none"
        link="/"
        ></Grid>

        <Grid
        service={`Poda de palmeras ${municipio}`}
        description="Realizamos poda de palmeras para mejorar su salud y estética, eliminando ramas innecesarias o enfermas de manera segura y eficiente. Este servicio ayuda a prevenir daños futuros y mejora la estructura general del árbol."
        img={desrame}
        top="none"
        link="/"
        ></Grid>

        <Grid
        service={`Recogida y disposición de residuos ${municipio}`}
        description="Gestionamos la recogida y disposición de residuos de jardinería de forma responsable, asegurando que todos los desechos vegetales sean eliminados adecuadamente o reutilizados como compost. Este servicio no solo mantiene tu jardín limpio, sino que también contribuye a la sostenibilidad ambiental."
        img={recogidaresiduos}
        top="block"
        link="/"
        ></Grid>

        <Grid
        service={`Limpieza de parcelas ${municipio}`}
        description="Ofrecemos un servicio completo de limpieza de parcelas, eliminando desechos, maleza y cualquier elemento no deseado para preparar el terreno para futuros proyectos o simplemente mantenerlo en óptimas condiciones. Este servicio es esencial para evitar plagas y fomentar un entorno más seguro y estético en tu propiedad."
        img={parcelas}
        top="none"
        link="/"
        ></Grid>

        </div>
        



        <h2 id="mantenimiento">Mantenimiento</h2>

        <div className="gridmaster__elements">

        <Grid
        service={`Mantenimiento de césped ${municipio}`}
        description="Ofrecemos mantenimiento de césped integral, incluyendo corte regular, aireación y fertilización para garantizar un césped verde y saludable. Este servicio asegura la belleza y durabilidad de tu espacio verde durante todo el año."
        img={mantcesped}
        top="block"
        link="/"
        ></Grid>

        <Grid
        service={`Mantenimiento de comunidades ${municipio}`}
        description="Proporcionamos servicios de mantenimiento de comunidades, asegurando que las áreas verdes compartidas estén siempre en perfecto estado. Nos encargamos de todo, desde el cuidado del césped hasta la poda de árboles, para mejorar el entorno de todos los residentes."
        img={mantcomunidades}
        top="block"
        link="/"
        ></Grid>

        <Grid
        service={`Limpieza de áreas verdes ${municipio}`}
        description="Realizamos la limpieza de áreas verdes, eliminando residuos y desechos para mantener los espacios exteriores limpios y atractivos. Este servicio es esencial para preservar la belleza y la funcionalidad de parques y jardines."
        img={mantareasverdes}
        top="none"
        link="/"
        ></Grid>

        </div>


        
        <h2 id="instalaciones">Instalaciones</h2>

        <div className="gridmaster__elements">

        <Grid
        service={`Instalación de sistemas de riego por aspersión ${municipio}`}
        description="Implementamos sistemas de riego por aspersión eficientes que garantizan una distribución uniforme del agua, optimizando el riego y la salud de tus plantas. Este sistema es ideal para mantener tu jardín hidratado sin esfuerzo excesivo."
        img={instalariego}
        top="block"
        link="/"
        ></Grid>

        <Grid
        service={`Instalación de iluminación para jardines ${municipio}`}
        description="Instalamos iluminación para jardines, realzando la belleza de tu espacio exterior y aumentando la seguridad durante la noche. Nuestros sistemas de iluminación son tanto funcionales como decorativos, diseñados para complementar el paisaje de tu jardín."
        img={instalaluz}
        top="none"
        link="/"
        ></Grid>

        <Grid
        service={`Instalación de cercas, cipreses y muros verdes ${municipio}`}
        description="Ofrecemos instalación de cercas, cipreses y muros verdes para añadir privacidad y belleza a tu jardín. Estos elementos no solo mejoran la estética del espacio, sino que también proporcionan soluciones prácticas para delimitar áreas y mejorar la seguridad."
        img={instalacercas}
        top="none"
        link="/"
        ></Grid>

        </div>

</div>

    );


}

export default GridMaster; 