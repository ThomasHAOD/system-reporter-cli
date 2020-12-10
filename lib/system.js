const system = require('os');

const homeDirectory = system.homedir();

const systemUptime = system.uptime();

const uptimeInHours = systemUptime / 3600;

module.exports = {
  homeDirectory,
  uptimeInHours,
};
