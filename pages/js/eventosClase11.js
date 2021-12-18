function Reacciona(campo) {
    alert("¡Introduzca un valor!")
    campo.focus()
}

function CompruebaValor(Formu) {
    if (Formu.respuesta.value == "10")
       Formu.submit()
    else
       Formu.respuesta.value = ""
 }