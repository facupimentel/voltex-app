import ItemListContainer from './ItemListContainer';
import { useState } from "react";
import React from 'react'


const MainProductos = () => {

    const [totalProductos, setTotalProductos] = useState(0);

    const agregarAlCarrito = () => {
      setTotalProductos(totalProductos + 1);
    };

  return (
    <div>
      <ItemListContainer agregarAlCarrito={agregarAlCarrito} />
    </div>
  );
}

export default MainProductos
