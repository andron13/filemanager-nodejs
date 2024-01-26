import fs from "fs";
import crypto from "crypto";

import {MESSAGES} from "../../helpers/textConstant.js";
import {fileExists, normalizePath, printError, printMessage} from "../../helpers/helpfullFunction.js";

/**
 * Calculates the hash for the specified file and prints it to the console.
 * @param {string} pathToFile - The path to the file.
 */
export const calculateHash = async (pathToFile) => {
  const algorithm = 'sha256';
  const hash = crypto.createHash(algorithm);
  let normalPath = normalizePath(pathToFile);

  if(!await fileExists(normalPath)) {
    printError(MESSAGES.invalid);
    return;
  }

  const readStream = fs.createReadStream(normalPath);

  readStream.on('data', (chunk) => {
    hash.update(chunk);
  });

  readStream.on('end', () => {
    const output = hash.digest('hex');
    printMessage(output);
  });
};
