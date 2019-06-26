function FirstFactorial(num){
    var num2=1;
    for(var i=1;i<=num;i++){
        num2=num2*i;
    }
    return num2;
}

module.exports.fact=FirstFactorial;