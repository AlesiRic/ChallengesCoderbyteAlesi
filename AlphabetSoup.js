function AlphabetSoup(str) {
    var letras = str.split("");
    var arreglado = chars.sort();
    return arreglado.join("");         
}


module.exports.alfabeto=AlphabetSoup;