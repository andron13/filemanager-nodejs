import fs from 'fs';
import {MESSAGES} from "../../helpers/textConstant.js";
import {printError} from "../../helpers/helpfullFunction.js";

/**
 * Creates a new file in the current working directory.
 * @param {string} file - The path to the new file to be created.
 */
export const create = (file) => {
  const writeStream = fs.createWriteStream(file, { flags: 'wx' });

  writeStream.on('error', (error) => {
    printError(`${MESSAGES.invalid}, ${error}`)
    printError(`Error creating file: ${error.message}`);
  });

  writeStream.end();
};
