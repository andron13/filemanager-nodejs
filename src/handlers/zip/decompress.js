import fs from 'fs';
import zlib from 'zlib';
import { resolve } from 'path';

import {MESSAGES} from '../../helpers/textConstant.js';
import {normalizePath} from "../../helpers/helpfullFunction.js";

/**
 * Decompresses a file using the Brotli algorithm and streams API.
 * @param {string} path_to_file - The path to the input compressed file.
 * @param {string} path_to_destination - The path to the output destination for the decompressed file.
 */
export const decompress = (path_to_file, path_to_destination) => {
  const inputPath = resolve(normalizePath(path_to_file));
  const outputPath = resolve(normalizePath(path_to_destination));

  const readStream = fs.createReadStream(inputPath);
  const writeStream = fs.createWriteStream(outputPath);
  const brotliStream = zlib.createBrotliDecompress();

  readStream.pipe(brotliStream).pipe(writeStream);

  writeStream.on('finish', () => {
    console.log('File decompressed successfully.');
  });

  writeStream.on('error', (error) => {
    console.error(MESSAGES.error, error);
  });
};
