const ulJugadores = document.getElementById('ulJugadores')
/*
Dudas hasta el momento: no logro entender cuando utilizo promesas o async y await
async await reemplazan a las promesas?
sintaxis del manejo de localstorage
parse y stringify json, argumentos del setItem
no entiendo la funcion main
*/ 


// Función para obtener los jugadores del localStorage
const obtenerJugadoresLocalStorage = () => {
    const jugadoresString = localStorage.getItem('jugadores');
    return jugadoresString ? JSON.parse(jugadoresString) : [];
};

// Función para guardar los jugadores en el localStorage
const guardarJugadoresLocalStorage = (jugadores) => {
    localStorage.setItem('jugadores', JSON.stringify(jugadores));
};

// Función asíncrona para agregar un nuevo jugador al equipo usando un prompt de HTML
const agregarJugador = async () => {
    try {
        // Solicitar al usuario que ingrese los datos del jugador
        const nombre = prompt("Ingrese el nombre del jugador:");
        const edad = parseInt(prompt("Ingrese la edad del jugador:"));
        const posicion = prompt("Ingrese la posición del jugador:");
        const estado = prompt('Ingrese el estado del jugador:')
        // Obtener los jugadores del localStorage
        let jugadores = obtenerJugadoresLocalStorage();

        // Verificar si el jugador ya existe en el equipo
        const jugadorExistente = jugadores.find(jugador => jugador.nombre === nombre);
        if (jugadorExistente) {
            throw new Error('El jugador ya está en el equipo.');
        }

        // Agregar el nuevo jugador al array de jugadores
        jugadores.push({ nombre, edad, posicion, estado });

        // Guardar los jugadores actualizados en el localStorage
        guardarJugadoresLocalStorage(jugadores);

        // Simular una demora de 1 segundo para la operación asíncrona
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Mostrar un mensaje de éxito
        alert('Jugador agregado correctamente.');
    } catch (error) {
        console.error('Error:', error.message);
    }
};


// Función asíncrona para listar todos los jugadores del equipo
const listarJugadores = async () => {
    // Obtener la lista de jugadores desde el localStorage
    let listaJugadores = await obtenerJugadoresLocalStorage();
    ulJugadores.innerHTML = '';
    listaJugadores.forEach((jugador) => {
        let liJugador = document.createElement('li');
        liJugador.textContent = `${jugador.nombre}. ${jugador.edad} años. ${jugador.posicion} ${jugador.estado}`;
        ulJugadores.appendChild(liJugador);
    });
};

// Implementación para listar todos los jugadores

// Función asíncrona para asignar una nueva posición a un jugador
const asignarPosicion = async () => {
    let jugadores = obtenerJugadoresLocalStorage();
    let nombreJugador = prompt('Ingrese el nombre del jugador');
    let nuevaPosicion = prompt('Ingrese la nueva posición');
    let jugadorExistente = jugadores.find(jugador => jugador.nombre === nombreJugador)
    if(jugadorExistente){
        jugadorExistente.posicion = nuevaPosicion;
        localStorage.setItem('jugadores',JSON.stringify(jugadores));
        guardarJugadoresLocalStorage(jugadores);
        await new Promise(resolve => setTimeout(resolve, 1000));
        alert('Posición asignada correctamente.');
    }else{
        alert('Jugador no encontrado')
    }}
    // Implementación para asignar una nueva posición a un jugador

// Función asíncrona para realizar un cambio durante un partido
const realizarCambio = async () => {
    let jugadores = obtenerJugadoresLocalStorage();
    let nombreJugadorEntrante = prompt('Ingrese el nombre del jugador que va a ingresar');
    let nombreJugadorSaliente = prompt('Ingrese el nombre del jugador que va a salir');
    
    let jugadorEntrante = jugadores.find(jugador => jugador.nombre === nombreJugadorEntrante);
    let jugadorSaliente = jugadores.find(jugador => jugador.nombre === nombreJugadorSaliente);
    
    if (
        (jugadorEntrante && jugadorEntrante.estado === 'Suplente') &&
        (jugadorSaliente && jugadorSaliente.estado === 'Titular')){
            jugadorEntrante.estado = 'Ingresó desde el banco';
            jugadorSaliente.estado = 'Sustituido';
            localStorage.setItem('jugadores',JSON.stringify(jugadores));
            guardarJugadoresLocalStorage(jugadores)
            await new Promise(resolve => setTimeout(resolve, 1000));
            alert('Cambio realizado.');
        }
    // Implementación para realizar un cambio durante un partido
};

// Función principal asíncrona que interactúa con el usuario
const main = async () => {
    try {
        // Lógica para interactuar con el usuario y llamar a las funciones adecuadas
    } catch (error) {
        console.error('Error:', error);
    }
};

// Llamar a la función principal para iniciar la aplicación
main();
