#!/usr/bin/env node

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

console.log(
  chalk.green(
    figlet.textSync('iGit', { 
		font: 'Epic',
    	horizontalLayout: 'default',
    	verticalLayout: 'default' })
  	)
);