module.exports = function solveSudosubNumu(matrix) {
  // your solution

  // рекурсивный метод
  function recursiveSolution(matrix) {

    for (let i = 0; i < 9; i++) {

      for (let j = 0; j < 9; j++) {

        // найдём пустую ячейку
        if (matrix[i][j] === 0) {

          for (let subNum = 1; subNum <= 9; subNum++) {
            
            // проверим на дубли
            let noRepeat = true;

            for (let val = 0; val < 9; val++) {

              let r_r = 3 * Math.floor(i / 3) + Math.floor(val / 3);

              let c_c = 3 * Math.floor(j / 3) + val % 3;

              // если есть повторы в колонке, строке или квадрате...
              if (matrix[i][val] == subNum || matrix[val][j] == subNum || matrix[r_r][c_c] == subNum) {

                noRepeat = false;

                break;

              }

            }

            // если число подходит
            if (noRepeat === true) {

              matrix[i][j] = subNum;

              if ( recursiveSolution(matrix) ) {

                return true;

              } else {

                matrix[i][j] = 0;

              }

            }

          }

          return false;

        }

      }

    }

    return true;

  }

  recursiveSolution(matrix);

  return matrix;
}

