"use client";

import Image from 'next/image';
import Link from 'next/link';
import '../style.scss';

import ImgButton from '../buttons/imgbutton';
import StandardButton from '../buttons/standardButton';
import HeroBanner from './cabecera/heroBanner';
import FooterForm from '../contactFormFooter';
import SeoAnchor from './footer/seoAnchor';
//IMG
import HeaderLogoFooter from '../assets/icon/gartalia_header_logo-footer.svg';
import IconServicios from '../assets/img/icon_servicios-dark.svg'
import IconInstalaciones from '../assets/img/icon_instalaciones-dark.svg'
import IconMantenimiento from '../assets/img/icon_mantenimiento-dark.svg'



function Footer(){

    return(
        <div className="footer__master">
            <div className="footer__resume">
                <div className="footer__logo">
                    <Image src={HeaderLogoFooter} alt="logotipo para el footer de Gartalia" width={217} height={50} loading='lazy'></Image>
                </div>
                <div className="header__nav">
                <ImgButton
                    link="/#servicios"
                    title="Servicios"
                    style="imgButton__white imgb1"
                    icon={IconServicios}
                ></ImgButton>

                <ImgButton
                    link="/#mantenimiento"
                    title="Mantenimiento"
                    style="imgButton__white imgb2"
                    icon={IconMantenimiento}
                ></ImgButton>

                <ImgButton
                    link="/#instalaciones"
                    title="Instalaciones"
                    style="imgButton__white imgb3"
                    icon={IconInstalaciones}
                ></ImgButton>
                </div>
            </div>
            <HeroBanner></HeroBanner>
            <div className="footer__contacto">
                <h4 className="footer__contacto-title">Somos jardineros, <span>¿podemos ayudarte?</span></h4>
                <StandardButton
                link="tel:+34658677423"
                title="Contactar"
                style="standardButton">
                </StandardButton>

                <StandardButton
                link="#presupuesto"
                title="Presupuesto"
                style="emptyStandardButton">
                </StandardButton>

                <FooterForm></FooterForm>
            </div>

            <div className="footer__seo-anchor">
            <SeoAnchor link="/municipios/eliana" pueblo="La Eliana"></SeoAnchor>
            <SeoAnchor link="/municipios/cullera" pueblo="Cullera"></SeoAnchor>
            <SeoAnchor link="/municipios/cheste" pueblo="Cheste"></SeoAnchor>
            <SeoAnchor link="/municipios/benifaio" pueblo="Benifaió"></SeoAnchor>
            <SeoAnchor link="/municipios/alboraya" pueblo="Alboraya"></SeoAnchor>
            <SeoAnchor link="/municipios/rocafort" pueblo="Rocafort"></SeoAnchor>
            <SeoAnchor link="/municipios/gandia" pueblo="Gandia"></SeoAnchor>
            <SeoAnchor link="/municipios/godella" pueblo="Godella"></SeoAnchor>
            <SeoAnchor link="/municipios/alzira" pueblo="Alzira"></SeoAnchor>
            <SeoAnchor link="/municipios/chiva" pueblo="Chiva"></SeoAnchor>
            <SeoAnchor link="/municipios/pobla-de-vallbona" pueblo="Pobla de Vallbona"></SeoAnchor>
            <SeoAnchor link="/municipios/moncada" pueblo="Moncada"></SeoAnchor>
            <SeoAnchor link="/municipios/paterna" pueblo="Paterna"></SeoAnchor>
            <SeoAnchor link="/municipios/ribarroja" pueblo="Ribarroja del Turia"></SeoAnchor>
            <SeoAnchor link="/municipios/pucol" pueblo="Puçol"></SeoAnchor>
            <SeoAnchor link="/municipios/montserrat" pueblo="Montserrat"></SeoAnchor>
            <SeoAnchor link="/municipios/alfafar" pueblo="Alfafar"></SeoAnchor>
            <SeoAnchor link="/municipios/mascamarena" pueblo="Mas Camarena"></SeoAnchor>
            <SeoAnchor link="/municipios/vilamarxant" pueblo="Vilamarxant"></SeoAnchor>
            <SeoAnchor link="/municipios/naquera" pueblo="Náquera"></SeoAnchor>
            <SeoAnchor link="/municipios/burjassot" pueblo="Burjassot"></SeoAnchor>
            <SeoAnchor link="/municipios/manises" pueblo="Manises"></SeoAnchor>
            <SeoAnchor link="/municipios/silla" pueblo="Silla"></SeoAnchor>
            <SeoAnchor link="/municipios/benaguasil" pueblo="Benaguasil"></SeoAnchor>
            <SeoAnchor link="/municipios/picassent" pueblo="Picassent"></SeoAnchor>
            <SeoAnchor link="/municipios/alginet" pueblo="Alginet"></SeoAnchor>
            <SeoAnchor link="/municipios/liria" pueblo="Liria"></SeoAnchor>
            <SeoAnchor link="/municipios/torrent" pueblo="Torrent"></SeoAnchor>
            <SeoAnchor link="/municipios/mislata" pueblo="Mislata"></SeoAnchor>
            <SeoAnchor link="/municipios/albal" pueblo="Albal"></SeoAnchor>
            <SeoAnchor link="/municipios/sedavi" pueblo="Sedaví"></SeoAnchor>

            </div>

            <div className="footer__politicas">
                <StandardButton
                link="/"
                title="Aviso legal"
                style="emptyStandardButton">
                </StandardButton>
                <StandardButton
                link="/legal/privacidad"
                title="Política de privacidad"
                style="emptyStandardButton">
                </StandardButton>
                <StandardButton
                link="/"
                title="Política de cookies"
                style="emptyStandardButton">
                </StandardButton>

            </div>


            <div style={{ backgroundColor: 'transparent', textAlign: 'center', padding: '5px 0', marginTop: '50px' }}>
            <p style={{ color: '#45E688', fontFamily: 'Roboto, sans-serif', fontSize: '12px' }}>Web creada por: <a style={{ color: '#45E688', fontFamily: 'Roboto, sans-serif', fontSize: '12px' }} href="https://ermo.es" title="estudio de diseño web y posicionamiento SEO">Ermo Estudio - Andrés Ortega Montoya</a></p></div>

    </div>


    )

};

export default Footer;