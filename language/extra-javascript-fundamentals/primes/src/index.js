//Crea una función tal que, dado un número entero de inicio from y otro de fin to, encuentre los números primos entre ellos y los muestre por pantalla.

const showPrimes= (from, to) => {
  for(let number = from; number <= to; number++) {
     isPrime(number) ? console.log(`El número ${number} es primo`) : console.log(`El número ${number} no es primo`);
  }
}

const isPrime = number => {
  for(let i = 2; i < number; i++)
    if(number % i === 0) return false;
  return number > 1;
}    

 showPrimes(1, 100);

// Challenge: Se puede mejorar mucho el rendimiento del ejercicio anterior.
// Al buscar si un numero es primo, podemos dejar de comprobar si es divisible 
// por cada entero mayor que 1 una vez alcancemos la raiz cuadrada de dicho número.


const showPrimesMath = (from, to) => {
  for(let number = from; number <= to; number++) {
     isPrimeMath(number) ? console.log(`El número ${number} es primo`) : console.log(`El número ${number} no es primo`);
  }
}

const isPrimeMath = number => {
  let prime;
  for(let i = 2, square = Math.sqrt(number); i <= square; i++) {
    prime = number % i !== 0;
  }
  return prime;
};

showPrimesMath(1, 100);
