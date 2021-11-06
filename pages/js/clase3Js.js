/* Desafío 1: Pedir un número mediante prompt y sumarle otro número en cada repetición, 
realizando una salida por cada resultado*/

let numero1 = parseInt(prompt("Ingrese un número por favor"));
var suma = 0; 

for (let i = 0; i < 10; i ++ ){
    let numero2 = parseInt(prompt("Ingrese un otro número (menor a 10) por favor para adicionar al 1ro"));
    suma = numero1 + numero2; 
    console.log (suma)
    // alert (suma);

    if ( i == 10){
        break;
    }
} 

//Desafío 2: Pedir un texto mediante prompt, concatenar un valor en cada repetición, realizando una salida por cada resultado, hasta que se ingresa “ESC”.

let texto = prompt("Ingrese un texto, por favor, (para terminar ingrese ESC)"); 
var resultado = texto; 
var textoConca = " ";

while ( textoConca != 'ESC'){
    textoConca = prompt("Ingrese un texto por favor para sumar"); 
    resultado = `${resultado} ${textoConca}`;
    console.log (resultado);
}

//Desafío 3: Pedir un número por prompt, repetir la salida del mensaje “Hola” la cantidad de veces ingresada.

var numero = parseInt(prompt("Ingrese un número por favor", 0));

for (let i = 1; i <= numero; i ++ ){
   alert("Hola");

}