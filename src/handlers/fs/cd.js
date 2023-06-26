import fs from 'fs/promises';
import {cwd, chdir} from 'node:process';
import {resolve} from 'path';

import {MESSAGES} from '../../helpers/textConstant.js';
import {normalizePath} from "../../helpers/helpfullFunction.js";

/**
 * Changes the current working directory to the specified directory.
 * @param {string} pathToDirectory - The path to the target directory.
 */
export const cd = async (pathToDirectory) => {
  const currentPath = cwd();
  const targetPath = resolve(currentPath, normalizePath(pathToDirectory));

  if (!pathExists(targetPath)) {
    console.error(MESSAGES.invalid);
  }

  try {
    await chdir(targetPath);
  } catch (err) {
    console.error(MESSAGES.error);
  }
};

/**
 * Checks if the specified path exists.
 * @param {string} path - The path to check.
 * @returns {boolean} - True if the path exists, false otherwise.
 */
const pathExists = async (path) => {
  try {
    await fs.access(path);
    return true;
  } catch (err) {
    return false;
  }
};
