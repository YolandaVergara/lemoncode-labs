// // Apartado A: Intenta razonar cual será el resultado de la consola al ejecutar este código:
 var a = 1;
 let b = 2;

 {
   try {
     console.log(a, b); // Muestra "undefined, 2" ya que a está definida como var y su ámbito es de bloque
   } catch (error) {}
   let b = 3;
   console.log(a, b); // Muestra: "1, 3" al dar error en el try  pasar por el catch, define b y da ese resultado
 }
   console.log(a, b); // Consolea "1, 2"

 () => {
   console.log(a); // es una función anónima a la que no se le pasa ningún parámetro y al no tener ningún valor, no puede mostrar nada
   var a = 5;
   let b = 6;
   console.log(a, b); // consolea "5, 6" porque las definimos dentro de la función
 };

 console.log(a, b); // consolea "1, 2" porque las reasignaciones en la función anónima son de ámbito local por lo que no modifica los valores que tienen inicialmente esas funciones.


// Apartado B: Sin tocar ninguno de los console.log anteriores, modifica ligeramente el código para que muestre la siguiente secuencia:
// 1 3
// 1 3
// 1 2
// 5
// 5 6
// 1 2

var a = 1;
let b = 2;

{
  try {
    let b = 3
    console.log(a, b);
    throw new Error();
  } catch (error) {}
  let b = 3;
  console.log(a, b);
}

console.log(a, b);

(() => {
  let a = 5;
  console.log(a);
  let b = 6;
  console.log(a, b);
})();

console.log(a, b);