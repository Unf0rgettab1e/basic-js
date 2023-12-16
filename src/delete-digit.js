const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let strNum = String(n);
  let max = Math.floor(n / 10);
  for (let digit of strNum) {
    const curNum = Number(strNum.replace(digit, ''));

    if (curNum > max) {
      max = curNum;
    }
  }
  return max;
}

module.exports = {
  deleteDigit,
};
