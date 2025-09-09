"use client";

import React from 'react';
import "../../style.scss";
import "./intro.scss";
import StandardButton from '../../../app/buttons/standardButton';
import ContactForm from '../../contactForm';
import HeroBanner from './heroBanner';

function Intro({ municipio }) {
  return (
    <div className="intro__master">
      <h1>Composturas y <span className="intro__h1-high">arreglo de ropa barato</span> en {municipio}</h1>
      <div className="intro__mejores-servicios" id="presupuesto">
        <StandardButton
          link="/"
          title="Bajos de pantalones"
          style="emptyStandardButton"
        />
        <StandardButton
          link="/"
          title="Vestidos de novia"
          style="emptyStandardButton"
        />
        <StandardButton
          link="/"
          title="Trajes falleros"
          style="emptyStandardButton"
        />
        <StandardButton
          link="/"
          title="Ajustes en trajes"
          style="emptyStandardButton"
        />
      </div>
      <ContactForm />
      <div style={{ marginTop: '6vh' }}></div>
      <HeroBanner />
    </div>
  );
}

export default Intro;
