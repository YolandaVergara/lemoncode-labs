//Crea una función zipObject tal que acepte un array de claves como primer argumento 
//y un array de valores como segundo argumento y cuyo objetivo sea crear un objeto 
//uniendo las claves con sus valores.Asumir que el array de claves tiene como mínimo la misma longitud que el de valores:

function zipObject(keys, values) {
  let newObject = [];
  for (let i = 0; i < keys.length; i++) {
    newObject[keys[i]] = values[i];
  }
  return newObject;
}

// Ejemplo
console.log(zipObject(["spanish", "english", "french"], ["hola", "hi", "salut"])); // {spanish: "hola", english: "hi", french: "salut"}

//Challenge: Si no hay valores suficientes para todas las claves evita que aparezcan como undefined.
function zipObjectChallenge(keys, values) {
  let newObjectChallenge = [];
  keys.forEach((element, index) => {
    values[index] !== undefined ? newObjectChallenge[element] = values[index] : "";
  }
  );
  return newObjectChallenge;
}

console.log(zipObjectChallenge(["spanish", "english", "french"], ["hola"])); // {spanish: "hola"}