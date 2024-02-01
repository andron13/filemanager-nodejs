import fs from 'fs';
import path from 'path';

import { fileExists, normalizePath, MESSAGES } from '../../helpers';

/**
 * Renames a file while preserving its content.
 * @param {string} pathToFile - The path to the file to be renamed.
 * @param {string} newFilename - The new filename.
 */
export const rename = async (pathToFile, newFilename) => {
  if (!pathToFile || !newFilename) {
    console.error(MESSAGES.invalid);
    return;
  }
  let normalizeSource = normalizePath(pathToFile);
  let normalizeNewFilename = normalizePath(newFilename);
  const file_directory = path.dirname(normalizeSource);
  const new_path = path.join(file_directory, normalizeNewFilename);

  await fileExists(normalizeSource);
  const newFileExists = await fileExists(new_path);
  if (newFileExists) {
    console.error(MESSAGES.invalid);
  }
  try {
    await fs.promises.rename(normalizeSource, new_path);
  } catch (err) {
    console.error(MESSAGES.error, err);
  }
};
