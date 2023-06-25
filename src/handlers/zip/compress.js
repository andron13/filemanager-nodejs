import fs from "fs";
import zlib from "zlib";
import {join} from "path";
import {fileURLToPath} from "url";
import { cwd } from 'node:process';

import {MESSAGES} from "../../helpers/textConstant.js";

export const compress = (inputFile, outputFile) => {
  let dirCWD = cwd();
  console.log("###cwd - in compress", dirCWD)
  const baseDir = join(fileURLToPath(import.meta.url), "..");

  const inputFilePath = join(baseDir, inputFile);
  const outputFilePath = join(baseDir, outputFile);

  const readStream = fs.createReadStream(inputFilePath);
  const writeStream = fs.createWriteStream(outputFilePath);
  const gzipStream = zlib.createBrotliCompress();

  readStream.pipe(gzipStream).pipe(writeStream);

  writeStream.on("finish", () => {
    console.log(successText);
  });

  writeStream.on("error", (error) => {
    console.error(MESSAGES.error, error);
  });
};
