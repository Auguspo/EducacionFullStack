let resultadoAnterior = 0;
let operationales = ["sumar", "multiplicar", "dividir", "restar"];
let operacionalActual = "";

const display = document.getElementById("display");
display.addEventListener("click", resetCalculator);

function updateDisplay(input) {

  if (display.innerHTML.length >= 13) return;

  if (display.innerHTML === "0" && operationales.indexOf(input) === -1) {
    if (input === "decimal") {
      display.innerHTML = "0.";
    }if (input !== "igual") {
      display.innerHTML = input;
    }
  } else if (operationales.indexOf(input) >= 0) {
    OperacionalInput(input);
  } else if (input === "igual") {
    if (operacionalActual !== "") {
      calcular();
    }
  } else if (input === "decimal") {
    if (display.innerHTML.indexOf(".") === -1) {
      display.innerHTML += ".";
    }
  } else {
   
    display.innerHTML += input;
  }
}

function OperacionalInput(input) {
  console.log(
    resultadoAnterior + operacionalActual + parseFloat(display.innerHTML)
  );
  if (operacionalActual === "") {
    operacionalActual = input;
    resultadoAnterior = parseFloat(display.innerHTML);
    display.innerHTML = "0";
  } else {
    resultadoAnterior = calculate(
      resultadoAnterior,
      parseFloat(display.innerHTML),
      operacionalActual
    );
    display.innerHTML = "0";
    operacionalActual = input;
  }
}

function calcular() {
  if (operacionalActual !== "") {
    resultadoAnterior = calculate(
      resultadoAnterior,
      parseFloat(display.innerHTML),
      operacionalActual
    );
    display.innerHTML = resultadoAnterior;
    operacionalActual = "";
  }
}

function resetCalculator() {
  display.innerHTML = "0";
  resultadoAnterior = 0;
  operacionalActual = "";
}

function calculate(first, second, operational) {
  let result;

    switch (operational) {
      case "sumar":
        result = first + second;
        break;
      case "restar":
        result = first - second;
        break;
      case "dividir":
        result = first / second;
        break;
      case "multiplicar":
        result = first * second;
        break;
      default:
        console.log("ERROR");
    }
    return result;}