import fs from 'fs';
import path from 'path';
import {MESSAGES} from '../../helpers/textConstant.js';
import {normalizePath} from "../../helpers/helpfullFunction.js";

/**
 *  * const pathToFile = '/path/to/source/file.txt';
 *  * const pathToNewDirectory = '/path/to/destination';
 *  *
 *  * moveFile(pathToFile, pathToNewDirectory);
 *
 * Moves a file by copying it to a new directory and then deleting the original file.
 * @param {string} pathToFile - The path to the source file.
 * @param {string} pathToNewDirectory - The path to the new directory where the file should be moved.
 */
export const moveFile = (pathToFile, pathToNewDirectory) => {

  let normalizeSource = normalizePath(pathToFile);
  let normalizeTarget = normalizePath(pathToNewDirectory);

  const fileName = path.basename(normalizeSource);
  const destination = path.join(normalizeTarget, fileName);

  const readable = fs.createReadStream(normalizeSource);
  const writable = fs.createWriteStream(destination);

  readable.on('error', (err) => {
    console.error(MESSAGES.error, err.message);
  });

  writable.on('error', (err) => {
    console.error(MESSAGES.error, err.message);
    cleanup();
  });

  const cleanup = () => {
    fs.unlink(destination, (err) => {
      err && console.error(MESSAGES.error, err.message);
    });
  };

  readable.pipe(writable);

  readable.on('end', () => {
    fs.unlink(normalizeSource, (err) => {
      err && console.error(MESSAGES.error, err.message);
    });
  });
};
