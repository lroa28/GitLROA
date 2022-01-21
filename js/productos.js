/* 
==============================================
VARIABLES GLOBALES
==============================================
*/
//Capturamos el modal que vamos a mostrar
const modal = document.querySelector('.detail');

//Capturamos el fondo oscuro típico cuando abrimos un menú hamburguesa
const overlay = document.querySelector('.overlay');

//Capturamos el contendor donde están todos los productos
const productos = document.querySelector('.productos');

/* 
==============================================
LÓGICA Y EVENTOS
==============================================
*/

//Escuchamos los clic sobre el contenedor de los productos
productos.addEventListener('click', e => {
    if (e.target.classList.contains('ver-mas')) {
        const id = e.target.parentNode.parentNode.parentNode.id;
        Interfaz.cargarProductoEnElModal(id);
        Interfaz.modalHandler();
    }
});

//Si hacemos clic sobre el overley, que se oculte y suba el modal
overlay.addEventListener('click', () => {
    Interfaz.modalHandler();
});

//Si hacemos clic sobre el modal
modal.addEventListener('click', e => {
    if (e.target.classList.contains('agregar')) {
        const carrito = new Carrito(Helper.traerDeLocalStorage('carrito'));
        const producto = Helper.obtenerProducto(e.target.id);
        carrito.agregarProducto(producto);
        Interfaz.mostrarCartelAgregado();
        Helper.guardarEnLocalStorage("carrito", carrito.obtenerProductos());
    }
});

//Mostramos los productos al ingresar a la página productos.html
Interfaz.mostrarProductos();