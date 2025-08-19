"use client";

import Link from 'next/link';
import '../../style.scss';

function SeoAnchor({pueblo, link}){
    
    return(<div>
        <Link href={link}>Arreglo de ropa en {pueblo}</Link>
    </div>)
};

export default SeoAnchor;