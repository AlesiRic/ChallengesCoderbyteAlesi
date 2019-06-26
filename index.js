var alph=require("./AlphabetSoup");
var check=require("./CheckNums");
var chess=require("./ChessboardTraveling");
var closest=require("./ClosestEnemyII");
var correct=require("./CorrectPath");
var eight=require("./EightQueens");
var firstf=require("./FirstFactorial");
var firstr=require("./FirstReverse");
var kapres=require("./KapreskarsConstant");
var letterca=require("./LetterCapitalize");
var letterch=require("./LetterChanges");
var longestWord=require("./LongestWord");
var maximal=require("./MaximalSquare");
var pentagonal=require("./PentagonalNumber");
var question=require("./QuestionMarks");
var scale=require("./ScaleBalancing");
var simplea=require("./SimpleAdding");
var simples=require("./SimpleSymbols");
var time=require("./TimeConvert");
var vowel=require("./VowelSquare");

var a=alph.alfabeto("asfioagsoi");
var b=check.comparar(5,4);
var c=chess.chess("(1 1)(3 3)");
var d=closest.enemigoCercano(["000", "100", "200"]);
var e=correct.correcto("???rrurdr?");
var f=eight.ochoDamas(["(2,1)", "(4,3)", "(6,3)", "(8,4)", "(3,4)", "(1,6)", "(7,7)", "(5,8)"])
var g=firstf.fact(6);
var h=firstr.reverse("coderbyte");
var i=kapres.kapreskars(2111);
var j=letterca.capitalizar("hello world");
var k=letterch.cambio("hi there");
var l=longestWord.longest("safaih saf asfoas");
var m=maximal.cuadMax(["0111", "1111", "1111", "1111"]);
var n=pentagonal.pentagono(5);
var o=question.signo("acc?7??sss?3rr1??????5");
var p=scale.balance(["[3, 4]", "[1, 2, 7, 7]"]);
var q=simplea.adding(12);
var r=simples.simbolos("+d+=3=+s+");
var s=time.tiempo(125);
var t=vowel.cuad2(["aqrst", "ukaei", "ffooo"]);


console.log(a+"\n"+
a+"\n"+
b+"\n"+
c+"\n"+
d+"\n"+
e+"\n"+
f+"\n"+
g+"\n"+
h+"\n"+
i+"\n"+
j+"\n"+
k+"\n"+
l+"\n"+
m+"\n"+
n+"\n"+
o+"\n"+
p+"\n"+
q+"\n"+
r+"\n"+
s+"\n"+
t)