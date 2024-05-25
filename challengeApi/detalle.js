const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const idProduct = urlParams.get('idProduct')
const carrito = document.getElementById('carrito')

const mostrarProducto = async() =>{
    const respuesta = await fetch(`https://fakestoreapi.com/products/${idProduct}`);
    const producto = await respuesta.json();
    try{
        const productoContainer = document.getElementById('productoContainer');
        console.log(producto)
        const elementoProducto = document.createElement('div')
        elementoProducto.innerHTML = `
        <img src="${producto.image}">
        <h2>${producto.title}</h2>
        <p>${producto.description}
        <p class="precio">$${producto.price}</p> 
        <button id="agregarCarrito">Agregar al Carrito</button>
        `;
        productoContainer.appendChild(elementoProducto);

        document.getElementById('agregarCarrito').addEventListener('click', agregarAlCarrito);

    }catch (error) {
        console.error('Error:', error);
    }
}

const guardarLocalStorage = () => {
    localStorage.setItem('listaProductos', carrito.innerHTML);
    localStorage.setItem('total', document.getElementById('total').textContent);
  };

const mostrarCarrito = () => {
    const productos = localStorage.getItem('listaProductos');
    if (productos) {
        carrito.innerHTML = productos;
        // Reasignar event listeners a los botones de eliminar
        document.querySelectorAll('.eliminar').forEach(boton => {
            boton.addEventListener('click', eliminarDelCarrito);
        });
    } else {
        carrito.innerHTML = '';
    }
}

const agregarAlCarrito = async() => {
    const respuesta = await fetch(`https://fakestoreapi.com/products/${idProduct}`);
    const producto = await respuesta.json();
    try {
        let existente = document.querySelector(`[data-id='${producto.id}']`);
        if (existente) {
            let cantidadElem = existente.querySelector('.cantidad');
            cantidadElem.textContent = parseInt(cantidadElem.textContent) + 1;
        } else {
            let elementoCarrito = document.createElement('div');
            elementoCarrito.dataset.id = producto.id;
            elementoCarrito.classList.add('productoCarrito');
            elementoCarrito.innerHTML = `
                <h3>${producto.title}</h3>
                <p class="cantidad">1</p>
                <p class="precio">$${producto.price}</p>
                <button class="eliminar">Eliminar</button>`;
            elementoCarrito.querySelector('.eliminar').addEventListener('click', eliminarDelCarrito);
            carrito.appendChild(elementoCarrito);
        }
        actualizarTotal();
    } catch (error) {
        console.log('Error:', error);
    }
}

const eliminarDelCarrito = (event) => {
    const productoCarrito = event.target.parentElement;
    const cantidadElem = productoCarrito.querySelector('.cantidad');
    const cantidad = parseInt(cantidadElem.textContent);

    if (cantidad > 1) {
        cantidadElem.textContent = cantidad - 1;
    } else {
        const id = productoCarrito.dataset.id;
        document.querySelector(`[data-id='${id}']`).remove();
    }
    actualizarTotal()
}

const actualizarTotal = () =>{
    let total = 0;
    document.querySelectorAll('.productoCarrito').forEach(producto => {
        const precio = parseFloat(producto.querySelector('.precio').textContent.replace('$', ''));
        const cantidad = parseInt(producto.querySelector('.cantidad').textContent);
        total += precio * cantidad;
    });
    const totalElement = document.getElementById('total');
    if (!totalElement) {
        const nuevoTotal = document.createElement('p');
        nuevoTotal.id = 'total';
        nuevoTotal.textContent = `Total: $${total.toFixed(2)}`;
        carrito.appendChild(nuevoTotal);
    } else {
        totalElement.textContent = `Total: $${total.toFixed(2)}`;
    }
    guardarLocalStorage();
}

const main = () =>{
    mostrarProducto()
    mostrarCarrito()

}

main()