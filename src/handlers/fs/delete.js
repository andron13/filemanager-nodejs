import fs from "fs";
import {cwd} from "node:process";
import {join} from "path";

import {MESSAGES} from "../../helpers/textConstant.js";
import {normalizePath} from "../../helpers/helpfullFunction.js";

const defaultCurrentFolderPath = cwd();

export const remove = async (file, inputFolder = defaultCurrentFolderPath) => {

  let pathToFile = join(normalizePath(inputFolder), normalizePath(file));

  try {
    await fs.promises.access(pathToFile, fs.constants.F_OK);
    await fs.promises.unlink(pathToFile);
  } catch (err) {
    throw new Error(MESSAGES.error);
  }
};
