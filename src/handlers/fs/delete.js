import fs from "fs";
import {cwd} from "node:process";
import {join} from "path";

import {MESSAGES} from "../../helpers/textConstant.js";
import {fileExists, normalizePath} from "../../helpers/helpfullFunction.js";

const defaultCurrentFolderPath = cwd();

/**
 * Removes the specified file from the specified folder.
 * @param {string} file - The name of the file to be removed.
 * @param {string} inputFolder - The path to the folder where the file is located. (default: current working directory)
 */
export const remove = async (file, inputFolder = defaultCurrentFolderPath) => {

  let pathToFile = join(normalizePath(inputFolder), normalizePath(file));

  try {
    await fileExists(pathToFile);
    await fs.promises.unlink(pathToFile);
  } catch (err) {
    throw new Error(MESSAGES.error);
  }
};
