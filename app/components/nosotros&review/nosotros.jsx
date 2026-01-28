"use client";

import Image from 'next/image';
import Link from 'next/link';
import './nosotros.scss';

import StandardButton from '../../buttons/standardButton.jsx';
import Review from './review.jsx';
import Nora from '../../assets/img/nora.jpg'


function nosotros() {

    return (
        <div className="nosotros__master">
            <h2 className="nosotros__title">Confía en nosotros</h2>
            <div className="nosotros__tarjeta">
                <Image src={Nora} alt="Nora Montoya, modista profesional con más de 10 años de experiencia en arreglos de ropa en Valencia"></Image>
                <div className="nosotros__tarjeta-info">
                    <p><strong>Modista</strong> - Nora Montoya</p>
                </div>
            </div>
            <p className="nosotros__description">
                <strong>Nora Montoya es de esas modistas que hacen su trabajo con el corazón.</strong> Lleva más de 10 años dedicándose al arreglo de ropa a medida, cuidando cada prenda como si fuera suya. No solo cose y ajusta, sino que escucha, aconseja y se asegura de que cada detalle quede perfecto.
                <br></br><br></br>
                Muchas personas han llegado a ella con un vestido que no les encajaba o un traje que necesitaba un arreglo urgente, y siempre encuentran paciencia, dedicación y una solución impecable. <strong>Si hay que probarse la prenda tres veces para que quede perfecta, ella lo hace encantada.</strong>
                <br></br><br></br>
                Ha trabajado para empresas como Álvaro Moliner con trajes de fallera y para muchas tiendas de ropa, pero lo que más le gusta es ayudar a cada persona a sentirse bien con su ropa. <strong>Si necesitas un arreglo con mimo y profesionalidad, Nora es la persona en la que puedes confiar.</strong>
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