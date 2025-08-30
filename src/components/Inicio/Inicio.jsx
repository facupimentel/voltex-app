import React from "react";
import lewan from "../../img/inicio/lewan.jpg";
import SliderPhotos from "./SliderPhotos";
import Planes from "./Planes";
import AboutMe from "./AboutMe";
import Sections from "./Sections";

const Inicio = () => {
  return (
    <>
      <AboutMe/>
      <Sections/>
      <SliderPhotos/>
      <Planes/>
    </>
  );
};

export default Inicio;
