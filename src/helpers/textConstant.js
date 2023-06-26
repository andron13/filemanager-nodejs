export const MESSAGES = {
  /**
   * Welcome message for the user.
   * @param {string} username - User's name.
   * @returns {string} - Welcome message string.
   */
  welcome: (username) => `Welcome to the File Manager, ${username}!\n`,

  /**
   * Goodbye message for the user.
   * @param {string} username - User's name.
   * @returns {string} - Goodbye message string.
   */
  goodbye: (username) => `Thank you for using File Manager, ${username}, goodbye!\n`,

  /**
   * Message indicating the current path.
   * @param {string} currentPath - Current path.
   * @returns {string} - String with current path information.
   */
  currentPath: (currentPath) =>`You are currently in ${currentPath}\n`,

  /**
   * Invalid input error message.
   * @type {string}
   */
  invalid: "Invalid input\n",

  /**
   * Error message for operation failure.
   * @type {string}
   */
  error: "Operation failed\n",
};
