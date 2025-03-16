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
                link="https://api.whatsapp.com/message/MYIQ4MSADGWGP1"
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
                title="Silvia Plaza"
                review="Nora es una modista profesional y excelente a parte de una grandísima persona! Fue rápida y me dejo el vestido perfecto!  El trato con ella es lo mejor que puedes encontrar!! Cariñosa, amable y pendiente de que todo esté perfecto ! Sin duda repetiré! Eres un ejemplo a seguir Nora! Espero que estes por muchos años más y puedas ser tú quien me arregle mis vestidos ajjajaja! Mil gracias por todo! Contentísima"
                time="Escrito el 24/08/2024">
                </Review>

                <Review
                title="Sonia Rivero"
                review="Una suerte encontrar a Nora a través de Google. Además de una profesional, es una persona muy amable y paciente. Me probé el vestido hasta en 3 ocasiones para que quedara perfecto y así fue como quedó; perfecto. ¡Muchas gracias!"
                time="Escrito el 19/04/2024">
                </Review>

                <Review
                title="Elena Vilanova"
                review="Nora es una profesional impecable, el trabajo de ajustar una chaqueta y pantalón de traje no es tarea fácil y le quedó de 10.  Además de que repasó los botones y lo planchó. Más contenta no podía estar. Además de que tuvo que realizarlo en tiempo record, puesto que lo necesitaba para la graduación y lo tuvo listo en un par de días con prueba incluida, se comprometió conmigo sin conocerme de nada y eso es de agradecer. Es una persona empática, comprometida, atenta, amable y cariñosa y con unas manos muy habilitosas. La recomendaré a mis conocidos y sin duda volveré a llamarla si necesito hacer cualquier compostura. Gracias por todo Nora. Un placer."
                time="Escrito el 26/03/2023">
                </Review>
            </div>

            <p className="review__ask-review">
            Si te ha gustado conocer cómo hemos transformado y mejorado prendas, <strong>anímate a dejarnos una reseña</strong> contando tu experiencia. Tus palabras son de gran ayuda y pueden motivar a alguien más a confiar en nuestros servicios de arreglos y ajustes de ropa. 

            Te dejamos un botón para leer más reseñas y descubrir cómo trabajamos.  

            Y si ya estás listo para darle una nueva vida a tu prenda favorita, también encontrarás un botón para <strong>solicitar nuestro servicio ahora mismo</strong>. Todo a un clic de distancia para que puedas lucir tus prendas con un ajuste perfecto cuanto antes.
            </p>


             <div className="review__buttons">
                <StandardButton
                link="https://g.page/r/CdBglo7b1CdaEAE/review"
                title="Review"
                style="standardButton">
                </StandardButton>

                <StandardButton
                link="https://maps.app.goo.gl/g268QnDV95jQY6Vc7"
                title="Google Maps"
                style="emptyStandardButton">
                </StandardButton>
             </div>

        </div>
    );
}

export default nosotros;