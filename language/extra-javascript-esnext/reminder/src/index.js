//El siguiente código implementa una sencilla clase que actúa como reminder, es decir, dado un mensaje, lo muestra por consola transcurrido (al menos) el tiempo indicado por el usuario:

class Reminder {
  constructor(text) {
    this.text = text;
  }

  remindMe(delay, ) {
    setTimeout(() =>{
      console.log(`Your reminder after ${delay} seconds is: ${this.text}`);
    }, delay * 1000);
  }
}

const alarm = new Reminder("Haz ejercicios!!");
console.log(alarm.remindMe(2)); 

// Creo un objeto nuevo y le paso el parámetro que necesita el constructor. La función SetTimeout al definirse como function sólo se ejecuta una vez pero se ejecuta antes de tener el valor de text debido a la asincronía, si usamos un callback se soluciona