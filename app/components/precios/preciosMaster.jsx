"use client";

import Image from 'next/image';
import Link from 'next/link';
import './precio.scss';
import PreciosTitle from './preciosTitle.jsx';

const priceData = [
  {
    title: "Pantalones",
    services: [
      { name: "Bajo de pantalón de vestir", price: 14 },
      { name: "Bajo invisible a mano", price: 14 },
      { name: "Pantalón de vestir con cinta", price: 16 },
      { name: "Chándal de punto", price: 10 },
      { name: "Ampliar o estrechar cintura", price: 15 },
      { name: "Estrechar pierna", price: 14 },
      { name: "Bajo de vaqueros", price: 10 },            
      { name: "Vaquero: estrechar cintura", price: 15 },
      { name: "Vaquero: estrechar pierna", price: 14 },
      { name: "Zurcir vaquero", price: 8 },
      { name: "Estrechar lados (pantalón de campana)", price: 12 },
      { name: "Cambiar bolsillos", price: 14 },
      { name: "Abrir o cerrar abertura", price: 10 },
      { name: "Cambiar goma", price: 12 },
      { name: "Poner parche", price: 8 },
      { name: "Coser roto", price: 6 },
    ],
  },
  {
    title: "Camisas",
    services: [
      { name: "Cambiar cuello", price: 12 },
      { name: "Voltear puños", price: 12 },
      { name: "Acortar mangas", price: 12 },
      { name: "Hacer bajo", price: 10 },
      { name: "Hacer bajo con abertura", price: 14 },
      { name: "Estrechar costados", price: 12 },
      { name: "Ensanchar costados", price: 12 },
      { name: "Estrechar hombros", price: 14 },
      { name: "Estrechar lados", price: 14 },
      { name: "Hacer abertura", price: 8 },
    ],
  },
  {
    title: "Vestidos",
    services: [
      { name: "Bajo sencillo", price: 12 },
      { name: "Bajo de punto a mano", price: 14 },
      { name: "Cambiar cremallera", price: 16 },
      { name: "Cremallera invisible", price: 18 },
      { name: "Entrar lados (sin forro)", price: 12 },
      { name: "Entrar lados (con forro)", price: 16 },
      { name: "Subir tirantes", price: 10 },
      { name: "Subir manga", price: 12 },
      { name: "Subir hombros", price: 14 },
      { name: "Poner botón (unidad)", price: 4 },
      { name: "Abrir o cerrar abertura", price: 6 },
      { name: "Adaptación premamá", price: 14 },
    ],
  },
  {
    title: "Faldas",
    services: [
      { name: "Entrar lados (sin forro)", price: 12 },
      { name: "Entrar lados (con forro)", price: 16 },
      { name: "Cambiar cremallera", price: 10 },
      { name: "Cambiar cremallera invisible", price: 12 },
      { name: "Bajo a máquina", price: 10 },
      { name: "Bajo a mano", price: 12 },
      { name: "Bajo con forro a mano", price: 16 },
    ],
  },
  {
    title: "Chaquetas",
    services: [
      { name: "Cortar mangas", price: 16 },
      { name: "Cortar mangas (americana)", price: 25 },
      { name: "Cerrar abertura", price: 12 },
      { name: "Cortar bajo", price: 14 },
      { name: "Cortar bajo (americana)", price: 20 },
      { name: "Entrar lados", price: 16 },
    ],
  },
  {
    title: "Cazadoras",
    services: [
      { name: "Bajo sin abertura", price: 12 },
      { name: "Bajo con abertura", price: 12 },
      { name: "Estrechar lados", price: 10 },
      { name: "Elástico en los puños", price: 8 },
      { name: "Elástico en el bajo", price: 10 },
      { name: "Cremalleras hasta 40 cm", price: 14 },
      { name: "Cambiar cremallera anorak", price: 14 },
      { name: "Cambiar cremallera chándal", price: 12 },
      { name: "Cambiar cremallera infantil", price: 10 },
    ],
  },
  {
    title: "Vestidos de novia, invitadas y damas de honor",
    services: [
      { name: "Ajuste de cintura", price: 10 },
      { name: "Ajuste de pecho", price: 10 },
      { name: "Acortar largo", price: 10 },
      { name: "Añadir mangas", price: 10 },
      { name: "Cambiar cremallera", price: 10 },
      { name: "Añadir encaje o aplicaciones", price: 10 },
      { name: "Reforzar costuras", price: 10 },
      { name: "Transformación de vestido de largo a corto", price: 10 },
    ],
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
      { name: "Planchado y preparación", price: 10 },
    ],
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
      { name: "Transformación de complemento antiguo", price: 10 },
    ],
  },
  {
    title: "Otros",
    services: [
      { name: "Coser roto", price: 3 },
      { name: "Botones (unidad)", price: 3 },
      { name: "Acortar tirantes de bikini", price: 5 },  
      { name: "Funda de cojín 45×45", price: 8 },       
      { name: "Reducir cojín", price: 5 },
      { name: "Cambiar cremallera de cojín", price: 6 },
      { name: "Bajo de cortinas (ancho 140 cm)", price: 7 },
      { name: "Hacer más pequeño", price: 4 },
    ],
  },
];

function PreciosMaster() {
  return (
    <div className="preciosmaster">
      <h2 className="">Lista de Precios</h2>
      <PreciosTitle categories={priceData}></PreciosTitle>
      <p className="precios__disclaimer">
        Todos los precios pueden variar dependiendo de las características de cada prenda. Consulta con nosotros.
      </p>
    </div>
  );
}

export default PreciosMaster;
