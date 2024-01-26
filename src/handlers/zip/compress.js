import { createReadStream, createWriteStream } from 'fs';
import { createBrotliCompress } from 'zlib';

/**
 * Compresses a file using Brotli algorithm.
 * @param {string} pathToFile - The path to the file to be compressed.
 * @param {string} pathToDestination - The path where the compressed file will be saved.
 */
export const compress = (pathToFile, pathToDestination) => {
  const readStream = createReadStream(pathToFile);
  const writeStream = createWriteStream(pathToDestination);
  const compressStream = createBrotliCompress();

  readStream.on('error', (err) => console.error(`Error reading file: ${err.message}`));
  writeStream.on('error', (err) => console.error(`Error writing file: ${err.message}`));
  compressStream.on('error', (err) => console.error(`Error compressing file: ${err.message}`));

  readStream.pipe(compressStream).pipe(writeStream);
  console.log(`File ${pathToFile} has been compressed to ${pathToDestination}`);
};
