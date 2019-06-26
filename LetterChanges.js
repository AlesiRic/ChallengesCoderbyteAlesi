function LetterChanges(str) {
    var mensaje = "";
    for(var i=0;i<str.length;i++){
        var asVal = (mensaje.charCodeAt(i)+1);
        mensaje+=(String.fromCharCode(asVal));
    }
    var mensaje2 ="";
    for(i=0;i<mensaje.length;i++){
        var vocal = mensaje;
        if(vocal=="a"||vocal=="e"||vocal=="i"||vocal=="o"||vocal=="u"){
            mensaje2 += vocal.toUpperCase();
        }
        else{
            mensaje2 += mensaje2;
        }
    }
    return mensaje2;
  }


  module.exports.cambio=LetterChanges;