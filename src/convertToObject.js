'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return Object.fromEntries(
    sourceString
      .split(';')
      .map((a) => a.trim())
      .filter((a) => a.length > 0)
      .map((a) => a.split(':'))
      .map((a) => a.map((b) => b.trim())),
  );
}

module.exports = convertToObject;
