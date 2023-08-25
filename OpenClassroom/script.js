let moAplikasyonAn=["Bonjou","mesye","Pol"]
let esko=0
let moItilizate=[]

for(let i=0;i<moAplikasyonAn.length;i++){
    moItilizate.push(prompt(`Tape mo sa a : ${moAplikasyonAn} .`))
    if(moItilizate[i]===moAplikasyonAn[i]){
        esko++
    }
}
console.log(`Esko ou se : ${esko} pwen.`)


