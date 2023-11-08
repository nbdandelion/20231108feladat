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