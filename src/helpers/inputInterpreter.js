import { list, compress, goUp, cd, calculateHash, decompress } from '../handlers';
import { copy, create, move, read, remove, rename } from '../handlers/crud/';

import { MESSAGES } from './textConstant.js';
import { osSwitch } from '../osCommands';

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
      await copy(secondWord, thirdWord);
      break;
    }
    case 'mv': {
      await move(secondWord, thirdWord);
      break;
    }
    case 'rn': {
      await rename(secondWord, thirdWord);
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
