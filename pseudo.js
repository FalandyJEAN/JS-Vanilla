const readline=require('readline-sync');

let nom,prenom,pseudo;

nom=readline.question("Entrer votre nom : ");
prenom=readline.question("Entrer votre prenom : ");


function getRandomLetter(melange) {
    const indexLettres = Math.floor(Math.random() * melange.length);
    return melange[indexLettres];
}

pseudo = prenom + getRandomLetter(prenom) + Math.floor(Math.random() * 10);
pseudo = pseudo.toUpperCase();

console.log("Pseudo généré : " + pseudo);