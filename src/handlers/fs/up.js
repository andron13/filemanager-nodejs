import { dirname } from 'path';
import {cwd, chdir} from 'node:process';
import {MESSAGES} from "../../helpers/textConstant.js";
import {printError, printMessage} from "../../helpers/helpfullFunction.js";

/**
 * Moves up one level from the current directory.
 */
export const goUp = () => {
  const currentDirectory = cwd();
  const parentDirectory = dirname(currentDirectory);

  if (currentDirectory === parentDirectory) {
    printMessage('Already in the root folder. Cannot go up.');
    return;
  }

  try {
    chdir(parentDirectory);
  } catch (err) {
    printError(`${MESSAGES.error}: ${err.message}`);
  }
};
