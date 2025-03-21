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
                    <Image src={HeaderLogoFooter} alt="logotipo para el footer de Entre Prendas" width={217} height={50} loading='lazy'></Image>
                </div>
                <div className="header__nav">
                <ImgButton
                    link="/#precios"
                    title="Precios"
                    style="imgButton__white imgb1"
                    icon={IconServicios}
                ></ImgButton>

                <ImgButton
                    link="/#servicios"
                    title="Servicios"
                    style="imgButton__white imgb2"
                    icon={IconMantenimiento}
                ></ImgButton>

                <ImgButton
                    link="/#bodas"
                    title="Bodas"
                    style="imgButton__white imgb3"
                    icon={IconInstalaciones}
                ></ImgButton>
                </div>
            </div>
            <HeroBanner></HeroBanner>
            <div className="footer__contacto">
                <h4 className="footer__contacto-title">Somos modistas, <span>¿podemos ayudarte?</span></h4>
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
            <SeoAnchor link="/municipios/manises" pueblo="Manises"></SeoAnchor>
            <SeoAnchor link="/municipios/mislata" pueblo="Mislata"></SeoAnchor>
            <SeoAnchor link="/municipios/quart-de-poblet" pueblo="Quart de Poblet"></SeoAnchor>
            <SeoAnchor link="/municipios/paterna" pueblo="Paterna"></SeoAnchor>
            <SeoAnchor link="/municipios/burjassot" pueblo="Burjassot"></SeoAnchor>
            <SeoAnchor link="/municipios/aldaia" pueblo="Aldaia"></SeoAnchor>
            <SeoAnchor link="/municipios/xirivella" pueblo="Xirivella"></SeoAnchor>
            <SeoAnchor link="/municipios/torrent" pueblo="Torrent"></SeoAnchor>
            <SeoAnchor link="/municipios/alaquas" pueblo="Alaquàs"></SeoAnchor>
            <SeoAnchor link="/municipios/paiporta" pueblo="Paiporta"></SeoAnchor>
            <SeoAnchor link="/municipios/benetusser" pueblo="Benetússer"></SeoAnchor>
            <SeoAnchor link="/municipios/rocafort" pueblo="Rocafort"></SeoAnchor>
            <SeoAnchor link="/municipios/massarojos" pueblo="Massarrojos"></SeoAnchor>
            <SeoAnchor link="/municipios/moncada" pueblo="Moncada"></SeoAnchor>
            <SeoAnchor link="/municipios/alfafar" pueblo="Alfafar"></SeoAnchor>
            <SeoAnchor link="/municipios/sedavi" pueblo="Sedaví"></SeoAnchor>
            <SeoAnchor link="/municipios/albal" pueblo="Albal"></SeoAnchor>
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