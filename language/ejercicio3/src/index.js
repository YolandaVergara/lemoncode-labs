const character1 = {
  name: "Harry Potter",
  age: 40,
  house: "Gryffindor"
}

const character2 = {
  name: "Ron Weasley"
}

// Implementa una función clone que, a partir de un objeto de entrada source devuelva
// un nuevo objeto con las propiedades de source :

function clone(character) {
  return character3 = Object.assign({ ...character });
}

clone(character1);

// Implementa una función merge que, dados dos objetos de entrada source y target ,
// devuelva un nuevo objeto con todas las propiedades de target y de source , y en caso
// de propiedades con el mismo nombre, source sobreescribe a target .

const properties = (character1, character2) =>  Object.assign(character1, character2);

properties(character1, character2);

//Usando la función clone

propertiesClone = (character1, character2) => clone(character1, character2);
propertiesClone(character1, character2);


