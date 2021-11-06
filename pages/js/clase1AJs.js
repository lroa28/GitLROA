/* Archivo JS linkeado en contacto.html */

/* Sugerencia: Usamos prompt() para solicitar datos al usuario y console.log() o alert() para mostrar el 
resultado de las operaciones realizadas con esos datos. Si vas a sumar una entrada tene en cuenta que tenes que 
parsearla antes. Usando parseInt() o parseFloat(). 

Desafio 1-A: Pedir nombre mediante prompt y mostrarlo en consola junto con algún texto de saludo. 
Ejemplo:  ¡Hola, Juan!*/

let nombre = prompt("Please enter your name (Por favor, ingrese su nombre):");
console.log("Hello," + nombre + "!");

/* Desafio 1-B: Pedir un número mediante prompt, parsearlo, sumarlo a otro que se encuentre almacenado en una 
variable y luego mostrar el resultado en consola.*/

const numero;
numero = 1; 

let descuentodeseado = prompt("Ingrese el descuento que le gustaría obtener en su compra (del 1 al 100):");
let descuento = parseInt(descuentodeseado) * numero;
console.log("El porcentaje de descuento que desea es: " + descuento + "%" );
alert("El porcentaje de descuento que desea es: " + descuento + "%");