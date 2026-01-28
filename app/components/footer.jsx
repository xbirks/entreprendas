"use client";

import Image from 'next/image';
import Link from 'next/link';
import '../style.scss';

import ImgButton from '../buttons/imgbutton';
import StandardButton from '../buttons/standardButton';
import HeroBanner from './cabecera/heroBanner';
import FooterForm from '../contactFormFooter';
import SeoAnchor from './footer/seoAnchor';
// IMG
import HeaderLogoFooter from '../assets/icon/gartalia_header_logo-footer.svg';
import IconServicios from '../assets/img/icon_servicios-dark.svg';
import IconInstalaciones from '../assets/img/icon_instalaciones-dark.svg';
import IconMantenimiento from '../assets/img/icon_mantenimiento-dark.svg';

function Footer() {
  return (
    <div className="footer__master">
      <div className="footer__resume">
        <div className="footer__logo">
          <Image
            src={HeaderLogoFooter}
            alt="Logotipo de Entre Prendas"
            width={217}
            height={50}
            loading="lazy"
          />
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



      <div className="footer__contacto">
        <h4 className="footer__contacto-title">
          Somos modistas, <span>¿podemos ayudarte?</span>
        </h4>

        <StandardButton
          link="tel:+34680593195"
          title="Contactar"
          style="standardButton"
        >
        </StandardButton>

        <StandardButton
          link="#presupuesto"
          title="Presupuesto"
          style="emptyStandardButton"
        >
        </StandardButton>

        <FooterForm></FooterForm>
      </div>

      <div className="footer__seo-anchor">
        <SeoAnchor link="/municipios/manises" pueblo="Manises"></SeoAnchor>
        <SeoAnchor link="/municipios/mislata" pueblo="Mislata"></SeoAnchor>
        <SeoAnchor link="/municipios/quart-poblet" pueblo="Quart de Poblet"></SeoAnchor>
        <SeoAnchor link="/municipios/paterna" pueblo="Paterna"></SeoAnchor>
        <SeoAnchor link="/municipios/burjassot" pueblo="Burjassot"></SeoAnchor>
        <SeoAnchor link="/municipios/aldaia" pueblo="Aldaia"></SeoAnchor>
        <SeoAnchor link="/municipios/xirivella" pueblo="Xirivella"></SeoAnchor>
        <SeoAnchor link="/municipios/torrente" pueblo="Torrent"></SeoAnchor>
        <SeoAnchor link="/municipios/alaquas" pueblo="Alaquàs"></SeoAnchor>
        <SeoAnchor link="/municipios/paiporta" pueblo="Paiporta"></SeoAnchor>
        <SeoAnchor link="/municipios/rocafort" pueblo="Rocafort"></SeoAnchor>
        <SeoAnchor link="/municipios/godella" pueblo="Godella"></SeoAnchor>
        <SeoAnchor link="/municipios/valencia" pueblo="Valencia"></SeoAnchor>
      </div>

      <div className="footer__politicas">
        <StandardButton
          link="/legal/privacidad"
          title="Política de privacidad"
          style="emptyStandardButton"
        >
        </StandardButton>
      </div>

      <div style={{ backgroundColor: 'transparent', textAlign: 'center', padding: '5px 0', marginTop: '50px' }}>
        <p style={{ color: '#45E688', fontFamily: 'Roboto, sans-serif', fontSize: '12px' }}>
          Web creada por:{" "}
          <a
            style={{ color: '#45E688', fontFamily: 'Roboto, sans-serif', fontSize: '12px' }}
            href="https://ermo.es"
            title="Diseño web y SEO"
          >
            Ermo Estudio - Andrés Ortega Montoya
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
