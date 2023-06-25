import os from "node:os";

export const getEOL = () => {
  const eol = os.EOL;
  console.log(`Default system End-Of-Line (EOL): ${JSON.stringify(eol)}`);
};
