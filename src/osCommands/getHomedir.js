import os from 'node:os';

/**
 * Retrieves the home directory path using the `os.homedir()` method
 * and prints it to the console.
 */
export const getHomeDir = () => {
  return os.homedir();
};
