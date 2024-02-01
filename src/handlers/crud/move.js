import fs from 'fs';
import path from 'path';

export const move = (pathToFile, pathToNewDirectory) => {
  const baseFileName = path.basename(pathToFile);
  const destPath = path.join(pathToNewDirectory, baseFileName);
  const readStream = fs.createReadStream(pathToFile);
  const writeStream = fs.createWriteStream(destPath);

  return new Promise((resolve, reject) => {
    readStream.on('error', reject);
    writeStream.on('error', reject);
    writeStream.on('finish', () => {
      fs.unlink(pathToFile, (err) => {
        if (err) reject(err);
        else {
          // printMessage(`File successfully moved from ${pathToFile} to ${destPath}`);
          resolve();
        }
      });
    });

    readStream.pipe(writeStream);
  });
};
