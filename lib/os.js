const os = require('os');

const osCode = os.type();

const osVersion = os.release();

const username = os.userInfo().username;

module.exports = {
  osCode,
  osVersion,
  username,
};
