import React from "react";

export const Contact = () => {
  return (
    <>
      <section className="section-form">
        <article className="texto">
          <h3>Si te interesa nuestros asesoramientos no dudes en enviar tus datos para ponernos en contacto con vos.
            </h3>
            <h3>El cambio lo haces vos.</h3>
        </article>

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
              Telefono:
              <input type="email" name="email" required />
            </label>
            <label>
              Comentanos un poco sobre tus metas y objetivos
              <textarea name="mensaje" required></textarea>
            </label>
            <button type="submit">Enviar</button>
          </form>
        </article>
        
      </section>
    </>
  );
};
