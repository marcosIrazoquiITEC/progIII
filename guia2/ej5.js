let productos = [
    { nombre: "Camisa", precio: 30, descuento: 10 },
    { nombre: "Pantalón", precio: 50, descuento: 15 },
    { nombre: "Zapatos", precio: 80, descuento: 20 },
    { nombre: "Chaqueta", precio: 100, descuento: 25 },
    { nombre: "Bufanda", precio: 20, descuento: 5 },
    { nombre: "Gorra", precio: 15, descuento: 0 },
    { nombre: "Calcetines", precio: 10, descuento: 0 },
    { nombre: "Reloj", precio: 120, descuento: 30 },
    { nombre: "Bolsa", precio: 40, descuento: 10 },
    { nombre: "Gafas de sol", precio: 60, descuento: 15 }
  ];

let productosConDto = productos.map(producto =>
    producto = {nombre: producto.nombre, precioFinal: producto.precio - (producto.precio*producto.descuento/100)})

console.log(productosConDto)

let precioMayorA = productosConDto.filter(producto => producto.precioFinal > 50)
console.log(precioMayorA)

let productoConVeinte = productos.find(producto => producto.descuento ===20)
console.log(productoConVeinte)