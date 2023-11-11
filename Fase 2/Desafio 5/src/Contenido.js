import React from "react";
import { useState } from "react";

const Contenido = (props) => {
  const [backgroundColor, setBackgroundColor] = useState("yellow");

  const cambiarFondo = () => {
    const colores = ["yellow", "cyan", "orange"];
    const currentIndex = colores.indexOf(backgroundColor);
    const nextIndex = (currentIndex + 1) % colores.length;
    console.log("El fondo es de color "+ colores[currentIndex])
    setBackgroundColor(colores[nextIndex]);
  };

  return (
    <div style={{ backgroundColor }}>
      <p>{props.texto}</p>
      <button onClick={cambiarFondo}>Cambiar Fondo</button>
    </div>
  );
};

export default Contenido;
