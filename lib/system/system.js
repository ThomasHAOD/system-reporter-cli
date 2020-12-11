const system = require('os');

const homeDirectory = system.homedir();

const systemUptime = system.uptime();

const uptimeInHours = systemUptime / 3600;

const otherSystemInfo = `Your home directory is ${homeDirectory} and your system has been live for ${uptimeInHours} hours.`;

module.exports = {
  homeDirectory,
  uptimeInHours,
};
