export const MESSAGES = {
  welcome: (username) => `Welcome to the File Manager, ${username}!\n`,
  goodbye: (username) => `Thank you for using File Manager, ${username}, goodbye!\n`,
  waitForCommands: (username) => `I am waiting for your commands 👂, ${username}!\n`,
  currentPath: (currentPath) => `You are currently in ${currentPath}\n`,
  invalid: 'Invalid input\n',
  error: 'Operation failed\n',
};
