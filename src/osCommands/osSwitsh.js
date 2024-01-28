import { getArchitecture, getCPUsInfo, getEOL, getHomeDir, getUserName } from './osModules.js';
import { MESSAGES } from '../helpers/textConstant.js';
import { printError } from '../helpers/helpfullFunction.js';

/**
 * Operating System command handler.
 * @param {string} input - Input string with the command.
 */
export const osSwitch = (input) => {
  if (!input) {
    printError(MESSAGES.invalid);
    return;
  }
  let filtered = input.split(' ').filter((item) => item.includes('--'));

  if (filtered.length === 0) {
    printError(MESSAGES.invalid);
    return;
  }

  let parameter = filtered[0].slice(2).toLowerCase();

  switch (parameter) {
    case 'eol':
      getEOL();
      break;
    case 'cpus':
      getCPUsInfo();
      break;
    case 'homedir':
      getHomeDir();
      break;
    case 'username':
      getUserName();
      break;
    case 'architecture':
      getArchitecture();
      break;
    default: {
      process.stdout.write(MESSAGES.invalid);
      break;
    }
  }
};
