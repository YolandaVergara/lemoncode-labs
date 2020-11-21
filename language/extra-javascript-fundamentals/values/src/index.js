const character = {
  "name":"Harry Potter",
  "species":"human",
  "gender":"male",
  "house":"Gryffindor",
}
//Escribe una función que devuelva una lista de valores de todas las propiedades de un objeto:

function values(character) {
  console.log(Object.values(character));
}

 values(character);

//Challenge: Evita añadir las propiedades heredadas en caso de ser instancia de una clase:

function Person(name, species, gender, house) {
  this.name = name;
  this.species = species;
  this.gender = gender;
  this.house = house;
}

Person.prototype.sayHouse = function () {
  console.log(`My Howarts house is ${this.house}`);
}

var hermione = new Person("Hermione Granger", "human", "female", "Gryffindor");
values(hermione);



