const categoriasContainer = document.getElementById('categorias');
const productosContainer = document.getElementById('productos');

const obtenerCategorias = async () => {
    try {
        const respuesta = await fetch('https://fakestoreapi.com/products/categories');
        const categorias = await respuesta.json();
        categorias.forEach(categoria => {
            const categoriaElement = document.createElement('div');
            categoriaElement.textContent = categoria;
            categoriaElement.classList.add('categoria');
            categoriaElement.addEventListener('click', () => obtenerProductosPorCategoria(categoria));
            categoriasContainer.appendChild(categoriaElement);
        });
    } catch (error) {
        console.error('Error al obtener las categorías:', error);
    }
}

const obtenerProductosPorCategoria = async (categoria) => {
    try {
        const respuesta = await fetch(`https://fakestoreapi.com/products/category/${categoria}`);
        const productos = await respuesta.json();
        
        productosContainer.innerHTML = `<h2>Productos en ${categoria}</h2>`; 
        productos.forEach(producto => {
            const productoElement = document.createElement('div');
            productoElement.classList.add('producto');
            productoElement.innerHTML = `
                <img src="${producto.image}" alt="${producto.title}">
                <div class="info">
                    <h3>${producto.title}</h3>
                    <p>${producto.description}
                </div>
                <p class="precio">$${producto.price}</p>
                <a href='detalle.html?idProduct=${producto.id}' class="comprar">Comprar</a>
            `;
            productosContainer.appendChild(productoElement);
        });
    } catch (error) {
        console.error('Error al obtener los productos:', error);
    }
}

const main = () =>{
    obtenerCategorias();
}

main()