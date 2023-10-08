const pesosInput = document.getElementById("pesos");
const cotizacionInput = document.getElementById("cotizacion");
const resultadoSpan = document.getElementById("resultado");
const autoUpdateCheckbox = document.getElementById("autoUpdate");
const ultimaActualizacionParagraph = document.getElementById("ultimaActualizacion");

let autoUpdateInterval;

function obtenerCotizacionDolar() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://www.dolarsi.com/api/api.php?type=valoresprincipales", true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      const dolarBlue = data[1].casa.venta; // Dependiendo de la estructura de la respuesta de la API
      cotizacionInput.value = parseFloat(dolarBlue.replace(",", ".")); // Asegúrate de manejar el formato correctamente
      actualizarConversion();
    }
  };
  xhr.send();
}

function actualizarConversion() {
  const pesos = parseFloat(pesosInput.value);
  const cotizacion = parseFloat(cotizacionInput.value);

  if (!isNaN(pesos) && !isNaN(cotizacion)) {
    const resultado = pesos / cotizacion;
    resultadoSpan.textContent = `$${resultado.toFixed(2)} USD`;
  }
}

autoUpdateCheckbox.addEventListener("change", function () {
  const fechaHora = new Date().toLocaleString();
  if (this.checked) {
    obtenerCotizacionDolar(); // Obtener la cotización del dólar blue al habilitar la actualización automática
    ultimaActualizacionParagraph.textContent = `Última actualización: ${fechaHora}`;
    autoUpdateInterval = setInterval(obtenerCotizacionDolar, 2000);
  } else {
    clearInterval(autoUpdateInterval);
  }
});

// Actualizar la conversión cuando cambian los valores de pesos y cotización
pesosInput.addEventListener("input", actualizarConversion);
cotizacionInput.addEventListener("input", actualizarConversion);
