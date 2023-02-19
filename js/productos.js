//-------------------------------------------//
//-----------VARIABLES GLOBALES--------------//
//-------------------------------------------//

//–––––––––––––Capturamos el modal que vamos a mostrar–––––––––––//
const modal = document.querySelector('.detail');

//––––––Capturamos el fondo oscuro típico cuando abrimos un menú hamburguesa–––––//
const overlay = document.querySelector('.overlay');

//––––––Capturamos el contendor donde están todos los productos–––––//
const productos = document.querySelector('.productos');

//-------------------------------------------//
//----------LÓGICA Y EVENTOS----------------//
//------------------------------------------//

//––––––Escuchamos los clicks sobre el contenedor de los productos–––––//
productos.addEventListener('click', e => {
    if (e.target.classList.contains('ver-mas')) {
        const id = e.target.parentNode.parentNode.parentNode.id;
        Interfaz.cargarProductoEnElModal(id);
        Interfaz.modalHandler();
    }
});

//––––––Si hacemos clic sobre el overlay, que se oculte y suba el modal–––––//
overlay.addEventListener('click', () => {
    Interfaz.modalHandler();
});

//–––––Si hacemos clic sobre el modal–––––//
modal.addEventListener('click', e => {
    if (e.target.classList.contains('agregar')) {
        const carrito = new Carrito(Helper.traerDeLocalStorage('carrito'));
        const producto = Helper.obtenerProducto(e.target.id);
        carrito.agregarProducto(producto);
        Interfaz.mostrarCartelAgregado();
        Helper.guardarEnLocalStorage("carrito", carrito.obtenerProductos());
    }
});

//–––––Mostramos los productos al ingresar a la página productos.html–––––//
Interfaz.mostrarProductos();

// --------------------------------------------//
// --------------- Filtro estatico ------------//
// --------------------------------------------//
let categoriasCheckbox = $(`
<hr>
<div class="categorias">
    <p>Categorias:</p>
    <form onsubmit="return false" class="categoriasCheckbox">
        <div class="d-flex justify-content-between align-items-center">
            <input name="identificador" value="AMD_CPU" id="AMD_CPU" type="radio">
            <label for="AMD_CPU">CPU AMD</label>
        </div>
        <div class="d-flex justify-content-between align-items-center">
            <input name="identificador" value="AMD_MOBO" id="AMD_MOBO" type="radio">
            <label for="AMD_MOBO">Mother AMD</label>
        </div>
        <div class="d-flex justify-content-between align-items-center">
            <input name="identificador" value="Intel_CPU" id="Intel_CPU" type="radio">
            <label for="Intel_CPU">CPU Intel</label>
        </div>
        <div class="d-flex justify-content-between align-items-center">
            <input name="identificador" value="Intel_MOBO" id="Intel_MOBO" type="radio">
            <label for="Intel_MOBO">Mother Intel</label>
        </div>
        <div class="d-flex justify-content-between align-items-center">
            <input name="identificador" value="GPU" id="GPU" type="radio">
            <label for="GPU">Tarjeta Gráfica</label>
        </div>
        <input class="btn btn-primary" type="submit" value="Aplicar">
    </form>
</div>
    `
);

        let precioRango = $(`
            <hr>
            <p>Rango de precio</p>
            <form onsubmit="return false" class="precioRange d-flex flex-column">
                <label for="rangeSlider_inversed">Mínimo:</label>
                <input id="rangeSlider_inversed" type="range" min="5000" max="100000" value="5000"></input>
                <output>5000</output>
                <label for="rangeSlider">Máximo:</label>
                <input id="rangeSlider" type="range" min="5000" max="70000" value="70000"></input>
                <output>70000</output>
                <input class="btn btn-primary" type="submit" value="Aplicar">
            </div>
            `
        );
        let cargandoAnimacion = $(
            '<div id="loader" class="lds-dual-ring col-md-10 hidden"></div>'
        );
        
        let finalizarCompraPage = $(`
            <div class="d-flex justify-content-between finalizarCompra row">
                <h1 class="col-md-12">Finalizá tu compra</h1>
                <div class="productos_finalizarCompra col-md-4">
                    <div class="total">
                        <p>Total</p>
                    </div>
                </div>
                <div class="datosPersonales_finalizarCompra col-md-7">
                    <h3>Datos Personales (values por defecto para no tener que tipear)</h3>
                    <form onsubmit="return false" class="finalizarCompraForm">
                        <div class="form-group">
                            <label for="nombre">Nombre</label>
                            <input class="form-control"  type="text" id="nombre" value="Juan Perez">
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input class="form-control"  type="email" id="email" value="jperez@email.com">
                        </div>
                        <div class="form-group d-flex flex-row justify-content-between flex-wrap telefono">
                            <label class="w-100" for="tel" >Telefono</label>
                            <input class="form-control"  type="text" value="1553441515" id="tel">
                        </div>
                        <div class="form-group cuotas">
                            <label for="cuotas">Cantidad de Cuotas</label>
                            <select class="form-control" name="" id="cuotas">
                                <option value=""></option>
                                <option value=""></option>
                                <option value=""></option>
                                <option value=""></option>
                            </select>
                        </div>
                        <h3>Datos de la tarjeta de Credito</h3>
                        <div class="tarjeta_finalizarCompra">
                            <div class="row justify-content-between">
                                <div class="col-md-12">
                                    <img src="img/credit_card.svg">
                                </div>
                                <div class="col-md-7 izquierda_tarjeta">
                                    <label for="creditCardNumber">Número de tarjeta</label>
                                    <input class="numeroDeTarjeta" type="text" name="" id="creditCardNumber" value="1213-91011-5678-1234">
                                    <label for="creditCardName">Nombre</label>
                                    <input type="text" name="" id="creditCardName" value="PEREZ JUAN">
                                    <label for="creditCardCVC">cvc</label>
                                    <input type="text" name="" id="creditCardCVC" value="000">
                                </div>
                                <div class="col-md-4 derecha_tarjeta">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label for="creditCardDesde">Desde</label>
                                            <input type="text" name="" id="creditCardDesde" value="00/00">
                                        </div>
                                        <div class="col-md-6">
                                            <label for="credictCardHasta">Hasta</label>
                                            <input type="text" name="" id="credictCardHasta" value="00/00">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <input class="btn btn-primary" type="submit" value="Confirmar compra">
                        </div>
                    </form>
                </div>
            </div>
            `
        );