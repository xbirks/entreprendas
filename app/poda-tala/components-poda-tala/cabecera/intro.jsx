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
      <h1>Contrata <span className="intro__h1-high">el mejor servicio</span> de poda y tala en altura en {municipio}</h1>
      <div className="intro__mejores-servicios" id="presupuesto">
        <StandardButton
          link="/"
          title="Tala controlada"
          style="emptyStandardButton"
        />
        <StandardButton
          link="/"
          title="Gestión de residuos"
          style="emptyStandardButton"
        />
        <StandardButton
          link="/"
          title="Trámites con ayuntamientos"
          style="emptyStandardButton"
        />
        <StandardButton
          link="/"
          title="Elaboración de leña"
          style="emptyStandardButton"
        />
      </div>
      <ContactForm />
      <div style={{ marginTop: '6vh' }}></div>
      <HeroBanner />

      <h2 className="second_h2">Ofrecemos servicios a particulares, empresas, comunidades y ayuntamientos</h2>
      <p className="second_p">El mantenimiento adecuado de los árboles es esencial <strong>para garantizar la seguridad</strong> y el buen estado de los espacios verdes, ya sean jardines privados, comunidades o zonas públicas. Nuestra empresa, con más de 20 años de experiencia, se especializa en ofrecer servicios de poda y tala de árboles en altura <strong>adaptándonos a las necesidades de cada cliente</strong> y de su espacio. Nos comprometemos a dar <strong>soluciones eficientes y seguras</strong>, que respaldamos con un equipo cualificado y el uso de herramientas modernas, para que pueda confiar plenamente en nosotros.</p>
    </div>
  );
}

export default Intro;
