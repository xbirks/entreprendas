import React from 'react';
import Link from 'next/link';
import Intro from '../../components/cabecera/intro';
import GridMaster from '../../components/grid/gridMaster';
import Location from '../../components/location/location';
import Nosotros from '../../components/nosotros&review/nosotros';
import Other from '../../components/other/other';
import FaqMaster from '../../components/faq/faqmaster';
import SeoCards from '../../components/seo-cards/seocards';
import SedaviLayout from './layout';

const Sedavi = () => {
  const municipio = "Burjassot";
  const enmunicipio = "en Burjassot";

  return (
    <div className="gartalia">
      <div className="master">
        <Intro municipio={municipio} />
        <GridMaster municipio={enmunicipio} />

        <Location />
        <Nosotros />
      </div>
      <div className="other">
        <div className="masterOther">
          <Other municipio={enmunicipio} />
        </div>
      </div>
      <div className="faq">
        <div className="masterFaq">
          <FaqMaster />
        </div>
      </div>
      <div className="faq__banner">
      <span>¿Más preguntas? <Link href="tel:+34680593195">680 593 195</Link></span>
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
