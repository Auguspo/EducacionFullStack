let resultadoAnterior = 0;
const operadores = ["suma", "multiplicacion", "division", "resta"];
let operadorActivo = "";

const display = document.getElementById("display");
display.addEventListener("click", reiniciarCalculadora);

function actualizarDisplay(input) {
  if (display.innerHTML.length >= 13) return;

  if (display.innerHTML === "0" && !esOperador(input)) {
    if (input === "decimal") {
      display.innerHTML = "0.";
    } else if (input !== "igual") {
      display.innerHTML = input;
    }
  } else if (esOperador(input)) {
    manejarinputOperador(input);
  } else if (input === "igual") {
    if (operadorActivo !== "") {
      calcularResultado();
    }
  } else if (input === "decimal" && display.innerHTML.indexOf(".") === -1) {
    display.innerHTML += ".";
  } else {
    agregarADisplay(input);
  }
}

function esOperador(input) {
  return operadores.includes(input);
}

function manejarinputOperador(input) {
  if (operadorActivo === "") {
    operadorActivo = input;
    resultadoAnterior = parseFloat(display.innerHTML);
    display.innerHTML = "0";
  } else {
    resultadoAnterior = calcular(
      resultadoAnterior,
      parseFloat(display.innerHTML),
      operadorActivo
    );
    display.innerHTML = "0";
    operadorActivo = input;
  }
}

function calcularResultado() {
  if (operadorActivo !== "") {
    resultadoAnterior = calcular(
      resultadoAnterior,
      parseFloat(display.innerHTML),
      operadorActivo
    );
    display.innerHTML = resultadoAnterior;
    operadorActivo = "";
  }
}

function agregarADisplay(input) {
  display.innerHTML += input;
}

function reiniciarCalculadora() {
  display.innerHTML = "0";
  resultadoAnterior = 0;
  operadorActivo = "";
}

function calcular(primero, segundo, operador) {
  switch (operador) {
    case "suma":
      return primero + segundo;
    case "resta":
      return primero - segundo;
    case "division":
      return primero / segundo;
    case "multiplicacion":
      return primero * segundo;
    default:
      console.log("ERROR");
      return null;
  }
}
