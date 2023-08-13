const readlineSync=require('readline-sync')

console.log("Pwogram sa a pemet ou kreye epi afiche palendrom fraz ou pral gen pouw bay anba a.")
let frazLa=readlineSync.question("Antre yon fraz : ")

let motNanFrazLa=[]
motNanFrazLa=frazLa.split(" ")
console.log(motNanFrazLa)