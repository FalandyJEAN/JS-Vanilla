const readline=require('readline-sync');
const valeur=readline.question("Entrer la table a calculer :")
let resultat;
 
/*Table multiplication*/
for(i=0;i<=9;i++){
    resultat=`${valeur} x ${i} = ${valeur*i}`;
    console.log(resultat);
}
/*Table addition*/
for(i=0;i<=9;i++){
    resultat=`${valeur} + ${i} = ${valeur+i}`;
    console.log(resultat);
}
/*Table division*/
for(i=0;i<=9;i++){
    resultat=`${valeur} / ${i} = ${valeur/i}`;
    console.log(resultat);
}
/*Table soustraction*/
for(i=0;i<=9;i++){
    resultat=`${valeur} - ${i} = ${valeur-i}`;
    console.log(resultat);
}

