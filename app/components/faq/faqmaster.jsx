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
            titulo="¿Cuánto cuesta ajustar el largo de un vestido?"
            explicacion="El precio rondará los 12€ aunque depende del tipo de tela y la complejidad del arreglo. Nos aseguramos de que el acabado sea impecable y adaptado a tus necesidades para que el vestido luzca perfecto."
            ></FaqItem>

<FaqItem
            titulo="¿Qué hago si mi pantalón me queda grande de cintura?"
            explicacion="Podemos entallar la cintura de tus pantalones para que se ajusten mejor a tu cuerpo sin perder comodidad. Necesitaremos que vengas a nuestro taller para que te pruebes el pantalón y lo podamos ajustar."
            ></FaqItem>


            <FaqItem
            titulo="¿Se pueden cambiar las cremalleras de chaquetas y pantalones?"
            explicacion="Sí, realizamos el cambio de cremalleras en chaquetas, pantalones y cualquier otra prenda. Utilizamos cremalleras de alta calidad para que el resultado sea duradero y funcional."
            ></FaqItem>

            <FaqItem
            titulo="¿Cuánto tardan en hacer un arreglo de ropa?"
            explicacion="El tiempo de entrega depende del tipo de arreglo y la carga de trabajo en el momento. Normalmente, los ajustes básicos pueden estar listos en 2 días, mientras que arreglos más complejos pueden requerir hasta 5 días. No dudes en consultranos antes de traer tu ropa."
            ></FaqItem>

            <FaqItem
            titulo="¿Es posible convertir un vestido largo en uno corto?"
            explicacion="Sí, podemos transformar un vestido largo en uno corto manteniendo la armonía del diseño. Consulta nuestros precios en la sección de listado de precios."
            ></FaqItem>

            <FaqItem
            titulo="¿Cómo puedo saber si un arreglo es posible en mi prenda?"
            explicacion="Si tienes dudas sobre si tu prenda se puede modificar, tráela y la evaluaremos sin compromiso. Analizamos la tela, costuras y diseño para ofrecerte la mejor solución posible. Y te daremos un presupuesto al instante."
            ></FaqItem>

            <FaqItem
            titulo="¿Qué tipo de arreglos se pueden hacer en trajes de hombre?"
            explicacion="Realizamos ajustes en trajes de hombre como entallar chaquetas, ajustar pantalones, modificar mangas y adaptar el fit general para que la prenda se ajuste perfectamente a tu cuerpo."
            ></FaqItem>

            <FaqItem
            titulo="¿Pueden hacer arreglos en vestidos de novia?"
            explicacion="Sí, ajustamos vestidos de novia para que te queden perfectos en tu gran día. Eso sí, te recomendamos trerlo con un mes de antelación para poder ajustarlo a la perfección."
            ></FaqItem>

            <FaqItem
            titulo="¿Cuáles son los arreglos más comunes en ropa?"
            explicacion="Los arreglos más solicitados incluyen ajustes de cintura, bajos de pantalón, cambio de cremalleras, modificación de mangas y transformación de prendas para darles un nuevo estilo."
            ></FaqItem>

            <FaqItem
            titulo="¿Se pueden personalizar complementos como velos y guantes?"
            explicacion="Sí, podemos añadir detalles personalizados a complementos como velos, guantes y cinturones. Desde encajes hasta pedrería. Necesitaremos que traigas los elementos que quieras añadir a tus complementos. Lo que no traigas, lo cobraremos a parte."
            ></FaqItem>

            <FaqItem
            titulo="¿Puedo arreglar una prenda de segunda mano para que me quede bien?"
            explicacion="Sí, adaptamos ropa de segunda mano para que tenga un ajuste perfecto y luzca como nueva. Entallamos, acortamos y hacemos cualquier modificación necesaria para que se adapte a tu cuerpo."
            ></FaqItem>

            <FaqItem
            titulo="¿Cómo puedo conseguir un presupuesto para un arreglo?"
            explicacion="Puedes ponerte en contacto con nosotros o visitarnos para evaluar tu prenda. Te daremos un presupuesto sin compromiso y te explicaremos el proceso del arreglo."
            ></FaqItem>

            <FaqItem
            titulo="¿Cómo puedo ajustar un traje fallero para que me quede perfecto?"
            explicacion="Si tu traje fallero no te queda del todo bien, no te preocupes, podemos ajustarlo para que se adapte perfectamente a ti. Ya sea que necesites entallar la chaqueta, modificar la falda o mejorar los detalles del corpiño, nos encargamos de que todo quede impecable sin perder la esencia tradicional del traje."
            ></FaqItem>

            <FaqItem
            titulo="¿Es posible modificar una prenda para hacerla más cómoda para la lactancia?"
            explicacion="¡Por supuesto! Si necesitas hacer tu ropa más cómoda para la lactancia, podemos añadir aperturas discretas, cierres fáciles de usar y cualquier ajuste que haga que amamantar sea más práctico sin renunciar al estilo. Así podrás vestir como te gusta sin complicaciones."
            ></FaqItem>

            <FaqItem
            titulo="¿Se pueden hacer arreglos en ropa para mascotas?"
            explicacion="Sí, también nos ocupamos de la ropa de los más peludos de la casa. Si tu mascota necesita un abrigo más ajustado, una prenda reparada o incluso un diseño personalizado, podemos hacer que le quede perfecto y que vaya cómoda y con estilo."
            ></FaqItem>



        </div>
    );

}

export default FaqMaster;