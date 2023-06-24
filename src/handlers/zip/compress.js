import fs from "fs";
import zlib from "zlib";
import {join} from "path";
import {fileURLToPath} from "url";

import {MESSAGES} from "../../helpers/textConstant.js";



export const compress = (inputFile, outputFile) => {
  const baseDir = join(fileURLToPath(import.meta.url), "..");
  const successText = `File "${inputFile}" compressed to "${outputFile}"`;

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
    console.error(errorMessage, error);
  });
};


// const inputFile = "fileToCompress.txt";
// const outputFile = "archive.gz";
// compress(inputFile, outputFile);

