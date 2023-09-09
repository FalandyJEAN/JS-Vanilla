const readlineSync = require("readline-sync")

console.log("Pwogram sa ap resevwaa yon chen karakte epi lap ranplase tout konsonn k'apre konsonn yo ak X.")
let voyel = ["a", "e", "i", "o", "u", "y"]
let chenn = readlineSync.question("Antre chenn karakte ou an :").toLowerCase()

let nouvoChenn = ""
let consonantCount = 0

for (let i = 0; i < chenn.length; i++) {
    if (voyel.includes(chenn[i])) {
        nouvoChenn += chenn[i]
        consonantCount = 0
    } else if (chenn[i] === " ") {
        nouvoChenn += " "
    } else {
        if (consonantCount < 2) {
            nouvoChenn += "X"
            consonantCount++
        }
    }
}

console.log(`Men nouvo chenn lan : ${nouvoChenn}`)
