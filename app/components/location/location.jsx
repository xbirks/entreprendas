"use client";

import Image from 'next/image';
import Link from 'next/link';
import './location.scss';

import StandardButton from '../../buttons/standardButton.jsx';

function Location(){

    return(
        <div className="location__master">
            <h3 className="location__title">¿Dónde estamos?</h3>
            <p className="location__description">
                En <strong>nuestro taller de arreglos de ropa en Manises</strong> atendemos a clientes de toda la provincia de Valencia. Trabajamos con prendas de <strong>Manises, Mislata, Quart de Poblet, Paterna, Burjassot, Aldaia, Xirivella, Torrent, Alaquàs y Paiporta</strong>, entre otras localidades cercanas.
                <br></br><br></br>
                Nuestro compromiso es hacer que el proceso de arreglos de ropa sea <strong>sencillo y sin complicaciones</strong>. Revisamos cada prenda, realizamos las modificaciones necesarias y te la entregamos lista para que la disfrutes, con un acabado impecable.
                <br></br><br></br>
                Gracias a esta atención personalizada, nuestros clientes confían en nosotros para dar una segunda vida a sus prendas y garantizar un ajuste perfecto en cada trabajo. Si necesitas un arreglo, <strong>nosotros nos encargamos de todo</strong>.
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