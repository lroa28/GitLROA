const carrito = document.querySelector('#carrito');
const productos = document.querySelector('#lista-productos');
const listaProductos = document.querySelector('#lista-carrito');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const procesarPedidoBtn = document.querySelector('#procesar-pedido');

class carro {
    constructor (carrito, productos, listaProductos, vaciarCarritoBtn, procesarPedidoBtn){
        this.carrito= carrito;
        this.productos= productos;
        this.listaProductos= listaProductos;
        this.vaciarCarritoBtn= vaciarCarrito;
        this.procesarPedidoBtn= procesarPedido;
    }
}

// let carro = [];
let carro2 = new carro();

cargarEventos();

function cargarEventos(){

    //Se ejecuta cuando se presionar agregar Comprar
    productos.addEventListener( "click" , (e)=>{carro.comprarProducto(e)});

    //Cuando se elimina productos del carrito
    carrito.addEventListener("click", (e)=>{carro.eliminarProducto(e)});

    //Al vaciar carrito
    vaciarCarritoBtn.addEventListener("click", (e)=>{carro.vaciarCarrito(e)});

    //Al cargar documento se muestra lo almacenado en LS
    document.addEventListener("DOMContentLoaded", carro.leerLocalStorage());

    //Enviar pedido a otra pagina
    procesarPedidoBtn.addEventListener("click" , (e)=>{carro.procesarPedido(e)});
}