const readlineSync=require("readline-sync")
console.log("Pwogram sa ap resevwaa yon chen karakte epi lap ranplase tout karakte ki plase devan yon voyel sof espas pa X.");
let voyel = ["a", "e", "i", "o", "u", "y"]
let chenn = readlineSync.question("Antre chenn karakte ou an :").toLowerCase()

let nouvoChenn = ""
for (let i = 0; i < chenn.length; i++) {
    if (voyel.includes(chenn[i]) || chenn[i] === " ") {
        nouvoChenn += chenn[i];
    } else {
        nouvoChenn += "X"
    }
}

console.log(`Men nouvo chenn lan : ${nouvoChenn}`)
