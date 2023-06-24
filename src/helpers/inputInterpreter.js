import {cwd} from "node:process";

import {MESSAGES} from "./textConstant.js";
import {create, read, remove, list, compress,} from "../handlers/modules.js";


export const inputChoice = async (inputLine, userPath) => {
  let str = inputLine.trim();
  let firstWord = str.split(" ")[0].toLowerCase();
  let secondWord = str.split(" ")[1];
  let thirdWord = str.split(" ")[2];
  // console.log(firstWord)
  switch (firstWord) {
    case ".exit": {
      process.exit();
      break;
    }
    case "ls": {
      await list();
      break;
    }
    case "add": {
      await create(secondWord);
      break;
    }
    case "cat": {
      await read(secondWord)
      break;
    }
    case "rm": {
      await remove(secondWord);
      break;
    }
    case "cp": {
      console.log('######### "cp" ##########');
      break;
    }
    case "mv": {
      console.log('######### move ##########');
      break;
    }
    case "up": {
      console.log('######### up ##########');
      break;
    }
    case "cd": {
      console.log('######### cd ##########');
      break;
    }
    case "rn": {
      console.log('######### "rn" ##########');
      break;
    }


    case "hash":
      console.log('######### "hash"  ##########');
      break;
    case  "decompress": {
      console.log('######### decompress ##########');
      break;
    }
    case "compress": {
      console.log('######### compress ##########');
      await compress();
      break;
    }
    case "os":
      console.log('######### "os MAIN"  ##########');
      osSwitch(str)
      break;
    default: {
      console.log('######### default ##########');
      process.stdout.write(MESSAGES.invalid)
      break;
    }
  }
}


const osSwitch = (input) => {
  let parameter = input
    .split(" ")
    .filter(item => item.includes("--")
    )[0];
  switch (parameter) {
    case "--eol":
      console.log('######### "os --eol"  ##########');
      break;
    case "--cpus":
      console.log('######### "os --cpus"  ##########');
      break;
    case "--homedir":
      console.log('######### "os --homedir"  ##########');
      break;
    case "--username":
      console.log('#########  "os --username" ##########');
      break;
    case "--architecture":
      console.log('######### "os --architecture"  ##########');
      break;
    default: {
      console.log('######### default ##########');
      process.stdout.write(MESSAGES.invalid)
      break;
    }
  }

}
