import fs from 'fs';
import {join, normalize} from "path";
import {cwd} from "node:process";

import {MESSAGES} from "../../helpers/textConstant.js";

const defaultCurrentFolderPath = cwd();
/**
 * Reads a file and outputs its content to the console using a Readable stream.
 * @param {string} file - The name of the file to read.
 * @param {string} inputFolder - Optional. The path to the folder containing the file. Defaults to the current working directory.
 */
export const read = async (file, inputFolder = defaultCurrentFolderPath) => {

  let normalizeFile = normalize(file);
  let normalizePath = normalize(inputFolder);

  let pathToFile = join(normalizePath, normalizeFile);

  const readableStream = fs.createReadStream(pathToFile);

  readableStream.on("data", (chunk) => {
    process.stdout.write(chunk);
  });

  readableStream.on("error", (err) => {
    console.error(MESSAGES.error, err.message);
  });
};
