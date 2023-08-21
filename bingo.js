const readline = require("readline-sync");

let mX = 5, mY = 5;
let tablo = [];
let chans = 2;
let boulYo = [];

function generateTable() {
  tablo = [];
  for (let x = 0; x < mX; x++) {
    let ranje = [];
    for (let y = 0; y < mY; y++) {
      let nonb;
      do {
        nonb = Math.floor(Math.random() * 100);
      } while (ranje.includes(nonb));
      ranje.push(nonb);
    }
    tablo.push(ranje);
  }
}

generateTable();

setTimeout(() => {
  for (let i = 0; i < 5; i++) {
    let randX, randY, nonb;
    do {
      randX = Math.floor(Math.random() * mX);
      randY = Math.floor(Math.random() * mY);
      nonb = tablo[randX][randY];
    } while (boulYo.includes(nonb));
    boulYo.push(nonb);
    tablo[randX][randY] = `⭐`;
  }

  console.log("Nonb ki soti yo se: ", boulYo);
  jweJwèt();
}, 2000);

function aficheTablo() {
  for (let x = 0; x < mX; x++) {
    console.log(tablo[x].join('\t\t'));
  }
}

function jweJwèt() {
  console.log(`Ou gen ${chans} chans pou jwe.`);

  let apJwe = true;
  while (apJwe && chans > 0) {
    aficheTablo();
    console.log(`Nonb ki soti yo se: ${boulYo}`);
    let nonbItilizatè = parseInt(readline.question("Antre yon nonb nan tablo a:"));
    if (boulYo.includes(nonbItilizatè)) {
      tablo.forEach((ranje, endisRanje) => {
        ranje.forEach((selil, endisSelil) => {
          if (selil === nonbItilizatè) {
            tablo[endisRanje][endisSelil] = `[${selil}]`;
          }
        });
      });

      boulYo.splice(boulYo.indexOf(nonbItilizatè), 1);

      if (boulYo.length === 0) {
        console.log("Ou gen BINGO! Ou se yon chèf.");
        apJwe = false;
      }
    } else {
      console.log(`Nonb ${nonbItilizatè} pa nan tablo a.`);
      chans--;
      if (chans > 0) {
        console.log(`Ou gen ${chans} chans reskonsab.`);
      } else {
        console.log("Chans ou fini. Ou pa ka jwe ankò.");
        apJwe = false;
      }
    }
  }
}
