import inquirer from 'inquirer';
import { Game } from './game.js';

async function choosePlayerClass() {
  const { classChoice } = await inquirer.prompt([
    {
      type: 'list',
      name: 'classChoice',
      message: 'Choose your player class:',
      choices: ['Archer', 'Warrior'],
    },
  ]);
  
  return classChoice.toLowerCase();
}

async function startGame() {
  const playerClass = await choosePlayerClass();
  const game = new Game(playerClass);
}

startGame();
