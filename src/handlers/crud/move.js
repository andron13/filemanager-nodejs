import fs from 'fs';
import path from 'path';
import {printMessage} from "../../helpers/helpfullFunction.js";

export const moveFile = (pathToFile, pathToNewDirectory) => {
  const baseFileName = path.basename(pathToFile);
  const destPath = path.join(pathToNewDirectory, baseFileName);
  const readStream = fs.createReadStream(pathToFile);
  const writeStream = fs.createWriteStream(destPath);

  return new Promise((resolve, reject) => {
    readStream.on('error', reject);
    writeStream.on('error', reject);
    writeStream.on('finish', () => {
      fs.unlink(pathToFile, err => {
        if (err) reject(err);
        else {
          printMessage(`Файл успешно перемещён с ${pathToFile} в ${destPath}`);
          resolve();
        }
      });
    });

    readStream.pipe(writeStream);
  });
};
