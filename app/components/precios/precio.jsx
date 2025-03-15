"use client";

import Link from 'next/link';
import './precio.scss';


function Precio({clothes, price}){

    return(

        <div className="precio">
 
            <p className="clothes">{clothes}</p>
            <p className="price">{price} €</p>

        </div>


    );
}

export default Precio;