import fs from "fs";
import crypto from "crypto";

import {MESSAGES} from "../../helpers/textConstant.js";
import {fileExists, normalizePath} from "../../helpers/helpfullFunction.js";

/**
 * Calculates the hash for the specified file and prints it to the console.
 * @param {string} pathToFile - The path to the file.
 */
export const calculateHash = async (pathToFile) => {
  const algorithm = 'sha256';
  const hash = crypto.createHash(algorithm);
  let normalPath = normalizePath(pathToFile);

  if(!await fileExists(normalPath)) {
    console.error(MESSAGES.invalid);
    return
  }

  try {
    const data = await fs.promises.readFile(normalPath);
    const output = hash.update(data).digest("hex");
    console.log(output);
  } catch (err) {
    console.error(MESSAGES.error);
  }
};
