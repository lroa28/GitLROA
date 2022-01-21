// 1) Capturamos el botón
const boton = document.querySelector(".menu-nav");
// 2) Capturamos el overlay
const overlay = document.querySelector(".overlay");
// 3) Capturamos el modal
const modal = document.querySelector(".modal");

// 4) Crear una función para desplazar el menú. Utilizar la función toggle para que aparezca el menú y el overlay. Además, tenemos que fijarnos en las clases de css (al final de todo).
const moverMenu = () => {
    overlay.classList.toggle("hidden");
    modal.classList.toggle("appear");
};

// 5) agregamos el evento click para el botón
boton.addEventListener("click", moverMenu);
// 6) agregamos el evento click para el overlay (cuando hacemos clic en él queremos que el menú desaparezca y el overlay se oculte)
overlay.addEventListener("click", moverMenu);