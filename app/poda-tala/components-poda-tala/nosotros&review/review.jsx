"use client";

import Image from 'next/image';
import Link from 'next/link';
import './nosotros.scss';
import stars from '../../../assets/img/stars.svg';
import google from '../../../assets/img/google-icon.svg';

import StandardButton from '../../../buttons/standardButton.jsx';


function Review( {title, review, time}){

    return(

        <div className="review__tarjeta">
            <div className="review__tarjeta-star">
                <Image className="review__stars" src={stars} alt={`esta reseña ha conseguido 5 estrellas de parte de ${title}`} width={170} height={40}></Image>
                <Image className="review__google" src={google} alt="logotipo de Google" width={40} height={40}></Image>
            </div>

            <h4 className="review__author">{title}</h4>
            <p className="review__description">{review}</p>
            <p className="review__time">{time}</p>

            
            <StandardButton
            link="https://maps.app.goo.gl/bnh6pKARVGWfLXUK8"
            title="Leer en Maps"
            style="emptyStandardButton">
            </StandardButton>

        </div>

    );
}

export default Review;