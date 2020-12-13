const fs = require('fs');

const {
  getUserInput,
  systemInfoOptions,
  saveReportConfirm,
} = require('../helpers/inquirer');

const osInfo = require('../system/os');
const memory = require('../system/memory');
const processors = require('../system/processors');
const system = require('../system/system');

const reportPath = '/Users/thomasodonnell/system-report.txt';

const optionsMap = {
  OS: osInfo,
  Memory: memory,
  Horsepower: processors,
  General: system,
};

const reportRequestHandler = async (argument) => {
  let parsedInformation;

  if (argument) {
    parsedInformation = optionsMap[argument];
    if (!parsedInformation)
      throw new Error('Please enter a valid argument, or no argument at all.');
    console.log(parsedInformation);
  } else {
    const selection = await getUserInput([systemInfoOptions]);
    const reportInfo = await selection.systemInfoOptions.map((option) => {
      console.log(optionsMap[option]);
      return optionsMap[option];
    });
    parsedInformation = reportInfo.join('\n');
  }

  const { saveReport } = await getUserInput([saveReportConfirm]);

  const date = new Date();

  const report = `Report - ${date} \n\n ${parsedInformation} \n\n\n`;

  if (saveReport) {
    await fs.appendFile(reportPath, report, null, (err) => {
      if (err) {
        throw new Error(err);
      } else {
        console.log(`Report saved to ${reportPath}`);
      }
    });
  }
};

module.exports = reportRequestHandler;
