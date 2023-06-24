import {fileURLToPath} from "url";
import {dirname} from "path";
import path from "path";
import { cwd } from 'node:process';

import {commands} from "./command.js";
import {MESSAGES} from "./textConstant.js";
import {list} from "../handlers/fs/list.js";
import fs from "fs";

// let currentDirName = os.homedir()

export const inputChoice = async (inputLine, userPath) => {
  let str = inputLine.trim();
  // console.log(str, "")
  switch (str) {
    case "ls":
      await list();
      break;
    case ".exit": {
      console.log('######### .exit ##########');
      process.exit(0);
      break;
    }
    case commands.compress(str): {
      console.log('######### compress ##########');
      break;
    }
    case commands.decompress(str): {
      console.log('######### decompress ##########');

      break;
    }
    default: {
      console.log('######### default ##########');
      process.stdout.write(MESSAGES.invalid)
      break;
    }
  }
}
