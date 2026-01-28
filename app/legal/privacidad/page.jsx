import React from 'react';
import Link from 'next/link';
import PrivacidadLayout from './layout';
import './privacidad.scss';

export default function Privacidad() {

  return (
    <div className="gartalia">
      <div className="master">

        <h1>Política de privacidad de Entre Prendas</h1>

        <p className="p_pol">En Entre Prendas (en adelante, nosotros), nos comprometemos a proteger su privacidad y garantizar el cumplimiento de la normativa vigente en materia de protección de datos personales, incluyendo el Reglamento General de Protección de Datos (RGPD).</p>

        <h2>1. Responsable del Tratamiento</h2>
        <p className="p_pol">
          Nombre: <strong>Entre Prendas</strong><br />
          Dirección: <strong>Pl. Rafael Atard, 20A, piso 2 puerta 3</strong><br />
          Teléfono: <strong>680 593 195</strong><br />
          Correo Electrónico: <strong>hola@soyandres.es</strong><br />
          Responsable: <strong>Andrés Ortega Montoya</strong>
        </p>

        <h2>2. Datos Personales Recopilados</h2>
        <p className="p_pol">A través de nuestro formulario de contacto en <a href="https://www.entreprendas.es" target="_blank" rel="noopener noreferrer">https://www.entreprendas.es</a>, podemos recopilar los siguientes datos personales:</p>
        <ul className="p_pol">
          <li>Nombre y apellidos</li>
          <li>Dirección de correo electrónico</li>
          <li>Número de teléfono</li>
          <li>Imágenes que pueda adjuntar</li>
          <li>Dirección postal</li>
        </ul>

        <h2>3. Finalidad del Tratamiento</h2>
        <p className="p_pol">Los datos personales que nos proporcione serán utilizados exclusivamente para:</p>
        <ul className="p_pol">
          <li>Contactarlo en relación con su solicitud o consulta.</li>
          <li>Proporcionarle información y presupuesto sobre nuestros servicios de arreglo de ropa.</li>
          <li>Coordinar y prestar el servicio solicitado.</li>
        </ul>

        <h2>4. Base Legal para el Tratamiento</h2>
        <p className="p_pol">El tratamiento de sus datos personales se basa en su consentimiento explícito al completar y enviar el formulario de contacto.</p>

        <h2>5. Conservación de los Datos</h2>
        <p className="p_pol">Sus datos personales serán conservados durante un período máximo de 14 días desde su recepción. Pasado este tiempo, los datos serán eliminados de nuestros sistemas y no serán utilizados para ningún otro fin.</p>

        <h2>6. Destinatarios de los Datos</h2>
        <p className="p_pol">No compartimos ni cedemos sus datos personales a terceros bajo ninguna circunstancia. Los datos serán utilizados únicamente por Entre Prendas para las finalidades mencionadas.</p>

        <h2>7. Derechos del Usuario</h2>
        <p className="p_pol">Usted tiene derecho a:</p>
        <ul className="p_pol">
          <li>Acceder a sus datos personales.</li>
          <li>Rectificar datos inexactos o incompletos.</li>
          <li>Suprimir sus datos cuando ya no sean necesarios para los fines recogidos.</li>
          <li>Oponerse al tratamiento de sus datos personales.</li>
          <li>Limitar el tratamiento de sus datos en determinadas circunstancias.</li>
          <li>Retirar su consentimiento en cualquier momento.</li>
        </ul>
        <p className="p_pol">Para ejercer estos derechos, puede contactarnos a través de:</p>
        <ul className="p_pol">
          <li>Correo Electrónico: hola@soyandres.es</li>
          <li>Teléfono: 680 593 195</li>
        </ul>

        <h2>8. Seguridad de los Datos</h2>
        <p className="p_pol">Implementamos medidas técnicas y organizativas adecuadas para proteger sus datos personales contra pérdida, uso indebido, acceso no autorizado, divulgación y alteración.</p>

        <h2>9. Cookies y Tecnologías Similares</h2>
        <p className="p_pol">Nuestro sitio web no utiliza cookies para recopilar información personal. Sin embargo, utilizamos Google Search Console para analizar y mejorar el rendimiento del sitio, lo cual no implica la recopilación de datos personales identificables de los usuarios.</p>

        <h2>10. Cambios en la Política de Privacidad</h2>
        <p className="p_pol">Nos reservamos el derecho de modificar esta Política de Privacidad en cualquier momento. Cualquier cambio será publicado en esta página con fecha de actualización.</p>

        <h2>11. Contacto</h2>
        <p className="p_pol">Si tiene alguna pregunta o inquietud sobre nuestra Política de Privacidad o el tratamiento de sus datos personales, no dude en contactarnos:</p>
        <ul className="p_pol">
          <li>Dirección: Pl. Rafael Atard, 20A, piso 2 puerta 3</li>
          <li>Teléfono: 680 593 195</li>
          <li>Correo Electrónico: hola@soyandres.es</li>
        </ul>

      </div>
    </div>
  );
};

