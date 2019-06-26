function FirstReverse(str){
    var res="";
    for(var i=str.lenght-1;i>=0;i--){
        res=res+str.charAt(i);
    }
    return res;
}

module.exports.reverse=FirstReverse;