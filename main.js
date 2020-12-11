#!/usr/bin/env node

//console helper libraries
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

const { getUserInput, nameQuestion } = require('./lib/helpers/inquirer');
const { writeConfigFile } = require('./lib/helpers/handle-config');

const banner = chalk.green(
  figlet.textSync('System Reporter', { horizontalLayout: 'full' })
);

clear();

console.log(banner);

const run = async () => {
  const name = await getUserInput([nameQuestion]);
  await writeConfigFile(name);
};

run();
