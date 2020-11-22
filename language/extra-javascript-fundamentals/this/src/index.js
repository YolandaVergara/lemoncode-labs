//¿Cual es la salida de los logs en el siguiente código? Intenta razonar, no te limites a ejecutar la solución.

var surname = "Pérez";
var person = {
  name: "Juan",
  surname: "González",
  wife: {
    name: "Ana",
    surname: "Jiménez",
    getSurname: function() {
      return this.surname;
    },
  },
};

console.log(person.wife.getSurname()); // accede al método del objeto que lo crea y apunta a él ya que se asocia a ese objeto, devuelve Jiménez
var surnameFunction = person.wife.getSurname;
console.log(surnameFunction()); // en este caso, apunt al objeto window que no tiene definido el método
console.log(surnameFunction.call(person)); // accede al objeto especificado pasándolo como parámetro a call y muestra González