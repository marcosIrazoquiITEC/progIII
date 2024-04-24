class Persona {
    constructor(nombre,edad,genero){
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }

    info(){
        console.log(`La persona se llama ${this.nombre}, tiene ${this.edad} y su genero es ${this.genero}`)
    }
}

class Estudiante extends Persona{
    constructor(nombre,edad,genero,grado,promedio){
        super(nombre,edad,genero)
        this.grado = grado;
        this.promedio = promedio;
    }

    setPromedio(nuevoPromedio){
        this.promedio = nuevoPromedio;
    }

    info(){ //polimorfismo
        console.log(`
        Nombre: ${this.nombre}
        Edad: ${this.edad}
        Género: ${this.genero}
        Grado: ${this.grado}
        Promedio:${this.promedio}`)
    }
}

let estudiante = new Estudiante('Juan',14,'masculino','3ero A',6)
estudiante.info()
estudiante.setPromedio(8)
estudiante.info()