import { promises as fs } from 'fs';
import { MESSAGES } from '../../helpers/textConstant.js';

/**
 * Removes the specified file.
 * @param {string} file - The path to the file to be removed.
 */
export const remove = async (file) => {
  try {
    await fs.unlink(file);
    // console.log(`File ${file} was deleted successfully`);
  } catch (error) {
    console.error(MESSAGES.error);
    // console.error(`Error deleting file ${file}: `, error.message);
  }
};
