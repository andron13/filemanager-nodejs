import fs from 'fs';
import {join} from "path";
import {cwd} from "node:process";

import {MESSAGES} from "../../helpers/textConstant.js";

const defaultCurrentFolderPath = cwd();

export const read = async (file, inputFolder = defaultCurrentFolderPath) => {

  let pathToFile = join(inputFolder, file);

  const readableStream = fs.createReadStream(pathToFile);

  readableStream.on("data", (chunk) => {
    process.stdout.write(chunk);
  });

  readableStream.on("error", (err) => {
    console.error(MESSAGES.error, err.message);
  });
};
