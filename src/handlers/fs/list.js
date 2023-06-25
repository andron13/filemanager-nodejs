import fs from "fs/promises";

import {MESSAGES} from "../../helpers/textConstant.js";

/**
 * Lists all files and directories in the specified folder.
 * @param {string} folderPath - The path to the folder.
 */
export const list = async (folderPath) => {
  try {
    const files = await fs.readdir(folderPath, {withFileTypes: true});

    const fileList = files
      .map((file) => {
        const type = file.isDirectory() ? "Directory" : "File";
        return {Name: file.name, Type: type};
      })
      .sort((a, b) => {
        if (a.Type === "Directory" && b.Type === "File") {
          return -1;
        } else if (a.Type === "File" && b.Type === "Directory") {
          return 1;
        } else {
          return a.Name.localeCompare(b.Name);
        }
      });

    console.table(fileList);
  } catch (err) {
    throw new Error(MESSAGES.error);
  }
};
