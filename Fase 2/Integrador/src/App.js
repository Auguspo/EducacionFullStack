import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Home from "./components/Home";
import Alta from "./components/Alta";
import Contacto from "./components/Contacto";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import {
  addToCart,
  removeFromCart,
  submitProducto,
  submitComentario,
  removeElementToCart,
  addElementToCart,
} from "./services/api";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (producto) => {
    setCartItems(addToCart(cartItems, producto));
  };

  const handleRemoveFromCart = (productoId) => {
    setCartItems(removeFromCart(cartItems, productoId));
  };

  const handleProductoSubmit = (productoData) => {
    submitProducto(productoData).then((data) => console.log(data));
  };

  const handleComentarioSubmit = (comentarioData) => {
    submitComentario(comentarioData).then((data) => console.log(data));
  };

  const handleCleanCart = () => {
    setCartItems([]);
  };

  const handleRemoveElement = (productoId) => {
    setCartItems(removeElementToCart(cartItems, productoId));
  };
  const handleAddElement = (productoId) => {
    setCartItems(addElementToCart(cartItems, productoId));
  };

  return (
    <Router>
      <Navbar bg="light" expand="lg" sticky="top">
        <Navbar.Brand className="ms-3" as={Link} to="/">
          Tienda Online
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="mx-2" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto mx-5">
            <Nav.Link as={Link} to="/">
              Productos
            </Nav.Link>
            <Nav.Link as={Link} to="/alta">
              Alta Producto
            </Nav.Link>
            <Nav.Link as={Link} to="/contacto">
              Contacto
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link
              onClick={console.log(cartItems)}
              className="fs-2 ms-auto mx-3"
              as={Link}
              to="/cart"
            >
              🛒
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home addToCart={handleAddToCart} />} />
        <Route
          path="/alta"
          element={<Alta onSubmit={handleProductoSubmit} />}
        />
        <Route
          path="/contacto"
          element={<Contacto onSubmit={handleComentarioSubmit} />}
        />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              removeFromCart={handleRemoveFromCart}
              removeElement={handleRemoveElement}
              addElement={handleAddElement}
              clearCart={handleCleanCart}
            />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
