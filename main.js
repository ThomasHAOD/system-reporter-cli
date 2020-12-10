const os = require("os");

const osCode = os.type();

const osVersion = os.release();

const username = os.userInfo().username;

const greeting = `Hello ${username}, welcome to the System Reporter CLI. Your current system is ${osCode}, version ${osVersion}.`;

console.log(greeting);
