"use client";

import Image from 'next/image';
import Link from 'next/link';
import './seocards.scss';
import StandardButton from '../../buttons/standardButton.jsx';

function Card({title, info, img, alt}){

    return(
        <div className="card">
            <div className="card__info">
                <h3 className="card__title">{title}</h3>
                <p className="card__info">{info}</p>
                <StandardButton
                link="#presupuesto"
                title="Presupuesto"
                style="standardButton">
                </StandardButton>

                <StandardButton
                link="https://wa.me/message/44EBMJCUV7LNO1"
                title="Contacto"
                style="emptyStandardButton">
                </StandardButton>
            </div>
            <Image className="card__img" src={img} alt={alt} width={750} height={696} loading='lazy'></Image>
        </div> 
    );

}

export default Card;