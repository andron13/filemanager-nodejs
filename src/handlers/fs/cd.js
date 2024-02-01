import fs from 'fs/promises';
import { cwd, chdir } from 'node:process';
import { resolve, normalize } from 'path';

import { MESSAGES } from '../../helpers/index.js';
import { getHomeDir } from '../../osCommands/index.js';

/**
 * Checks if the specified path exists and returns a canonical path.
 * @param {string} path - The path to check.
 * @returns {Promise<string>} - A Promise that resolves to the canonical path if it exists, or rejects if it does not.
 */
const getCanonicalPath = async (path = '.') => {
  try {
    await fs.access(path);
    return fs.realpath(path);
  } catch (err) {
    console.error(MESSAGES.invalid);
  }
};

/**
 * Changes the current working directory to the specified directory.
 * @param {string} pathToDirectory - The path to the target directory.
 * @returns {Promise<void>} A promise that resolves when the directory has been changed successfully. Returns undefined if the path does not exist or if it is unable to change directories.
 */
export const cd = async (pathToDirectory = '.') => {
  if (pathToDirectory === '~') {
    pathToDirectory = getHomeDir();
  }

  const targetPath = resolve(cwd(), normalize(pathToDirectory));
  let canonicalPath;

  try {
    canonicalPath = await getCanonicalPath(targetPath);
  } catch (err) {
    console.error(MESSAGES.invalid);
    return;
  }

  try {
    chdir(canonicalPath);
  } catch (err) {
    console.error(MESSAGES.error);
  }
};
