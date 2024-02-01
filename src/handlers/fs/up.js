import { dirname } from 'path';
import { cwd, chdir } from 'node:process';
import { MESSAGES } from '../../helpers';

/**
 * Moves up one level from the current directory.
 */
export const goUp = () => {
  const currentDirectory = cwd();
  const parentDirectory = dirname(currentDirectory);

  if (currentDirectory === parentDirectory) {
    console.log('Already in the root folder. Cannot go up.');
    return;
  }

  try {
    chdir(parentDirectory);
  } catch (err) {
    console.log(`${MESSAGES.error}: ${err.message}`);
  }
};
