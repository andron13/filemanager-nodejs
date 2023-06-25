import fs from "fs";
import {join} from "path";
import {cwd} from "node:process";

import {MESSAGES} from "../../helpers/textConstant.js";
import {fileExists, normalizePath} from "../../helpers/helpfullFunction.js";

const defaultCurrentFolderPath = cwd();

/**
 * Creates a new file in the specified folder with the given data.
 * @param {string} file - The name of the file to be created.
 * @param {string} inputFolder - The path to the folder where the file should be created. (default: current working directory)
 * @param {string} data - The data to be written into the file. (default: empty string)
 */
export const create = async (file, inputFolder = defaultCurrentFolderPath, data = "") => {

  let pathToFile = join(normalizePath(inputFolder), normalizePath(file));

  try {
    if (await fileExists(pathToFile)){
      throw new Error(MESSAGES.invalid);
    }
  } catch (err) {
    throw new Error(MESSAGES.invalid);
  }

  try {
    await fs.promises.writeFile(pathToFile, data, {flag: "wx",});
  } catch (err) {
    throw new Error(MESSAGES.error);
  }
};
