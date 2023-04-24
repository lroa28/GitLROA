// ----------------------------------------- FINALIZAR  COMPRA ------------------------------------------------------//

$('main').on('submit', '.finalizarCompraForm', function(e){

    let nombre =  e.target[0].value;
    let email =  e.target[1].value;
    let tel =  e.target[2].value;
    let cuotas =  e.target[3].value.replaceAll('_', ' Cuotas de: $');
    let creditCardNumber =  e.target[4].value;
    let creditCardName =  e.target[5].value;
    let creditCardCVC =  e.target[6].value;
    let creditCardDesde =  e.target[7].value;
    let credictCardHasta =  e.target[8].value;
    let url = "https://jsonplaceholder.typicode.com/posts";
    new Cliente (nombre, email, tel, productosComprados)
                      
  // ----------------------------------------------- AJAX POST -------------------------------------------------------//
   
  $.ajax({
       url: url,
       type: 'POST',
       data: {
           nombre: nombre,
           email: email,
           tel: tel,
           cuotas: cuotas,
           creditCardNumber: creditCardNumber,
           creditCardName: creditCardName,
           creditCardCVC: creditCardCVC,
           creditCardDesde: creditCardDesde,
           credictCardHasta: credictCardHasta,
           dataProductosComprados: productosComprados,
           dataPrecioTotal: productosCompradosPrecioTotal[0],
           
       },
  
           beforeSend: function() {
               $('.finalizarCompra').html('')
               $('.finalizarCompra').addClass('compraFinalizada')
               $('.finalizarCompra.compraFinalizada').removeClass('finalizarCompra')
               $(cargandoAnimacion).removeClass('col-md-10');
               $(cargandoAnimacion).addClass('col-md-12');
               $('.compraFinalizada').append(cargandoAnimacion)
               $('#loader').removeClass('hidden')
           },
           success: function (data) {
               compraRealizadaConExito(data)
           },
           complete: function () { 
               $('#loader').addClass('hidden')
           }
       });
  });
  
  let compraRealizadaConExito = (data) => {
      let creditCardNumberLast4 = data.creditCardNumber.substr(16)
      let mensajeCompra =  `
          <div class="col-md-12">
              <h3>¡Gracias <span class="greenColor">${data.nombre}</span> por elegirnos!</h3>
              <p>¡El pago fue realizado con éxito!</p>
              <p>Corroborá las instrucciones de retiro en tu correo: <span class="greenColor">${data.email}</span></p>
              <p>Pagaste $ ${data.dataPrecioTotal} en ${data.cuotas}</p>
              <p>Con la tarjeta número: **** - **** - **** - ${creditCardNumberLast4}</p>
          </div>
      `;
      $('.compraFinalizada').append(mensajeCompra)
  } 
  
  let cargandoAnimacion = $(
      '<div id="loader" class="lds-dual-ring col-md-10 hidden"></div>'
  );