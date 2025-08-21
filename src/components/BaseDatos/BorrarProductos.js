import {
  collection,
  Firestore,
  writeBatch,
  getDocs,
} from "firebase/firestore/lite";
import { db } from "../../config/firebaseConfig";



export const borrarProductos = async () => {
  try {
    const batch = writeBatch(db)
    const productRef = collection(db, "ProductosVoltex");
    const snapshot = await getDocs(productRef)

    snapshot.forEach((docSnap)=>{
        batch.delete(docSnap.ref)
    })

    await batch.commit()
    console.log("productos borrados exitosamente en firestore");
  } catch (error) {
    console.log("ocurrio un error: ", error);
  }
};
