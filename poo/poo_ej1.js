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

let persona1 = new Persona('Juan',30,'masculino')

persona1.info() //utilizo consola de Node