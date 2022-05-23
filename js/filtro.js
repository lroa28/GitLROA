// --------------------------------------------//
// --------------- Filtro estatico ------------//
// --------------------------------------------//
let categoriasCheckbox = $(`
<hr>
<div class="categorias">
    <p>Categorias:</p>
    <form onsubmit="return false" class="categoriasCheckbox">
        <div class="d-flex justify-content-between align-items-center">
            <input name="identificador" value="buzos id="buzos" type="radio">
            <label for="buzos">buzos</label>
        </div>
        <div class="d-flex justify-content-between align-items-center">
            <input name="identificador" value="tejidos" id="tejidos" type="radio">
            <label for="tejidos">tejidos</label>
        </div>
        <div class="d-flex justify-content-between align-items-center">
            <input name="identificador" value="moldes" id="moldes" type="radio">
            <label for="moldes">moldes</label>
        </div>
        <div class="d-flex justify-content-between align-items-center">
            <input name="identificador" value="barbijos" id="barbijos" type="radio">
            <label for="barbijos">barbijos</label>
        </div>
        <div class="d-flex justify-content-between align-items-center">
            <input name="identificador" value="sets" id="sets" type="radio">
            <label for="sets">sets</label>
        </div>
        <input class="btn btn-primary" type="submit" value="Aplicar">
    </form>
</div>`
);

let precioRango = $(`
    <hr>
    <p>Rango de precio</p>
    <form onsubmit="return false" class="precioRange d-flex flex-column">
        <label for="rangeSlider_inversed">Mínimo:</label>
        <input id="rangeSlider_inversed" type="range" min="150" max="100000" value="150"></input>
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
                            <input class="form-control"  type="email" id="email" value="abc@email.com">
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
                                    <input type="text" name="" id="creditCardName" value="Nombre Apellido">
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

// ---------------------------------------------//
// ---------------- FILTRO POR -----------------//
// ---------------- CATEGORIA ------------------//
// ---------------------------------------------//
$('aside').append(categoriasCheckbox)
$('aside').on('submit', 'form.categoriasCheckbox', (e) => { 
    $('.unProducto').remove()
    //
    
for (const iterator of e.target) {
    
    if (iterator.checked === true) {
        let elValueCheckedSinGuion = iterator.value.replaceAll('_', ' ')
        let elValueCheckedMother = elValueCheckedSinGuion.replaceAll('MOBO', 'Tarjetas Madre').replaceAll('CPU', 'Micro Procesadores').replaceAll('GPU', 'Tarjetas Gráfica')
        $('.grid-container h3').html('Viendo: ' + elValueCheckedMother)
        let elValueChecked = iterator.value
        for (const producto of productos_data) {
            let identificadoEnProducto = producto.identificador
            if (identificadoEnProducto.indexOf(elValueChecked) > -1) {
                crearEstructura(producto, $('.grid'));
                
            };
        };
    };
};
                    
// CIERRA EL FILTRO AL SER UTILIZADO
//AGREGA BOTÓN PARA ABRÍR EL FILTRO
//EJ DE CALLBACK
$(e.target).slideUp(400, () => {
    let toggleBtn = $('<a class="toggle btn btn-primary">Volver a filtrar</a>')
    $(e.target.parentElement).append(toggleBtn)
    $(toggleBtn).on('click', (event) => {
        $(e.target).slideDown(300)
        $(event.target).remove()
    })
})
});

// ---------------------------------------------//
// ---------------- FILTRO POR -----------------//
// ---------------- RANGO DE  ------------------//
// ---------------- PRECIO  --------------------//
// ---------------------------------------------//
$('aside').append(precioRango)
$('aside').on('submit', 'form.precioRange', (e) => {
let precioEnValueMayor = e.target[2].value
let precioEnValueMenor = e.target[0].value

for (const producto of $('.unProducto')) {
        
let precioEnProducto = $(producto).children('div')[0].lastElementChild.innerHTML
    if (parseInt(precioEnProducto) > parseInt(precioEnValueMenor) && parseInt(precioEnProducto) < parseInt(precioEnValueMayor)) {
    } else {
        producto.remove()
    }
}
});

//CAMBIAMOS EL VALOR DE OUTPUT PARA QUE CAMBIE CON EL CALUE 
//DEL INPUT
$('aside').on('input', '#rangeSlider', (e) => {
    e.target.nextElementSibling.value = e.target.value
}); 
$('aside').on('input', '#rangeSlider_inversed', (e) => {
    e.target.nextElementSibling.value = e.target.value
}); 