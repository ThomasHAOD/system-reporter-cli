const inquirer = require('inquirer');

exports.getUserInput = (options) => {
  switch (typeof options) {
    case 'array':
      inquirer.prompt(options);
      break;
    case 'object':
      inquirer.prompt([options]);
      break;
    default:
      throw new Error('invalid option type');
  }
};

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

const options = ['Memory', 'HorsePower', 'OperatingSytem', 'General'];

exports.systemInfoOptions = {
  name: 'systemInfoOptions',
  type: 'checkbox',
  message: `What would you like to know about your system?`,
  choices: options,
};
