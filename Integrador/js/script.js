// Seleccionar todas las cards de productos
const productCards = document.querySelectorAll('.product-card');

// Agregar un evento de mouseover para cada card
productCards.forEach((card) => {
    card.addEventListener('mouseover', () => {
        // Aplicar una transformación de escala al pasar el mouse sobre la card
        card.style.transform = 'scale(1.05)';
        card.style.transition = 'transform 0.3s ease';
    });

    card.addEventListener('mouseout', () => {
        // Restaurar la escala original cuando se retira el mouse
        card.style.transform = 'scale(1)';
        card.style.transition = 'transform 0.3s ease';
    });
});
