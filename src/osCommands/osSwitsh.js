import { getArchitecture, getCPUsInfo, getEOL, printHomeDir, getUserName } from './';
import { MESSAGES } from '../helpers';

/**
 * Operating System command handler.
 * @param {string} input - Input string with the command.
 */
export const osSwitch = (input) => {
  if (!input) {
    console.log(MESSAGES.invalid);
    return;
  }
  let filtered = input.split(' ').filter((item) => item.includes('--'));

  if (filtered.length === 0) {
    console.log(MESSAGES.invalid);
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
      printHomeDir();
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
