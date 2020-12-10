//console helper libraries
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

//system info imports
const { username, osName, osRelease } = require('./lib/os');
const { freeMemory, totalMemory, memoryUsage } = require('./lib/memory');
const { numOfCpus, averageSpeedInGHz } = require('./lib/processors');
const { homeDirectory, uptimeInHours } = require('./lib/system');

const banner = chalk.green(
  figlet.textSync('System Reporter', { horizontalLayout: 'full' })
);

clear();

console.log(banner);

const greeting = `Hello ${username}, welcome to the System Reporter CLI. Your current system is ${osName}, version ${osRelease}.`;

console.log(greeting);

const memoryInformation = `You have a total of ${totalMemory} bytes of memory, ${freeMemory} of which are free - that's ${memoryUsage.toFixed(
  2
)}%!`;

console.log(memoryInformation);

const cpuInformation = `You have ${numOfCpus} processors or cores runnning at an average of ${averageSpeedInGHz}GHz.`;

console.log(cpuInformation);

const otherSystemInfo = `Your home directory is ${homeDirectory} and your system has been live for ${uptimeInHours} hours.`;

console.log(otherSystemInfo);
