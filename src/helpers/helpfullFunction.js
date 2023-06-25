import fs from "fs";
import {normalize} from "path";

export let normalizePath = (inputPath) => normalize(inputPath);

export const fileExists = async (pathToFile) => {
  try {
    await fs.promises.access(pathToFile, fs.constants.F_OK);
    return true;
  } catch (err) {
    return false;
  }
};
