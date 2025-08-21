import { useEffect, useState } from "react";
import products from "../../js/productos";
import { Link } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";



const fetchDatos = () =>{
  return new Promise ((resolve, reject) =>{
    setTimeout(()=>{
      const product = products.find((p) => p.id === id)
      if(product){
        resolve(product)
      } else{
        reject("producto no encontrado")
      }
    }, 5000)
  })
}


const ItemListContainer = () => {

  const {data, loading, error} = useFetch('ProductosVoltex')

  // useEffect(()=>{
  //   console.log("data obtenida: ", data);
    
  // })

  // const [cargando, setCargando] = useState("Cargando...")
  
  // useEffect(()=>{
  //   fetchDatos()
  //     .then((response)=> setCargando(response))
  //     .then((data)=> window.location.href = `/detalle/${id}`)
  // })

  
  return (
    <>
      <section className="sec-productos">
        <div className="texto">
          <h1>Bienvenidos a nuestra Tienda Online</h1>
        </div>

        {
        loading ? (
          <p>{error}</p>
        ) : (
          <article className="productos">
            {
            data.map((producto) => (
              <div key={producto.id} className="producto">
                <Link to={`/detalle/${producto.id}`}>
                  <img
                    src={producto.image}
                    alt={producto.name}
                    onClick={() => handleProductoClick(producto.id)}
                  />
                </Link>
                <h2>{producto.name}</h2>
              </div>
            ))}
          </article>
        )}
      </section>
    </>
  );
};

export default ItemListContainer;
