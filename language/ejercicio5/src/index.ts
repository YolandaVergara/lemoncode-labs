class SlothMachine {
  coins: number;

  constructor() {
    this.restartGame();
  }

  play() {
    this.coins = this.coins + 1;
    const game = Boolean(Math.round(Math.random())) &&
      Boolean(Math.round(Math.random())) &&
      Boolean(Math.round(Math.random()));
    if (game) {
      console.log(`Enhorabuena! Has ganado ${this.coins} monedas`);
      this.restartGame();
    } else { console.log('Inténtalo de nuevo') };
  }

  private restartGame() {
    this.coins = 0;
  }  
}
const machine = new SlothMachine();
machine.play();
machine.play();
machine.play();
machine.play();


