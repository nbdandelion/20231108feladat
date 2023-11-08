function VanENegativ(szamok) {
    var i = 0;
    while (i < szamok.length && !(szamok[i] < 0)) {
        i++;
    }
    /*if(i < szamok.length){
        return true;
    }
    else{
        return false;
    }*/
    return i < szamok.length;
}
function KorKerTer(r) {
    var ker = 2 * r * Math.PI;
    var ter = r * r * Math.PI;
    return [ker, ter];
}
console.log(VanENegativ([5, 12, 23, -5, 14]));
console.log(VanENegativ([5, 12, 23, 14]));
console.log(KorKerTer(4));
function MinAuto(autok) {
    var min = autok[0];
    for (var i = 0; i < autok.length; i++) {
        if (autok[i].hengerurtartalom < min.hengerurtartalom) {
            min = autok[i];
        }
    }
    return min;
}
function BenzinesDb(autok) {
    var db = 0;
    for (var i = 0; i < autok.length; i++) {
        if (autok[i].benzinesE /*== true*/) {
            db++;
        }
    }
    return db;
}
var a1 = {
    gyarto: "Opel",
    tipus: "Corsa",
    hengerurtartalom: 1400,
    benzinesE: true
};
var a2 = {
    gyarto: "VW",
    tipus: "Golf",
    hengerurtartalom: 1600,
    benzinesE: false
};
var a3 = {
    gyarto: "Audi",
    tipus: "TT",
    hengerurtartalom: 1800,
    benzinesE: true
};
var a4 = {
    gyarto: "Smart",
    tipus: "Roadster",
    hengerurtartalom: 900,
    benzinesE: true
};
var autok = [a1, a2, a3, a4];
console.log(MinAuto(autok));
console.log(BenzinesDb(autok));
