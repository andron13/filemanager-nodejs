export const MESSAGES = {
  welcome: (username) => `Welcome to the File Manager, ${username}!\n`,
  goodbye: (username) => `Thank you for using File Manager, ${username}, goodbye!\n`,
  currentPath: `You are currently in ${process.cwd()}\n`,
  invalid: "Invalid input\n",
  error: "Operation failed\n",
}



