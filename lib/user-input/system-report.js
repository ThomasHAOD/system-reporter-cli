const { getUserInput, systemInfoOptions } = require('../helpers/inquirer');

const reportRequestHandler = () => {
  const selection = getUserInput(systemInfoOptions);
  console.log(selection);
};

module.exports = reportRequestHandler;
