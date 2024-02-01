import { getArchitecture, getCPUsInfo, getEOL, getUserName, getHomeDir } from './index.js';
import { MESSAGES } from '../helpers/index.js';

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
      console.log('Home Directory:', getHomeDir());
      break;
    case 'username':
      console.log('Username:', getUserName());
      break;
    case 'architecture':
      console.log('Architecture:', getArchitecture());
      break;
    default: {
      process.stdout.write(MESSAGES.invalid);
      break;
    }
  }
};
