"use client";

import Image from 'next/image';
import Link from 'next/link';
import './nosotros.scss';

import StandardButton from '../../buttons/standardButton.jsx';
import Review from './review.jsx';
import Nora from '../../assets/img/nora.jpg'


function nosotros(){

    return(
        <div className="nosotros__master">
            <h2 className="nosotros__title">Confía en nosotros</h2>
            <div className="nosotros__tarjeta">
                <Image src={Nora} alt=""></Image>
                <div className="nosotros__tarjeta-info">
                    <p><strong>Modista</strong> - Nora Montoya</p>
                </div>
            </div>
            <p className="nosotros__description">
                <strong>Nora Montoya</strong> es una modista con 10 años de experiencia, especializada en arreglos de ropa a medida. Conocida por su atención al detalle y creatividad, Nora es una profesional comprometida que aborda cada prenda con dedicación y esmero. Su enfoque personalizado le ha permitido ganarse una sólida reputación como una de las modistas más confiables de Valencia.
                <br></br><br></br>
                Entre sus clientes más destacados se encuentran empresas como Álvaro Moliner, para la confección de trajes de fallera, y diversas tiendas de ropa de renombre. Nora se dedica a ofrecer un servicio que cumple y supera las expectativas, siempre con un trato cercano y personalizado. Su habilidad para captar las necesidades de cada cliente, gracias a su gran empatía, es la que la consigue diferenciar de su competencia. 
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