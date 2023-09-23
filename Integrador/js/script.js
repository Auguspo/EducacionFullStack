document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submitButton");
    const productForm = document.getElementById("product-form");
  
    submitButton.addEventListener("click", function () {
      // Obtén los valores del formulario
      const nombre = document.getElementById("nombre").value;
      const precio = document.getElementById("precio").value;
      const stock = document.getElementById("stock").value;
      const marca = document.getElementById("marca").value;
      const categoria = document.getElementById("categoria").value;
      const descripcion_corta = document.getElementById("descripcion_corta").value;
      const descripcion_larga = document.getElementById("descripcion_larga").value;
      const edad_desde = document.getElementById("edad_desde").value;
      const edad_hasta = document.getElementById("edad_hasta").value;
  
      // Crea un objeto con los datos del producto
      const producto = {
        nombre,
        precio,
        stock,
        marca,
        categoria,
        descripcion_corta,
        descripcion_larga,
        edad_desde,
        edad_hasta,
      };
  
      // Almacena el objeto en el almacenamiento local del navegador
      localStorage.setItem("nuevoProducto", JSON.stringify(producto));
  
      // Redirige a index.html
      window.location.href = "index.html";
    });
  
    // Extrae el producto del almacenamiento local (si existe)
    const productoJSON = localStorage.getItem("nuevoProducto");
  
    if (productoJSON) {
      const producto = JSON.parse(productoJSON);
  
      // Modifica la última tarjeta en index.html con los datos del producto
      const lastProductCard = document.querySelector(".product-card:last-of-type");
  
      lastProductCard.querySelector("img").src = "./css/img/producto_placeholder.jpg"; // Cambia la imagen de ejemplo por la real
      lastProductCard.querySelector("h2").textContent = producto.nombre;
      lastProductCard.querySelector("p:nth-child(3)").textContent = `Precio: $${producto.precio}`;
      lastProductCard.querySelector("p:nth-child(4)").textContent = producto.descripcion_corta;
    }
  });
  