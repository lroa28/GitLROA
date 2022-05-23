// ------------------------------------------//
// ---------------- BUSCADOR ----------------//
// ------------------------------------------//
$('.buscador').submit( (e) => { 
    //LO QUE INGRESA EL USUARIO
    let inputDeUsuario = e.target[0].value
    //LO QUE INGRESA EL USUARIO EN MAYUSCULA
    let iputEnMayuscula = inputDeUsuario.toUpperCase()
    //REFERENCIAS PARA CONDICIONAL 
    $('.unProducto').remove();
    $('.grid-container h3').remove();
    $('.grid-container').prepend('<h3 class="col-md-12">Resultados para: ' + inputDeUsuario + '</h3>');
    for (const iterator of productos_data) {
        let productoEnMayuscula = iterator.nombre.toUpperCase()
        if (productoEnMayuscula.indexOf(iputEnMayuscula) > -1) {
            crearEstructura(iterator, $('.grid'))
        } 
    }
    
});