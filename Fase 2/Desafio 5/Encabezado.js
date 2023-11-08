import React from 'react';

const Encabezado = (props) => {
  return (
    <h1 style={{ color: 'blue' }}>{props.titulo}</h1>
  );
};

export default Encabezado;