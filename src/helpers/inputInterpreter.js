import {create, read, remove, list, compress, copyFile, moveFile, renameFile, goUp, cd, calculateHash}
  from "../handlers/modules.js";

import {MESSAGES} from "./textConstant.js";

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
      await list(process.cwd());
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
      await copyFile(secondWord, thirdWord);
      break;
    }
    case "mv": {
      await moveFile(secondWord, thirdWord);
      break;
    }
    case "rn": {
      await renameFile(secondWord, thirdWord);
      break;
    }
    case "up": {
      goUp();
      break;
    }
    case "cd": {
      await cd(secondWord)
      break;
    }
    case "hash":
      await calculateHash(secondWord);
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
      process.stdout.write(MESSAGES.invalid);
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
