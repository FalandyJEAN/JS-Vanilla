const readlineSync = require('readline-sync');

let nombre1,nombre2,resultat;
nombre1=readlineSync.question("Entrer le premier nombre :")*1;
nombre2=readlineSync.question("Entrer le deuxieme nombre :")*1;

function somme(nombre1,nombre2){
    resultat=`Le resultat est : ${nombre1+nombre2}`;
    return resultat;
}

console.log(somme(nombre1,nombre2));

