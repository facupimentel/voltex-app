import React from "react";

export const Contact = () => {
  return (
    <>
      <section className="section-form">
        <article className="formulario">
          <form action="https://formspree.io/f/tu-endpoint" method="POST">
            <label>
              Nombre:
              <input type="text" name="nombre" required />
            </label>
            <label>
              Email:
              <input type="email" name="email" required />
            </label>
            <label>
              Mensaje:
              <textarea name="mensaje" required></textarea>
            </label>
            <button type="submit">Enviar</button>
          </form>
        </article>
        
        <article className="texto">
          <h3>Si te interesa nuestros asesoramientos no dudes en enviar tus datos para ponernos en contacto con vos.
            El cambio lo haces vos.
          </h3>
        </article>
      </section>
    </>
  );
};
