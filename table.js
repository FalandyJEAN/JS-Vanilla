const readline=require('readline-sync');
const valeur=readline.question("Entrer la table a calculer :")*1
let resultat;
 
console.log("Table multiplication");
for(i=0;i<=9;i++){
    resultat=`${i} x ${valeur} = ${i*valeur}
    `;
    console.log(resultat);
}

console.log("Table addition");

for(i=0;i<=9;i++){
    resultat=`${i} + ${valeur} = ${i+valeur}
    `;
    console.log(resultat);
}

console.log("Table division");

for(i=0;i<=9;i++){
    resultat=`${valeur} / ${i} = ${valeur/i}
    `;
    console.log(resultat);
}
console.log("Table soustraction");

for(i=0;i<=9;i++){
    resultat=`${valeur} - ${i} = ${valeur-i}
    `;
    console.log(resultat);
}

