import fs from 'fs';
import { normalize } from 'path';

import { MESSAGES } from '../../helpers/index.js';

/**
 * Reads a file and outputs its content to the console using a Readable stream.
 *
 * @example
 * read('/path/to/file.txt')
 *
 * @async
 * @function read
 * @param {string} file - The path to the file to be read.
 * @returns {Promise<void>} A promise that resolves when the file has been successfully read.
 *
 * @throws Will display an error message if reading the file fails.
 */
export const read = (file) => {
  let normalizeFile = normalize(file);
  const readableStream = fs.createReadStream(normalizeFile);

  return new Promise((resolve, reject) => {
    readableStream.on('data', (chunk) => {
      process.stdout.write(chunk);
    });

    const errorHandler = (err) => {
      console.log(MESSAGES.invalid);
      reject(err);
    };
    readableStream.on('error', errorHandler);

    readableStream.on('end', () => {
      console.info(`\nFile reading is completed.`);
      resolve();
    });
  }).catch(() => {
    console.log(MESSAGES.error);
  });
};
