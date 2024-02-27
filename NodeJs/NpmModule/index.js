const chalk = require('chalk');
const validator= require("validator");
// console.log(chalk.blue('Hello world!')); 
const res= validator.isEmail('Aakash18@gmail.com');
console.log(res ? chalk.green.inverse(res): chalk.red.inverse(res));