// Definición de un array 'menus' que contiene objetos con el nombre y la URL de cada página
const menus = [
    {nombre: "Inicio", url: "ProyectoFinal/html/index.html"},
    {nombre: "¿Quienes somos?", url: "ProyectoFinal/html/quienes.html"},
    {nombre: "Contacto", url: "ProyectoFinal/html/contacto.html"},
    {nombre: "Carrito", url: "ProyectoFinal/html/carrito.html"},
];


// Función para cargar el menú dinámicamente en la página
function cargarmenu() {
    // Obtiene el elemento con el id "ulmenu" donde se insertarán los ítems del menú
    let enlaces = document.getElementById("ulmenu");

    // Itera sobre el array 'menus' para crear cada ítem del menú
    for (const menu of menus) {
        let lista = document.createElement("li"); // Crea un elemento <li> para cada ítem del menú
        // Asigna el contenido HTML del <li>, creando un enlace <a> con la URL y nombre del menú
        lista.innerHTML = `<a href="${menu.url}">${menu.nombre}</a>`;
        // Añade el <li> al contenedor "ulmenu"
        enlaces.appendChild(lista);
    }
}

// Llama a la función cargarmenu para cargar el menú al cargar la página
cargarmenu();
