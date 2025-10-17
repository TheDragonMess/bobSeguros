// Utils
import isObject from "./isObject";

/**
 * Check if is an empty object
 * @param {object} obj Receive a 'object' as param
 * @returns {boolean} Boolean
 */
export default function isEmptyObject(obj) {
  return isObject(obj) && Object.keys(obj).length === 0;
}
