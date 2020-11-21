//Implementa una función que muestre la media de la clase de forma textual, es decir,
// siguiendo el sistema de calificación español:

// Matrícula de Honor = 10
// Sobresaliente = entre 9 y 10
// Notable = entre 7 y 9
// Bien = entre 6 y 7
// Suficiente = entre 5 y 6
// Insuficiente = entre 4 y 5
// Muy deficiente = por debajo de 4

const results = {
  David: 8.25,
  Maria: 9.5,
  Jose: 6.75,
  Juan: 5.5,
  Blanca: 7.75,
  Carmen: 8,
};

function values(result) {
  return Object.values(result);
}

function getAverage(classResults) {
  let allScores = values(classResults);
  let total = allScores.reduce((acc, sum) => acc + sum);
  return total / allScores.length;
}
getAverage(results);

function getScore(score) {
  switch (true) {
    case (score === 10):
      console.log("Matrícula de Honor");
      break;
    case (score < 10 && score > 9):
      console.log("Sobresaliente");
      break;
    case (score < 9 && score >= 7):
      console.log("Notable");
      break;
    case (score < 7 && score >= 6):
      console.log("Bien");
      break;
    case (score < 6 && score >= 5):
      console.log("Suficiente");
      break;
    case (score < 5 && score >= 4):
      console.log("Insuficiente");
      break;
    case (score <= 4):
      console.log("Muy deficiente");
      break;
    default:
      console.log("No es posible calificar la nota");
  }
}

getScore(results.David);
getScore(results.Maria);
getScore(results.Jose);
getScore(results.Juan);
getScore(results.Blanca);
getScore(results.Carmen);


