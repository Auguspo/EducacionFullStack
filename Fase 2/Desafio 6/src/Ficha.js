import React, { useState } from "react";

const Ficha = ({ fila, columna, id, handleFichaClick }) => {
  const [contador, setContador] = useState(0);
  const [colorFondo, setColorFondo] = useState("grey");

  const handleClick = () => {
    setContador(contador + 1);
    setColorFondo(fila === columna ? "red" : "black");
    handleFichaClick({ id, fila, columna, contador });
  };

  return (
    <div
      className="ficha"
      style={{ backgroundColor: colorFondo }}
      onClick={handleClick}
    >
      ID: {id}
      <br />
      Fila: {fila} <br />
      Columna: {columna} <br />
      Contador: {contador}
    </div>
  );
};

export default Ficha;
