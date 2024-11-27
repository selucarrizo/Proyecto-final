const menus = [
    {nombre: "Inicio", url: "ProyectoFinal/html/index.html"},
    {nombre: "¿Quienes somos?", url: "ProyectoFinal/html/quienes.html"},
    {nombre: "Contacto", url: "ProyectoFinal/html/contacto.html"},
    {nombre: "Carrito", url: "ProyectoFinal/html/carrito.html"},
];

function cargarmenu() {
    let enlaces = document.getElementById("ulmenu");
    for (const menu of menus) {
        let lista = document.createElement("li");
        lista.innerHTML = `<a href="${menu.url}">${menu.nombre}</a>`;
        enlaces.appendChild(lista);
    }
}
cargarmenu();

const productos = [
    { id: 1, nombre: "Cuaderno Sakura A5", urlImagen: "ProyectoFinal/img/sakuracuaderno.png", precio: 5700, descripcion: "Cuaderno liso A5", stock: 7 },
    { id: 2, nombre: "Cartulina Pastel", urlImagen: "ProyectoFinal/img/cartulinapastel.png", precio: 450, descripcion: "Cartulinas color pastel, variedad en stock", stock: 10 },
    { id: 3, nombre: "Resaltador sharpie x16", urlImagen: "ProyectoFinal/img/resaltadorsharpie.png", precio: 21000, descripcion: "Resaltador de muy buena calidad, colores intensos.", stock: 5 },
    { id: 4, nombre: "Acuarelas Giotto", urlImagen: "ProyectoFinal/img/acuarelas.png", precio: 5300, descripcion: "Las acuarelas Giotto proporcionan una gama de colores brillantes, vivos y opacos para que crees tu obra maestra.", stock: 6 },
    { id: 5, nombre: "Lapiz negro HB", urlImagen: "ProyectoFinal/img/lapiz.png", precio: 5300, descripcion: "El Lápiz HB BRW con un material atóxico con una indicación ideal para hacer dibujos y para escribir en cuadernos. Se puede utilizar tanto en aulas y oficinas como en entornos domésticos.", stock: 15 },
    // ... otros productos
];

function cargarproductos() {
    let enlaces = document.getElementById("boxproductos");
    for (const producto of productos) {
        let lista = document.createElement("div");
        lista.classList.add('producto-card');
        lista.innerHTML = `
            <h3>${producto.nombre}</h3>
            <img src="${producto.urlImagen}" alt="${producto.nombre}">
            <p class="precio">$${producto.precio}</p>
            <button onclick="verdetalle('${producto.id}')">Detalles</button>
        `;
        enlaces.appendChild(lista);
    }
}
cargarproductos();

function verdetalle(idproducto) {
    const buscarProducto = productos.find(producto => producto.id === parseInt(idproducto));
    const enJSON = JSON.stringify(buscarProducto);
    localStorage.setItem("detalleproducto", enJSON);
    window.location.href = "detalle.html";
}
