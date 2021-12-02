//Proyecto Carrito de Productos

// Pregunto si es mayor de edad

    let nombre = prompt("Ingrese su nombre");
    let  edad = prompt("Ingrese su edad");
    alert("Hello," + nombre + "!");

    if(parseInt(edad) >= 18){
        console.log("Es mayor de edad puede ingresar.")
       
    }    
    else{
        console.log("Usted es menor no puede ingresar.")
    }

// Logeo a la aplicación

let usuarioReg = "usuario";
let passReg = 1234;
let error = 0;

for( let i = 0 ; i < 5  ;  i = i +1){

    let usuario = prompt("Ingrese su usuario o su usuario de promoción (usuario)");
    let pass = prompt("Ingrese su pass o su pass de promoción (1234)");
    if( usuario == usuarioReg && passReg == pass ){
        console.log("Bienvendio al sistema");
        break
    }
    else{
        console.log("Error:" + i);
        error = error +1;
        if( error == 3){
            console.log("No puede ingresar al sistema");
            break
        }
    }
}

//Ingreso de productos

/* Arrays , FOR + PUSH */

let productos = [];
let nombreProductos ;

for( let i = 0 ; i < 3 ; i++){
    nombreProductos = prompt("Ingrese el nombre de los dos productos que quiere comprar: Cuellito/Bufanda/Guantes/Pollera/Medias/Buzo");
    productos.push( nombreProductos);
}
console.log( productos );

//Descuento de productos

let importeConImpuestos,importeSinImpuestos,tipoDeProducto,impuesto; 
/*No crear muchas variables globales por fuera de la función, por ejemplo importeConImpuestos. Tal vez puede crearse dentro de la función. 
Si necesito usarla por fuera, la devuelvo con un return.*/
/* En lo posible separar la funcionalidad de cada función. Por ejemplo, la función pedir datos sólamente debería pedir datos. 
Sin embargo además de pedirlos nos dice cuánto es el importe y lo calcula.*/
	
    function introDatos(){
	    importeSinImpuestos=prompt('Introduzca el importe del producto');
		tipoDeProducto=parseInt(prompt('Introduzca un tipo de producto: 1 (Iva 21%), 2 (Iva 10%) o 3 (Iva 5%)'));
				
		if(tipoDeProducto==1 || tipoDeProducto==2 || tipoDeProducto==3){
            obtenerImporteConImpuestos(importeSinImpuestos,tipoDeProducto);
		}else{
		    alert('No existe este tipo de producto');
		}
		
	}

    function obtenerImporteConImpuestos(importeSinImpuestos,tipoDeProducto) {

        if(tipoDeProducto==1){
            impuesto=1.21;
        }else if(tipoDeProducto==2){
            impuesto=1.1;
        }else{
            impuesto=1.05;
        }
		importeConImpuestos=importeSinImpuestos*impuesto;
		alert('El importe con impuestos del tipo de producto '+tipoDeProducto+ ' es: $'+ importeConImpuestos+ '\n\n');
    }    


//Descuento segun día

/*En la línea let resultado = (precio - descuento(precio, dia)); de la función que me consultabas, 
estás metiendo una función dentro de otra (esto se llama recursión) y no hay forma de que se frene, por lo tanto el 
navegador termina colapsando. Hay que evitar las recursiones a menos que se esté trabajando con ese tipo de lógica.*/

function descuento ( precio , dia ){
  
    if( dia == "lunes"){
        let descuentoPrecio = precio * 0.05;         
        return descuentoPrecio;    
    }
    else if( dia == "viernes"){
        let descuentoPrecio = precio * 0.15;          
        return descuentoPrecio;    
    }
    else if( dia == "sabado"){
        let descuentoPrecio = precio * 0.20;           
        return descuentoPrecio;
    }
    let resultado = ( precio -  descuento(precio , dia) );
    alert(resultado);
}
let precio = prompt("Ingrese el precio del producto");
let dia = prompt("Ingrese el dia de la compra: lunes, viernes o sabado");

//Ordenar los productos

// Ejemplo1 de ORDENACION POR COLOR
let productos1 = [ 
    { ref: 'Cuellito', color: 'blanco', talla: 'S' },
    { ref: 'Bufanda', color: 'negro', talla: 'L' },   
    { ref: 'Guantes', color: 'verde', talla: 'M' },
    { ref: 'Pollera', color: 'rojo', talla: 'L' },
    { ref: 'Medias', color: 'rojo', talla: 'L' },
    { ref: 'Buzo', color: 'azul', talla: 'L' }
]
// Ordenación por colores
productos1.sort( (a, b) => (a.color > b.color) ? 1 : -1)
console.log(productos)


// Ejemplo2 de ORDENACION POR NOMBRE
let productos2 = [
    { name: 'Cuellito', value: 1 },
    { name: 'Bufanda', value: 2 },
    { name: 'Guantes', value: 3 },
    { name: 'Pollera', value: 5 },
    { name: 'Medias', value: 4 },
    { name: 'Buzo', value: 37 }
  ];
 productos2.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    // a debe ser igual a b
    return 0;
  });
console.log(productos2)