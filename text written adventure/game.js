import inquirer from 'inquirer';
import { askForChoices } from './inquirerUtils.js';
import { Player } from './player.js';

class Room {
  constructor(description) {
    this.description = description;
  }

  async enter(player) {
    console.log(this.description);
  }
}

class PuzzleRoom extends Room {
  constructor() {
    super('You enter a room with a simple puzzle...');
    this.number1 = Math.floor(Math.random() * 10) + 1;
    this.number2 = Math.floor(Math.random() * 10) + 1;
    this.operator = '+';
    this.answer = this.number1 + this.number2;
  }

  async enter(player) {
    console.log('Solve the puzzle to proceed!');
    const userAnswer = await inquirer.prompt({
      type: 'input',
      name: 'userAnswer',
      message: `What is ${this.number1} ${this.operator} ${this.number2}?`,
    });

    if (parseInt(userAnswer.userAnswer) === this.answer) {
      console.log('Congratulations! You solved the puzzle and proceed.');
    } else {
      console.log('Incorrect answer. You leave the room.');
    }
  }
}

  class MonsterRoom extends Room {
    constructor() {
      super('A fearsome monster blocks your path!');
    }
  
    async enter(player) {
      console.log('Prepare for battle!');
      const battleChoices = ['Fight the monster', 'Flee from the monster'];
      const playerChoice = await askForChoices(battleChoices);
  
      if (playerChoice === battleChoices[0]) {
        let monsterHealth = 50; 
        let playerHealth = player.health;
  
        while (playerHealth > 0 && monsterHealth > 0) {
          const playerAttack = Math.floor(Math.random() * 10) + 1;
          const monsterAttack = Math.floor(Math.random() * 8) + 1;
  
          monsterHealth -= playerAttack;
          playerHealth -= monsterAttack;
  
          console.log(`You hit the monster for ${playerAttack} damage.`);
          console.log(`The monster hits you for ${monsterAttack} damage.`);
  
          console.log(`Your health: ${playerHealth}`);
          console.log(`Monster's health: ${monsterHealth}`);
        }
  
        if (playerHealth <= 0) {
          console.log('The monster defeated you. Game over.');
          player.health = 0;
        } else {
          console.log('You defeated the monster and continue.');
        }
      } else {
        console.log('You flee from the monster and leave the room.');
      }
    }
  }

class TreasureRoom extends Room {
  constructor() {
    super('You found a room full of treasure!');
  }

  async enter(player) {
    console.log('Collect as much treasure as you can!');
    const treasureChoices = ['Gather treasures', 'Leave the room'];
    const playerChoice = await askForChoices(treasureChoices);

    if (playerChoice === treasureChoices[0]) {
      console.log('You collect some valuable treasures and continue.');
    } else {
      console.log('You leave the room without taking anything.');
    }
  }
}

class Game {
  constructor() {
    this.player = new Player();
    this.rooms = [
      new PuzzleRoom(),
      new MonsterRoom(),
      new TreasureRoom(),
    ];
    this.currentRoomIndex = 0;
    this.play();
  }

  async play() {
    while (this.player.isAlive() && !this.player.hasWon()) {
      const currentRoom = this.rooms[this.currentRoomIndex];
      await currentRoom.enter(this.player);
      const choices = await askForChoices(['Move to another room', 'Quit']);
      
      if (choices === 'Move to another room') {
        this.currentRoomIndex = (this.currentRoomIndex + 1) % this.rooms.length;
      } else {
        console.log('Thanks for playing!');
        process.exit();
      }
    }
  }
}

export { Room, PuzzleRoom, MonsterRoom, TreasureRoom, Game };
