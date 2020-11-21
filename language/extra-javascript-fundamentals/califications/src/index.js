function biggestWord(phrase) {
  const words = phrase.split(' ');  
  return words.reduce((word1, word2) => (word1.length > word2.length) ? word1 : word2);
}

console.log(biggestWord("Recuerde que debe mirar a la cámara durante la grabación."));
console.log(biggestWord("Ese resultado es extremadamente improbable, pero existe."));
console.log(biggestWord("Es posible que todo esto haya sido inevitable."));
console.log(biggestWord("¿Te importa si pregunto por qué?"));
console.log(biggestWord("Un piano misteriosamente apareció en mi salón, ayer por la noche."));
console.log(biggestWord("Así que elije tu próximo movimiento con cuidado."));

