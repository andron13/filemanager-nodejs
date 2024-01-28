import os from 'node:os';
import { printMessage } from '../helpers/helpfullFunction.js';

/**
 * Retrieves the home directory path using the `os.homedir()` method
 * and prints it to the console.
 */
export const getHomeDir = () => {
  const homeDirectory = os.homedir();
  console.log('Home Directory:', homeDirectory);
};
