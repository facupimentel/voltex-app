import img1 from "../../img/footer-contactos/instagram.png";
import img2 from "../../img/footer-contactos/facebook.png"
import img3 from "../../img/footer-contactos/whatsapp.png"
import img4 from "../../img/footer-contactos/x.png"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="div-categorias">
        <h3>Categorias</h3>
          <Link to='/productos'>Productos</Link>
          <Link to='/nosotros'>Nosotros</Link>
          <Link to='/contactos'>Inscripcion</Link>
      </div>

      <div className="div-contactos">
        <h3>Contactos</h3>
        <Link>Instagram</Link>
        <Link>Facebook</Link>
        <Link>Whatsapp</Link>
        <Link>X</Link>
      </div>

      <div className="div-soporte">
        <h3>Soporte</h3>
        <Link>Ayuda al Soporte</Link>
        <Link>Preguntas Frecuentes</Link>
        <Link>Politica de Devoluciones</Link>
      </div>

      <h3>Copyright Pimentel Facundo ©</h3>
    </footer>
  );
}

export default Footer
