"use client";

import Image from 'next/image';
import Link from 'next/link';
import './grid.scss';

import StandardButton from '../../../buttons/standardButton.jsx';


function Grid({service, description, img, top}){

    return(

        <div className="grid__master">
            <div className="grid__img">
                <Image src={img} alt={`fotografía de ${service} hecho por Jardinería Gartalia en Valencia`}  width={733} height={490} loading="lazy"></Image>
                <div className="top-solicitado" style={{ display: top }}><p>TOP SOLICITADO</p></div>
            </div>

            <div className="grid__info">

            <h3 className="grid__service">{service}</h3>
            <p className="grid__description">{description}</p>
            <div className="grid__buttons">
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

            </div>

        </div>


    );
}

export default Grid;