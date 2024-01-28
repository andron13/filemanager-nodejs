import {
  create,
  read,
  remove,
  list,
  compress,
  copyFile,
  moveFile,
  renameFile,
  goUp,
  cd,
  calculateHash,
  decompress,
} from '../handlers/modules.js';

import { MESSAGES } from './textConstant.js';
import { osSwitch } from '../osCommands/osSwitsh.js';

/**
 * Handler for input command choice.
 * @param {string} inputLine - Input line with the command.
 */
export const inputChoice = async (inputLine) => {
  let str = inputLine.trim();
  let firstWord = str.split(' ')[0].toLowerCase();
  let secondWord = str.split(' ')[1];
  let thirdWord = str.split(' ')[2];

  switch (firstWord) {
    case '.exit': {
      process.exit();
      break;
    }
    case 'ls': {
      await list(process.cwd());
      break;
    }
    case 'add': {
      await create(secondWord);
      break;
    }
    case 'cat': {
      await read(secondWord);
      break;
    }
    case 'rm': {
      await remove(secondWord);
      break;
    }
    case 'cp': {
      await copyFile(secondWord, thirdWord);
      break;
    }
    case 'mv': {
      await moveFile(secondWord, thirdWord);
      break;
    }
    case 'rn': {
      await renameFile(secondWord, thirdWord);
      break;
    }
    case 'up': {
      goUp();
      break;
    }
    case 'cd': {
      await cd(secondWord);
      break;
    }
    case 'hash':
      await calculateHash(secondWord);
      break;
    case 'decompress': {
      decompress(secondWord, thirdWord);
      break;
    }
    case 'compress': {
      await compress(secondWord, thirdWord);
      break;
    }
    case 'os':
      osSwitch(str);
      break;
    default: {
      process.stdout.write(MESSAGES.invalid);
      break;
    }
  }
};
