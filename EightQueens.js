function EightQueens(strArr) {
    var newArr = strArr.map(val => {
        return JSON.parse(val
            .replace(/\(/g, '[')
            .replace(/\)/g, ']')
        )
    });
    newArr = newArr.map(val => {
        return val.concat(val[1] - val[0], val[1] + val[0]);
    });
    for (var i = 0, len = newArr.length; i < len; i++) {
        for (var j = 0; j < 4; j++) {
            var target = newArr[i][j];
            if (newArr.filter(val => {
                return val[j] === target;
            }).length > 1) {
                return `(${newArr[i].slice(0,2)})`
            }
        }
    }
  return true;
}


module.exports.ochoDamas=EightQueens;