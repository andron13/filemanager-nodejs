import fs from 'fs';
import path, {dirname, join} from 'path';
import {fileURLToPath} from "url";

const copyFile = (sourceFolder, targetFolder) => {
  const fileName = path.basename(sourceFolder);
  const targetPath = path.join(targetFolder, fileName);

  const readStream = fs.createReadStream(sourceFolder);
  const writeStream = fs.createWriteStream(targetPath);

  readStream.on('error', (error) => {
    console.error('Failed to read the source file:', error);
  });

  writeStream.on('error', (error) => {
    console.error('Failed to write to the target file:', error);
  });

  writeStream.on('finish', () => {
    console.log('File copied successfully.');
  });

  readStream.pipe(writeStream);
};

// Пример использования функции
const __dirname = dirname(fileURLToPath(import.meta.url));
const sourceFile = 'file.txt';
const targetFile ='newFile.txt';
const sourceFilePath = join(__dirname, sourceFile);
const targetDirectoryPath = join(__dirname, targetFile);

copyFile(sourceFilePath, targetDirectoryPath);
