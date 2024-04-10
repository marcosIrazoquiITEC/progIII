for (let i = 1; i <= 10; i++) {
    let lista = document.getElementById('listaNumeros')
    let nro = document.createElement('li')
    nro.textContent = `${i}`
    lista.appendChild(nro)
}

