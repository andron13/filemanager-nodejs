import { createReadStream, createWriteStream } from 'fs';
import { createBrotliDecompress } from 'zlib';

/**
 * Decompresses a file using Brotli algorithm.
 * @param {string} pathToFile - The path to the file to be decompressed.
 * @param {string} pathToDestination - The path where the decompressed file will be saved.
 */
export const decompress = (pathToFile, pathToDestination) => {
  const readStream = createReadStream(pathToFile);
  const writeStream = createWriteStream(pathToDestination);
  const decompressStream = createBrotliDecompress();

  readStream.on('error', (err) => console.error(`Error reading file: ${err.message}`));
  writeStream.on('error', (err) => console.error(`Error writing file: ${err.message}`));
  decompressStream.on('error', (err) => console.error(`Error decompressing file: ${err.message}`));

  readStream.pipe(decompressStream).pipe(writeStream);
  console.log(`File ${pathToFile} has been decompressed to ${pathToDestination}`);
};
