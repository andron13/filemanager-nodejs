import fs from 'fs';
import path from 'path';

import {MESSAGES} from '../../helpers/textConstant.js';
import {fileExists, normalizePath} from "../../helpers/helpfullFunction.js";

/**
 * Renames a file while preserving its content.
 * @param {string} pathToFile - The path to the file to be renamed.
 * @param {string} newFilename - The new filename.
 */
export const renameFile = async (pathToFile, newFilename) => {

  let normalizeSource = normalizePath(pathToFile);
  let normalizeNewFilename = normalizePath(newFilename);
  const file_directory = path.dirname(normalizeSource);
  const new_path = path.join(file_directory, normalizeNewFilename);

  await fileExists(normalizeSource);
  const newFileExists = await fileExists(new_path);
  if (newFileExists) {
    throw new Error(MESSAGES.invalid);
  }
  try {
    await fs.promises.rename(normalizeSource, new_path);
  } catch (err) {
    console.error(MESSAGES.error, err);
  }
};
