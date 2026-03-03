"use client";

import React from 'react';
import './faq.scss'; // Reusing existing styles
import FaqItem from './faq';

function FaqProtector() {
    return (
        <div className="faqMaster">

            <h2 style={{ fontSize: '60px', marginBottom: '80px', lineHeight: '1.2' }}>¿Tienes preguntas?</h2>

            <FaqItem
                titulo="¿Qué talla es el cubrefaldas fallera? ¿Sirve para niña?"
                explicacion="Es talla única pero totalmente adaptable. Al llevar goma elástica en la cintura y estar hecho a medida en nuestro taller, se ajusta perfectamente a diferentes contornos, tanto para falleras adultas como para niñas de cualquier edad."
            ></FaqItem>

            <FaqItem
                titulo="¿Este protector lluvia traje fallera hace ruido al andar?"
                explicacion="No. Es un PVC especial de alta calidad que no cruje. Podrás desfilar en la Ofrenda o caminar por la calle sin que parezca que llevas una bolsa de plástico."
            ></FaqItem>

            <FaqItem
                titulo="¿Cubre el espolín entero o es solo un protector de falda fallera?"
                explicacion="Está diseñado para cubrir la zona crítica que se mancha: los bajos y gran parte de la caída de la falda. Es lo suficientemente largo para proteger del barro y de la lluvia que salpica el suelo, pero sin arrastrar para que no te tropieces."
            ></FaqItem>

            <FaqItem
                titulo="¿Realizáis envíos del chubasquero fallera?"
                explicacion="No, no hacemos envíos. La recogida se realiza exclusivamente en nuestro taller de Manises (Valencia). Así nos aseguramos de que te lo llevas perfecto y te explicamos cómo colocarlo."
            ></FaqItem>

            <FaqItem
                titulo="¿Cómo se limpia el cubrefaldas impermeable?"
                explicacion="Muy fácil. Con un paño húmedo o una toallita se queda nuevo. Al ser impermeable, la suciedad no se incrusta."
            ></FaqItem>

        </div>
    );
}

export default FaqProtector;
