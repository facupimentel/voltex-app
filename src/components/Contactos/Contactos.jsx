import React from "react";
import logoIg from "../../img/footer-contactos/instagram.png";
import logoFb from "../../img/footer-contactos/facebook.png";
import logoWp from "../../img/footer-contactos/whatsapp.png";
import logoX from "../../img/footer-contactos/x.png";
import { Link } from "react-router-dom";

export const Contactos = () => {
  const logos = [
    {
      id: 1,
      src: logoIg,
      url: "https://www.instagram.com/facundopimentel_/",
    },
    { src: logoFb, id: 2 },
    { src: logoWp, id: 3 },
    { src: logoX, id: 4, url: "https://x.com/facuupimentel_" },
  ];

  return (
    <main className="sec-contactos">
      <article className="texto">
        <h1>COMUNICATE CON NOSOTROS</h1>
        <p>
          Te dejamos nuestras redes donde podes seguirnos y contactarnos, aqui
          te podras enterar de nuestras novedades, nuestras rutinas, nuevos
          planes y todo acerca de los profesores que trabajan con nosotros. Te
          esperamos para poder ser parte de tus metas y logros.
        </p>
      </article>

      <article className="formulario">
        <form action="" className="formulario">
          <input
            className="controles"
            type="text"
            name="nombre"
            id="nombre-apellido"
            placeholder="Nombre y Apellido"
          />
          <input
            className="controles"
            type="text"
            name=""
            id="edad"
            placeholder="Edad"
          />
          <input
            className="controles"
            type="text"
            name=""
            id="peso"
            placeholder="Peso Corporal"
          />

          <textarea
            className="controles"
            name=""
            id=""
            cols="30"
            rows="5"
            placeholder="Contanos brevemente tus metas y objetivos"
          ></textarea>

          <input
            className="controles"
            type="text"
            name=""
            id="correo"
            placeholder="Correo Electronico"
          />
          <input
            className="controles"
            type="text"
            name=""
            id="tel"
            placeholder="Telefono de Contacto"
          />
          <input className="boton" type="button" value="ENVIAR" />
        </form>
      </article>
    </main>
  );
};

export default Contactos;
