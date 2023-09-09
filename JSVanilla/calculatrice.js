const readline=require('readline-sync');

let valeur1,valeur2,choix,choixCorrect;

valeur1=readline.question("Entrer valeur1 :");
valeur2=readline.question("entrer valeur2 :");

while(!choixCorrect){
    choix=readline.question(`
Menu:
Addition choisit 1
Soustraction choisit 2
Multiplication choisit 3
division choisit 4
Entrer votre choix ici :`)
choixCorrect=false;
    switch(choix){
        case "1":
            console.log(valeur1+valeur2);
            choixCorrect=true;
            break;
        case "2":
            console.log(valeur1-valeur2);
            choixCorrect=true;
            break;
        case "3":
            console.log(valeur1*valeur2);
            choixCorrect=true;
            break;
        case "4":
            console.log(valeur1/valeur2);
            choixCorrect=true;
            break;
        default:
            console.log("Entrer un evaleur allant de 1 a 4!!");
    }
}




