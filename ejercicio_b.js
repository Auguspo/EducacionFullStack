const huellas = '🐾';
const gato = '🐈';
var cantidadDeGatos = 5;
var cantidadDePasos = 3;

function gatosPasos(gatos, pasos){

    for(let i = 1 ; i<=gatos; i++){
        let aux=`Gatos #${i}:`+ gato + huellas.repeat(pasos);
        if(i<10) aux = " " + aux;
        console.log(aux); 
    }
   
}

console.log('Ejercicio b:');
gatosPasos(cantidadDeGatos,cantidadDePasos);