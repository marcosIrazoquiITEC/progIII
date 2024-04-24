class Libro{
    constructor(titulo,autor,publicado){
        this.titulo = titulo
        this.autor = autor
        this.publicado = publicado
    }

    getTitulo(){
        return `Titulo: ${this.titulo}`
    }

    setTitulo(nuevoTitulo){
        this.titulo = nuevoTitulo
    }

    getAutor(){
        return `Autor: ${this.autor}`
    }

    setAutor(nuevoAutor){
        this.autor = nuevoAutor
    }

    getPublicacion(){
        return `Publicado en ${this.publicado}`
    }

    setPublicado(nuevoPub){
        this.publicado = nuevoPub
    }

    info(){
        console.log(`
        -${this.getTitulo()}
        -${this.getAutor()}
        -${this.getPublicacion()}`
        )
    }
}

let libro = new Libro('Harry Potter','JK Rowling',2000)
libro.info()
libro.setTitulo('Rayuela')
libro.setAutor('Cortazar')
libro.setPublicado(1963)
libro.info()