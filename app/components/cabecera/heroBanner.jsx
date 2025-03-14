"use client";

import Image from 'next/image';
import "./intro.scss";
import certificados from '../../assets/img/icon_certificados.svg';


function HeroBanner(){

    return(

        <div className="hero__master">
            <div className="hero__element hero__1">
                <p>+20</p>
                <p>años de<br></br>experiencia</p>
            </div>
            <div className="hero__element hero__2">
                <Image src={certificados} alt="icono de profesionales certificados de Gartalia"></Image>
                <p>Profesionales<br></br>certificados</p>
            </div>
            <div className="hero__element hero__3">
                <p>247</p>
                <p>proyectos<br></br>exitosos<br></br>completados</p>
            </div>
            <div className="hero__element hero__4">
                <p>ECO</p>
                <p>Comprometidos<br></br>con el medio<br></br>ambiente</p>
            </div>
            <div className="hero__element hero__5">
                <p>RÁPIDO</p>
                <p>profesional y<br></br>garantía de<br></br>calidad</p>
            </div>
        </div>

    )

};

export default HeroBanner;