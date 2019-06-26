function QuestionsMarks(str) {
    var numPlaces = [];
    var flag = false;
    for (let i = 0, len = str.length; i < len; i++) {
        if (/\d/.test(str[i])) {
            numPlaces.push(i);
        }
    }
    var numCount = numPlaces.length;
    for (var i = 0; i < numCount - 1; i++) {
        if (parseInt(str[numPlaces[i]], 10) + parseInt(str[numPlaces[i + 1]], 10) === 10) {
            flag = true;
            var strSeg = str.slice(numPlaces[i], numPlaces[i + 1]);
            strSeg = strSeg.replace(/[^\?]/g, '');
            if (strSeg !== '???') {
                return false;
            }
        }
    }
    return flag;
}


module.exports.signo=QuestionsMarks;