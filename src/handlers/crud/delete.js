import {promises as fs} from 'fs';
import {MESSAGES} from "../../helpers/textConstant.js";
import {printError, printMessage} from "../../helpers/helpfullFunction.js";

/**
 * Removes the specified file.
 * @param {string} file - The path to the file to be removed.
 */
export const remove = async (file) => {
  try {
    await fs.unlink(file);
    printMessage(`File ${file} was deleted successfully`);
  } catch (error) {
    printError(MESSAGES.error);
    printError(`Error deleting file ${file}: `, error.message);
  }
};
