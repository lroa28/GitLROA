/* 
==============================================
VARIABLES GLOBALES
==============================================
*/
//Capturamos el contenedor donde pondremos el carrito
const contenedor = document.querySelector('.carrito');

/* 
==============================================
LÓGICA Y EVENTOS
==============================================
*/

//Utilizamos delegación de eventos para ejecutar una función si hacen clic sobre el contenedor
contenedor.addEventListener('click', e => {
    if (e.target.classList.contains('remove')) {
        const id = e.target.parentNode.parentNode.id;
        const carrito = new Carrito(Helper.traerDeLocalStorage('carrito'));
        carrito.eliminarProducto(id);
        Helper.guardarEnLocalStorage('carrito', carrito.obtenerProductos());
        Interfaz.mostrarCarrito();
    } else if (e.target.classList.contains('increment')) {
        const id = e.target.parentNode.parentNode.id;
        const carrito = new Carrito(Helper.traerDeLocalStorage('carrito'));
        carrito.incrementarProducto(id);
        Helper.guardarEnLocalStorage('carrito', carrito.obtenerProductos());
        Interfaz.mostrarCarrito();
    } else if (e.target.classList.contains('decrement')) {
        const id = e.target.parentNode.parentNode.id;
        const carrito = new Carrito(Helper.traerDeLocalStorage('carrito'));
        carrito.decrementarProducto(id);
        Helper.guardarEnLocalStorage('carrito', carrito.obtenerProductos());
        Interfaz.mostrarCarrito();
    }
});

//Mostramos el carrito apenas se carga la página
Interfaz.mostrarCarrito();