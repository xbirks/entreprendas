"use client";

import React from 'react';
import "../../../style.scss";
import "./intro.scss";
import StandardButton from '@/app/buttons/standardButton';
import ContactForm from '../../../contactForm';
import HeroBanner from './heroBanner';

function Intro({ municipio }) {
  return (
    <div className="intro__master">
      <h1><span className="intro__h1-high">Poda de árboles</span> rápida, segura y eficiente en {municipio}</h1>
      <div className="intro__mejores-servicios" id="presupuesto">
        <StandardButton
          link="/"
          title="Poda de seguridad"
          style="emptyStandardButton"
        />
        <StandardButton
          link="/"
          title="Poda ornamental"
          style="emptyStandardButton"
        />
        <StandardButton
          link="/"
          title="Recogida de residuos"
          style="emptyStandardButton"
        />
        <StandardButton
          link="/"
          title="Poda de palmeras"
          style="emptyStandardButton"
        />
      </div>
      <ContactForm />
      <div style={{ marginTop: '6vh' }}></div>
      <HeroBanner />

      <h2 className="second_h2">Poda de árboles profesional para particulares y empresas</h2>
      <p className="second_p">La poda adecuada de los árboles es fundamental <strong>para su crecimiento saludable</strong> y la seguridad de su entorno, tanto en jardines privados como en espacios públicos. Con más de 20 años de experiencia, ofrecemos un servicio especializado en poda de árboles, incluyendo <strong>olivos, pinos, encinas, cipreses y algarrobos</strong>, especies típicas del Mediterráneo español. Nuestro equipo cualificado utiliza técnicas avanzadas y herramientas modernas <strong>para garantizar cortes precisos</strong> que favorezcan la regeneración del árbol y minimicen riesgos. Confíe en nosotros para mantener sus árboles fuertes y en perfecto estado.</p>
    </div>
  );
}

export default Intro;
