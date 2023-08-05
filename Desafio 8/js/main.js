window.onload = function () {
  console.log("Contenido del DOM cargado");

  var textarea = document.querySelector("#origen");
  textarea.value =
    "<p>Este contenido <strong>está listo</strong><br>para ser editado y pasarlo abajo.</p>";

  textarea.addEventListener("input", function () {
    var inputs = document.getElementsByTagName("input");

    console.log(inputs);
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].disabled = false;
    }
    var minusculasButton = document.querySelector("body > button");
    minusculasButton.disabled = false;
  });

  var reemplazarButton = document.getElementById("btn-reemplazar");
  var agregarButton = document.querySelector(".btn-agregar");
  var agregar5Button = document.querySelectorAll(".btn-agregar")[1];
  var agregar10Button = document.querySelectorAll(".btn-agregar")[2];
  var agregarNButton = document.querySelectorAll(".btn-agregar")[3];

  reemplazarButton.addEventListener("click", function () {
    var destino = document.getElementById("destino");
    destino.innerHTML = textarea.value;
  });

  agregarButton.addEventListener("click", function () {
    var destino = document.getElementById("destino");
    destino.innerHTML += textarea.value;
  });

  agregar5Button.addEventListener("click", function () {
    var destino = document.getElementById("destino");
    for (var i = 0; i < 5; i++) {
      destino.innerHTML += textarea.value;
    }
  });

  agregar10Button.addEventListener("click", function () {
    var destino = document.getElementById("destino");
    for (var i = 0; i < 10; i++) {
      destino.innerHTML += textarea.value;
    }
  });

  agregarNButton.addEventListener("click", function () {
    var destino = document.getElementById("destino");
    var n = prompt("Ingrese la cantidad de veces:");
    for (var i = 0; i < parseInt(n); i++) {
      destino.innerHTML += textarea.value;
    }
  });

  var vaciarButton = document.querySelector(".btn-vaciar");
  var mayusculasButton = document.querySelector(".btn-convertir-a-mayusculas");
  var minusculasButton = document.querySelector("button[disabled]");

  vaciarButton.addEventListener("click", function () {
    var destino = document.getElementById("destino");
    destino.innerHTML = "";
  });

  mayusculasButton.addEventListener("click", function () {
    var destino = document.getElementById("destino");
    destino.innerHTML = destino.innerHTML.toUpperCase();
  });

  minusculasButton.addEventListener("click", function () {
    var destino = document.getElementById("destino");
    destino.innerHTML = destino.innerHTML.toLowerCase();
  });

  var listItems = document.getElementsByTagName("li");
  for (var i = 0; i < listItems.length; i++) {
    listItems[i].innerHTML = "[Ok] " + listItems[i].innerHTML;
  }
};
