let gatos = [];
let blackBoxCounter = 0;
let catBox = document.getElementById("catContainer");

function agregarGato(nroGato) {
  const emojis = ["😺", "😸", "😹"];

  // Agregamos los gatos al final del Array
  gatos.push(emojis[nroGato]);
  console.log(gatos);

  blackBox();

  // Unimos el array y lo guardamos dentro del contenedor en el HTML
  catBox.innerHTML = gatos.join("");
}

function blackBox() {
  // Si cumplen la condicion se borran los ultimos gatos y se agrega una blackbox al inicio
  if (
    gatos.length >= 5 &&
    gatos.slice(-5).every((v) => v === gatos[gatos.length - 5])
  ) {
    gatos = [];
    blackBoxCounter++;
    for (let i = 0; i < blackBoxCounter; i++) {
      gatos.unshift("⬛");
    }
    console.log("Guardamos los gatos");
    console.log(gatos);
  } else {
    console.log("No hay suficientes gatos iguales para guardar");
  }
}

document.getElementById("btn1").addEventListener("click", () => agregarGato(0));
document.getElementById("btn2").addEventListener("click", () => agregarGato(1));
document.getElementById("btn3").addEventListener("click", () => agregarGato(2));
