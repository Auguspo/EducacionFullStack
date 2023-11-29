import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    descripcion: '',
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateData()) {
      
      try {
        
        
        await new Promise((resolve) => setTimeout(resolve, 1000));

        
        setShowSuccessModal(true);

        
        setFormData({
          nombre: '',
          email: '',
          asunto: '',
          descripcion: '',
        });
      } catch (error) {
        console.error('Error al enviar datos de contacto:', error);
      }
    }
  };

  const validateData = () => {
    
    
    
    if (!formData.nombre.trim()) {
      console.error('Nombre es obligatorio.');
      return false;
    }

    

    return true;
  };

  const handleClose = () => {
    
    setShowSuccessModal(false);
  };

  return (
    <div className="container mt-5 min-vh-100">
      <h2 className="text-left text-dark mb-4">Contacto</h2>
      <form onSubmit={handleSubmit} className="mx-auto max-w-lg">
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="form-control"
            placeholder="Nombre"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            placeholder="Email"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="asunto" className="form-label">
            Asunto
          </label>
          <input
            type="text"
            id="asunto"
            name="asunto"
            value={formData.asunto}
            onChange={handleChange}
            className="form-control"
            placeholder="Asunto"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="descripcion" className="form-label">
            Descripción
          </label>
          <textarea
            id="descripcion"
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            className="form-control"
            placeholder="Escribe tu descripción aquí"
            rows="4"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
        >
          Enviar Mensaje
        </button>
      </form>

      {/* Modal de éxito */}
      <Modal show={showSuccessModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>¡Envío Exitoso!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Tu mensaje se ha enviado correctamente.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Contacto;
