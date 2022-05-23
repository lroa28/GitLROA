//-----------------------------------------------//
//----------------Métodos generales-------------//
//----------------Page Productos----------------//
//----------------------------------------------//
class Helper {
    static traerDeLocalStorage(key) {
        return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : [];
    }

    static guardarEnLocalStorage(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    static obtenerProducto(id) {
        return productosDB.find(producto => producto.id == id);
    }
}

//–––––––––––––Datos del Carrito–––––––––––//
class Carrito {
    constructor(productos = []) {
        this.productos = productos;
    }

    obtenerProductos() {
        return this.productos;
    }

    buscarProducto(id) {
        return this.productos.find(item => item.producto.id == id);
    }

    agregarProducto(producto) {
        //Busco si el producto ya estaba
        const prod = this.buscarProducto(producto.id);
        if (prod) {
            //Si existía, le sumo 1 a la cantidad
            prod.cantidad++;
        } else {
            //Si no está, creo un objeto con el producto y la cantidad en 1
            this.productos.push({ cantidad: 1, producto: producto });
        }
    }

    eliminarProducto(id) {
        this.productos = this.productos.filter(item => item.producto.id != id);
    }

    incrementarProducto(id) {
        const prod = this.buscarProducto(id);
        prod.cantidad++;
    }

    decrementarProducto(id) {
        //No quiero que se borre el producto si bajara de 1.
        const prod = this.buscarProducto(id);
        if (prod.cantidad > 1) {
            prod.cantidad--;
        }
    }
}

//–––––––––––––/* Valor total */––––––––––––//
class Contador {
    constructor(value) {
        this.valor = value;
    }

    obtenerValor() {
        return this.valor;
    }

    actualizarValor(value) {
        this.valor += value;
    }
}

//–––––––––––––––/* Visual */–––––––––––––//
class Interfaz {
    static modalHandler() {
        modal.classList.toggle('down');
        overlay.classList.toggle('show');
    }

    static mostrarCartelAgregado() {
        const main = document.querySelector('.main');
        const div = document.createElement('div');
        div.setAttribute('class', 'cartel-agregado borde borde--violeta padding');
        const p = document.createElement('p');
        p.textContent = '¡Producto agregado!';
        div.appendChild(p);
        main.appendChild(div);
        setTimeout(() => {
            div.classList.add('mostrar');
        }, 500);
        setTimeout(() => {
            div.classList.remove('mostrar');
        }, 2500);
        setTimeout(() => {
            div.remove();
        }, 3000);
    }

    static actualizarPrecioTotal(contenedor, valor) {
        const div = document.createElement('div');
        div.classList.add('carrito__total');
        const total = document.createElement('span');
        total.textContent = 'Total';
        const cantidad = document.createElement('span');
        cantidad.textContent = valor;
        div.appendChild(total);
        div.appendChild(cantidad);
        contenedor.appendChild(div);
    }

    static cargarProductoEnElModal(id) {
        const producto = productosDB.find(producto => producto.id == id);
        modal.innerHTML = '';
        modal.innerHTML += `
                    <h2 class="title title--small">${producto.titulo}</h2>
                    <div class="detalle">
                        <img src="${producto.imagen}" alt="" class="rounded-circle">
                        <ul>
                            <li>Precio: ${producto.precio}$</li>
                            <li>Fecha: ${producto.fecha}</li>
                        </ul>
                    </div>
                    <div class="detail__button-container">
                        <button id=${producto.id} class="btn btn-light agregar">Agregar al Carrito</button>
                    </div>
        `;
    }

    static mostrarProductos() {
        productos.innerHTML = '';
        productosDB.forEach(producto => {
            productos.innerHTML += `
                <article id=${producto.id} class="producto borde fondo">
                    <div class="producto__contenedor">
                        <div class="producto__header">
                            <img src="${producto.imagen}" class="producto__image"></img>
                        </div>
                        <div class="producto__cuerpo">
                            <h3>${producto.titulo}</h3>
                            <p>${producto.precio}$</p>
                            <a class="btn btn--center btn-dark text-center ver-mas" role="button">Ver más</a>
                            </div>
                        </div>
                    </div>
                </article>
            `;
        });
    }

    static mostrarCarrito() {
        //Traemos el carrito del localStorage
        const carrito = Helper.traerDeLocalStorage('carrito');
        //Si no había nada nos dice que está vacío
        if (carrito.length == 0) {
            contenedor.innerHTML = `
                    <div class="carrito__empty">
                        <p>Tu carrito está vacío</p>
                        <i class="bi bi-emoji-frown-fill"></i>
                    </div>
            `;
        } else {
            //Si había productos guardados agrega al contenedor un 'ul' con el listado de todos los productos
            const total = new Contador(0);
            const ul = document.createElement('ul');
            ul.setAttribute('class', 'carrito__listado');
            contenedor.innerHTML = '';
            carrito.forEach(item => {
                ul.innerHTML += `
                                <li id=${item.producto.id} class="carrito__item borde fondo padding-small">
                                    <img class="carrito__imagen" src="${item.producto.imagen}" alt="">
                                    <div class="carrito__descripcion">
                                        <p>${item.producto.titulo}</p>
                                        <p class="small">Subtotal: $ ${item.producto.precio * item.cantidad}</p>
                                        <button class="remove btn btn-primary btn-outline-dark">Eliminar</button>
                                    </div>
                                    <div class="counter">
                                        <button class="btn btn--small increment fst-italic fw-bold">+</button>
                                        <span class="color-dark">${item.cantidad}</span>
                                        <button class="btn btn--small decrement fst-italic fw-bold">-</button>
                                    </div>
                                </li>
                `;
                total.actualizarValor(item.producto.precio * item.cantidad);
            });
            contenedor.appendChild(ul);
            Interfaz.actualizarPrecioTotal(contenedor, total.obtenerValor())
        }
    }
}

//–––––––––––––––/* Funciones adicionales */–––––––––––––//
//let  acumuladorIndicadorCarrito = 0;
//
//let indicadorCarrito = () => {
//    carritoEnLocalStorage = JSON.parse(localStorage.getItem('carrito'));
//    acumuladorIndicadorCarrito = carritoEnLocalStorage.reduce( (acum , el) => acum += el.cantidad, 0);
//    localStorage.setItem('acumuladorIndicadorCarrito', acumuladorIndicadorCarrito)
//    document.getElementById("acumuladorCarrito").innerHTML = acumuladorIndicadorCarrito;  
//  };
//
//  document.getElementById("acumuladorCarrito").innerHTML = acumuladorIndicadorCarrito;

