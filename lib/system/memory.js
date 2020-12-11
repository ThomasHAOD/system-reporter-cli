const system = require('os');

const totalMemory = system.totalmem();

const freeMemory = system.freemem();

const memoryUsage = (freeMemory / totalMemory) * 100;

const memoryInformation = `You have a total of ${totalMemory} bytes of memory, ${freeMemory} of which are free - that's ${memoryUsage.toFixed(
  2
)}%!`;

module.exports = memoryInformation;
