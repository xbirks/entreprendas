"use client";

import Image from 'next/image';
import Link from 'next/link';
import './faq.scss';
import FaqItem from './faq';

function FaqMaster(){

    return(
        <div className="faqMaster">

            <h2>¿Tienes preguntas?</h2>

            <p className="faq__comment">Te dejamos aquí una lista con preguntas frecuentes:</p>
            
            <FaqItem
            titulo="¿Qué servicios de mantenimiento de comunidades ofrecen en Valencia?"
            explicacion="En Gartalia, nos encargamos de mantener bonitas las áreas verdes de tu comunidad. Ofrecemos todo lo necesario para que los jardines siempre luzcan bien, como cortar el césped, podar las plantas y cuidar las flores. Si vives en Valencia y tu comunidad necesita que alguien se ocupe del jardín, nosotros podemos ayudarte." 
            ></FaqItem>

            <FaqItem
            titulo="¿Cómo se determinan los precios de los servicios de jardinería?"
            explicacion="Nuestros precios se basan en el tamaño del área a trabajar, los servicios específicos solicitados y la frecuencia del mantenimiento. Ofrecemos presupuestos personalizados sin compromiso para que nuestros clientes en Valencia puedan entender claramente los costos antes de tomar una decisión." 
            ></FaqItem>

            
            <FaqItem
            titulo="¿Cuáles son los principales riesgos asociados con los servicios de jardinería y cómo los manejan?"
            explicacion="En la jardinería, algunos riesgos incluyen el uso de herramientas afiladas y el manejo de productos químicos para las plantas. En Gartalia, tomamos estos riesgos muy en serio y siempre usamos equipo de protección como guantes y gafas para mantenernos seguros. Además, entrenamos a todos nuestros trabajadores para que sepan usar las herramientas y los productos de manera segura y efectiva." 
            ></FaqItem>

            <FaqItem
            titulo="¿Cómo se maneja la poda y tala en altura en zonas residenciales de Valencia?"
            explicacion="En Gartalia, la poda y tala en altura en zonas residenciales de Valencia se hace con mucho cuidado para asegurarnos de que todo se realice de manera segura y sin causar daños. Utilizamos equipos especiales y técnicas profesionales para controlar cómo y dónde caen las ramas grandes. Siempre nos aseguramos de que la zona esté segura tanto para nuestros trabajadores como para los residentes y sus propiedades. Así, mantenemos tus árboles sanos y tu hogar seguro." 
            ></FaqItem>

            <FaqItem
            titulo="¿Realizan diseño de paisajes en áreas urbanas de Valencia?"
            explicacion="Sí, en Gartalia realizamos diseño de paisajes en áreas urbanas de Valencia. Nos encargamos de transformar espacios exteriores en lugares hermosos y funcionales, adaptándonos a la falta de espacio que a veces hay en la ciudad. Trabajamos contigo para crear un diseño que se ajuste a tus gustos y necesidades, utilizando plantas y materiales que se adapten bien al entorno urbano. Así, puedes disfrutar de un pequeño oasis en medio de la ciudad." 
            ></FaqItem>


        </div>
    );

}

export default FaqMaster;