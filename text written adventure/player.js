class Player {
  constructor(playerClass) {
    this.playerClass = playerClass;
    this.health = playerClass === 'warrior' ? 150 : 100; 
  }

  isAlive() {
    return this.health > 0;
  }

  hasWon() {
    return false;
  }

  takeDamage(amount) {
    this.health -= amount;
    console.log(`You take ${amount} damage. Your health is now ${this.health}.`);
  }

  checkHealth() {
    console.log(`Your health: ${this.health}`);
  }
}

export { Player };

  