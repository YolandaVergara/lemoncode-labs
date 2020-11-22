// Empleando el concepto de closure, emula el comportamiento de 2 dados.

// Utiliza un closure para almacenar el resultado de tirar 2 dados, y encapsula junto a estos datos, métodos que implementen la siguiente funcionalidad:

// Hacer reset, poner a undefined o null ambos resultados.
// Tirar los dados. TIP: Usa Math.random() para tiradas aleatorias.
// Imprimir el resultado por consola. Ten en cuenta lo siguiente:
// Informa al usuario que debe tirar primero cuando corresponda.
// Si saca doble 6, ¡dale un premio!

function playGame() {

  let diceOne;
  let diceTwo;


  function getNumbers() {
  diceOne = Math.floor(Math.random() * 6) + 1;
  diceTwo = Math.floor(Math.random() * 6) + 1;
  };

  function resetDices() {
    diceOne = null;
    diceTwo = null;
  };

  return {    
  
    throwDices: function () { 
      getNumbers();
      console.log(`El primer dado ha sacado ${diceOne} y el segundo dado ha sacado ${diceTwo}`);
      diceOne === 6 && diceTwo === 6 ? console.log("Chupito de Jagger!") : console.log("Para volver a jugar, tira de nuevo");
      resetDices();
    }
  }
}

let game = playGame();
game.throwDices();
game.throwDices();
game.throwDices();
game.throwDices();
game.throwDices();
game.throwDices();

