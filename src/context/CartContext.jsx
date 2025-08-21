import { createContext, useContext, useState } from "react";

const CartContext = createContext()

export const CartProvider = ({children}) =>{
  const [cart, setCart] = useState([]);

  // funcion para agregar un producto al carrito
  const addCarrito = (product, quantity) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { ...product, quantity }];
    });
  };

  // funcion para eliminar un producto del carrito
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // funcion para limpiar el carrito
  const cleanCart = () => {
    setCart([]);
  };

  // funcion para calcular total del carrito
  const getTotal = () => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item.price);
      return total + price * item.quantity;
    }, 0);
  };


  return (
    <CartContext.Provider
      value={{ cart, addCarrito, removeFromCart, cleanCart, getTotal }}
    >
      {children}
    </CartContext.Provider>
  );
}


export const useCart = () => useContext(CartContext)