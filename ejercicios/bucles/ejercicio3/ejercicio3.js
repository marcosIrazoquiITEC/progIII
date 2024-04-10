// Array de nombres
const nombres = ["Manzana", "Banana", "Naranja", "Mandarina", "Frutilla"];

nombres.forEach(element => {
    let lista = document.getElementById('listaFrutas')
    let fruta = document.createElement('li')
    fruta.textContent = `${element}`
    lista.appendChild(fruta)
});