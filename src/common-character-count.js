const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let dictS1 = {};
  let dictS2 = {};
  for (let i in s1) {
    console.log(s1[i]);
    if (!dictS1[s1[i]]) {
      dictS1[s1[i]] = 1;
    } else {
      dictS1[s1[i]] += 1;
    }
  }
  for (let i in s2) {
    if (!dictS2[s2[i]]) {
      dictS2[s2[i]] = 1;
    } else {
      dictS2[s2[i]] += 1;
    }
  }

  let count = 0;
  for (let key in dictS1) {
    if (dictS2[key]) {
      count += Math.min(dictS1[key], dictS2[key]);
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount,
};
