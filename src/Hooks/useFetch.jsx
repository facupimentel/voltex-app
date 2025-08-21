import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore/lite";
import { db } from "../config/firebaseConfig";

const useFetch = (nombreColeccion) =>{
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
        const fetchProducts = async () =>{
            try {
                //referencia a la coleccion deseada
                const productRef = collection(db, nombreColeccion); //configuracion de firebase y nombre de coleccion.
                const snapshot = await getDocs(productRef)

                // mapeamos los documentos obtenidos
                const productsList = snapshot.docs.map((doc) => ({
                  id: doc.id,
                  ...doc.data(),
                }));
                setData(productsList)
                setLoading(false)
            } catch (error) {
                console.log("error al realizar consulta: ". error);
                setError("error al consultar datos");
                setLoading(false)
            }
        }
        fetchProducts();
    }, [])

    
    return {data, loading, error}
}

export default useFetch;