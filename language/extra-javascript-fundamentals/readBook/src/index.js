// Crea una función isBookRead que reciba una lista de libros y un título y devuelva si se ha leído o no el libro. 
// Un libro es un objeto con title como string y isRead como booleano.En caso de no existir el libro devolver false
const books = [
  {
    title: "Harry Potter y la piedra filosofal",
    isRead: true
  },
  {
    title: "Harry Potter y la cámara secreta",
    isRead: true
  },
  {
    title: "Harry Potter y el prisionero de Azkaban",
    isRead: true
  },
  {
    title: "Harry Potter y el cáliz del fuego",
    isRead: true
  },
  {
    title: "Harry Potter y y la Orden del Fénix",
    isRead: true
  },
  {
    title: "Harry Potter y el misterio del príncipe",
    isRead: false
  },
  {
    title: "Harry Potter y las reliquias de la muerte",
    isRead: false
  }
];



// Crea una función isBookRead que reciba una lista de libros y un título y devuelva si se
// ha leído o no dicho libro.
// Un libro es un objeto con title como string y isRead como booleano. En caso de no
// exisr el libro devolver false
// TIP: Existe un método de Array.prototype que te ayudará a buscar según un patrón.

const filterBookIsRead = (book, title) => book.title === title && book.isRead;
const bookIsRead = (books, title) => books.some((book) => {
  return filterBookIsRead(book, title) ? true : false;
})

console.log(bookIsRead(books, "Harry Potter y y la Orden del Fénix"));
console.log(bookIsRead(books, "Los juegos del hambre: En llamas"));
console.log(bookIsRead(books, "Divergente"));
