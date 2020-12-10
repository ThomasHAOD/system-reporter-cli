const system = require('os');

const totalMemory = system.totalmem();

const freeMemory = system.freemem();

const memoryUsage = (freeMemory / totalMemory) * 100;

module.exports = {
  totalMemory,
  freeMemory,
  memoryUsage,
};
