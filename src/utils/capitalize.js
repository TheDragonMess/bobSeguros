// Utils
import isValidString from "./isValidString";

/**
 * Capitalize string
 * @param {string} str String
 * @returns {string} String capitalized
 */
export default function capitalize(str) {
  // Validate 'str' param
  if (!isValidString(str)) return "";

  // Capitalize string
  return str.charAt(0).toUpperCase() + str.slice(1);
}
