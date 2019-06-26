function ScaleBalancing(strArr) {
    var newArr = strArr.map(val => {
        return val.replace(/[\[\]]/g, "").split(',').map(val2 => {
            return parseInt(val2, 10);
        }).sort((a, b) => {
        return a - b;
        });
    });
    var diff = newArr[0][1] - newArr[0][0];
    var weights = newArr[1];
    if (weights.includes(diff)) {
        return diff.toString();
    }
    var weight1 = weights.find((val, ind) => {
        var newWeights = weights.slice(0);
        newWeights.splice(ind, 1);
        return newWeights.includes (diff - val)
    });
    if (weight1) {
        return `${weight1},${diff - weight1}`
    }
    weight1 = weights.find(val => {
        return weights.includes(diff + val);
    });
    if (weight1) {
        return `${weight1},${diff + weight1}`
    }
    return `No es posibe`;
}


module.exports.balance=ScaleBalancing;