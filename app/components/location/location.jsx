"use client";

import Image from 'next/image';
import Link from 'next/link';
import './location.scss';

import StandardButton from '../../buttons/standardButton.jsx';

function Location(){

    return(
        <div className="location__master">
            <h3 className="location__title">¿Dónde necesitas que vayamos?</h3>
            <p className="location__description">
                En <strong>nuestro servicio de arreglos de ropa</strong>, llegamos a donde nos necesites en la provincia de Valencia. Atendemos a clientes en <strong>Manises, Mislata, Quart de Poblet, Paterna, Burjassot, Aldaia, Xirivella, Torrent, Alaquàs y Paiporta</strong>. Nos desplazamos para ofrecerte un servicio cómodo y a medida, asegurándonos de que tu ropa tenga el ajuste perfecto sin que tengas que moverte de casa.  
                <br></br><br></br>
                Nuestro compromiso es hacer que el proceso de arreglos de ropa sea <strong>accesible y sin complicaciones</strong>. Nos encargamos de recoger las prendas, realizar las modificaciones necesarias y entregarlas listas para que las disfrutes. Así, puedes contar con un servicio rápido y eficiente sin salir de tu hogar.  
                <br></br><br></br>
                Gracias a esta atención personalizada, nuestros clientes confían en nosotros para dar una segunda vida a sus prendas y garantizar un ajuste impecable en cada trabajo. Si necesitas un arreglo, <strong>nosotros nos encargamos de todo</strong>.  Consulta los precios del desplazamiento.
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

            <div className="location__seo-link">
                <Link href="/">Arreglos de ropa en Valencia</Link>
                <Link href="/municipios/manises">Arreglos de ropa en Manises</Link>
                <Link href="/municipios/mislata">Arreglos de ropa en Mislata</Link>
                <Link href="/municipios/quart-de-poblet">Arreglos de ropa en Quart de Poblet</Link>
                <Link href="/municipios/paterna">Arreglos de ropa en Paterna</Link>
                <Link href="/municipios/burjassot">Arreglos de ropa en Burjassot</Link>
                <Link href="/municipios/aldaia">Arreglos de ropa en Aldaia</Link>
                <Link href="/municipios/xirivella">Arreglos de ropa en Xirivella</Link>
                <Link href="/municipios/torrent">Arreglos de ropa en Torrent</Link>
                <Link href="/municipios/alaquas">Arreglos de ropa en Alaquàs</Link>
                <Link href="/municipios/paiporta">Arreglos de ropa en Paiporta</Link>
                <Link href="/municipios/benetusser">Arreglos de ropa en Benetússer</Link>
                <Link href="/municipios/rocafort">Arreglos de ropa en Rocafort</Link>
                <Link href="/municipios/massarojos">Arreglos de ropa en Massarrojos</Link>
                <Link href="/municipios/campanar">Arreglos de ropa en Campanar</Link>
            </div>



        </div>


    );
}

export default Location;