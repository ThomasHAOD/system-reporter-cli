#!/usr/bin/env node

//console helper libraries
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

//CLI Stages
const nameHandler = require('./lib/user-input/name-handler');
const reportRequestHandler = require('./lib/user-input/system-report');

const banner = chalk.green(
  figlet.textSync('System Reporter', { horizontalLayout: 'full' })
);

clear();

console.log(banner);

const run = async () => {
  const argument = process.argv[2];
  await nameHandler();
  await reportRequestHandler(argument);
};

run();
