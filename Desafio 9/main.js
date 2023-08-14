let trailingResult = 0;
let operationals = ["add", "multiply", "divide", "subtract"];
let workingOperational = "";

const display = document.getElementById("display");
display.addEventListener("click", resetCalculator);

function updateDisplay(input) {

  if (display.innerHTML.length >= 13) return;

  if (display.innerHTML === "0" && operationals.indexOf(input) === -1) {
    if (input === "decimal") {
      display.innerHTML = "0.";
    } else {
      display.innerHTML = input;
    }
  } else if (operationals.indexOf(input) >= 0) {
    handleOperationalInput(input);
  } else if (input === "equals") {
    if (workingOperational !== "") {
      calculateResult();
    }
  } else if (input === "decimal") {
    if (display.innerHTML.indexOf(".") === -1) {
      display.innerHTML += ".";
    }
  } else {
    display.innerHTML += input;
  }
}

function handleOperationalInput(input) {
  console.log(
    trailingResult + workingOperational + parseFloat(display.innerHTML)
  );
  if (workingOperational === "") {
    workingOperational = input;
    trailingResult = parseFloat(display.innerHTML);
    display.innerHTML = "0";
  } else {
    trailingResult = calculate(
      trailingResult,
      parseFloat(display.innerHTML),
      workingOperational
    );
    display.innerHTML = "0";
    workingOperational = input;
  }
}

function calculateResult() {
  if (workingOperational !== "") {
    trailingResult = calculate(
      trailingResult,
      parseFloat(display.innerHTML),
      workingOperational
    );
    display.innerHTML = trailingResult;
    workingOperational = "";
  }
}

function resetCalculator() {
  display.innerHTML = "0";
  trailingResult = 0;
  workingOperational = "";
}

function calculate(first, second, operational) {
  let result;

    switch (operational) {
      case "add":
        result = first + second;
        break;
      case "subtract":
        result = first - second;
        break;
      case "divide":
        result = first / second;
        break;
      case "multiply":
        result = first * second;
        break;
      default:
        console.log("ERROR");
    }
    return result;
  
}
