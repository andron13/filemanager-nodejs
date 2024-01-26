import {printMessage} from "../helpers/helpfullFunction.js";

/**
 * Retrieves the CPU architecture for which the Node.js binary has been compiled
 * using the `process.arch` property and prints it to the console.
 */
export const getArchitecture = () => {
  const architecture = process.arch;
  printMessage("Architecture:", architecture);
};
