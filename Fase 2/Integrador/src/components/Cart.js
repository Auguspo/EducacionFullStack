import React from 'react';


const Cart = ({ cartItems, removeFromCart, removeElement, addElement }) => {
  return (
    <div>
      <h2>Carrito de Compras</h2>
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
