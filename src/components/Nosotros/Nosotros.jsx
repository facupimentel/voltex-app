import React from 'react'
import cbum from '../../img/nosotros/cbum1.jpg'
import canelo from "../../img/nosotros/canelo.jpg";
import beckham from "../../img/nosotros/beckham.jpg";

const alumnos = [
  {
    id: 1,
    nombre: "cbum",
    src: cbum,
  },
  {
    id: 2,
    nombre: "canelo",
    src: canelo,
  },
  {
    id: 3,
    nombre: "beckham",
    src: beckham,
  },
];

const Nosotros = () => {
  return (
    <main>
      <article class="texto">
        <h1>Sobre Nosotros</h1>
        <p>
          Te presentamos a los entrenadores de nuestra academia que te ayudaran
          en tu entrenamiento dependiendo la disciplina que te especialices, llevandote
          a tu maximo nivel deportivo para cumplir tus objetivos. 
        </p>
      </article>

      <div className="nos-alumnos">
        {alumnos.map((alumno) => (
          <div className="alumno" key={alumno.id}>
            <img src={alumno.src} alt={alumno.src} />
          </div>
        ))}
      </div>
    </main>
  );
}

export default Nosotros
