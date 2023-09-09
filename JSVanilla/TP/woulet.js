const readlineSync = require('readline-sync');

let chwa = readlineSync.question('Chwazi yon nonb au aza (egzanp :4,7,8): ')*1;
let nonbOdinate = Math.floor(Math.random() * 500) + 1;
if (chwa === nonbOdinate) {
    console.log("Bravo ou genyen!!");
} else {
    let chans = 4;
    while (chans > 0 && chwa!==nonbOdinate) {
        chans--;

        if (chwa > nonbOdinate) {
            console.log("Nob ou chwazi an pi gro ke vre nonb lan!");
        } else if (chwa < nonbOdinate) {
            console.log("Nonb ou chwazi an pi piti ke vre nonb lan!");
        }

        if (chans === 0 && chwa !== nonbOdinate) {
            console.log("Ou elimine,tanpri rekomanse jwet lan anko pouw k agen chans genyen!!");
        } else {
            chwa = readlineSync.question('chwazi yon nouvo nonb) : ')*1;
            if (chwa == nonbOdinate) {
                console.log("Bravo ou genyen!!");
                break;
            }
        }
    }
}

