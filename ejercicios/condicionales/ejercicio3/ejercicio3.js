const nro = parseFloat(prompt('Ingrese un número:'))
const otroNro = parseFloat(prompt('Ingrese otro número:'))

let resultado = ''

if (nro > otroNro){
    resultado = `${nro} es mayor que ${otroNro}`
} else if (nro == otroNro){
    resultado = `Los nros son iguales`
} else {
    resultado = `${otroNro} es mayor que ${nro}`
}

document.getElementById('resultado').innerText = `${resultado}`