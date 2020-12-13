const system = require('os');

const totalMemory = system.totalmem();

const freeMemory = system.freemem();

const memoryToGigabytes = (memory) => {
  const gigFactor = 1000000000;
  const memInGig = memory / gigFactor;
  return memInGig.toFixed(2);
};

const memoryUsage = (freeMemory / totalMemory) * 100;

const memoryInformation = `You have a total of ${memoryToGigabytes(
  totalMemory
)}Gb of memory, ${memoryToGigabytes(
  freeMemory
)}Gb of which are free - that's ${memoryUsage.toFixed(2)}%!`;

module.exports = memoryInformation;
