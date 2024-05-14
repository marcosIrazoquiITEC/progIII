/*Verificación de disponibilidad de usuario:
Escribe un programa donde se ingrese un nombre de usuario
y definir una función llamada verificarDisponibilidadUsuario 
que usa ese parámetro como argumento y devuelva una promesa. 
Esta promesa debe resolver si el nombre de usuario está disponible
y guardar el nuevo usuario o rechazar si el nombre de usuario ya está en uso.
*/
const usuarios = ['marcelo', 'carlos', 'tomas', 'mauricio', 'sofia', 'gaston'];


let verificarDisponibilidadUsuario = (nombre) =>{
    return new Promise((resolve,reject)=>{
        if (usuarios.includes(nombre)){
            resolve(`${nombre} está disponible`);
        } else {
            reject(new Error('El nombre no está disponible'))
        }
    });
}


let nombre1 = 'marcelo'
let nombre2 = 'agustin'
verificarDisponibilidadUsuario(nombre2)
    .then((resultado) =>{
        console.log(resultado);
    })
    .catch((error) => {
        console.error(error.message);
    })