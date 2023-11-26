import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const Cart = ({ cartItems, removeFromCart, removeElement, addElement }) => {
  return (
    <div className="container mt-5 min-vh-100 ">
      <h2 className="text-left mb-4">Carrito de Compras</h2>
      {cartItems.length === 0 && <p>El carrito se encuentra vacio.</p>}
      {cartItems.map((item) => (
        <div key={item.id}>
          <img src={item.imagen} alt={item.nombre} />
          <h3>{item.nombre}</h3>
          <p>Precio: {item.precio}</p>
          <button onClick={() => removeElement(item.id)}>-</button> <p>Cantidad: {item.cantidad}</p>  <button onClick={() => addElement(item.id)}>+</button>
          <p>Subtotal: ${item.cantidad * item.precio}</p>
          <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
          <button onClick={() => removeElement(item.id)}>-</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
