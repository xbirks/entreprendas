"use client";

import Image from 'next/image';
import Link from 'next/link';
import './grid.scss';
import Grid from './grid';

// IMAGENES
import pantalones from '../../assets/img/pantalones.jpg';
import camisas from '../../assets/img/camisas.jpg';
import vestidos from '../../assets/img/vestidos.jpg';
import faldas from '../../assets/img/faldas.jpg';
import chaquetas from '../../assets/img/chaquetas.jpg';
import traje from '../../assets/img/traje.jpg';
import trabajo from '../../assets/img/trabajo.jpg';
import zurcido from '../../assets/img/zurcido.jpg';
import cremalleras from '../../assets/img/cremalleras.jpg';
import botones from '../../assets/img/botones.jpg';

import novias from '../../assets/img/novias.jpg';
import complementos from '../../assets/img/complementos.jpg';
import invitadas from '../../assets/img/invitadas.jpg';





function GridMaster({ municipio }) {

    // Schema.org Service para rich snippets de servicios
    const servicesSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": [
            {
                "@type": "Service",
                "name": "Arreglo de pantalones",
                "description": "Ajustamos y arreglamos pantalones a la perfección. Bajos, entallado de cintura, estrechar piernas.",
                "provider": {
                    "@type": "LocalBusiness",
                    "name": "Entre Prendas"
                },
                "areaServed": {
                    "@type": "City",
                    "name": "Valencia"
                },
                "offers": {
                    "@type": "AggregateOffer",
                    "lowPrice": "10",
                    "highPrice": "16",
                    "priceCurrency": "EUR"
                }
            },
            {
                "@type": "Service",
                "name": "Arreglo de camisas",
                "description": "Ajustamos camisas formales y casuales. Modificamos cuello, puños y silueta para un look impecable.",
                "provider": {
                    "@type": "LocalBusiness",
                    "name": "Entre Prendas"
                },
                "areaServed": {
                    "@type": "City",
                    "name": "Valencia"
                },
                "offers": {
                    "@type": "AggregateOffer",
                    "lowPrice": "8",
                    "highPrice": "14",
                    "priceCurrency": "EUR"
                }
            },
            {
                "@type": "Service",
                "name": "Ajustes de vestidos",
                "description": "Perfeccionamos vestidos elegantes y casuales. Ajustamos escote, cintura y largo para un fit impecable.",
                "provider": {
                    "@type": "LocalBusiness",
                    "name": "Entre Prendas"
                },
                "areaServed": {
                    "@type": "City",
                    "name": "Valencia"
                },
                "offers": {
                    "@type": "AggregateOffer",
                    "lowPrice": "10",
                    "highPrice": "18",
                    "priceCurrency": "EUR"
                }
            },
            {
                "@type": "Service",
                "name": "Ajustes de vestidos de novia",
                "description": "Entallamos, acortamos y personalizamos vestidos de novia para que se adapten perfectamente a tu cuerpo y estilo.",
                "provider": {
                    "@type": "LocalBusiness",
                    "name": "Entre Prendas"
                },
                "areaServed": {
                    "@type": "City",
                    "name": "Valencia"
                },
                "offers": {
                    "@type": "AggregateOffer",
                    "lowPrice": "25",
                    "highPrice": "40",
                    "priceCurrency": "EUR"
                }
            },
            {
                "@type": "Service",
                "name": "Sastrería a medida de trajes",
                "description": "Perfeccionamos trajes de hombre para un ajuste impecable. Entallamos chaquetas y ajustamos pantalones.",
                "provider": {
                    "@type": "LocalBusiness",
                    "name": "Entre Prendas"
                },
                "areaServed": {
                    "@type": "City",
                    "name": "Valencia"
                },
                "offers": {
                    "@type": "AggregateOffer",
                    "lowPrice": "16",
                    "highPrice": "25",
                    "priceCurrency": "EUR"
                }
            },
            {
                "@type": "Service",
                "name": "Reparación de cremalleras",
                "description": "Reemplazamos y reparamos cremalleras dañadas o atascadas en chaquetas, pantalones, faldas y cualquier prenda.",
                "provider": {
                    "@type": "LocalBusiness",
                    "name": "Entre Prendas"
                },
                "areaServed": {
                    "@type": "City",
                    "name": "Valencia"
                },
                "offers": {
                    "@type": "AggregateOffer",
                    "lowPrice": "10",
                    "highPrice": "18",
                    "priceCurrency": "EUR"
                }
            }
        ]
    };

    return (

        <div className="gridmaster" id="servicios">

            <h2>Servicios</h2>

            <div className="gridmaster__elements">

                <Grid
                    service={`Arreglo de pantalones ${municipio}`}
                    description="Ajustamos y arreglamos sus pantalones o faldas a la perfección. Ya sean de pana, vaqueros o chinos, conseguimos ese ajuste perfecto que estás buscando. El ribete lo ajustamos según tu forma. Y el largo se personaliza."
                    img={pantalones}
                    top="block"
                    link="/"
                ></Grid>

                <Grid
                    service={`Arreglo de camisas ${municipio}`}
                    description="Desde camisas formales hasta casuales, ajustamos el cuello, los puños y la silueta para un look impecable. Personalizamos cada detalle para que te sientas seguro y con estilo en cualquier ocasión."
                    img={camisas}
                    top="none"
                    link="/"
                ></Grid>

                <Grid
                    service={`Ajustes de vestidos ${municipio}`}
                    description="Perfeccionamos tus vestidos para dejarlos a medida. Ya sean elegantes o casuales, ajustamos el escote y la cintura para un fit impecable. Personalizar el largo y los detalles para que brilles en cada ocasión."
                    img={vestidos}
                    top="none"
                    link="/"
                ></Grid>

                <Grid
                    service={`Arreglo de faldas ${municipio}`}
                    description="Adaptamos tus faldas para un ajuste impecable. Personalizamos los detalles que necesites para que brilles en cualquier contexto, demostrando una imagen única y auténtica."
                    img={faldas}
                    top="none"
                    link="/"
                ></Grid>

                <Grid
                    service={`Ajustes de chaquetas y abrigos ${municipio}`}
                    description="Transformamos tus chaquetas, anoraks y americanas para que se adapten perfectamente a ti. Tanto si son piezas de vestir elegantes como más informales, ajustamos el escote y la cintura para un calce impecable. Personalizamos el largo y los detalles para que luzcas espectacular."
                    img={chaquetas}
                    top="block"
                    link="/"
                ></Grid>

                <Grid
                    service={`Sastrería a medida de trajes ${municipio}`}
                    description="Perfeccionamos tu traje para un ajuste impecable. Desde entallar la chaqueta hasta ajustar los pantalones, nos aseguramos de que cada detalle resalte tu estilo y elegancia. Ya sea para una ocasión especial o para el día a día, personalizamos el fit y los acabados para que luzcas impecable y con total confianza."
                    img={traje}
                    top="none"
                    link="/"
                ></Grid>

                <Grid
                    service={`Ajustes de ropa de trabajo ${municipio}`}
                    description="Ajustamos y personalizamos tus prendas de ropa de trabajo, ya sean uniformes, trajes de oficina o vestimenta más informal. Logramos que te sientas cómodo y profesional, adaptando el fit a tus necesidades y estilo."
                    img={trabajo}
                    top="none"
                    link="/"
                ></Grid>

                <Grid
                    service={`Zurcido de vaqueros ${municipio}`}
                    description="Ajustamos y personalizamos tus prendas de ropa de trabajo, ya sean uniformes, trajes de oficina o vestimenta más informal. Logramos que te sientas cómodo y profesional, adaptando el fit a tus necesidades y estilo."
                    img={zurcido}
                    top="none"
                    link="/"
                ></Grid>

                <Grid
                    service={`Reparación de cremalleras ${municipio}`}
                    description="Reemplazamos y reparamos cremalleras dañadas o atascadas, asegurando que tu prenda vuelva a funcionar a la perfección. Ya sea en chaquetas, pantalones, faldas o cualquier otra prenda, garantizamos un ajuste y funcionamiento impecable."
                    img={cremalleras}
                    top="none"
                    link="/"
                ></Grid>

                <Grid
                    service={`Reemplazo de botones ${municipio}`}
                    description="Reemplazamos botones rotos o faltantes en cualquier tipo de prenda. Ya sea en abrigos, camisas o pantalones, te ayudamos a recuperar la estética original de tu ropa, utilizando botones de alta calidad y diseño acorde a tu estilo."
                    img={botones}
                    top="none"
                    link="/"
                ></Grid>

            </div>



            <h2 id="bodas">Bodas</h2>

            <div className="gridmaster__elements">

                <Grid
                    service={`Ajustes de vestidos de novia ${municipio}`}
                    description="Entallamos, acortamos y personalizamos tu vestido de novia para que se adapte a tu cuerpo y estilo. Ajustamos el corsé, las mangas, el largo y cualquier detalle para que luzcas perfecta en tu gran día."
                    img={novias}
                    top="block"
                    link="/"
                ></Grid>

                <Grid
                    service={`Adaptación de velos y complementos ${municipio}`}
                    description="Transformamos y personalizamos tu velo, capa o estola para que encaje con tu vestido y refleje tu personalidad. También ajustamos guantes, cinturones y otros complementos para un look armonioso."
                    img={complementos}
                    top="block"
                    link="/"
                ></Grid>

                <Grid
                    service={`Arreglo de vestidos de damas de honor e invitadas ${municipio}`}
                    description="Ajustamos y adaptamos vestidos de damas de honor e invitadas para que cada detalle sea perfecto. Desde entallar la cintura hasta modificar el escote o el largo, logramos que cada prenda se ajuste a la ocasión."
                    img={invitadas}
                    top="none"
                    link="/"
                ></Grid>

            </div>

            {/* Schema.org Service para rich snippets */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
            />

        </div>

    );


}

export default GridMaster; 