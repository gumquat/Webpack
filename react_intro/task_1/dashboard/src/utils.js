/**
 * RETURNS: Returns the current year
 * @returns {number} The current year
 */
function getFullYear() {
    return new Date().getFullYear();
  }
  
  /**
   * RETURNS: Returns the appropriate footer copy based on the provided boolean
   * @param {boolean} isIndex - True if the index page, false otherwise
   * @returns {string} The footer copy
   */
  function getFooterCopy(isIndex) {
    if (isIndex) {
      return 'Holberton School';
    } else {
      return 'Holberton School main dashboard';
    }
  }
  
  export { getFullYear, getFooterCopy };