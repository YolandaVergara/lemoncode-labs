//Apartado A:  Suponiendo objetos sin anidamiento y con propiedades primitivas, 
// construye una función que compare el contenido de 2 objetos.

const character1 = {
  "name": "Harry Potter",
  "species": "human",
  "gender": "male",
  "house": "Gryffindor",
  "dateOfBirth": "31-07-1980",
  "yearOfBirth": 1980,
  "ancestry": "half-blood",
  "actor": "Daniel Radcliffe",
  "alive": true,
};

const character2 = {
  "name": "Hermione Granger",
  "species": "human",
  "gender": "female",
  "house": "Gryffindor",
  "dateOfBirth": "19-09-1979",
  "yearOfBirth": 1979,
  "ancestry": "muggleborn",
  "actor": "Emma Watson",
  "alive": true,
};

const character3 = {
  "name": "Hermione Granger",
  "species": "human",
  "gender": "female",
  "house": "Gryffindor",
  "dateOfBirth": "19-09-1979",
  "yearOfBirth": 1979,
  "ancestry": "muggleborn",
  "actor": "Emma Watson",
  "alive": true,
};



// Una manera de hacerlo
function isEqual1(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2)
}
console.log(isEqual1(character1, character2));

// Segunda manera de hacerlo
function isEqual2 (obj1, obj2) {
  return Object.keys(obj1).length === Object.keys(obj2).length &&
  Object.keys(obj1).every(key => 
    obj2.hasOwnProperty(key) && obj1[key] === obj2[key]
  );
}
console.log(isEqual2(character2, character3));

//Apartado B: Vamos a mejorar la solución del apartado A suponiendo ahora que si puede existir anidamiento de objetos.

character4 = {
  "name": "Ron Weasley",
  "species": "human",
  "gender": "male",
  "house": "Gryffindor",
  "dateOfBirth": "01-03-1980",
  "yearOfBirth": 1980,
  "ancestry": "pure-blood",
  "eyeColour": "blue",
  "hairColour": "red",
  "wand": {
    "wood": "willow",
    "core": "unicorn tail-hair",
    "length": 14
  }
};

character5 = {
  "name": "Draco Malfoy",
  "species": "human",
  "gender": "male",
  "house": "Slytherin",
  "dateOfBirth": "05-06-1980",
  "yearOfBirth": 1980,
  "ancestry": "pure-blood",
  "eyeColour": "grey",
  "hairColour": "blonde",
  "wand": {
    "wood": "hawthorn",
    "core": "unicorn tail-hair",
    "length": 10
  }
};

function isDeepEqual (obj1, obj2) {
  return Object.keys(obj1).length === Object.keys(obj2).length &&
  Object.keys(obj1).every(key => 
    obj2.hasOwnProperty(key) && obj1[key] === obj2[key]
  );
}

// let characters = (arg1, arg2) => 
// characters.deepEqual(character4, character5);
// // const deepEqual = (obj1, obj2) => deepEqual(obj1, obj2);
// console.log(characters.deepEqual(character4, character5));