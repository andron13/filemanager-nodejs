import * as os from "os";
import * as readline from "readline";

import {MESSAGES} from "./src/constant/AppVariables.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  // terminal: false
});

/* Username start*/
let username = "Anonymous";
process.argv.forEach((item) => {
  if (item.startsWith("--username=")) {
    username = item.split("=")[1];
  }
});
/* Username end*/

rl.input.setEncoding("utf-8");
process.chdir(os.homedir());
rl.output.write(MESSAGES.welcome(username));
rl.output.write(MESSAGES.currentPath);

process.on('exit', () => {
  process.stdout.write(MESSAGES.goodbye(username));
});
process.on('SIGINT', function () {
  process.exit(0);
});

rl.on('line', async (line) => {
  let str = line.trim();
  console.log(str)
  switch (str){
    case ".exit": {
      console.log('######### .exit ##########');
      process.exit(0);
      break;
    }
    default: {
      console.log('######### default ##########');
      process.stdout.write(MESSAGES.invalid)
      break;
    }
  }
});


