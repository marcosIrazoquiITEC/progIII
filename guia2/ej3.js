let libros = [
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
    { titulo: "El señor de los anillos", autor: "J.R.R. Tolkien" },
    { titulo: "Orgullo y prejuicio", autor: "Jane Austen" },
    { titulo: "1984", autor: "George Orwell" },
    { titulo: "Harry Potter y la piedra filosofal", autor: "J.K. Rowling" },
    { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" }
  ];
  
let libroBuscado = libros.find(libro => libro.autor === 'Jane Austen')

console.log(libroBuscado)