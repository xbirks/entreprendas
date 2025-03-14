"use client";

import Image from 'next/image';
import Link from 'next/link';
import './location.scss';

import StandardButton from '../../../buttons/standardButton.jsx';

function Location(){

    return(
        <div className="location__master">
            <h3 className="location__title">¿Qué árbol necesitas podar o talar?</h3>
            <p className="location__description">
            En Gartalia, nos encargamos de la poda y tala de todo tipo de árboles en la provincia de Valencia, adaptándonos a cada especie y necesidad. Desde árboles ornamentales hasta frutales, trabajamos con <strong>pinos, olivos, algarrobos, almendros, naranjos, limoneros, cipreses, robles, encinas, palmeras, eucaliptos, chopos, sauces</strong> y más. Nuestro equipo cuenta con la experiencia y maquinaria adecuada para garantizar cortes seguros y precisos, respetando el entorno y la salud de cada árbol.
            <br /><br />
            Ya sea una <strong>poda de mantenimiento, formación o seguridad, o la tala de un árbol enfermo o peligroso</strong>, actuamos con rapidez y eficiencia. Nos desplazamos a cualquier punto de Valencia, asegurando un servicio profesional y adaptado a cada situación. Confía en nosotros para mantener tus árboles en perfecto estado y preservar la belleza de tu entorno.</p>

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
                <Link href="/">Jardineros en Valencia</Link>
                <Link href="/municipios/manises">Jardineros en Manises</Link>
                <Link href="/municipios/eliana">Jardineros en La Eliana</Link>
                <Link href="/municipios/godella">Jardineros en Godella</Link>
                <Link href="/municipios/mascamarena">Jardineros en Mas Camarena</Link>
                <Link href="/municipios/betera">Jardineros en Bétera</Link>
                <Link href="/municipios/torreconill">Jardineros en Torre en Conill</Link>
                <Link href="/municipios/benaguasil">Jardineros en Benaguacil</Link>
                <Link href="/municipios/casinos">Jardineros en Casinos</Link>
                <Link href="/municipios/turis">Jardineros en Turis</Link>
                <Link href="/municipios/marines">Jardineros en Marines</Link>
                <Link href="/municipios/naquera">Jardineros en Náquera</Link>
                <Link href="/municipios/pobla-de-vallbona">Jardineros en La Pobla de Vallbona</Link>
                <Link href="/municipios/paterna">Jardineros en Paterna</Link>
                <Link href="/municipios/canada">Jardineros en La Cañada</Link>
                <Link href="/municipios/rocafort">Jardineros en Rocafort</Link>
                <Link href="/municipios/massarojos">Jardineros en Massarrojos</Link>
                <Link href="/municipios/burjassot">Jardineros en Burjassot</Link>
                <Link href="/municipios/olocau">Jardineros en Olocau</Link>
                <Link href="/municipios/liria">Jardineros en Liria</Link>
                <Link href="/municipios/campoolivar">Jardineros en Campo Olivar</Link>
                <Link href="/municipios/campoolivar">Jardineros en Campo Olivar</Link>
                <Link href="/municipios/santabarbara">Jardineros en Santa Bárbara</Link>
                <Link href="/municipios/calicanto">Jardineros en Calicanto</Link>
            </div>


        </div>


    );
}

export default Location;