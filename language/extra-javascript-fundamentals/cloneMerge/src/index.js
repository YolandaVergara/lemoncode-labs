// Apartado A: Implementa una función clone que devuelva un objeto clonado a partir de otro:

const character1 = {
  name: "Harry Potter",
  age: 40,
  house: "Gryffindor"
}

const character2 = {
  name: "Ron Weasley"
}

function clone(character) {
  return character3 = Object.assign({ ...character });
}
clone(character1);


// Apartado B: Dados dos objetos cualesquiera, implementa una función merge que mezcle uno sobre otro. 
// El objeto resultante debe ser la mezcla de las propiedades del objeto source sobre las del objeto target.

merge = (character1, character2) => clone(character1, character2);
merge(character1, character2);
