import { useState } from "react";
import { addDoc, collection, Firestore } from "firebase/firestore/lite";
import { db } from "../../config/firebaseConfig";
import { useCart } from "../../context/CartContext";
import products from "../../js/productos";
import { useUser } from "../../context/UserContext";


const Cart = () => {
  const {user} = useUser()
 
  const { cart, cleanCart, getTotal, removeFromCart } = useCart();
  
  
  const [carritoVisible, setCarritoVisible] = useState(false);
  const toggleCarrito = () => {
    setCarritoVisible(!carritoVisible);
  };

  const totalProductos = cart.reduce((acc, item)=> acc + item.quantity, 0)

  const confirmarCompra = async () => {
    if(cart.length === 0){
      alert("el carrito esta vacio")
      return
    }

    try {
      const comprasRef = collection(db, "Compras");
      const docRef = await addDoc(comprasRef, {
          comprador: {
              nombre: user?. name ?? "Usuario Desconocido",
              telefono: '1171950001',
              email:"mail@faketaxi.com"
          },
          productos: cart, 
          total: getTotal() ?? 0,
          fecha: new Date().toISOString()
      });
      cleanCart()
      alert(
        `Compra realizada con éxito!\nID de orden: ${
          docRef.id
        }\nTotal: $${getTotal()}\nFecha: ${new Date().toISOString()}`
      );
      console.log("Documento agregado con ID:", docRef);
    } catch (error) {
      console.log("ocurrio un error: ", error);
    }
  };
  

  return (
    <div className="carrito-container">
      <div>
        <button id="carrito-btn" onClick={toggleCarrito}>
          Carrito 🛒 ({totalProductos})
        </button>

        {carritoVisible && (
          <div
            id="carrito-dropdown"
            className={`carrito-dropdown ${
              carritoVisible ? "visible" : "hidden"
            }`}
          >
            <h3>Mi Carrito</h3>
            <ul id="carrito">
              {cart.length === 0 ? (
                <p>el carrito esta vacio</p>
              ) : (
                cart.map((item) => (
                  <li key={item.id}>
                    <button onClick={()=>removeFromCart(item.id)} style={{
                      width:"10%",
                      height:"8%",
                      fontSize:"8px",
                      textAlign:"center"
                    }}>x</button>
                    {item.name} - {item.quantity} x {item.price}
                  </li>
                ))
              )}
            </ul>
            <p id="total">Total: ${getTotal(products.price)}</p>
            <button id="comprar" className="btn" onClick={confirmarCompra}>
              Comprar
            </button>
            <button onClick={cleanCart} id="vaciar-carrito" className="btn">
              Vaciar Carrito
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
