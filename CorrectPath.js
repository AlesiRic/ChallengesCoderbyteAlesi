function CorrectPath(str) {
    var blankArray = [];
    str.split('').forEach((val, ind) => {
        if (val === '?') {
            blankArray.push(ind);
        }
    });
    var num = blankArray.length;
    var total = Math.pow(4, num);
    for (let i = 0; i < total; i++) {
        var numString = (i + total).toString(4).slice(1);
        var currentPath = createPath(str, blankArray, numString);
        if (isPathGood(currentPath)) {
            return currentPath;
        }
    }
}


isPathGood = (str) => {
    var testArray = []
    for (var i = 0; i < 5; i++) {
        testArray.push([0, 0, 0, 0, 0])
    }
    var len = str.length;
    var currentLoc = [0, 0];
    for (var i = 0; i < len; i++) {
        testArray[currentLoc[0]][currentLoc[1]] = 1;
        var newLoc = currentLoc.slice(0);
        switch (str[i]) {
            case 'u':
                newLoc[0]--;
            break;
            case 'd':
                newLoc[0]++;
            break;
            case 'r':
                newLoc[1]++;
            break;
            case 'l':
                newLoc[1]--;
            break;
        }
        if (newLoc.includes (-1) || newLoc.includes (5)) {
            return false;
        }
        if (testArray[newLoc[0]][newLoc[1]] === 1) {
            return false;
        }
        if (newLoc[0] === 4 && newLoc[1] === 4 && i === len - 1) {
            return true;
        }
        currentLoc = newLoc;
    }
  return false;
};

createPath = (str, blanks, num) => {
    var moveArray = ['r', 'l', 'u', 'd'];
    strArr = str.split('');
    blanks.forEach((val, ind) => {
        strArr.splice(val, 1, moveArray[num[ind]]);
    });
    return strArr.join('');
};
 

module.exports.correcto=CorrectPath;