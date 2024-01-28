import fs from 'fs';
import { MESSAGES } from '../../helpers/textConstant.js';

/**
 * Creates a new file in the current working directory.
 * @param {string} file - The path to the new file to be created.
 */
export const create = (file) => {
  const writeStream = fs.createWriteStream(file, { flags: 'wx' });

  writeStream.on('error', (error) => {
    console.error(`${MESSAGES.invalid}, ${error}`);
    // console.log(`Error creating file: ${error.message}`);
  });

  writeStream.end();
};
