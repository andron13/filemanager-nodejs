import fs from "fs";
import {join} from "path";
import {cwd} from "node:process";

import {MESSAGES} from "../../helpers/textConstant.js";

const defaultCurrentFolderPath = cwd();

export const create = async (file, inputFolder = defaultCurrentFolderPath, data = "") => {

  let pathToFile = join(inputFolder, file);

  try {
    await fs.promises.writeFile(pathToFile, data, {flag: "wx",});
  } catch (err) {
    throw new Error(MESSAGES.error);
  }
};
