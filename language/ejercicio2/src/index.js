const ravenclaw = ["Luna Lovegood", "Cho Chang", "Myrtle Warren", "Padma Patil"];
const gryffindor = ["Harry Potter", "Hermione Granger", "Ron Weasley", "Neville Longbottom"];
const hufflepuff = ["Cedric Diggory", "Newton Scamander", "Nymphadora Tonks", "Pomona Sprout"];
const slytherin = ["Draco Malfoy", "Vincent Crabbe", "Severus Snape", "Andromeda Tonks"];

// Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada,
// devuelva la concatenación de ambos. Uliza rest / spread operators.

//Opción 1
const houses = (ravenclaw, gryffindor) => [...ravenclaw, ...gryffindor];
houses(ravenclaw, gryffindor);

//Opción 2, propongo dos maneras
const allHouses = [...ravenclaw, ...gryffindor, ...hufflepuff, ...slytherin];

const allHousesConcat = (...houses) => [].concat(...houses);
allHouses(ravenclaw, gryffindor, hufflepuff, slytherin);


