// Definición de un array 'menus' que contiene objetos con el nombre y la URL de cada página
const menus = [
    {nombre: "Inicio", url: "ProyectoFinal/html/index.html"},
    {nombre: "¿Quienes somos?", url: "ProyectoFinal/html/quienes.html"},
    {nombre: "Contacto", url: "ProyectoFinal/html/contacto.html"},
    {nombre: "Carrito", url: "ProyectoFinal/html/carrito.html"},
];

// Función para cargar el menú dinámicamente en la página
function cargarmenu() {
    let enlaces = document.getElementById("ulmenu");

    // Itera sobre el array 'menus' para crear cada ítem del menú
    for (const menu of menus) {
        let lista = document.createElement("li");
        lista.innerHTML = `<a href="${menu.url}">${menu.nombre}</a>`;
        enlaces.appendChild(lista);
    }
}

// Llama a la función cargarmenu para cargar el menú al cargar la página
cargarmenu();

// Obtener el carrito desde localStorage
let productocarritos = JSON.parse(localStorage.getItem("carrito")) || [];

// Función para cargar los productos del carrito en la página
function cargarcarrito() {
    let enlaces = document.getElementById("tablacarrito");
    enlaces.innerHTML = '';  // Limpiar la tabla antes de cargar los nuevos productos

    // Itera sobre los productos del carrito y genera una fila de tabla por cada producto
    for (const productocarrito of productocarritos) {
        let lista = document.createElement("tr");

        lista.innerHTML = `
            <td><img src="${productocarrito.urlImagen}" alt="" width="50"></td>
            <td>${productocarrito.cantidad}</td> <!-- Se muestra la cantidad del producto -->
            <td>${productocarrito.nombre}</td>
            <td>${productocarrito.precio}</td>
            <td>${productocarrito.cantidad * productocarrito.precio}</td> <!-- Total por producto -->
            <td><button onclick="eliminarProducto(${productocarrito.id})">x</button></td> <!-- Botón para eliminar el producto -->
            <td>
                <button onclick="modificarCantidad(${productocarrito.id}, 'sumar')">+</button>
                <button onclick="modificarCantidad(${productocarrito.id}, 'restar')">-</button>
            </td>
        `;
        
        enlaces.appendChild(lista);
    }
}

// Llama a la función cargarcarrito para mostrar los productos al cargar la página
cargarcarrito();

// Función para eliminar un producto del carrito
function eliminarProducto(id) {
    // Filtra el carrito para eliminar el producto con el id dado
    productocarritos = productocarritos.filter((producto) => producto.id !== id);
    
    // Guarda el carrito actualizado en localStorage
    localStorage.setItem("carrito", JSON.stringify(productocarritos));

    // Vuelve a cargar el carrito después de la eliminación
    cargarcarrito();
}

// Función para modificar la cantidad de un producto (sumar o restar)
function modificarCantidad(id, operacion) {
    // Encuentra el producto por su id
    let producto = productocarritos.find(p => p.id === id);

    if (producto) {
        if (operacion === 'sumar') {
            producto.cantidad++;
        } else if (operacion === 'restar' && producto.cantidad > 1) {
            producto.cantidad--;
        }

        // Actualizar el carrito en localStorage
        localStorage.setItem("carrito", JSON.stringify(productocarritos));

        // Vuelve a cargar el carrito con las cantidades actualizadas
        cargarcarrito();
    }
}

