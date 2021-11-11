var importeConImpuestos,importeSinImpuestos,tipoDeProducto,impuesto;

	
    function introDatos(){
	    importeSinImpuestos=prompt('Introduzca el importe del producto');
		importeSinImpuestos=Number(importeSinImpuestos);
		tipoDeProducto=prompt('Introduzca un tipo de producto: 1 (Iva 21%), 2 (Iva 10%) o 3 (Iva 5%)');
		tipoDeProducto=Number(tipoDeProducto);
		
		if(tipoDeProducto==1 || tipoDeProducto==2 || tipoDeProducto==3){
            obtenerImporteConImpuestos(importeSinImpuestos,tipoDeProducto);
		}else{
		    alert('No existe este tipo de producto');
		}
		obtenerImporteConImpuestos2(importeSinImpuestos);
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

    //  var resultado=[];
    //  function obtenerImporteConImpuestos2(importeSinImpuestos){
	//  resultado=[undefined,importeSinImpuestos*1.21,importeSinImpuestos*1.1,importeSinImpuestos*1.05];
	//  alert('Array de importes con impuestos: '+resultado+ '\n\n');
	// 	alert('Para un importe sin impuestos de '+importeSinImpuestos+' y tipo de producto 0 el resultado de importe con impuestos es '+resultado[0]+' \n\n');
	// 	alert('Para un importe sin impuestos de '+importeSinImpuestos+' y tipo de producto 1 el resultado de importe con impuestos es '+resultado[1]+' \n\n');
	// 	alert('Para un importe sin impuestos de '+importeSinImpuestos+' y tipo de producto 2 el resultado de importe con impuestos es '+resultado[2]+' \n\n');
	// 	alert('Para un importe sin impuestos de '+importeSinImpuestos+' y tipo de producto 3 el resultado de importe con impuestos es '+resultado[3]+' \n\n');
	// } 
    
    function validarNombre( nombreUsuario ){
        if( nombreUsuario != ""){
            alert (" Ingresa ")
            return true;
        }
        else{
            alert ("Ingrese un usuario ")
            return false;
        }
    }
    let usuario = prompt("Ingrese su nombre de usuario");

    // Pablo!!!: esta funcion no me funcionó, quise colocar la var importeConImpuestos, aca en la funcion en lugar de precio y no lo interpreta
    function descuento ( precio , dia ){
      
        if( dia == "Lunes"){
            let descuentoPrecio = precio * 0.05;         
            return descuentoPrecio;    
        }
        else if( dia == "Viernes"){
            let descuentoPrecio = precio * 0.15;          
            return descuentoPrecio;    
        }
        else if( dia == "Sabado"){
            let descuentoPrecio = precio * 0.20;           
            return descuentoPrecio;
        }
                

        let resultado = ( precio -  descuento(precio , dia) );
        alert(resultado);
    }
    let precio = prompt("Ingrese el precio del producto");
    let dia = prompt("Ingrese el dia de la compra: lunes, viernes o sábados");
    




