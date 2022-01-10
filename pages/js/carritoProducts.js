// --------------TOMA LAS ACCIONES DE LOS BOTONES--------------------//
// --------------DE LA PAGINA DEL HTML: products.html----------------//

const carrito = document.getElementById("carrito");
//SUBIRLO AL LOCALSTORAGE
const productos = document.getElementById("lista-productos");
const listaProductos = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.getElementById("vaciar-carrito");

// -----------------------AGREGAR------------------------------------//
// ----------------------PRODUCTOS-----------------------------------//
// ---------------------AL CARRITO-----------------------------------//
// -----EN EL HEADER DE LA PAGINA DEL HTML: products.html------------//

cargarEventListeners();

function cargarEventListeners() {
  productos.addEventListener("click", comprarProductos);
  carrito.addEventListener("click", eliminarProducto);
  vaciarCarritoBtn.addEventListener("click", vaciarCarrito);
  document.addEventListener("DOMContentLoaded", leerLocalStorage);
}

function comprarProductos (e) {
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const producto = e.target.parentElement.parentElement;
        leerDatosProductos(producto);
    }
}

function leerDatosProductos(producto){
    const infoProductos = {
        imagen: producto.querySelector('img').src,
        titulo: producto.querySelector('h4').textContent,
        precio: producto.querySelector('.precio span').textContent,
        id: producto.querySelector('a').getAttribute('data-id')
        //agregar la cantidad! usan el push desde el HTML , CON UN IF SI ESTA EL PRODUCTO PARA Q LO SUME O NO. SINO EXISTE PONER 1
    }

    insertarCarrito(infoProductos);
}

function insertarCarrito(producto) {
    const row = document.createElement('tr');
    row.innerHTML = `
       <td>
           <img src="${producto.imagen}" width=100> 
       </td> 
       <td>${producto.titulo}</td>
       <td>${producto.precio}</td>
       <td>
        <a href="#" class="borrar-producto" data-id="${producto.id}">X</a>
       </td>
    `;
    listaProductos.appendChild(row);
    guardarProductoLocalStorage(producto);
}

function eliminarProducto(e) {
    e.preventDefault();

    let producto,
        productoId;
    
    if(e.target.classList.contains('borrar-producto')) {
        e.target.parentElement.parentElement.remove();
        producto = e.target.parentElement.parentElement;
        productoId = producto.querySelector('a').getAttribute('data-id');
    }
    eliminarProductosLocalStorage(productoId)
}

function vaciarCarrito(){
    while(listaProductos.firstChild){
        listaProductos.removeChild(listaProductos.firstChild);
    }
    vaciarLocalStorage();

    return false;
}


// -----------------------FUNCIONES------------------------------------//
// ----------------------PARA MANEJO DE DATOS-------------------------//
// ----------------------EN LOCAL STORAGE----------------------------//
function guardarProductoLocalStorage(producto) {
    let productos;

    productos = obtenerProductosLocalStorage();
    productos.push(producto);

    localStorage.setItem('productos', JSON.stringify(productos));
}

function obtenerProductosLocalStorage() {
    let productosLS;

    if(localStorage.getItem('productos') === null) {
        productosLS = [];
    }else {
        productosLS = JSON.parse(localStorage.getItem('productos'));
    }
    return productosLS;
}

function leerLocalStorage() {
    let productosLS;

    productosLS = obtenerProductosLocalStorage();

    productosLS.forEach(function(producto){
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${producto.imagen}" width=100>
            </td>
            <td>${producto.titulo}</td>
            <td>${producto.precio}</td>
            <td>
                <a href="#" class="borrar-producto" data-id="${producto.id}">X</a>
            </td>
        `;
        listaProductos.appendChild(row);
    });
}
//SACAR ESTO Y USAR EL ARRAY DE CARRITO QUE DEBO CREAR

function eliminarProductoLocalStorage(producto) {
    let productosLS;
    productosLS = obtenerProductosLocalStorage();

    productosLS.forEach(function(productoLS, index){
        if(productoLS.id === producto) {
            productoLS.splice(index, 1);
        }
    });

    localStorage.setItem('productos', JSON.stringify(productoLS));
}

function vaciarLocalStorage() {
    localStorage.clear();
}
