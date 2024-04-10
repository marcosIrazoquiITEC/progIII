const nro = parseInt(prompt('Ingrese un número: '))

let resultado = ''

if (nro > 0){
    resultado = 'El número es positivo'
} else if (nro < 0) {
    resultado = 'El número es negativo'
} else {
    resultado = 'El número es cero.'
}

document.getElementById('resultado').innerText = `${resultado}`