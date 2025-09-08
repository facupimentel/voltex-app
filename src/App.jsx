import Header from "./components/Header/Header";
import Inicio from "./components/Inicio/Inicio";
import ItemDetailContainer from "./components/Productos/ItemDetailContainer";
import Nosotros from "./components/Nosotros/Nosotros";
import Contactos from "./components/Contactos/contactos";
import Footer from "./components/Footer/Footer";

import { useState } from "react";

import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Planes from "./components/Inicio/Planes";


function App() {


  const [totalProductos, setTotalProductos] = useState(0);

  const agregarAlCarrito = (cantidad) => {
    setTotalProductos((prevTotal)=> prevTotal + cantidad);
  }; 

  return (
    <>
      <BrowserRouter>
        <Header totalProductos={totalProductos} />

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/planes" element={<Planes />} />
          <Route
            path="/detalle/:id"
            element={
              <ItemDetailContainer agregarAlCarrito={agregarAlCarrito} />
            }
          />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contactos" element={<Contactos />} />
          <Route path="*" element={<h1>Error 404: Pagina no encontrada.</h1>} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
