import React from 'react';
import Link from 'next/link';
import Intro from '../.././components-poda-tala/cabecera/introPoda';
import GridMaster from '../.././components-poda-tala/grid/gridMasterPoda';
import Empresas from '../.././components-poda-tala/empresas/empresas';
import Location from '../.././components-poda-tala/location/location';
import Nosotros from '../.././components-poda-tala/nosotros&review/nosotros';
import Other from '../.././components-poda-tala/other/other';
import FaqMaster from '../.././components-poda-tala/faq/faqmaster';
import SeoCards from '../.././components-poda-tala/seo-cards/seocardsPoda';
import SedaviLayout from '../.././layout';

const Sedavi = () => {
  const municipio = "Gandia";
  const enmunicipio = "en Gandia";

  return (
    <div className="gartalia">
      <div className="master">
        <Intro municipio={municipio} />
        <GridMaster municipio={enmunicipio} />
      </div>
      
      <div className="faq">
        <div className="masterFaq">
          <FaqMaster />
        </div>
      </div>
      <div className="faq__banner">
        <span>¿Más preguntas? <Link href="tel:+34657170847">657 170 847</Link></span>
      </div>

      <div className="master">
        <Empresas />
        <Location />
      </div>



      <div className="master">
        <SeoCards municipio={enmunicipio} />
      </div>
    </div>
  );
};

Sedavi.getLayout = function getLayout(page) {
  return <SedaviLayout>{page}</SedaviLayout>;
};

export default Sedavi;
