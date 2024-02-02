import fs from 'fs';
import path from 'path';

import { MESSAGES, normalizePath } from '../../helpers/index.js';

/**
 * Copies a file using Readable and Writable streams and returns a promise.
 *
 * const path_to_file = '/path/to/source/file.txt';
 * const path_to_new_directory = '/path/to/destination';
 * copyFile(path_to_file, path_to_new_directory);
 *
 * @param {string} pathToFile - The path to the source file.
 * @param {string} pathToNewDirectory - The path to the new directory where the file should be copied.
 *
 * @returns {Promise<void>} A promise that resolves when the file has been copied successfully.
 */
export const copy = async (pathToFile, pathToNewDirectory) => {
  return new Promise((resolve, reject) => {
    let normalizeSource = normalizePath(pathToFile);
    let normalizeTarget = normalizePath(pathToNewDirectory);

    const fileName = path.basename(normalizeSource);
    const destination = path.join(normalizeTarget, fileName);

    const readable = fs.createReadStream(normalizeSource);
    const writable = fs.createWriteStream(destination);

    const errorHandler = (err) => {
      console.log(MESSAGES.invalid);
      reject(err);
    };

    readable.on('error', errorHandler);
    writable.on('error', errorHandler);

    readable.pipe(writable);

    readable.on('end', () => {
      console.log(`File "${pathToFile}" has been successfully copied to "${destination}".`);
      resolve();
    });
  });
};
