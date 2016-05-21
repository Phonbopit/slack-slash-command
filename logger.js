'use strict';

const chalk = require('chalk');

module.exports = (message, name) => {
  if (typeof message === 'object') {
    console.log(chalk.blue('============================'));
    console.log(chalk.blue(name));
    console.log(chalk.blue(JSON.stringify(message, undefined, 2)));
    console.log(chalk.blue('============================'));
  } else {
    console.log(chalk.blue('============================'));
    console.log(chalk.blue(name));
    console.log(chalk.blue(message));
    console.log(chalk.blue('============================'));
  }
}