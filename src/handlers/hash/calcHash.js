import fs from 'fs';
import crypto from 'crypto';

import { fileExists, normalizePath, MESSAGES } from '../../helpers';

/**
 * Calculates the hash for the specified file and prints it to the console.
 * @param {string} pathToFile - The path to the file.
 */
export const calculateHash = async (pathToFile) => {
  if (!pathToFile) {
    console.error(MESSAGES.invalid);
    return;
  }
  const algorithm = 'sha256';
  const hash = crypto.createHash(algorithm);
  let normalPath = normalizePath(pathToFile);

  if (!(await fileExists(normalPath))) {
    console.error(MESSAGES.invalid);
    return;
  }

  const readStream = fs.createReadStream(normalPath);

  readStream.on('data', (chunk) => {
    hash.update(chunk);
  });

  readStream.on('end', () => {
    const output = hash.digest('hex');
    console.log(output);
  });
};
