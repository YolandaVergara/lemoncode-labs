// Dada la siguiente función:

function f(a, { b } = {}, c = 100) {
  console.log(arguments.length);
  console.log(a, a === arguments[0]);
  console.log(b, b === arguments[1]);
  console.log(c, c === arguments[2]);

}

// Apartado A: ¿Qué muestra por consola esta llamada?

 f("JS rocks!", { b: "b" }); 
// En el primer console.log, un 2 ya que arguments crea un objeto y se alamacenan los valores que se pasan, posteriormente se pide el length y da como resultado 2
// En el segundo console.log, "JS Rocks", true, ya que, el parámetro a es el string y en la segunda evaluación compara si a es igual al primer elemento de los argumentos pasados
// En el tercer console.log, muestra "b, false", el primero porque es el valor que se le asigna por destructuring y false porque, se compara el valor de b con el objeto que crea arguments que es {b:"b"}
// En el cuarto console.log, muestra "100, false", porque esa función está definida con el tercer parámetro por defecto y su valor será 100 si no lo modificas pasándole otro valor y sustituyéndolo, posteriormente marca false, porque arguments hace un objeto que no es igual a un valor

// Apartado B: ¿Y con estos argumentos?

 f({ b: "b" });
// En el primer console.log, un 1, ya que como he explicado anteriormente, arguments crea un objeto con los parámetros, se le pide el lenght y muestra 1 ya que es un único valor el que se le pasa
// En el segundo console.log, mostrará "{ b: "b" }, true" ya que, tomará el argumento a como el primer parámetro que se le pasa que es un objeto y posteriormente hará una comparación entre ese value con el objeto que crea arguments que es {b: "b"}
// En el tercer console.log, mostrará "undefined, true", porque el valor del segundo argumento se inicializa pero no se asigna, y true porque arguments no podrá crear un objeto ya que no se le pasa ningún valor y al ser los dos undefined, da comor resultado true
// En el cuarto console.log, mostrará "100, false" aunque sólo se le pase un parámetro, ya se le está definiendo c por defecto con 100, pero sólo se inicializa, no se le asigna por eso da undefined, posteriormente marca false, porque arguments hace un objeto que no es igual a un valor

// Apartado C: ¿Y ahora?

f("JS sucks!", null, 13);
// Ahora no ejecuta nada, hace catacrock, no puede procesar la propiedad de un elemento null y no llega a ejecutarse nada.
