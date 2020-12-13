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

exports.saveReportConfirm = {
  name: 'saveReport',
  type: 'confirm',
  message: 'Would you like a report to be saved? [Y/n]',
  default: 'Yes',
};

const options = ['OS', 'Memory', 'Horsepower', 'General'];

exports.systemInfoOptions = {
  name: 'systemInfoOptions',
  type: 'checkbox',
  message: `What would you like to know about your system?`,
  choices: options,
};
