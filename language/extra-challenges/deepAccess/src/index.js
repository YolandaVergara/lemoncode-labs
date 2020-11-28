const characters = ["Harry Potter", "Luna Lovegood", "Cedric Diggory", "Draco Malfoy"];


// Implementa una función head (inmutable), tal que, dado un array como entrada extraiga
// y devuelva su primer elemento. Utiliza destructuring.

const fromGryffindor = ([first, ...others]) => first;

fromGryffindor(characters);


// Implementa una función tail (inmutable), tal que, dado un array como entrada
// devuelta todos menos el primer elemento. Utiliza rest operator.

const allLessGryffindor = ([first, ...rest]) => rest;

allLessGryffindor(characters);


// Implementa una función init (inmutable), tal que, dado un array como entrada
// devuelva todos los elementos menos el último. Utiliza los métodos que ofrece
// Array.prototype.

const withoutSlytherin = (array) => array.slice(0, array.length - 1);

withoutSlytherin(characters);

// Implementa una función last (inmutable), tal que, dado un array como entrada
// devuelva el úlmo elemento.

const allLessSlytheryn = ([...characters]) => characters.pop();

allLessSlytheryn(characters);







