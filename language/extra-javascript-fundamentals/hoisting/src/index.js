// Apartado A: ¿Cual crees que será el resultado de la consola y porqué?

function f() {
  console.log(a); // no está declarada la variable a y por lo tanto no puede mostrarla, resulta undefined
  console.log(g()); // la función se invoca en éste punto y la variable a aún no está declarada, resulta undefined

  var a = "good job!";
  function g() {
    return a;
  }
  console.log(a); // aquí si está declarada la variable y mostrará su valor, da como resultado "good job!"
}

// Apartado B: ¿Y ahora?

 var a = 1;

 (function() {
   console.log(a); // intenta mostrar el resultado de a pero al estar declarada después, resulta undefined
   var a = 2;
  b = 4;
   var c = 3;
 })();

 console.log(a); // este console.log muestra el valor de a que tiene antes de la función
 console.log(b); // la variable está definida de tal manera que se considera global por lo que se accede tanto dentro como fuera
 console.log(c); // la variable c sí se declara dentro de la función pero también vive en el ámbito de la misma por lo que al no conocerla, muestra error la consola

// Apartado C: ¿Y con esta ligera variación?

f();
var a = 1;

function f() {
  console.log(a); // intenta mostrar el resultado de a pero al estar declarada después, resulta undefined
  b = 4;
  var c = 3;
}

console.log(a); // este console.log muestra el valor de a que tiene antes de la función => 1
console.log(b); // la variable está definida de tal manera que se considera global por lo que se accede tanto dentro como fuera => 4
console.log(c); // la variable c sí se declara dentro de la función pero también vive en el ámbito de la misma por lo que al no conocerla, muestra error la consola
