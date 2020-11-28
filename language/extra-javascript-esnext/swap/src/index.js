// ¿Sabrías intercambiar el valor de estas 2 variables en una sola línea?

let a = "A";
let b = "B";
[a, b] = [b, a];
console.log(a === "B" && b === "A" ? "You did it!" : "Keep trying!");

// Mediante destructuring se hace un intercambio de valores 