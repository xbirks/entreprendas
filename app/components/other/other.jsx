"use client";

import Image from 'next/image';
import Link from 'next/link';
import './other.scss';
import Grid from '../grid/grid';

//IMG
import falleras from '../../assets/img/falleras.jpg';
import lactancia from '../../assets/img/lactancia.jpg';
import mascotas from '../../assets/img/mascotas.jpg';

function Other({municipio}){

    return(
        <div className="gridmaster other"> 

            <h2>Otros servicios</h2>

            <div className="gridmaster__elements">

            <Grid
            service={`Arreglo de trajes falleros ${municipio}`}
            description="Preserva la tradición con un ajuste perfecto para tu traje fallero. Desde modificaciones en la silueta hasta restauración de detalles, nos aseguramos de que cada prenda luzca impecable y fiel a su estilo original. También los protegemos de la lluvia con capas de plástico resistente."
            img={falleras}
            top="block"
            ></Grid>

            <Grid
            service={`Ropa de lactancia personalizada ${municipio}`}
            description="Facilita la lactancia con prendas diseñadas para la comodidad y el estilo. Adaptamos camisetas, vestidos y blusas con aperturas discretas y cierres prácticos para un acceso rápido y sencillo sin comprometer la estética."
            img={lactancia}
            top="none"
            ></Grid>

            <Grid
            service={`Arreglo de ropa para mascotas ${municipio}`}
            description="Dale una nueva vida a la ropa de tu mascota con ajustes a medida. Desde la reparación de abrigos hasta la personalización de prendas, aseguramos comodidad y estilo para tu compañero de cuatro patas."
            img={mascotas}
            top="none"
            ></Grid>

            </div>
        </div>
    );

}

export default Other;