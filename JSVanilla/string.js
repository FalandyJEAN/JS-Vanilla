const readlineSync=require("readline-sync")

console.log("Pwogram sa a ap pemet ou chacher ekzistant yon mot naen yon chenn karakte")
let frazLa =readlineSync.question('Antre fraz ou la: ')
let mo=readlineSync.question('Antre mo wap chache nan fraz la :')

let element=frazLa.includes(mo)
console.log(element)
