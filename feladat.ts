function VanENegativ(szamok:number[]):boolean{
    var i:number = 0;

    while(i < szamok.length && !(szamok[i] < 0)){
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


function KorKerTer(r:number):[number, number]{
    var ker:number = 2 * r * Math.PI;
    var ter:number = r * r * Math.PI;

    return [ker, ter];
}

console.log(VanENegativ([5, 12, 23, -5, 14]));
console.log(VanENegativ([5, 12, 23, 14]));
console.log(KorKerTer(4));

interface Auto{
    gyarto:string;
    tipus:string;
    hengerurtartalom:number;
    benzinesE:boolean;
}


function MinAuto(autok:Auto[]):Auto{
    var min:Auto = autok[0];

    for(var i:number = 0; i < autok.length; i++){
        if(autok[i].hengerurtartalom < min.hengerurtartalom){
            min = autok[i];
        }
    }

    return min;
}

function BenzinesDb(autok:Auto[]):number{
    var db:number = 0;

    for(var i:number = 0; i < autok.length; i++){
        if(autok[i].benzinesE /*== true*/){
            db++;
        }
    }

    return db;
}

var a1:Auto = {
    gyarto: "Opel",
    tipus: "Corsa",
    hengerurtartalom: 1400,
    benzinesE: true
};

var a2:Auto = {
    gyarto: "VW",
    tipus: "Golf",
    hengerurtartalom: 1600,
    benzinesE: false
};

var a3:Auto = {
    gyarto: "Audi",
    tipus: "TT",
    hengerurtartalom: 1800,
    benzinesE: true
};

var a4:Auto = {
    gyarto: "Smart",
    tipus: "Roadster",
    hengerurtartalom: 900,
    benzinesE: true
};

var autok:Auto[] = [a1, a2, a3, a4];

console.log(MinAuto(autok));
console.log(BenzinesDb(autok));