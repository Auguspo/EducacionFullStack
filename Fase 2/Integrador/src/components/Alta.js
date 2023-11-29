import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";

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
  const [showSuccessModal, setShowSuccessModal] = useState(false);

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
        const response = await fetch(
          "https://655a920b6981238d054d92cb.mockapi.io/productos",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        if (response.ok) {
          console.log("Datos enviados correctamente a mockapi.io");
          
          setShowSuccessModal(true);
        } else {
          console.error("Error al enviar los datos a mockapi.io");
        }
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
  const handleCloseModal = () => {
    setShowSuccessModal(false);
  };
  return (
    <div className="container my-5">
      <h2 className="text-3xl font-bold mb-4">Alta de Producto</h2>
      <Form onSubmit={handleSubmit} className="max-w-md">
        <Form.Group className="mb-4">
          <Form.Label
           
            className="text-gray-700 text-sm font-bold mb-2"
          >
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
        <Form.Group className="mb-4">
          <Form.Label
           
            className="text-gray-700 text-sm font-bold mb-2"
          >
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
        <Form.Group className="mb-4">
          <Form.Label
                       className="text-gray-700 text-sm font-bold mb-2"
          >
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
        <Form.Group className="mb-4">
          <Form.Label
                       className="text-gray-700 text-sm font-bold mb-2"
          >
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
        <Form.Group className="mb-4">
          <Form.Label
           
            className="text-gray-700 text-sm font-bold mb-2"
          >
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
        <Form.Group className="mb-4">
          <Form.Label
           
            className="text-gray-700 text-sm font-bold mb-2"
          >
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
        <Form.Group className="mb-4">
          <Form.Label
         
            className="text-gray-700 text-sm font-bold mb-2"
          >
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
        <Form.Group className="mb-4">
          <Form.Check
            type="checkbox"
            id="envio"
            name="envio"
            checked={formData.envio}
            onChange={handleChange}
            label="Envío sin Cargo"
          />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label
           
            className="text-gray-700 text-sm font-bold mb-2"
          >
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
          <Form.Label
           
            className="text-gray-700 text-sm font-bold mb-2"
          >
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
        <Form.Group className="mb-4">
          <Form.Label
           
            className="text-gray-700 text-sm font-bold mb-2"
          >
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
        <Button type="submit" variant="success" className="px-4 py-2 rounded">
          Guardar Producto
        </Button>
      </Form>

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
