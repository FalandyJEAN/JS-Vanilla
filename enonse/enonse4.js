const readlineSync=require("readline-sync");

let non,laj;

non=readlineSync.question("Antre non ou : ");
laj=readlineSync.question("Antre laj ou : ")*1;

console.log(`Ou rele ${non} ou genyen ${laj} lane`);