const menus = [
    {nombre: "Inicio", url: "ProyectoFinal/html/index.html"},
    {nombre: "¿Quienes somos?", url: "ProyectoFinal/html/quienes.html"},
    {nombre: "Contacto", url: "ProyectoFinal/html/contacto.html"},
    {nombre: "Carrito", url: "ProyectoFinal/html/carrito.html"},
];

// Cargar los enlaces del menú
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

// Cargar el producto desde el localStorage
let productodetalle = JSON.parse(localStorage.getItem("detalleproducto"));

function cargarproducto() {
    if (productodetalle) {
        let enlaces = document.getElementById("boxproductos");
        let lista = document.createElement("div");

        // Generación del HTML para el producto
        lista.innerHTML = `
            <h3>${productodetalle.nombre}</h3>
            <img src="${productodetalle.urlImagen}" alt="Imagen del producto">
            <p class="precio">$${productodetalle.precio}</p>
            <div class="boxdetalle">
                <div class="boxdescripcion">
                    <p class="descripcion">${productodetalle.descripcion}</p>
                    <div class="boxcontador">
                        <button onclick="sumar()">+</button>
                        <p id="contarproducto">0</p>
                        <button onclick="restar()">-</button>
                    </div>
                    <button onclick="cargarcarrito()">Cargar carrito</button>
                </div>
            </div>
        `;
        enlaces.appendChild(lista);
    } else {
        console.error("No se encontró ningún producto en el localStorage");
    }
}

cargarproducto();

let contador
