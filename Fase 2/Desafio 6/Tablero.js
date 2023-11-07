import React, { useState } from "react";
import Ficha from "./Ficha";

const Tablero = () => {
  const [msj, setMsj] = useState("Seleccione una ficha");
  const [colorTxt, setColorTxt] = useState("blue");

  const handleFichaClick = ({ id, fila, columna, contador }) => {
    setColorTxt(fila === columna ? "red" : "black");
    setMsj(
      `Ficha ID:${id} (F:${fila} C:${columna}) - Contador: ${contador + 1}`
    );
  };

  return (
    <div>
      <div className="mensaje" style={{ color: colorTxt }}>
        {msj}
      </div>
      <div className="tablero">
        {Array.from({ length: 3 }, (_, fila) =>
          Array.from({ length: 3 }, (_, columna) => (
            <Ficha
              fila={fila}
              id={3 * fila + columna + 1}
              columna={columna}
              handleFichaClick={handleFichaClick}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Tablero;
