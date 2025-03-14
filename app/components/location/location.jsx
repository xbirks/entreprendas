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
                En <strong>Gartalia</strong>, cubrimos toda la provincia de Valencia, desde la ciudad hasta los pueblos más pequeños. Atendemos a lugares como <strong>Llíria, Bétera, Paterna, La Pobla de Vallbona, Ribarroja del Turia, Benaguacil, Godella, La Eliana, Casinos, Marines, Olocau y Náquera</strong>. Nos adaptamos a cada área para ofrecer el mejor servicio posible, manteniendo jardines y áreas verdes en condiciones óptimas. Estamos siempre disponibles para ofrecerte soluciones personalizadas, sea donde sea que te encuentres <strong>en Valencia</strong>.
                <br></br><br></br>
                Además, estamos comprometidos con ofrecer <strong>servicios de jardinería accesibles y eficientes</strong>, lo que nos permite responder rápidamente a las necesidades de nuestros clientes en cualquier parte de la provincia. Nuestro equipo se desplaza con todo el equipo necesario para asegurar que cada proyecto se complete a la perfección, independientemente de la ubicación. 
                <br></br><br></br>
                Este enfoque flexible y dedicado nos ha permitido construir relaciones duraderas con nuestros clientes, quienes confían en nosotros para mantener sus espacios verdes saludables y atractivos año tras año.</p>

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