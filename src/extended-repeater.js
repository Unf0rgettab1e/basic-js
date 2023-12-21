const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let resultStr = '';
  let addSep = options.additionSeparator ? options.additionSeparator : '|';
  let separator = options.separator ? options.separator : '+';

  let addStr = options.addition !== undefined ? String(options.addition) : '';

  if (options.additionRepeatTimes && options.additionRepeatTimes > 1) {
    addStr += addSep;
    addStr = addStr.repeat(options.additionRepeatTimes);
    addStr = addStr.slice(0, addStr.length - addSep.length);
  }
  resultStr = String(str) + addStr;
  if (options.repeatTimes && options.repeatTimes > 1) {
    resultStr += separator;
    resultStr = resultStr.repeat(options.repeatTimes);
    resultStr = resultStr.slice(0, resultStr.length - separator.length);
  }

  return resultStr;
}

module.exports = {
  repeater,
};
