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
            titulo="¿Cuándo es necesario podar un árbol?"
            explicacion="La poda es necesaria cuando el árbol tiene ramas secas, enfermas o peligrosas, cuando crece demasiado y puede afectar a estructuras cercanas, o simplemente para mejorar su forma y salud. Lo ideal es podar en la época adecuada según la especie: los caducifolios en invierno y los perennes a finales de verano o principios de otoño. Así evitamos estrés y favorecemos un buen crecimiento." 
            ></FaqItem>

            <FaqItem
            titulo="¿Por qué debería talar un árbol?"
            explicacion="La tala es necesaria si el árbol está seco, enfermo o supone un peligro. También si sus raíces dañan tuberías, aceras o edificios. A veces, es obligatoria por normativas o construcciones. Siempre valoramos si hay alternativa, como la poda o el trasplante." 
            ></FaqItem>

            
            <FaqItem
            titulo="¿Qué incluye el servicio de poda en altura?"
            explicacion="El servicio de poda en altura incluye el recorte de ramas altas y de difícil acceso usando técnicas y maquinaria especial. Nos aseguramos de eliminar ramas secas o peligrosas sin dañar el árbol, manteniendo su salud y forma. Además, garantizamos la seguridad en el proceso con equipos adecuados para trabajar a gran altura." 
            ></FaqItem>

            <FaqItem
            titulo="¿Necesito permisos para podar o talar árboles en Valencia?"
            explicacion="Sí, en Valencia necesitas permiso del Ayuntamiento para podar o talar árboles, especialmente si están en espacios públicos o en terrenos urbanos. Debes realizar el trámite MA.LC.15, rellenar un formulario y justificar la razón de la poda o tala. Si es parte de una obra, también puede requerirse licencia de obra." 
            ></FaqItem>

            <FaqItem
            titulo="¿Qué hago con los restos de la poda o tala?"
            explicacion="Nosotros nos encargamos de retirar y gestionar los restos de poda o tala. Los desechos pueden ser triturados y reciclados para su uso como abono o se llevan a un centro de reciclaje autorizado. Así, garantizamos que no quede ningún residuo en tu espacio y cumplimos con las normativas ambientales." 
            ></FaqItem>

            <FaqItem
            titulo="¿Cuánto tiempo tardáis en Gartalia podando o talando un árbol?"
            explicacion="El tiempo depende del tamaño y la complejidad del árbol, pero generalmente, en Gartalia solemos tardar entre 1 y 3 horas por árbol. Si es un trabajo más grande o complicado, como poda en altura, puede tomar un poco más. Siempre te informamos del tiempo estimado antes de comenzar el trabajo." 
            ></FaqItem>

            <FaqItem
            titulo="¿Se pueden tratar las plagas en mis árboles?"
            explicacion="Sí, en Gartalia tratamos las plagas en los árboles con productos específicos y técnicas adecuadas para cada tipo de infección. Identificamos la plaga y aplicamos el tratamiento más efectivo, siempre respetando el entorno. También damos recomendaciones para prevenir futuras plagas y mantener tus árboles saludables." 
            ></FaqItem>

            <FaqItem
            titulo="¿Cuáles son las plagas más comunes en los árboles de Valencia y alrededores?"
            explicacion="Las plagas más comunes en Valencia incluyen la procesionaria del pino, que afecta a los pinos, y el cochinillo blanco, que ataca a árboles frutales y ornamentales. También son frecuentes los pulgones en frutales y el barrenador del olivo, que debilita los olivos. Es importante actuar a tiempo para evitar daños mayores y preservar la salud de los árboles." 
            ></FaqItem>

            
            <FaqItem
            titulo="¿Ofrecen presupuestos gratuitos para poda y tala en altura?"
            explicacion="Sí, en Gartalia ofrecemos presupuestos gratuitos para poda y tala en altura. Solo necesitamos conocer algunos detalles sobre el árbol y el trabajo a realizar, y nos desplazamos hasta tu ubicación para evaluarlo. De esta manera, te damos un presupuesto personalizado sin compromiso." 
            ></FaqItem>

            <FaqItem
            titulo="¿Cuáles son los riesgos asociados con la poda en altura?"
            explicacion="Los riesgos asociados con la poda en altura incluyen caídas accidentales, tanto del operario como de ramas, que pueden causar lesiones graves. También existe el riesgo de daños a la propiedad si las ramas caen en zonas no controladas. Además, la fatiga o distracción del trabajador pueden aumentar el peligro, por eso siempre usamos equipos profesionales y tomamos medidas de seguridad para minimizar estos riesgos." 
            ></FaqItem>

            <FaqItem
            titulo="¿Cuánto cuesta la poda y tala en altura?"
            explicacion="El precio de la poda y tala en altura suele empezar desde 150 a 200 euros, dependiendo de la complejidad del trabajo. Es importante tener en cuenta el tamaño del árbol, el terreno y la vegetación circundante, ya que estos factores pueden influir en el costo final. Te ofrecemos una evaluación personalizada para ajustar el presupuesto según tus necesidades." 
            ></FaqItem>



        </div>
    );

}

export default FaqMaster;