const API_BASE_URL = "https://655a920b6981238d054d92cb.mockapi.io/productos";

export const getProductos = async () => {
  try {
    const response = await fetch(API_BASE_URL);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error al obtener productos:", error);
    throw error;
  }
};

export const addToCart = (cartItems, producto) => {
  const existingItem = cartItems.find((item) => item.id === producto.id);

  if (existingItem) {
    return addElementToCart(cartItems, producto.id);
  }

  return [...cartItems, { ...producto, cantidad: 1 }];
};

export const removeFromCart = (cartItems, productoId) => {
  const updatedCart = cartItems.filter((item) => item.id !== productoId);
  return updatedCart;
};

export const addElementToCart = (cartItems, productoId) => {
  const updatedCart = cartItems.map((item) => {
    if (item.id === productoId) {
      if (item.cantidad < item.stock) {
        return { ...item, cantidad: item.cantidad + 1 };
      } else {
        return { ...item, stockLimitReached: true };
      }
    }
    return item;
  });

  return updatedCart;
};

export const removeElementToCart = (cartItems, productoId) => {
  const updatedCart = cartItems.map((item) =>
    item.id === productoId
      ? { ...item, cantidad: item.cantidad - 1, stockLimitReached: false }
      : item
  );

  const itemToUpdate = updatedCart.find((item) => item.id === productoId);

  if (itemToUpdate && itemToUpdate.cantidad <= 0) {
    return removeFromCart(updatedCart, productoId);
  }

  return updatedCart;
};

export const submitProducto = async (productoData) => {
  try {
    const response = await fetch(API_BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productoData),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al enviar producto:", error);
    throw error;
  }
};

export const submitComentario = async (comentarioData) => {
  try {
  } catch (error) {
    console.error("Error al enviar comentario:", error);
    throw error;
  }
};
