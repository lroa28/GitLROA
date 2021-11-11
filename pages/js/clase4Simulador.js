
let passRegistrado = 1234;
let usuario = prompt("Ingrese su nombre de usuario");
let password = prompt("Ingrese su password por default: 1234, luego la cambiará");

function login (usuario, password){

    if( usuario !== " " && password == 1234){
      alert("Bienvenido al sistema: " + usuario);
    }
}

login (usuario, password)