import React from "react";
import lewan from "../../img/inicio/lewan.jpg";
import SliderPhotos from "./SliderPhotos";
import Planes from "./Planes";
import AboutMe from "./AboutMe";
import Sections from "./Sections";
import { Contact } from "./Contact";

const Inicio = () => {
  return (
    <>
      <AboutMe/>
      <Sections/>
      <SliderPhotos/>
      <Planes/>
      <Contact/>
    </>
  );
};

export default Inicio;
