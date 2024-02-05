import * as readline from 'readline';
import { cwd } from 'node:process';

import { MESSAGES, inputChoice } from './src/helpers/index.js';
import { getHomeDir } from './src/osCommands/index.js';

process.chdir(getHomeDir());

const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

let username = 'Anonymous';
process.argv.forEach((item) => {
  if (item.startsWith('--username=')) {
    username = item.split('=')[1];
  }
});

readlineInterface.input.setEncoding('utf-8');
readlineInterface.output.write(MESSAGES.welcome(username));
readlineInterface.output.write(MESSAGES.currentPath(cwd()));
readlineInterface.output.write(MESSAGES.waitForCommands(username));

process.on('exit', () => {
  process.stdout.write(MESSAGES.goodbye(username));
});
process.on('SIGINT', function () {
  process.exit(0);
});

readlineInterface.on('line', async (line) => {
  await inputChoice(line);
  readlineInterface.output.write(MESSAGES.currentPath(cwd()));
  readlineInterface.output.write(MESSAGES.waitForCommands(username));
});
