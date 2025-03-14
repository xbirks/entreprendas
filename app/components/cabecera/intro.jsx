"use client";

import React from 'react';
import "../../style.scss";
import "./intro.scss";
import StandardButton from '@/app/buttons/standardButton';
import ContactForm from '../../contactForm';
import HeroBanner from './heroBanner';

function Intro({ municipio }) {
  return (
    <div className="intro__master">
      <h1>Contrata <span className="intro__h1-high">los mejores</span> servicios de jardinería en {municipio}</h1>
      <div className="intro__mejores-servicios" id="presupuesto">
        <StandardButton
          link="/"
          title="Creación y diseño de jardines"
          style="emptyStandardButton"
        />
        <StandardButton
          link="/"
          title="Mantenimiento de comunidades"
          style="emptyStandardButton"
        />
        <StandardButton
          link="/"
          title="Montajes de riego por aspersión"
          style="emptyStandardButton"
        />
        <StandardButton
          link="/"
          title="Poda y tala en altura"
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
