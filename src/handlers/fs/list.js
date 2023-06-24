import fs from "fs";
import {cwd} from 'node:process';

import {MESSAGES} from "../../helpers/textConstant.js";

const defaultCurrentFolderPath = cwd();

export const list = async (folderPath = defaultCurrentFolderPath) => {
  console.log("folderPath", folderPath)
  try {
    await fs.promises.access(folderPath, fs.constants.F_OK);
    const files = await fs.promises.readdir(folderPath);
    files.forEach((file) => console.log(file));
  } catch (err) {
    throw new Error(MESSAGES.error);
  }
};
