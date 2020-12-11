#!/usr/bin/env node

//console helper libraries
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

const nameHandler = require('./lib/user-input/name-handler');

const banner = chalk.green(
  figlet.textSync('System Reporter', { horizontalLayout: 'full' })
);

clear();

console.log(banner);

const run = async () => {
  await nameHandler();
};

run();
