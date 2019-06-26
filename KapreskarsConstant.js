function KaprekarsConstant(num) {
    const KAP = 6174;
    var count = 0;
    while (true) {
        var num = evaluator(num)
        if (num === true) {
            return count;
        }
    }
    function evaluator(num) {
        count++
        console.log('count', count);
        var numeroMinimoArr = num.toString().split('').sort();
        var numeroMaximoArr = numeroMinimoArr.slice(0).reverse();
        var littleNum = parseInt(numeroMinimoArr.join(''), 10);
        var bigNum = parseInt(numeroMaximoArr.join(''), 10);
        while (bigNum < 1000) {
            bigNum = bigNum * 10;
        }
        return bigNum - littleNum === KAP ? true : bigNum - littleNum;
    }
}


module.exports.kapreskars=KaprekarsConstant;