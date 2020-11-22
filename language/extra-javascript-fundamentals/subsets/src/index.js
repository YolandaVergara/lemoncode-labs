//Escribe una función que acepte un string como argumento y devuelva todas las partes finales de dicha palabra:

function subsets(word) {

  let result = [];
  for (i = 1; i < word.length; i++) {
    result.push(word.slice(i, word.length));
  }
  return result;
}

console.log(subsets("Supercalifragilisticoespialidoso"));