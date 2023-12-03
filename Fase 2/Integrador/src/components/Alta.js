import React, { useState, useEffect } from "react";
import { Form, Button, Modal, Row, Col, Table } from "react-bootstrap";
import {
  getProductos,
  eliminarProducto,
  submitProducto,
} from "../services/api";

const Alta = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    precio: 0,
    stock: 0,
    marca: "",
    categoria: "",
    desc_corta: "",
    desc_larga: "",
    envio: false,
    edad_desde: 0,
    edad_hasta: 0,
    imagen: "",
  });
  const [productos, setProductos] = useState([]);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    getProductos().then((data) => setProductos(data));
  }, []);
  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateData()) {
      try {
        const response = await submitProducto(formData);

        if (response.id) {
          setProductos([...productos, { ...response }]);
          setShowSuccessModal(true);
        } else {
          console.error("Error al agregar el producto a la API.");
        }

        setFormData({
          nombre: "",
          precio: 0,
          stock: 0,
          marca: "",
          categoria: "",
          desc_corta: "",
          desc_larga: "",
          envio: false,
          edad_desde: 0,
          edad_hasta: 0,
          imagen: "",
        });
      } catch (error) {
        console.error("Error al enviar los datos:", error);
      }
    }
  };

  const validateData = () => {
    if (!formData.nombre.trim()) {
      console.error("Nombre del producto es obligatorio.");
      return false;
    }

    if (formData.precio <= 0) {
      console.error("Precio del producto debe ser mayor que cero.");
      return false;
    }

    if (formData.stock < 0) {
      console.error("Stock del producto no puede ser negativo.");
      return false;
    }

    return true;
  };

  const handleProductClick = (producto) => {
    setFormData({
      nombre: producto.nombre,
      precio: producto.precio,
      stock: producto.stock,
      marca: producto.marca,
      categoria: producto.categoria,
      desc_corta: producto.desc_corta,
      desc_larga: producto.desc_larga,
      envio: producto.envio,
      edad_desde: producto.edad_desde,
      edad_hasta: producto.edad_hasta,
      imagen: producto.imagen,
    });

    document
      .getElementById("formulario")
      .scrollIntoView({ behavior: "smooth" });
  };
  const handleCloseModal = () => {
    setShowSuccessModal(false);
  };

  return (
    <div id="formulario" className="container my-5">
      <h2 className="text-3xl font-bold mb-4">Alta de Producto</h2>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-4">
              <Form.Label className="text-gray-700 text-sm font-bold mb-2">
                Nombre
              </Form.Label>
              <Form.Control
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Nombre del Producto"
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-4">
              <Form.Label className="text-gray-700 text-sm font-bold mb-2">
                Precio
              </Form.Label>
              <Form.Control
                type="number"
                id="precio"
                name="precio"
                value={formData.precio}
                onChange={handleChange}
                placeholder="Precio del Producto"
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group className="mb-4">
              <Form.Label className="text-gray-700 text-sm font-bold mb-2">
                Stock
              </Form.Label>
              <Form.Control
                type="number"
                id="stock"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                placeholder="Stock del Producto"
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-4">
              <Form.Label className="text-gray-700 text-sm font-bold mb-2">
                Marca
              </Form.Label>
              <Form.Control
                type="text"
                id="marca"
                name="marca"
                value={formData.marca}
                onChange={handleChange}
                placeholder="Marca del Producto"
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group className="mb-4">
              <Form.Label className="text-gray-700 text-sm font-bold mb-2">
                Categoría
              </Form.Label>
              <Form.Control
                type="text"
                id="categoria"
                name="categoria"
                value={formData.categoria}
                onChange={handleChange}
                placeholder="Categoría del Producto"
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-4">
              <Form.Label className="text-gray-700 text-sm font-bold mb-2">
                Descripción Corta
              </Form.Label>
              <Form.Control
                as="textarea"
                id="desc_corta"
                name="desc_corta"
                value={formData.desc_corta}
                onChange={handleChange}
                placeholder="Descripción Corta del Producto"
                rows="2"
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group className="mb-4">
              <Form.Label className="text-gray-700 text-sm font-bold mb-3">
                Descripción Larga
              </Form.Label>
              <Form.Control
                as="textarea"
                id="desc_larga"
                name="desc_larga"
                value={formData.desc_larga}
                onChange={handleChange}
                placeholder="Descripción Larga del Producto"
                rows="4"
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-4">
              <Form.Label className="text-gray-700 text-sm font-bold mb-2">
                Edad Desde
              </Form.Label>
              <Form.Control
                type="number"
                id="edad_desde"
                name="edad_desde"
                value={formData.edad_desde}
                onChange={handleChange}
                placeholder="Edad Desde"
                required
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="text-gray-700 text-sm font-bold mb-2">
                Edad Hasta
              </Form.Label>
              <Form.Control
                type="number"
                id="edad_hasta"
                name="edad_hasta"
                value={formData.edad_hasta}
                onChange={handleChange}
                placeholder="Edad Hasta"
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group className="mb-4">
              <Form.Label className="text-gray-700 text-sm font-bold mb-2">
                Imagen
              </Form.Label>
              <Form.Control
                placeholder="Ingrese la URL de la imagen"
                type="text"
                id="imagen"
                name="imagen"
                value={formData.imagen}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-4 d-flex align-items-center mt-4 mb-4">
              <Form.Check
                type="checkbox"
                id="envio"
                name="envio"
                checked={formData.envio}
                onChange={handleChange}
                label="Envío sin Cargo"
              />
            </Form.Group>
          </Col>
        </Row>
        <div className="d-flex justify-content-center align-items-center">
          <Button
            type="submit"
            variant="success"
            className="px-4 py-2 rounded w-50"
          >
            Guardar Producto
          </Button>

          <Button
            variant="danger"
            className="mx-2 w-50"
            onClick={async () => {
              await eliminarProducto(formData, productos, setProductos);
              setFormData({
                nombre: "",
                precio: 0,
                stock: 0,
                marca: "",
                categoria: "",
                desc_corta: "",
                desc_larga: "",
                envio: false,
                edad_desde: 0,
                edad_hasta: 0,
                imagen: "",
              });
            }}
            disabled={
              Object.values(formData).every((value) => value === "") ||
              !productos.find((p) => p.nombre === formData.nombre)
            }
          >
          Borrar Producto
          </Button>
        </div>
      </Form>

      {/* Lista de productos en forma de tabla */}
      <h3 className="mt-5">Lista de Productos</h3>
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
            <tr key={producto.id} onClick={() => handleProductClick(producto)}>
              <td className="align-middle col-auto text-center">
                {/* Aquí puedes colocar el código para mostrar la imagen */}
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
                {/* Calcula y muestra el subtotal */}
                {producto.categoria}
              </td>
              <td className="align-middle text-justify">
                {/* Calcula y muestra el subtotal */}
                {producto.desc_corta}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal de éxito */}
      <Modal show={showSuccessModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Producto Guardado</Modal.Title>
        </Modal.Header>
        <Modal.Body>El producto se ha cargado con éxito.</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleCloseModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Alta;
