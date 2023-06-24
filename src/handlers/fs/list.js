import fs from "fs";
import {cwd} from 'node:process';

import {MESSAGES} from "../../helpers/textConstant.js";
import {normalizePath} from "../../helpers/helpfullFunction.js";

const defaultCurrentFolderPath = cwd();

export const list = async (folderPath = defaultCurrentFolderPath) => {

  let pathToFile = normalizePath(folderPath);

  try {
    await fs.promises.access(pathToFile, fs.constants.F_OK);
    const files = await fs.promises.readdir(pathToFile);
    files.forEach((file) => console.log(file));
  } catch (err) {
    throw new Error(MESSAGES.error);
  }
};
