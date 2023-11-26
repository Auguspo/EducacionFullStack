import React, { useState } from 'react';

const Alta = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    precio: 0,
    stock: 0,
    marca: '',
    categoria: '',
    desc_corta: '',
    desc_larga: '',
    envio: false,
    edad_desde: 0,
    edad_hasta: 0,
    imagen: '',
  });

  const handleChange = (e) => {
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación de Datos
    if (validateData()) {
      try {
        const response = await fetch('https://655a920b6981238d054d92cb.mockapi.io/productos', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          console.log('Datos enviados correctamente a mockapi.io');
        } else {
          console.error('Error al enviar los datos a mockapi.io');
        }
      } catch (error) {
        console.error('Error al enviar los datos:', error);
      }
    }
  };

  const validateData = () => {
    // Implementa la lógica de validación de datos aquí
    // Devuelve true si los datos son válidos, false de lo contrario

    // Ejemplos de validación simples:
    if (!formData.nombre.trim()) {
      console.error('Nombre del producto es obligatorio.');
      return false;
    }

    if (formData.precio <= 0) {
      console.error('Precio del producto debe ser mayor que cero.');
      return false;
    }

    if (formData.stock < 0) {
      console.error('Stock del producto no puede ser negativo.');
      return false;
    }

    // Agrega más validaciones según tus necesidades...

    return true;
  };

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-3xl font-bold mb-4">Alta de Producto</h2>
      <form onSubmit={handleSubmit} className="max-w-md">
        <div className="mb-4">
          <label htmlFor="nombre" className="block text-gray-700 text-sm font-bold mb-2">
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Nombre del Producto"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="precio" className="block text-gray-700 text-sm font-bold mb-2">
            Precio
          </label>
          <input
            type="number"
            id="precio"
            name="precio"
            value={formData.precio}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Precio del Producto"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="stock" className="block text-gray-700 text-sm font-bold mb-2">
            Stock
          </label>
          <input
            type="number"
            id="stock"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Stock del Producto"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="marca" className="block text-gray-700 text-sm font-bold mb-2">
            Marca
          </label>
          <input
            type="text"
            id="marca"
            name="marca"
            value={formData.marca}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Marca del Producto"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="categoria" className="block text-gray-700 text-sm font-bold mb-2">
            Categoría
          </label>
          <input
            type="text"
            id="categoria"
            name="categoria"
            value={formData.categoria}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Categoría del Producto"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="desc_corta" className="block text-gray-700 text-sm font-bold mb-2">
            Descripción Corta
          </label>
          <textarea
            id="desc_corta"
            name="desc_corta"
            value={formData.desc_corta}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Descripción Corta del Producto"
            rows="2"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="desc_larga" className="block text-gray-700 text-sm font-bold mb-2">
            Descripción Larga
          </label>
          <textarea
            id="desc_larga"
            name="desc_larga"
            value={formData.desc_larga}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Descripción Larga del Producto"
            rows="4"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="envio" className="flex items-center">
            <input
              type="checkbox"
              id="envio"
              name="envio"
              checked={formData.envio}
              onChange={handleChange}
              className="mr-2 leading-tight"
            />
            <span className="text-sm">
              Envío sin Cargo
            </span>
          </label>
        </div>
        <div className="mb-4">
          <label htmlFor="edad_desde" className="block text-gray-700 text-sm font-bold mb-2">
            Edad Desde
          </label>
          <input min="1"
            type="number"
            id="edad_desde"
            name="edad_desde"
            value={formData.edad_desde}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Edad Desde"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="edad_hasta" className="block text-gray-700 text-sm font-bold mb-2">
            Edad Hasta
          </label>
          <input
            type="number"
            id="edad_hasta"
            name="edad_hasta"
            value={formData.edad_hasta}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Edad Hasta"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="imagen" className="block text-gray-700 text-sm font-bold mb-2">
            imagen
          </label>
          <input
            type="file"
            id="imagen"
            name="imagen"
            value={formData.imagen}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            
          />
        </div>
       
        <button
          type="submit"
          className="bg-green-500 text-black px-4 py-2 rounded"
        >
          Guardar Producto
        </button>
      </form>
    </div>
  );
};

export default Alta;
