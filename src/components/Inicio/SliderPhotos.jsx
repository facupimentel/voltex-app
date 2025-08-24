import React from 'react'

const SliderPhotos = () => {
  return (
    <>
      <section className="section-video">
        {/* Video de fondo */}
        <video autoPlay muted loop className="video">
          <source src="./video/0821.mp4" type="video/mp4" />
        </video>
        <video autoPlay muted loop className="video">
          <source src="./video/0822.mp4" type="video/mp4" />
        </video>
        <video autoPlay muted loop className="video">
          <source src="./video/0823.mp4" type="video/mp4" />
        </video>

        <div class="content">
          <h1>FUERZA + MENTE</h1>
          <p className="text-xl mt-4">
            Entrena y superate cada dia
          </p>
        </div>
      </section>
    </>
  );
}

export default SliderPhotos
