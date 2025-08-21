import React, { useEffect } from "react";
import { useState } from "react";
import products from "../../js/productos";
import { useParams } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import ItemCount from "./ItemCount";
import Loading from "../Loading/Loading"


const fetchProductos = (id) =>{
  return new Promise((resolve, reject) =>{
    setTimeout(()=>{
      const producto = products.find((p) => p.id === parseInt(id))
      if(producto){
        resolve(producto)
      } else {
        reject("producto no encontrado")
      }
    }, 1000)
  }) 
}


const ItemDetailContainer = () => {

  const { addCarrito} = useCart()
  

  const { id } = useParams();
  const [cantidad, setCantidad] = useState(1)

  

  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=>{
    setTimeout(()=>{
      setCargando(true)
      fetchProductos(id)
        .then((data)=>{
          setProducto(data)
          setError(null)
        })
        .catch((error)=>{
          setProducto(null)
          setError(error)
        })
        .finally(()=>{
          setCargando(false)
        })
    }, 2000)
  }, [id])



  return (
    <>

      {
        cargando ? <Loading/> : (
      <div className="detalle-producto">
        <h2 key={producto.id}>ID: {id ? id : ""}</h2>
        <img src={producto.image} alt="" />
        <h2>{producto.name}</h2>
        <p>Precio: ${producto.price}</p>
        <p>{producto.description}</p>

        <ItemCount cantidad={cantidad} setCantidad={setCantidad} />
        
        <button onClick={()=>addCarrito(producto, cantidad)} className="btn-comprar">
          Agregar al carrito
        </button>
      </div>
        )
      }
      
    </>
  );
};

export default ItemDetailContainer;
