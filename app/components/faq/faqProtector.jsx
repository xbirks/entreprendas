"use client";

import React from 'react';
import './faq.scss'; // Reusing existing styles
import FaqItem from './faq';

function FaqProtector() {
    return (
        <div className="faqMaster">

            <h2 style={{ fontSize: '60px', marginBottom: '80px', lineHeight: '1.2' }}>¿Tienes preguntas?</h2>

            <FaqItem
                titulo="¿Qué talla es? ¿Sirve para niña?"
                explicacion="Es talla única pero totalmente adaptable. Al llevar goma elástica en la cintura y estar hecho a medida en nuestro taller, se ajusta a diferentes contornos, tanto para adultas como para niñas de todas las edades."
            ></FaqItem>

            <FaqItem
                titulo="¿Hace ruido al andar?"
                explicacion="No. Es un PVC especial de alta calidad que no cruje. Podrás desfilar en la Ofrenda o caminar por la calle sin que parezca que llevas una bolsa de plástico."
            ></FaqItem>

            <FaqItem
                titulo="¿Cubre el espolín entero o solo los bajos?"
                explicacion="Está diseñado para cubrir la zona crítica que se mancha: los bajos y gran parte de la caída de la falda. Es lo suficientemente largo para proteger del barro y la lluvia que salpica el suelo, pero sin arrastrar para que no te tropezarás."
            ></FaqItem>

            <FaqItem
                titulo="¿Realizáis envíos?"
                explicacion="No, no hacemos envíos. La recogida se realiza exclusivamente en nuestro taller de Manises (Valencia). Así nos aseguramos de que te lo llevas perfecto y te explicamos cómo colocarlo."
            ></FaqItem>

            <FaqItem
                titulo="¿Cómo se limpia?"
                explicacion="Muy fácil. Con un paño húmedo o una toallita se queda nuevo. Al ser impermeable, la suciedad no se incrusta."
            ></FaqItem>

        </div>
    );
}

export default FaqProtector;
