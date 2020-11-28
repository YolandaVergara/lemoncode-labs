// Implementa una función para calcular el n-enésimo termino de la sucesión de Fibonacci. Esta sucesión tiene sus dos primeros términos prefijados:
// TIP: Es el clásico problema donde el término siguiente depende del actual y el anterior.
// TIP: También se puede abordar con recursividad, pero buscamos una solución iterativa para hacer uso de destructuring con múltiples asignaciones.

 function fib(max){
   let number1 = 0;
   let number2 = 1;                        
   for (let i = 0; i = max; i++){
     [number1, number2] = [number1 + number2, number1];   
     console.log(number1);
   }
}

fib(10);
fib(20);
fib(5);