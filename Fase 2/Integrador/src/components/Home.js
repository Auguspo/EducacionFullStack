import React, { useState, useEffect } from "react";
import { getProductos } from "../services/api";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Modal } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";

const Home = ({ addToCart }) => {
  const [productos, setProductos] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [addedToCartMap, setAddedToCartMap] = useState({});

  useEffect(() => {
    getProductos().then((data) => setProductos(data));
  }, []);

  const openModal = (producto) => {
    setSelectedProduct(producto);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setShowModal(false);
  };

  const handleAddToCart = (producto) => {
    addToCart(producto);
    
    // Establecer el producto actual como añadido al carrito
    setAddedToCartMap((prevMap) => ({
      ...prevMap,
      [producto.id]: true,
    }));

    // Revertir el estado después de 2 segundos
    setTimeout(() => {
      setAddedToCartMap((prevMap) => ({
        ...prevMap,
        [producto.id]: false,
      }));
    }, 2000);
  };

  return (
    <div>
      <h2>Productos</h2>
      <Row>
        {productos.map((producto) => (
          <Col xs={12} sm={6} md={4} lg={3} xl={2} key={producto.id}>
            <Card>
              <Card.Img variant="top" src={producto.imagen} />
              <Card.Body>
                <Card.Title>{producto.nombre}</Card.Title>
                <Card.Text>${producto.precio}</Card.Text>
                <Card.Text>{producto.descripcionCorta}</Card.Text>
                <Button
                  variant={addedToCartMap[producto.id] ? "success" : "primary"}
                  onClick={() => handleAddToCart(producto)}
                  className={`transition-transform transform ${
                    addedToCartMap[producto.id] ? "bg-green-500" : ""
                  }`}
                >
                  {addedToCartMap[producto.id]
                    ? "Añadido al Carrito"
                    : "Agregar al Carrito"}
                </Button>
                <Button variant="link" onClick={() => openModal(producto)}>
                  Ver Detalles
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal para mostrar detalles del producto */}
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedProduct?.nombre}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <img src={selectedProduct?.imagen} alt={selectedProduct?.nombre} style={{ maxWidth: "80%" }} />
          <p>Precio: ${selectedProduct?.precio}</p>
          <p>Stock: {selectedProduct?.stock}</p>
          <p>Marca: {selectedProduct?.marca}</p>
          <p>Categoría: {selectedProduct?.categoria}</p>
          <p>Descripción Corta: {selectedProduct?.desc_corta}</p>
          <p>Descripción Larga: {selectedProduct?.desc_larga}</p>
          <p>Envío sin Cargo: {selectedProduct?.envio ? 'Sí' : 'No'}</p>
          <p>Edad Desde: {selectedProduct?.edad_desde}</p>
          <p>Edad Hasta: {selectedProduct?.edad_hasta}</p>
         
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Home;
