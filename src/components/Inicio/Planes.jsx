import React from 'react'

const Planes = () => {
  return (
    <>
      <div className="planes-title">
        <h1>PLANES DE ENTRENAMIENTO</h1>
        <p>
          Aqui encontraras nuestros diferentes planes de entrenamientos que
          tenemos para ofrecerte
        </p>
      </div>

      <section className="planes-sec">
        <article className="planes-card">
          <div className="card-title">
            <h1>Rutina Personalizada</h1>
            <p>$25.000</p>
            <p>Rutina estructurada para que utilizarla tu mismo.</p>
          </div>
          <div className="card-items">
            <ul>
              <p>● Rutina Personalizada</p>
              <p>● Tips - Consejos</p>
              <p>● Cuadro de Progresos</p>
            </ul>
          </div>
          <div className="card-p">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, adipisci, nostrum aspernatur atque eum cumque veniam
              quo ea inventore iure vero doloribus, odit eos laborum delectus
              maxime illum officia quibusdam!
            </p>
          </div>
        </article>

        <article className="planes-card">
          <div className="card-title">
            <h1>Plan Premiun</h1>
            <p>$40.000 por Mes</p>
            <p>Primeros 3 meses 20% OFF</p>
          </div>
          <div className="card-items">
            <ul>
              <p>● Rutina Personalizada</p>
              <p>● Tips - Consejos</p>
              <p>● Videos Explicativos</p>
            </ul>
          </div>
          <div className="card-p">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, adipisci, nostrum aspernatur atque eum cumque veniam
              quo ea inventore iure vero doloribus, odit eos laborum delectus
              maxime illum officia quibusdam!
            </p>
          </div>
        </article>

        <article className="planes-card">
          <div className="card-title">
            <h1>Plan Platinum</h1>
            <p>$60.000 por Mes</p>
            <p>Primeros 3 meses 20% OFF</p>
          </div>
          <div className="card-items">
            <ul>
              <p>● Rutina Personalizada</p>
              <p>● Tips - Consejos</p>
              <p>● Videos Explicativos</p>
              <p>● Seguimientos / Asesorias</p>
            </ul>
          </div>
          <div className="card-p">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, adipisci, nostrum aspernatur atque eum cumque veniam
              quo ea inventore iure vero doloribus, odit eos laborum delectus
              maxime illum officia quibusdam!
            </p>
          </div>
        </article>
      </section>
    </>
  );
}

export default Planes
