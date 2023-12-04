import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button, Alert } from "react-bootstrap";

const Cart = ({
  cartItems,
  removeFromCart,
  removeElement,
  addElement,
  clearCart,
}) => {
  const total = cartItems.reduce(
    (acc, item) => acc + item.cantidad * item.precio,
    0
  );
  const [pedidoEnviado, setPedidoEnviado] = useState(false);
  const handleEnviarPedido = () => {
    setPedidoEnviado(true);

    clearCart();
  };
  return (
    <div className="container mt-5 min-vh-100 ">
      <h2 className="text-left mb-4">Carrito de Compras</h2>
      {
        <div className="table-responsive">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th className="align-middle col-auto text-center w-25">
                  Imagen
                </th>
                <th className="align-middle text-center">Nombre</th>
                <th className="align-middle text-center">Precio</th>
                <th className="align-middle text-center">Cantidad</th>
                <th className="align-middle text-center">Subtotal</th>
                <th className="align-middle text-center">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center">
                    El carrito se encuentra vacío.
                  </td>
                </tr>
              )}
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td className="align-middle col-auto text-center">
                    <img
                      src={item.imagen}
                      className="img-fluid w-50"
                      alt={item.nombre}
                    />
                  </td>
                  <td className="align-middle text-center">{item.nombre}</td>
                  <td className="align-middle text-center">${item.precio}</td>
                  <td className="align-middle text-center">
                    <div className="d-flex justify-content-center align-items-center">
                      <Button
                        variant="danger"
                        onClick={() => removeElement(item.id)}
                      >
                        -
                      </Button>
                      <span className="mx-2">{item.cantidad}</span>
                      <Button
                        variant={item.stockLimitReached ? "danger" : "success"}
                        onClick={() => addElement(item.id)}
                        disabled={item.stockLimitReached}
                      >
                        {item.stockLimitReached ? (
                          <span>✕</span>
                        ) : (
                          <span>+</span>
                        )}
                      </Button>
                    </div>
                  </td>

                  <td className="align-middle text-center">
                    ${item.cantidad * item.precio}
                  </td>
                  <td className="align-middle text-center">
                    <div className="d-flex justify-content-center align-items-center">
                      <Button
                        variant="danger"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Eliminar
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      }
      {cartItems.length !== 0 && cartItems[0].cantidad !== 0 && (
        <div className="border p-2 d-flex justify-content-between align-items-center">
          <div className="d-flex justify-content-between">
            <Button
              variant="danger w-50"
              onClick={() => clearCart()}
              className="mx-2"
            >
              Vaciar carrito
            </Button>
            <Button
              variant="success w-50"
              onClick={handleEnviarPedido}
              disabled={pedidoEnviado}
            >
              {pedidoEnviado ? "Pedido Enviado" : "Enviar Pedido"}
            </Button>
          </div>

          <div className="text-md-right">
            <h2 className="text-lg">Total: ${total}</h2>
          </div>
        </div>
      )}{" "}
      {pedidoEnviado && (
        <Alert variant="success" className="mt-3 text-center">
          ¡Pedido enviado con éxito!
        </Alert>
      )}
    </div>
  );
};

export default Cart;
