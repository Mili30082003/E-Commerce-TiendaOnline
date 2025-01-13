// Variables
const carrito = document.getElementById('carrito');
const listaProductos = document.getElementById('lista-1'); // Productos
const listaCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

// Cargar eventos
cargarEventListeners();

function cargarEventListeners() {
    // Agregar producto al carrito
    listaProductos.addEventListener('click', agregarProducto);

    // Eliminar producto del carrito
    carrito.addEventListener('click', eliminarProducto);

    // Vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}

// Funciones
function agregarProducto(e) {
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) {
        const producto = e.target.closest('.producto');
        leerDatosProducto(producto);
    }
}

function leerDatosProducto(producto) {
    // Crear un objeto con la información del producto
    const infoProducto = {
        imagen: producto.querySelector('img').src,
        nombre: producto.querySelector('h3').textContent,
        precio: producto.querySelector('.precio').textContent,
        id: producto.querySelector('a').getAttribute('data-id'),
    };

    // Insertar producto en el carrito
    insertarCarrito(infoProducto);
}

function insertarCarrito(producto) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td><img src="${producto.imagen}" width="100"></td>
        <td>${producto.nombre}</td>
        <td>${producto.precio}</td>
        <td>
            <a href="#" class="borrar-elemento" data-id="${producto.id}">X</a>
        </td>
    `;
    listaCarrito.appendChild(row);
}

function eliminarProducto(e) {
    e.preventDefault();
    if (e.target.classList.contains('borrar-elemento')) {
        e.target.closest('tr').remove();
    }
}

function vaciarCarrito() {
    while (listaCarrito.firstChild) {
        listaCarrito.removeChild(listaCarrito.firstChild);
    }
}
