import fs from 'fs';
import path from 'path';
import { MESSAGES } from '../../helpers/index.js';

/**
 * Moves a file from one directory to another.
 *
 * @example
 * move('/path/to/source/file.txt', '/path/to/destination')
 *
 * @async
 * @function move
 * @param {string} pathToFile - The path to the file to be moved.
 * @param {string} pathToNewDirectory - The path to the directory where the file should be moved.
 * @returns {Promise<void>} A promise that resolves when the file has been successfully moved.
 *
 * @throws Will throw an error if moving the file fails.
 */
export const move = (pathToFile, pathToNewDirectory) => {
  const baseFileName = path.basename(pathToFile);
  const destPath = path.join(pathToNewDirectory, baseFileName);
  const readStream = fs.createReadStream(pathToFile);
  const writeStream = fs.createWriteStream(destPath);

  return new Promise((resolve, reject) => {
    const errorHandler = (err) => {
      console.log(MESSAGES.invalid);
      reject(err);
    };

    readStream.on('error', errorHandler);
    writeStream.on('error', errorHandler);

    writeStream.on('finish', () => {
      fs.unlink(pathToFile, (err) => {
        if (err) reject(err);
        else {
          console.log(`File successfully moved from ${pathToFile} to ${destPath}`);
          resolve();
        }
      });
    });

    readStream.pipe(writeStream);
  });
};
