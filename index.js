import * as os from "os";
import * as readline from "readline";
import { cwd } from 'node:process';


import {MESSAGES} from "./src/helpers/textConstant.js";
import {inputChoice} from "./src/helpers/inputInterpreter.js";


const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

/* Username start*/
let username = "Anonymous";
process.argv.forEach((item) => {
  if (item.startsWith("--username=")) {
    username = item.split("=")[1];
  }
});
/* Username end*/

readlineInterface.input.setEncoding("utf-8");
// process.chdir(baseDir);
readlineInterface.output.write(MESSAGES.welcome(username));
readlineInterface.output.write(MESSAGES.currentPath(cwd()));

process.on('exit', () => {
  process.stdout.write(MESSAGES.goodbye(username));
});
process.on('SIGINT', function () {
  process.exit(0);
});

readlineInterface.on('line', async (line) => {
  await inputChoice(line, process.cwd())
  readlineInterface.output.write(MESSAGES.currentPath(cwd()));
});


