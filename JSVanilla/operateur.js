const readlineSync=require('readline-sync')
let title=`
Le Jeu de l'Annviversaire Devoile
`
let numberSeven=readlineSync.questionInt(`Entrez le nombre 7 :`)
while(numberSeven!==7){
    numberSeven=readlineSync.question(`Entrez exactement le nombre 7 :`)
    break
}
let birthday=readlineSync.questionInt(`Entrez le jour de votre naissance :`)
while(birthday<1 || birthday>31){
    birthday=readlineSync.question(`Entrez une date allant de 1 a 31 :`)
    break
}
let birthMonth=readlineSync.questionInt(`Entrez le moi de votre naissance :`)
while(birthMonth<1 || birthMonth>12){
    birthMonth=readlineSync.question(`Entrez un nombre allant de 1 a 12 :`)
    break
}
let calcul=((((numberSeven*birthday-1)*13+birthMonth+3)*11-birthday-birthMonth)/10+11)/100
console.log(title)
console.log(numberSeven)
console.log(`*Multipliez par le jour de votre naissance`)
console.log(`*Soustrayez 1`)
console.log(`*Multipliez par 13`)
console.log(`*Ajoutez le mois de votre naissance `)
console.log(`*Ajoutez 3`)
console.log(`*Multipliez par 11`)
console.log(`*Soustrayez le jpur de votre naissance`)
console.log(`*Divisez par 10`)
console.log(`*Ajoutez 11`)
console.log(`*Divisez par 100`)

console.log(`
Voici votre date d'anniversaire : ${calcul}
`)

