"use client";

import Image from 'next/image';
import Link from 'next/link';
import './precio.scss';
import Precio from './precio.jsx';

function PreciosTitle({ categories }) {
  return (
    <div className="preciostitle" id="precios">
      {categories.map((category, index) => (
        <div key={index} className="precios__categoria">
          <h3 className="">{category.title}</h3>
          <div className="precios__categoria-map">
            {category.services.map((service, idx) => (
              <Precio key={idx} clothes={service.name} price={service.price} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default PreciosTitle;
