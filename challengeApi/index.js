mostrarCategorias = () => {
    let lista = []
    fetch('https://fakestoreapi.com/products/categories')
        .then(res=> lista.append(res.json()))
        .then(onsole.log(lista))   
}