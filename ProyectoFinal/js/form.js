const menus = [
    {nombre: "Inicio", url: "ProyectoFinal/html/index.html"},
    {nombre: "¿Quienes somos?", url: "ProyectoFinal/html/quienes.html"},
    {nombre: "Contacto", url: "ProyectoFinal/html/contacto.html"},
    {nombre: "Carrito", url: "ProyectoFinal/html/carrito.html"},
];

function cargarmenu() {
    let enlaces = document.getElementById("ulmenu");
    if (enlaces) {
        for (const menu of menus) {
            let lista = document.createElement("li");
            lista.innerHTML = `<a href="${menu.url}">${menu.nombre}</a>`;
            enlaces.appendChild(lista);
        }
    } else {
        console.error("No se encontró el elemento 'ulmenu'");
    }
}

cargarmenu();
