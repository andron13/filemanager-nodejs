import {promises as fs} from 'fs';
import {MESSAGES} from "../../helpers/textConstant.js";
import {printError} from "../../helpers/helpfullFunction.js";

/**
 * Lists all files and directories in the current directory.
 */
export const list = async () => {
  try {
    const directoryEntries = await fs.readdir(process.cwd(), {withFileTypes: true});

    const fileList = directoryEntries.map((directoryEntry) => {
      return {
        Type: directoryEntry.isDirectory() ? 'Directory' : 'File',
        Name: directoryEntry.name
      };
    });

    console.table(fileList);
  } catch (error) {
    printError(MESSAGES.error);
    printError('An error occurred while listing the directory: ', error);
  }
};
