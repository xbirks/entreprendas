"use client";

import Image from 'next/image';
import Link from 'next/link';
import './precio.scss';
import PreciosTitle from './preciosTitle.jsx';



const priceData = [
    {
      title: "Pantalones",
      services: [
        { name: "Bajo de pantalón de vestir", price: 10 },
        { name: "Bajo invisible a mano", price: 10 },
        { name: "Pantalón de vestir con cinta", price: 10 },
        { name: "Chandal de punto", price: 8 },
        { name: "Ampliar o estrechar cintura", price: 10 },
        { name: "Estrechar pierna", price: 10 },
        { name: "Bajo de vaqueros", price: 8 },
        { name: "Bajo de vaqueros", price: 8 },
        { name: "Vaquero estrechar cintura", price: 10 },
        { name: "Vaquero estrechar pierna", price: 10 },
        { name: "Zurcir vaquero", price: 7 },
        { name: "Estrechar lados pantalón de campana", price: 10 },
        { name: "Cambiar bolsillos", price: 9 },
        { name: "Poner o cerrar abertura", price: 6 },
        { name: "Cambiar goma", price: 8 },
        { name: "Poner parche", price: 6 },
        { name: "Coser roto", price: 4 },

      ],
    },
    {
      title: "Camisas",
      services: [
        { name: "Cambiar cuello", price: 8 },
        { name: "Voltear puños", price: 10 },
        { name: "Acortar mangas", price: 10 },
        { name: "Hacer bajo", price: 9 },
        { name: "Hacer bajo con abertura", price: 10 },
        { name: "Estrechar costados", price: 8 },
        { name: "Ensanchar costados", price: 8 },
        { name: "Estrechar hombros", price: 10 },
        { name: "Estrechar lados", price: 10 },
        { name: "Hacer abertura", price: 7 },
        { name: "Hacer pinzas", price: 8 },
        { name: "Bajo para camisetas", price: 8 },
        { name: "Bajo con abertura", price: 8 },
        { name: "Acortar mangas", price: 10 },
      ],
    },
    {
        title: "Vestidos",
        services: [
          { name: "Bajo sencillo", price: 8 },
          { name: "Bajo de punto a mano", price: 10 },
          { name: "Bajo invisible a mano", price: 12 },
          { name: "Cambiar cremallera", price: 12 },
          { name: "Cremallera invisible", price: 13 },
          { name: "Entrar lados sin forro", price: 10 },
          { name: "Entrar lados con forro", price: 14 },
          { name: "Subir tirantes", price: 7 },
          { name: "Subir manga", price: 8 },
          { name: "Subir hombros", price: 12 },
          { name: "Poner botón (unidad)", price: 3 },
          { name: "Cerrar o abrir abertura", price: 4 },
          { name: "Adaptación a premamá", price: 12 },
          
        ],
      },
      {
        title: "Faldas",
        services: [
          { name: "Entrar lados con forro", price: 10 },
          { name: "Entrar lados sin forro", price: 8 },
          { name: "Cambiar cremallera", price: 7 },
          { name: "Cambiar cremallera invisible", price: 8 },
          { name: "Bajo a máquina", price: 8 },
          { name: "Bajo a mano", price: 19 },
          { name: "Bajo con forro a mano", price: 12 },
          { name: "Forrar (forro no incluido)", price: 20 },
        ],
      },
      {
        title: "Chaquetas",
        services: [
          { name: "Cortar mangas", price: 10 },
          { name: "Cortar mangas americana", price: 12 },
          { name: "Cortar mangas americana con ojales", price: 14 },
          { name: "Cerrar abertura", price: 7 },
          { name: "Cortar bajo", price: 12 },
          { name: "Cortar bajo americana", price: 12 },
          { name: "Entrar lados", price: 10 },
        ],
      },
      {
          title: "Cazadoras",
          services: [
            { name: "Bajo sin abertura", price: 10 },
            { name: "Bajo con abertura", price: 12 },
            { name: "Estrechar lados", price: 10 },
            { name: "Elástico en los puños", price: 8 },
            { name: "Elástico en el bajo", price: 10 },
            { name: "Cremalleras hasta 40cm", price: 14 },
            { name: "Cambiar cremallera anorak", price: 14 },
            { name: "Cambiar cremallera chandal", price: 12 },
            { name: "Cambiar cremallera infantil", price: 10 },
          ],
        },
        {
            title: "Vestidos de novia, invitadas y damas de honor",
            services: [
              { name: "Ajuste de cintura", "price": 10 },
              { "name": "Ajuste de pecho", "price": 10 },
              { name: "Acortar largo", "price": 10 },
              { name: "Añadir mangas", "price": 10 },
              { name: "Cambio de cremallera", "price": 10 },
              { name: "Añadir encaje o aplicaciones", "price": 10 },
              { name: "Reforzar costuras", "price": 10 },
              { name: "Transformación de vestido de largo a corto", "price": 10 },
            ]
          },
          {
            title: "Velos y capas",
            services: [
              { name: "Ajuste de largo", price: 10 },
              { name: "Colocación de peineta", price: 10 },
              { name: "Personalización con encaje", price: 10 },
              { name: "Añadir pedrería", price: 10 },
              { name: "Reparación de rotos", price: 10 },
              { name: "Transformación en capa", price: 10 },
              { name: "Cambio de color", price: 10 },
              { name: "Planchado y preparación", price: 10 }
            ]
          },
          {
            title: "Complementos",
            services: [
              { name: "Ajuste de guantes", price: 10 },
              { name: "Reparación de cinturón", price: 10 },
              { name: "Forrado de zapatos", price: 10 },
              { name: "Personalización de bolso", price: 10 },
              { name: "Arreglo de liga", price: 10 },
              { name: "Adaptación de tocado", price: 10 },
              { name: "Añadir detalles en bisutería", price: 10 },
              { name: "Transformación de complemento antiguo", price: 10 }
            ]
          },
        {
            title: "Otros",
            services: [
              { name: "Coser roto", price: 3 },
              { name: "Botones", price: 3 },
              { name: "Acortar  tirantes bikini", price: 5 },
              { name: "Hacer funda cojín 45x45", price: 8 },
              { name: "Reducir cojín", price: 5 },
              { name: "Cambiar cremallera cojín", price: 6 },
              { name: "Bajo de cortinas (ancho: 140cm)", price: 7 },
              { name: "Hacer más pequeño", price: 4 },
            ],
          },
  ];
  
  function PreciosMaster() {
    return (
      <div className="preciosmaster">
        <h2 className="">Lista de Precios</h2>
        
        <PreciosTitle categories={priceData}></PreciosTitle>

        <p className="precios__disclaimer">Todos los precios pueden variar dependiendo de las características de cada prenda. Consulta con nosotros.</p>
      </div>
    );
  }



export default PreciosMaster;