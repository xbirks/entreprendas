"use client";

import Image from 'next/image';
import Link from 'next/link';
import './precio.scss';
import PreciosTitle from './preciosTitle.jsx';



const priceData = [
    {
      title: "Pantalones",
      services: [
        { name: "Bajo de pantalón", price: 10 },
        { name: "Ajuste de cintura", price: 15 },
        { name: "Cambio de cremallera", price: 12 },
      ],
    },
    {
      title: "Camisetas",
      services: [
        { name: "Ajuste de mangas", price: 8 },
        { name: "Entallado", price: 10 },
      ],
    },
    {
        title: "Faldas",
        services: [
          { name: "Ajuste de mangas", price: 8 },
          { name: "Entallado", price: 10 },
        ],
      },
      {
        title: "Pantalones",
        services: [
          { name: "Bajo de pantalón", price: 10 },
          { name: "Ajuste de cintura", price: 15 },
          { name: "Cambio de cremallera", price: 12 },
        ],
      },
      {
        title: "Camisetas",
        services: [
          { name: "Ajuste de mangas", price: 8 },
          { name: "Entallado", price: 10 },
        ],
      },
      {
          title: "Faldas",
          services: [
            { name: "Ajuste de mangas", price: 8 },
            { name: "Entallado", price: 10 },
          ],
        },
  ];
  
  function PreciosMaster() {
    return (
      <div className="preciosmaster">
        <h2 className="">Lista de Precios</h2>
        <PreciosTitle categories={priceData}></PreciosTitle>
      </div>
    );
  }



export default PreciosMaster;