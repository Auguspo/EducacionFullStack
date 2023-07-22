const arrGatos = ["😺", "😸", "😹"];
var cantidadDeGatos = 10;

function mostrarGatos(cant){
    for(let i = 1; i<=cant; i++){
       if(i<10) console.log(` Gato #${i}: ${arrGatos[(i - 1) % arrGatos.length]}`);
       else console.log(`Gato #${i}: ${arrGatos[(i - 1) % arrGatos.length]}`);
    };
};

console.log("Ejercicio a:");
mostrarGatos(cantidadDeGatos);