import { promises as fs } from 'fs';
import { MESSAGES } from '../../helpers';

/**
 * Lists all files and directories in the current directory.
 */
export const list = async () => {
  try {
    const directoryEntries = await fs.readdir(process.cwd(), { withFileTypes: true });

    const fileList = directoryEntries.map((directoryEntry) => {
      return {
        Type: directoryEntry.isDirectory() ? 'Directory' : 'File',
        Name: directoryEntry.name,
      };
    });

    fileList.sort((a, b) => {
      return a.Type === b.Type ? a.Name.localeCompare(b.Name) : a.Type === 'Directory' ? -1 : 1;
    });

    console.table(fileList);
  } catch (error) {
    console.error(MESSAGES.error);
  }
};
