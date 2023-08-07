const readlineSync = require('readline-sync');

let chwa = readlineSync.question('Choisir un nombre au hasard : ');
let nonbOdinate = Math.floor(Math.random() * 10) + 1;
if (chwa === nonbOdinate) {
    console.log("Vous avez gagné!!");
} else {
    let chans = 4;
    while (chans > 0 && chwa!==nonbOdinate) {
        chans--;

        if (chwa > nonbOdinate) {
            console.log("Le nombre choisi est plus grand que le vrai nombre!");
        } else if (chwa < nonbOdinate) {
            console.log("Le nombre choisi est plus petit que le vrai nombre!");
        }

        if (chans === 0 && chwa !== nonbOdinate) {
            console.log("Vous êtes éliminé, merci de recommencer le jeu!!");
        } else {
            chwa = readlineSync.question('Choisissez un nouveau nombre : ');
            if (chwa == nonbOdinate) {
                console.log("Vous avez gagné!!");
                break;
            }
        }
    }
}

