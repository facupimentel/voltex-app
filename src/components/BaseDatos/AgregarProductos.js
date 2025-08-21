import { addDoc, collection, Firestore } from "firebase/firestore/lite";
import { db } from "../../config/firebaseConfig";
import products from "../../js/productos";

export const cargarProductos = async () => {
  try {
    const productRef = collection(db, "ProductosVoltex");
    for (const product of products) {
      await addDoc(productRef, product);
    }
    console.log("productos cargados exitosamente en firestore");
    
  } catch (error) {
    console.log("ocurrio un error: ", error);
  }
};

 