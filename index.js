const chalk = require("chalk");
const modulef = require("./custommodule/module");

const result = modulef.sum(1, 2, 3, 4);
console.log(chalk.green(`The sum is: ${result}`));
