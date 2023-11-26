const API_BASE_URL = 'https://655a920b6981238d054d92cb.mockapi.io/productos';

export const getProductos = async () => {
  try {
    const response = await fetch(API_BASE_URL);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error al obtener productos:', error);
    throw error; // Puedes manejar el error de otra manera según tus necesidades
  }
};

export const addToCart = (cartItems, producto) => {
  const existingItem = cartItems.find((item) => item.id === producto.id);

  if (existingItem) {
    // Si el producto ya está en el carrito, incrementa la cantidad
    return cartItems.map((item) =>
      item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
    );
  }

  // Si el producto no está en el carrito, agrega uno nuevo
  return [...cartItems, { ...producto, cantidad: 1 }];
};

export const removeFromCart = (cartItems, productoId) => {
  // Filtra los elementos que no coincidan con el ID del producto a eliminar
  const updatedCart = cartItems.filter((item) => item.id !== productoId);
  return updatedCart;
};

export const addElementToCart= (cartItems, productoId) => {
  const updatedCart = cartItems.filter((item) => item.cantidad++);
  return updatedCart;

}
export const removeElementToCart= (cartItems, productoId) => {
  const updatedCart = cartItems.filter((item) => item.cantidad--);
  return updatedCart;

}

export const submitProducto = async (productoData) => {
  try {
    const response = await fetch(API_BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productoData),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al enviar producto:', error);
    throw error; // Puedes manejar el error de otra manera según tus necesidades
  }
};

export const submitComentario = async (comentarioData) => {
  // Lógica para enviar datos del formulario de contacto
  try {
    // Puedes implementar una lógica similar a la de submitProducto
  } catch (error) {
    console.error('Error al enviar comentario:', error);
    throw error; // Puedes manejar el error de otra manera según tus necesidades
  }
};
