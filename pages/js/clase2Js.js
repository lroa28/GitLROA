/* Archivo JS linkeado en index.html */
/* Desafio 2-A: Pedir número mediante prompt y si es mayor a 1000 mostrar un alert.*/

let numeroUno = parseInt(prompt("Ingrese un número por favor"));

if( numeroUno > 1000){

    console.log("Es mayor a 1000");
    alert("El número ingresado es: " + numeroUno + " y es mayor a 1000");
}


/* Desafio 2-B: Pedir un texto mediante prompt, y si es igual a "Hola" mostrar un alerta por consola.*/

let palabraUsuario = prompt("Ingrese una palabra");

if( (palabraUsuario == "Hola")){
    
    console.log("El usuario dijo: Hola");

}

/* Desafio 2-C: Pedir un número por prompt y evaluar si está entre 10 y 50. En caso positivo mostrar un alert.*/

let numero = parseInt(prompt("Ingrese un número por favor"));

if( ( numero > 10) && (numero < 50) ){
    
    console.log("El número es  " + numero + " y se encuentra entre 10 y 50");
    alert( "El número es  " + numero + " y se encuentra entre 10 y 50" );

}

