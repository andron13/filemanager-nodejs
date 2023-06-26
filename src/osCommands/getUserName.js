import os from "node:os";

/**
 * Retrieves the current system username using the `os.userInfo().username` method
 * and prints it to the console.
 */
export const getUserName = () => {
  const username = os.userInfo().username;
  console.log("Username:", username);
};
