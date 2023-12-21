const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let setup = [];
  for (let i = 0; i < matrix.length; i++) {
    setup[i] = [];
    for (let j = 0; j < matrix[i].length; j++) {
      let countMine = 0;

      for (let ni = i - 1; ni <= i + 1; ni++)
        for (let nj = j - 1; nj <= j + 1; nj++) {
          if (
            ni >= 0 &&
            ni < matrix.length &&
            nj >= 0 &&
            nj < matrix[i].length &&
            matrix[ni][nj] &&
            (i !== ni || j !== nj)
          ) {
            countMine += 1;
          }
        }

      setup[i].push(countMine);
    }
  }
  return setup;
}

module.exports = {
  minesweeper,
};
