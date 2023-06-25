import { cwd } from 'node:process';
import {MESSAGES} from "../../helpers/textConstant.js";

/**
 * Moves up one level from the current directory.
 */
export const goUp = () => {
  const currentDirectory = cwd();
  const parentDirectory = currentDirectory.split('/').slice(0, -1).join('/');

  if (currentDirectory === parentDirectory) {
    console.log('Already in the root folder. Cannot go up.');
    return;
  }

  try {
    process.chdir(parentDirectory);
  } catch (err) {
    throw new Error(MESSAGES.error);
  }
};
