const  readlineSync=require('readline-sync')

console.log("Pwogram lan pral transfome teks ou bay lan en majiskil")

let fraz=readlineSync.question("Antre fraz ou an la : ")
let mot=fraz.split(" ")
let nouvoTeks=""

for (mot of fraz) {
    const premyeMo = mot.charAt(0).toUpperCase()
    const resMo = mot.slice(1).toLowerCase()
    nouvoTeks += premyeMo + resMo + " "
}


console.log(nouvoTeks)