//Capturamos el botón
const button = document.getElementById("button");

//Función que agregar o quita la clase del body
const cambiarTheme = (e) => {
    if (document.body.classList.contains("dark")) {
        document.body.classList.remove("dark");
        e.target.textContent = "Modo dark";
    } else {
        document.body.classList.add("dark");
        e.target.textContent = "Modo light";
    }
};

//Evento para escuchar cuando el usuario presione el botón
button.addEventListener("click", cambiarTheme);