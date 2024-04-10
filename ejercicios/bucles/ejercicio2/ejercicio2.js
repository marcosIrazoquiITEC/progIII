let n = 0
let i = 0

while (i <=100){
    n++
    i+=n
    let lista = document.getElementById('listaNumeros')
    let nro = document.createElement('li')
    nro.textContent = `${i}`
    lista.appendChild(nro)
}