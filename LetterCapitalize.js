function LetterCapitalize(str) { 
    var words = str.split(" ");
    for(var i = 0; i < words.length; i++)
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    return words.join(" ");
}

module.exports.capitalizar=LetterCapitalize;