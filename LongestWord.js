function LongestWord(sen){
    var string=sen.split(" ");
    var largo=0;
    var palabra="";
    for(var i=0;i<string.length;i++){
        if(largo<string[i].length){
            largo=string[i].length;
            palabra=string[i]
        }
    }
    return palabra;
}

module.exports.longest=LongestWord;