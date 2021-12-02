//Proyecto Carrito de Productos

//Cálculo de Total

let boton = document.getElementById("boton");
boton.addEventListener("click", total)

function total(){

    let productoUno=  document.getElementById("productoUno");
    let precioUno = document.getElementById("precioUno");
    let productoDos=  document.getElementById("productoDos");
    let precioDos = document.getElementById("precioDos");

    if( productoUno.value !== " " && productoDos.value !== " " ){

        let total= parseInt(precioUno.value) + parseInt(precioDos.value);
        console.log (total);
        
        /*Esta es un aprueba, agregan nodos hijos al final=
        let parrafo = document.createElement("p");
        parrafo.innerHTML = `<h2>Datos del Total</h2>
                            <p>Total: ${total}</p>`;
        parrafo.style.color = "red";
        parrafo.style.fontSize = "40px";
        mensaje.appendChild(parrafo); */

        let mensaje= document.getElementById ("mensaje")
        mensaje.innerHTML = `<h2>Datos del Total</h2>
                            <p>Total: ${total}</p>`;

    }
    else{
        alert("No ingreso un producto");
    }  
} 


//Practica lista de productos

function listaCompras(){

    let valor =  document.getElementById("elemento");
    let lista = document.getElementById("lista");
    let nuevoLi = document.createElement("li");
    nuevoLi.innerHTML = `${valor.value}`;
    lista.appendChild( nuevoLi);

}

function borrarElemento(){
    let lista = document.getElementById("lista");
    lista.removeChild(lista.lastChild);
}

//Agregar tarjetas de credito en historial del usuario, "es una prueba para usar Local Storage"

// let tarjetasUtilizadas = [];
// let boton2 = document.getElementById ("boton2") ;
// boton2.addEventListener( "click", sumartarjeta);

// function sumartarjeta (){
//     let tarjeta = document.getElementById ("tarjeta").value;
//     let nuevaTC= new tarjeta (tarjeta);
//     tarjetasUtilizadas.push (nuevaTC);

//     tarjetaJSON = JSON.stringify (tarjetasUtilizadas);
//     localStorage.setItem( "1", tarjetaJSON)

//     for (let i=0; i < localStorage.length; i ++){
//         let tc =localStorage.key (i);
//         console.log (tc);
//     }

// }