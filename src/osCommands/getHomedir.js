import os from "node:os";

/**
 * Retrieves the home directory path using the `os.homedir()` method
 * and prints it to the console.
 */
export const getHomeDir = () => {
  const homeDirectory = os.homedir();
  console.log("Home Directory:", homeDirectory);
};
