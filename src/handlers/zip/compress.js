import fs from 'fs';
import zlib from 'zlib';
import {resolve} from 'path';

import {MESSAGES} from '../../helpers/textConstant.js';
import {normalizePath} from "../../helpers/helpfullFunction.js";

/**
 * Compresses a file using the Brotli algorithm and streams API.
 * @param {string} path_to_file - The path to the input file.
 * @param {string} path_to_destination - The path to the output destination.
 */
export const compress = (path_to_file, path_to_destination) => {
  const inputPath = resolve(normalizePath(path_to_file));
  const outputPath = resolve(normalizePath(path_to_destination));

  const readStream = fs.createReadStream(inputPath);
  const writeStream = fs.createWriteStream(outputPath);
  const brotliStream = zlib.createBrotliCompress();

  readStream.pipe(brotliStream).pipe(writeStream);

  writeStream.on('finish', () => {
    console.log('File compressed successfully.');
  });

  writeStream.on('error', (error) => {
    console.error(MESSAGES.error, error);
  });
};
