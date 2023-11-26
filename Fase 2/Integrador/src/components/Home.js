import React, { useState, useEffect } from "react";
import { getProductos } from "../services/api";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Modal, Row, Col } from "react-bootstrap";

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
      <div className="container mt-5" >
        <h2 className="text-left mb-4">Productos</h2>
        <Row xs={1} sm={2} md={3} lg={4} xl={5} className="mx-auto">
          {productos.map((producto) => (
            <Col key={producto.id} className="mb-4">
                   <Card className="h-100">
              <Card.Img variant="top" src={producto.imagen} className="img-fluid" />
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <Card.Title >{producto.nombre}</Card.Title>
                  <Card.Text>${producto.precio}</Card.Text>
                  <Card.Text>{producto.descripcionCorta}</Card.Text>
                </div>
                <div>
                  <Button
                    variant={addedToCartMap[producto.id] ? "success" : "primary"}
                    onClick={() => handleAddToCart(producto)}
                    className="mb-2"
                  >
                    {addedToCartMap[producto.id]
                      ? "Añadido al Carrito"
                      : "Agregar al Carrito"}
                  </Button>
                  <Button
                    variant="link"
                    onClick={() => openModal(producto)}
                  >
                    Ver Detalles
                  </Button>
                </div>
              </Card.Body>
            </Card>
            </Col>
          ))}
        </Row>

        {/* Modal para mostrar detalles del producto */}
        <Modal show={showModal} onHide={closeModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedProduct?.nombre}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={selectedProduct?.imagen}
              alt={selectedProduct?.nombre}
              className="img-fluid"
            />
            <p className="mt-3">Precio: ${selectedProduct?.precio}</p>
            <p>Stock: {selectedProduct?.stock}</p>
            <p>Marca: {selectedProduct?.marca}</p>
            <p>Categoría: {selectedProduct?.categoria}</p>
            <p>Descripción Corta: {selectedProduct?.desc_corta}</p>
            <p>Descripción Larga: {selectedProduct?.desc_larga}</p>
            <p>Envío sin Cargo: {selectedProduct?.envio ? "Sí" : "No"}</p>
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
    </div>
  );
};

export default Home;
