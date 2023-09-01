import inquirer from 'inquirer';

async function askForChoices(choices) {
  const { selectedChoice } = await inquirer.prompt([
    {
      type: 'list',
      name: 'selectedChoice',
      message: 'What would you like to do?',
      choices: choices,
    },
  ]);

  return selectedChoice;
}

export { askForChoices };

