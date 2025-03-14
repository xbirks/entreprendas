"use client";

import Image from 'next/image';
import Link from 'next/link';
import './seocards.scss';
import Card from './card';

//IMG
import seo1 from '../../assets/img/seo-1.jpg';
import seo2 from '../../assets/img/seo-2.jpg';
import seo3 from '../../assets/img/seo-3.jpg';


function SeoCards({municipio}){

    return(

        <div className="seoCards">
            <Card
            title={`¿Estás buscando un jardinero barato y rápido ${municipio}?`}
            info="Combinamos calidad con asequibilidad para ofrecerte servicios de jardinería profesionales sin sobrepasar tu presupuesto. Nuestro equipo está dedicado a proporcionar soluciones efectivas y eficientes, asegurando que cada proyecto, grande o pequeño, se maneje con el mismo nivel de cuidado y atención al detalle.
            
            Entendemos que encontrar un servicio que sea tanto económico como de alta calidad puede ser un desafío. Por eso, nos esforzamos por mantener nuestros precios transparentes y competitivos, mientras garantizamos resultados que superan tus expectativas. Si buscas un jardinero que no solo cuide de tu jardín, sino que también cuide de tu bolsillo, somos la elección perfecta en Valencia."
            img={seo1}
            alt="Trabajador de Gartalia cortando el césped en Resort El Oasis La Eliana"
            >
            </Card>

            <Card
            title={`Damos un servicio de Poda y Tala Profesional ${municipio}`}
            info="En nuestra empresa, entendemos la importancia de mantener los árboles de tu jardín no solo hermosos, sino también seguros. Por eso ofrecemos un servicio profesional de poda y tala en La Eliana, donde cada intervención es realizada con el máximo cuidado y respeto hacia la naturaleza y el entorno de nuestros clientes. 

            Sabemos que cada árbol es único y cada cliente tiene necesidades particulares, por eso nos adaptamos a cada situación con un enfoque personalizado. Puedes confiar en nosotros para realizar un trabajo meticuloso y eficiente, siempre con una sonrisa y el mayor respeto por tu espacio personal."
            img={seo2}
            alt="Trabajador de Gartalia cortando el césped en Resort El Oasis La Eliana"
            >
            </Card>

            <Card
            title={`¿Necesitas un jardinero particular ${municipio} que cuide de tu jardín?`}
            info="¿Necesitas alguien que cuide de tu jardín con la misma dedicación y cariño que tú le darías?

Entendemos que tu jardín es más que solo un espacio verde; es un lugar de encuentro para la familia, un refugio para relajarte y disfrutar de la naturaleza. Por eso, ofrecemos jardineros particulares que se dedican a cuidar cada detalle, asegurando que tu jardín se mantenga vibrante, hermoso y saludable.

Sabemos que cada planta y cada rincón de tu jardín tiene sus propias necesidades. Por ello, nuestro enfoque es personalizado y atento. Nuestros jardineros no solo realizan tareas como podar, plantar y mantener el césped, sino que también se toman el tiempo para entender el ecosistema de tu jardín y cómo mejorar su salud y belleza de manera sostenible. "
            img={seo3}
            alt="Trabajador de Gartalia cortando el césped en Resort El Oasis La Eliana"
            >
            </Card>

        </div>
    )

};

export default SeoCards;