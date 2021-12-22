//SELECTORES Y CAMBIO DE COLORES EN LAS card-title 

$ ("h4").css ("color", "pink"); 
$ ("h4").css ("background-color", "black");
$ ("ul p").css ("color", "blue"); 
$ (".card-title").css ("color", "red"); 

//OCULTA Y MUESTRA LOS PARRAFOS DE LOS DIVS

// $ ("div p").hide ();
$ ("div p").show ();

//INCORPORA UN HIJO AL FINAL DEL MAIN

$ ("main").append("(*Comentarios Año 2021)");

//INCORPORA UN HIJO AL PRINCIPIO DEL MAIN

$("main").prepend(`<h2>¿Encontró el producto buscado? Si no: ¡Escribimos a nuestro WhatsApp:(+54) 9-11 00000000!</h2> 
                   `);


//FUNCION HOVER SOBRE EL PARRAFO P1

 $(document).ready(function(){
    $("#p1").hover(function(){
      alert("Tocaste el parrafo!");
    },
    function(){
      alert("Bye!");
    }); 
  });


//FUNCION DE MUESTRA EL MES ACTUAL CON EL BOTON

$(document).ready(function(){
    $(".btn11").click(function(){
      $("p").hide();
    });
    $(".btn21").click(function(){
      $("p").show();
    });
  });

  
//FUNCION EL BOTON DE CAMBIA DE COLOR CUANDO PULSO SOBRE ÉL

  $("#mouse1").mouseleave(function() {
    $(this).css("background-color","blue");
    });

//EVENTOS CON EL TECLADO, SI MANTENES UNA TECLA PULSADA O NO, TE DÁ MUESTRA EL MENSAJE

$(document).keydown(function(){
$("#teclado").html("tecla pulsada");
});

$(document).keyup(function(){
$("#teclado").html("tecla sin pulsar");
});


  