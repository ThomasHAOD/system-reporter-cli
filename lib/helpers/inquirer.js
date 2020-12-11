const inquirer = require('inquirer');

exports.getUserInput = (questions) => inquirer.prompt([...questions]);

exports.nameQuestion = {
  name: 'name',
  type: 'input',
  message: 'Please enter your name',
  validate: function (value) {
    if (value.length) {
      return true;
    } else {
      return 'Please enter your name...';
    }
  },
};

const options = ['OS', 'Memory', 'Horsepower', 'General'];

exports.systemInfoOptions = {
  name: 'systemInfoOptions',
  type: 'checkbox',
  message: `What would you like to know about your system?`,
  choices: options,
};
