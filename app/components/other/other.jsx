"use client";

import Image from 'next/image';
import Link from 'next/link';
import './other.scss';
import Grid from '../grid/grid';

//IMG
import jardinesverticales from '../../assets/img/jardines-verticales.jpg';
import fitosanitario from '../../assets/img/fitosanitario.jpg';
import ramaspeligrosas from '../../assets/img/ramas-peligrosas.jpg';

function Other({municipio}){

    return(
        <div className="gridmaster other"> 

            <h2>Otros servicios</h2>

            <div className="gridmaster__elements">

            <Grid
            service={`Control fitosanitario ${municipio}`}
            description="Es esencial para mantener tus plantas saludables y libres de plagas y enfermedades. Utiliza una combinación de técnicas, desde pesticidas hasta métodos más verdes como el control biológico, para proteger tus cultivos y jardines."
            img={fitosanitario}
            top="block"
            ></Grid>

            <Grid
            service={`Instalación de jardines verticales ${municipio}`}
            description="Creación de muros verdes tanto en interiores como exteriores, aprovechando espacios reducidos y mejorando la calidad del aire."
            img={jardinesverticales}
            top="none"
            ></Grid>

            <Grid
            service={`Poda de seguridad para ramas peligrosas ${municipio}`}
            description="La poda de seguridad se centra en eliminar ramas que pueden ser un riesgo para personas y propiedades, previniendo accidentes y manteniendo la salud del árbol."
            img={ramaspeligrosas}
            top="block"
            ></Grid>

            </div>
        </div>
    );

}

export default Other;