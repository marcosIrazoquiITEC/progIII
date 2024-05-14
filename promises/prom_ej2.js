/*
Simulación de proceso de compra:
Escribe un programa donde el usuario tenga una lista de productos, 
cada uno con un botón que diga “Comprar” 
que al presionarlo dispare una función llamada procesoDeCompra
que tome el producto seleccionado como argumento y devuelva una promesa.
Esta promesa debe simular un proceso de compra, 
que incluya verificar la disponibilidad del producto, 
calcular el precio total y confirmar la compra después de un breve período de espera,
todos estos datos los tengo que ver en una alerta.
*/

const lista = document.getElementById('listaProductos')
const productos = [
    { id: 1, nombre: 'Laptop', precio: 1200, stock: 10 },
    { id: 2, nombre: 'Teléfono móvil', precio: 800, stock: 0 },
    { id: 3, nombre: 'Tablet', precio: 500, stock: 15 },
    { id: 4, nombre: 'Smartwatch', precio: 300, stock: 30 },
    { id: 5, nombre: 'Auriculares inalámbricos', precio: 150, stock: 0 },
];

productos.forEach((producto) => {

    let stock = producto.stock
    let precio = producto.precio

    function procesoDeCompra(stock,precio){
        return new Promise((resolve,reject)=>{
            if (stock == 0){
                reject(new Error('No hay stock disponible'))
            } else {
                console.log('hay stock')
                let precioTotal = precio
                setTimeout(()=>{
                    resolve(`El precio es ${precioTotal}`)
                },1000)
            }
        });
    }

    function comprar(){
        console.log('clickeado')
        procesoDeCompra(stock,precio)
            .then((resultado)=>{
                alert(resultado);
            })
            .catch((error)=>{
                alert(error.message)
            })
    }
    
    let product = document.createElement('li')
    product.textContent = producto.nombre
    let button = document.createElement('button')
    button.textContent = 'Comprar'
    button.id = 'boton'
    button.onclick = comprar
    product.appendChild(button)
    lista.appendChild(product)
});

