//En una gran cantidad de juegos el sistema de turnos es sencillo, una vez el jugador actual ha consumido su turno, 
//pasa al final de la cola y le toca al siguiente.Dada una lista inicial de jugadores, implementa una función que devuelva la nueva lista de jugadores,
//en el orden correcto, después de X turnos.

// TIP: Aunque se puede resolver con el operador %, intenta idear una solución usando spread/rest y destructuring.


const getPlayersOrder = (players, turns) => {
  for (let i = 0; i < turns; i++) {
    [primero, ...players] = players;
    players.push(primero);
  };
  return players;
}

const newOrderIn2Turns = getPlayersOrder(["Ana", "Juan", "Pablo", "Lucia"], 2);
// Un ejemplo:
console.log(newOrderIn2Turns); // ["Pablo", "Lucia", "Ana", "Juan"]