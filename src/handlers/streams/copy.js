import fs from 'fs';
import path from 'path';

import {MESSAGES} from "../../helpers/textConstant.js";
import {normalizePath} from "../../helpers/helpfullFunction.js";

/**
 * Copies a file using Readable and Writable streams.
 *
 * const path_to_file = '/path/to/source/file.txt';
 * const path_to_new_directory = '/path/to/destination';
 * copyFile(path_to_file, path_to_new_directory);
 *
 * @param {string} pathToFile - The path to the source file.
 * @param {string} pathToNewDirectory - The path to the new directory where the file should be copied.
 */
export const copyFile = (pathToFile, pathToNewDirectory) => {
  console.log(pathToFile)
  console.log(pathToNewDirectory)
  let normalizeSource = normalizePath(pathToFile);
  let normalizeTarget=normalizePath(pathToNewDirectory);

  const fileName = path.basename(normalizeSource);
  const destination = path.join(normalizeTarget, fileName);

  const readable = fs.createReadStream(normalizeSource);
  const writable = fs.createWriteStream(destination);

  readable.on('error', (err) => {
    console.error(MESSAGES.invalid, err);
  });

  writable.on('error', (err) => {
    console.error(MESSAGES.invalid, err);
  });

  readable.pipe(writable);

  readable.on('end', () => {
    console.log(`File "${pathToFile}" has been successfully copied to "${destination}".`);
  });
}
