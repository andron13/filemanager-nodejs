import os from "node:os";
import {printMessage} from "../helpers/helpfullFunction.js";

/**
 * Retrieves the current system username using the `os.userInfo().username` method
 * and prints it to the console.
 */
export const getUserName = () => {
  const username = os.userInfo().username;
  printMessage("Username:", username);
};
