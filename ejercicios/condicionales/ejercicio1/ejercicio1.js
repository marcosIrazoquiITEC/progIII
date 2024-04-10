const edad = parseInt(prompt('Ingrese la edad de la persona: '))

let resultado = ''

if (edad >= 18){
    resultado = 'Es mayor de edad'
} else {
    resultado = 'Es menor de edad'
}
document.getElementById('resultado').innerText = `${resultado}`
