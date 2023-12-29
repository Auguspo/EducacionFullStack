import React from "react";
import { Table } from "react-bootstrap";
const Tabla = ({ productos, handleClick }) => {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className="align-middle col-auto text-center w-25">Imagen</th>
            <th className="align-middle text-center">Nombre</th>
            <th className="align-middle text-center">Precio</th>
            <th className="align-middle text-center">Stock</th>
            <th className="align-middle text-center">Categoría</th>
            <th className="align-middle text-center">Descripción</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto.id} onClick={() => handleClick(producto)}>
              <td className="align-middle col-auto text-center">
                                 <img
                  src={producto.imagen}
                  className="img-fluid w-50"
                  alt={producto.nombre}
                />
              </td>
              <td className="align-middle text-center">{producto.nombre}</td>
              <td className="align-middle text-center">${producto.precio}</td>
              <td className="align-middle text-center">{producto.stock}</td>
              <td className="align-middle text-center">
                                 {producto.categoria}
              </td>
              <td className="align-middle text-center">
                                 {producto.desc_corta}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Tabla;
