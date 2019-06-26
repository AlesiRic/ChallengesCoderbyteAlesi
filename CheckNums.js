function CheckNums(num1, num2) {
    return (num2 === num1) ? '-1' : (num2 > num1) ? "true" : "false";
}


module.exports.comparar=CheckNums;