
var cantidadDeGatos = 10;
var cantidadDePasos = 4;

    function mostrarGatos(cantidadDeGatos, cantidadDePasos) {
      for (let i = 1; i <= cantidadDeGatos; i++) {
        

        const gatoEmoji = i % 2 === 0 ? "🐈🐈‍⬛" : "🐈";
        
        let aux=`Gato #${i}:`+ gatoEmoji + " 🐾".repeat(cantidadDePasos);
       
        console.log( aux);

      }
    }

 
    console.log("Ejercicio c:");
    mostrarGatos(cantidadDeGatos, cantidadDePasos);

