# System Reporter CLI Code Log

## Day 1

### Log

Today I initialised the project and had it output basic information about the user and system. I am using the following articles as reference/inspiration:

- https://blog.bitsrc.io/how-to-build-a-command-line-cli-tool-in-nodejs-b8072b291f81
- https://developer.okta.com/blog/2019/06/18/command-line-app-with-nodejs
- https://www.sitepoint.com/javascript-command-line-interface-cli-node-js/

I also added some useful libraries for creating Command Line Tools and added information about the processors, memory and more in depth system information.

### Issues

The only issue I have come across so far is the package returns an error when I try to run it as a cli:  
`` /usr/local/bin/system-reporter: line 1: syntax error near unexpected token `(' ``  
`` /usr/local/bin/system-reporter: line 1: `const { username, osCode, osVersion } = require('./lib/os');'  ``

This was solved by adding a "shebang" line at the top of the entrypoint file. This line, which starts with '#!', lets the unix system know to parse this file as an interpreter directive.
