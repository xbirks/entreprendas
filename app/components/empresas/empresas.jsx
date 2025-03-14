"use client";

import Image from 'next/image';
import './empresas.scss';

// IMAGE

import oasis from '../../assets/img/oasis_logo.svg';
import collao from '../../assets/img/collao_logo.svg';
import eliana from '../../assets/img/eliana_logo.svg';
import liria from '../../assets/img/liria_logo.svg';

function Empresas(){

    return(

        <div className="empresas__master">

            <h3 className="empresas__title">Empresas que ya confían en nosotros</h3>

            <div className="empresas__img">
                <Image src={oasis} alt="logotipo del resort hotelero El Oasis de la Eliana" width={200} height={200} loading='lazy'></Image>
                <Image src={collao} alt="logotipo del Club de Tenis El Collao de Manises" width={200} height={200} loading='lazy'></Image>
                <Image src={eliana} alt="logotipo del Ajuntamiento de La Eliana" width={200} height={200} loading='lazy'></Image>
                <Image src={liria} alt="logotipo del Ayuntamiento de Líria" width={200} height={200} loading='lazy'></Image>
            </div>
            
        </div>


    );
}


export default Empresas;