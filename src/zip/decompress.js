import fs from "fs";
import zlib from "zlib";
import {join} from "path";
import {fileURLToPath} from "url";

import {errorMessage} from "../constant/AppVariables.js";

export const decompress = async (inputFile, outputFile) => {
  const baseDir = join(fileURLToPath(import.meta.url), "..");
  const successText = `Decompression successful. File "${inputFile}" decompressed to "${outputFile}".`;

  const inputFilePath = join(baseDir, inputFile);
  const outputFilePath = join(baseDir, outputFile);

  const readStream = fs.createReadStream(inputFilePath);
  const writeStream = fs.createWriteStream(outputFilePath);
  const unzipStream = zlib.createBrotliDecompress();

  readStream.pipe(unzipStream).pipe(writeStream);

  return new Promise((resolve, reject) => {
    writeStream.on("finish", () => {
      console.log(successText);
      resolve();
    });

    writeStream.on("error", (error) => {
      console.error(errorMessage, error);
      reject(error);
    });
  });
};



/*const inputFile = "archive.gz";
const outputFile = "fileToCompress.txt";
await decompress(inputFile, outputFile);
*/
