let lista = document.getElementById('listaNumeros');
let suma = 0;
let numero = 1;

while (numero <= 100) {
  suma += numero;
  let nro = document.createElement('li');
  nro.textContent = numero;
  lista.appendChild(nro);
  numero++;
}
