import fs from 'fs';
import { normalize } from 'path';

import { MESSAGES } from '../../helpers/index.js';

/**
 * Reads a file and outputs its content to the console using a Readable stream.
 * @param {string} file - The name of the file to read.
 */
export const read = async (file) => {
  let normalizeFile = normalize(file);
  const readableStream = fs.createReadStream(normalizeFile);

  readableStream.on('data', (chunk) => {
    process.stdout.write(chunk);
  });

  readableStream.on('error', (err) => {
    console.error(`${MESSAGES.error}, ${err.message}`);
  });
  readableStream.on('end', () => {
    console.error(`\nFile reading is completed.`);
  });
};
