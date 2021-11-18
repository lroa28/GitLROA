/* Arrays , FOR + PUSH */

let usuarios = [];
let nombreUsuarios ;

for( let i = 0 ; i < 5 ; i++){
    nombreUsuarios = prompt("Ingrese el nombre de los usuarios: ");
    usuarios.push( nombreUsuarios );
}

console.log( usuarios );
