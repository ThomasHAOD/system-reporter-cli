const { getUserInput, systemInfoOptions } = require('../helpers/inquirer');

const osInfo = require('../system/os');
const memory = require('../system/memory');
const processors = require('../system/processors');
const system = require('../system/system');

const optionsMap = {
  OS: osInfo,
  Memory: memory,
  Horsepower: processors,
  General: system,
};

const reportRequestHandler = async () => {
  const selection = await getUserInput([systemInfoOptions]);
  await selection.systemInfoOptions.forEach((option) => {
    console.log(optionsMap[option]);
  });
};

module.exports = reportRequestHandler;
