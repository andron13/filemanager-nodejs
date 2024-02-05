import { list, compress, goUp, cd, calculateHash, decompress } from '../handlers/index.js';
import { copy, create, move, read, remove, rename } from '../handlers/crud/index.js';

import { MESSAGES } from './textConstant.js';
import { osSwitch } from '../osCommands/index.js';

/**
 * Handler for input command choice.
 * @param {string} inputLine - Input line with the command.
 */
export const inputChoice = async (inputLine) => {
  try {
    const inputArray = getInputArray(inputLine);

    if (oneArgsCommands.some((el) => el === inputArray[0]) && inputArray.length > 1) {
      aLotOfArguments(inputArray[0]);
      return;
    }

    if (twoArgsCommands.some((el) => el === inputArray[0]) && inputArray.length !== 2) {
      aLotOfArguments(inputArray[0]);
      return;
    }
    if (threeArgsCommands.some((el) => el === inputArray[0]) && inputArray.length !== 3) {
      aLotOfArguments(inputArray[0]);
      return;
    }

    switch (inputArray[0]) {
      case 'up': {
        goUp();
        break;
      }
      case '.exit': {
        process.exit();
        break;
      }
      case 'ls': {
        await list(process.cwd());
        break;
      }
      case 'add': {
        await create(inputArray[1]);
        break;
      }
      case 'cat': {
        await read(inputArray[1]);
        break;
      }
      case 'rm': {
        await remove(inputArray[1]);
        break;
      }
      case 'cd': {
        await cd(inputArray[1]);
        break;
      }
      case 'hash':
        await calculateHash(inputArray[1]);
        break;
      case 'cp': {
        await copy(inputArray[1], inputArray[2]);
        break;
      }
      case 'mv': {
        await move(inputArray[1], inputArray[2]);
        break;
      }
      case 'rn': {
        await rename(inputArray[1], inputArray[2]);
        break;
      }
      case 'decompress': {
        decompress(inputArray[1], inputArray[2]);
        break;
      }
      case 'compress': {
        await compress(inputArray[1], inputArray[2]);
        break;
      }
      case 'os':
        osSwitch(inputArray);
        break;
      default: {
        process.stdout.write(MESSAGES.invalid);
        break;
      }
    }
  } catch (err) {
    console.error(err);
  }
};

function getInputArray(inputLine) {
  // магия регулярок
  let args = inputLine.match(/(?<=\s|^)[^'\s"][^"\s]*(?=\s|$)|"(.*?)"|'(.*?)'/g);
  // удаляем кавычки вокруг аргументов, если они есть
  args = args.map((arg) =>
    (arg.startsWith(`"`) && arg.endsWith(`"`)) || (arg.startsWith(`'`) && arg.endsWith(`'`))
      ? arg.slice(1, -1)
      : arg,
  );
  // отфильтровываем пустышки
  return args.filter((e) => e !== '');
}

const oneArgsCommands = ['up', '.exit', 'ls'];
const twoArgsCommands = ['add', 'cat', 'rm', 'cd', 'hash', 'os'];
const threeArgsCommands = ['cp', 'mv', 'rn', 'decompress', 'compress'];

const aLotOfArguments = (command) => {
  console.log('a Lot Of Arguments for: ', command);
  console.log(MESSAGES.invalid);
};
