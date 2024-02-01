import os from 'node:os';

/**
 * Retrieves the current system username using the `os.userInfo().username` method
 * and prints it to the console.
 */
export const getUserName = () => {
  return os.userInfo().username;
};
