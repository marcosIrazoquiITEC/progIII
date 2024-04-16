let personas = [ //cambié algunos valores para que sean menores de 18 para filtrar
    { nombre: "Juan", edad: 25 },
    { nombre: "María", edad: 10 },
    { nombre: "Pedro", edad: 40 },
    { nombre: "Ana", edad: 35 },
    { nombre: "Luis", edad: 12 },
    { nombre: "Sofía", edad: 28 },
    { nombre: "Carlos", edad: 45 },
    { nombre: "Laura", edad: 13 },
    { nombre: "David", edad: 29 },
    { nombre: "Elena", edad: 7 }
  ];

let mayus = personas.map(persona => 
    persona = {nombre:persona.nombre.toUpperCase(), edad: persona.edad})
console.log(mayus)

let mayores = mayus.filter(persona => persona.edad >= 18) 
console.log(mayores)

let veinticinco = mayores.find(persona => persona.edad === 25)
console.log(veinticinco)