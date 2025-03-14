"use client";

import Image from 'next/image';
import Link from 'next/link';
import './nosotros.scss';

import StandardButton from '../../../buttons/standardButton.jsx';
import Review from './review.jsx';
import Carlos from '../../../assets/img/carlos-correa.jpg'


function nosotros(){

    return(
        <div className="nosotros__master">
            <h2 className="nosotros__title">Confía en nosotros</h2>
            <div className="nosotros__tarjeta">
                <Image src={Carlos} alt=""></Image>
                <div className="nosotros__tarjeta-info">
                    <p><strong>CEO</strong> - Carlos Correa</p>
                </div>
            </div>
            <p className="nosotros__description">
                <strong>Carlos Correa</strong> es un jardinero con 20 años de experiencia, especializado y certificado en poda y tala en altura. Conocido por su <strong>honestidad y rapidez</strong>, Carlos es un profesional serio que aborda cada tarea con el máximo compromiso y eficiencia. Este enfoque le ha permitido ganarse una sólida reputación como uno de los jardineros más confiables de la provincia de Valencia.
                <br></br><br></br>
                Entre sus clientes más destacados se encuentran el Ayuntamiento de La Eliana, el Ayuntamiento de Liria, así como empresas reconocidas como El Oasis en La Eliana y el Club de Tenis El Collao. Carlos se dedica a ofrecer un servicio que no solo cumple, sino que supera las expectativas, manteniendo siempre un trato cercano y humano con todos sus clientes, sean empresas o particulares. Su <strong>capacidad para conectar con las personas y entender sus necesidades</strong> es lo que realmente distingue su servicio frente al resto de competencia.  
                </p>
                <div className="location__buttons">
                <StandardButton
                link="https://wa.me/message/44EBMJCUV7LNO1"
                title="Contactar"
                style="standardButton">
                </StandardButton>

                <StandardButton
                link="#presupuesto"
                title="Presupuesto"
                style="emptyStandardButton">
                </StandardButton>
            </div>


            <h2 className="review__title">Nuestros clientes opinan</h2>

            <div className="review__list">
                <Review
                title="El Oasis - Villa Resort"
                review="Trabajar con Carlos ha sido un cambio radical para nuestro negocio. Desde que empezó a encargarse del mantenimiento de nuestros jardines, hemos escalado del puesto 50 en Booking al primero o segundo. Su dedicación, paciencia y saber hacer nos han hecho crecer a los grande. Crack!!! Gracias"
                time="Escrito el 24/02/2024">
                </Review>

                <Review
                title="Toni Medina G."
                review="Carlos lleva cuidando varios meses de la piscina y el jardin del chalet. Trabajo meticuloso y profesional. Es un placer ver cómo luce impecable durante todo el año. Recomendadisimos Carlos y su equipo para que cuiden de vuestras casas."
                time="Escrito el 04/11/2023">
                </Review>

                <Review
                title="Miguel Ángel Contreras"
                review="Carlitos hizo magia con un terreno que estaba casi abandonado. Primero lo limpió todo y luego nos puso unas palmeras preciosas, grama nueva y hasta una valla de cipreses que quedó espectacular. En casa no nos imaginábamos que el terreno pudiera quedar tan increíble. Estamos encantados."
                time="Escrito el 26/03/2024">
                </Review>
            </div>

             <p className="review__ask-review">
             Si te han gustado las historias sobre cómo hemos transformado jardines, <strong>anímate a dejarnos una reseña</strong> contando tu experiencia. Tus palabras ayudan mucho y pueden animar a alguien más a dar el paso para mejorar su jardín. Te dejamos un botón para leer más reseñas y conocer mejor nuestro trabajo. 

            Y si ya estás listo para transformar tu espacio, también encontrarás un botón para <strong>contratar nuestro servicio ahora mismo</strong>. Todo a un clic de distancia para que puedas empezar a disfrutar de un jardín espectacular cuanto antes.
             </p>

             <div className="review__buttons">
                <StandardButton
                link="https://g.page/r/CbwuUZbFLjXpEAE/review"
                title="Review"
                style="standardButton">
                </StandardButton>

                <StandardButton
                link="https://maps.app.goo.gl/bnh6pKARVGWfLXUK8"
                title="Google Maps"
                style="emptyStandardButton">
                </StandardButton>
             </div>

        </div>
    );
}

export default nosotros;