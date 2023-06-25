import os from "node:os";

/**
 * Retrieves the default system End-Of-Line (EOL) using the `os.EOL` property
 * and prints it to the console.
 */
export const getEOL = () => {
  const eol = os.EOL;
  console.log(`Default system End-Of-Line (EOL): ${JSON.stringify(eol)}`);
};
