import {MESSAGES} from "./src/constant/AppVariables.js";

let username = "Anonymous";

process.argv.map((item) => {
  if (item.startsWith('--username=')) {
    username = item.split('=')[1];
  }
});

process.stdout.write(MESSAGES.welcome(username) + "\n");
