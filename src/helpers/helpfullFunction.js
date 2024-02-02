import fs from 'fs';
import { dirname, normalize } from 'path';
import { fileURLToPath } from 'url';

export let normalizePath = (inputPath) => normalize(inputPath.trim());

export const getRoot = () => dirname(fileURLToPath(import.meta.url));

export const fileExists = async (pathToFile) => {
  try {
    await fs.promises.access(pathToFile, fs.constants.F_OK);
    return true;
  } catch (err) {
    return false;
  }
};

export const printMessage = (str) => {
  process.stdout.write(str + '\n');
};

export const printError = (errorMessage) => {
  process.stderr.write(`Error: ${errorMessage}\n`);
};
