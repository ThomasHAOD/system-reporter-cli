const { username, osCode, osVersion } = require('./lib/os');

const greeting = `Hello ${username}, welcome to the System Reporter CLI. Your current system is ${osCode}, version ${osVersion}.`;

console.log(greeting);
