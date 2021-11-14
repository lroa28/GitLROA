//CLASES y METODOS//

class usuarioNuevo{
    constructor( nombre , apellido, mail){
        this.nombre = nombre;
        this.apellido = apellido;
        this.mail = mail;
    }

/*Metodos*/

    controlarMaildupli(){
        alert("Ya se encuentra registrado en el sistema " + this.nombre+": "+ this.mail);
        return this.mail
    }

    controlarNombreVacio(){
        alert("Ingreso un nombre vacio" + this.nombre);
        return this.nombre
    }
    
    controlarApellidoVacio(){
        alert("Ingreso un apellido vacio" + this.apellido);
        return this.apellido
    }
}

let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");
let  mail = prompt("Ingrese su mail");

console.log("Su nombre es: " + nombre);
console.log("Su aplellido es: " + apellido);
console.log("Su mail es: " + mail);

let usuarioRegistrado = new usuarioNuevo( "Lucrecia", "Roa", "lroa@hotmail.com");

console.log(usuarioRegistrado);

if( usuarioRegistrado.mail == mail){
   console.log("Ingrese con otro mail " + usuarioRegistrado.mail);
   usuarioRegistrado.controlarMaildupli();
}else {
    alert("Mail no duplicado")  
}

if( nombre ===" ") {
    usuarioRegistrado.controlarNombreVacio();
    alert("Ingreso un nombre vacio")
}

if( apellido ===" ") {
    usuarioRegistrado.controlarApellidoVacio();
    alert("Ingreso un apellido vacio");
}
