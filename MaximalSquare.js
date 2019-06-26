function MaximalSquare(strArr) {
    var fullArray = strArr.map(val => val.split(''));
    var initArray = initialEval(fullArray);
    if (initArray.length === 0) {
        return 0;
    }
    count = 1;
    while (initArray.length) {
        initArray = initArray.filter(val => {return testOne(fullArray, count + 1, val[0], val[1]);})
        count++;
        if (count > 10) break;
    }
    return Math.pow(count - 1, 2);
}

function initialEval (arr) {
    var initArray = [];
    arr.forEach((row, rowNum) => {
        row.forEach((val, colNum) => {
            if (val === '1') {
                initArray.push([rowNum, colNum]);
            }
        });
    });
    return initArray;
}

function testOne(arr, size, r, c) {
    for (var i = 0; i < size; i++) {
        for (var j = 0; j < size; j++) {
            if (!arr[r + i] || !arr[r + i][c + j] || arr[r + i][c + j] !== '1') {
                return false;
            }
        }
    }
    return true;
}


module.exports.cuadMax=MaximalSquare;