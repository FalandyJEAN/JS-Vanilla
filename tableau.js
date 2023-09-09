let goodAlbum=[]
goodAlbum[0]="Rock"
goodAlbum[0][0]="Rex:Slider"
goodAlbum[0][1]="Nirvana:Nevermind"
goodAlbum[0][2]="Lou Reed:Transformer"

goodAlbum[1]="Country"
goodAlbum[1][0]="Jhonny Cash:Live..."
goodAlbum[1][1]="Pasty Cline:Senti..."
goodAlbum[1][2]="Hank Wiliams:I'm..."

goodAlbum[2]="Punk"
goodAlbum[2][0]="Flipper:Generic"
goodAlbum[2][1]="The Dead Milkmen..."
goodAlbum[2][2]="Patti Smith:Easter"

console.log(goodAlbum)
console.log(goodAlbum.length)

let newTable=goodAlbum.concat("Jude","Jacques")
console.log(newTable)

let table3=goodAlbum.concat(newTable)
console.log(table3)

console.log(table3.indexOf("Rock"))
console.log(table3.lastIndexOf("Rock"))
table3.pop()
table3.push("Paul","Jose")
let chaine=table3.join(" - ")
console.log(chaine)
let chaine2=table3.slice("-")
console.log(chaine2)


let number=[2,4,8,9,3]
console.log(number.toString())



let animals=["Tigre","Ours"]
let Fruits=["melon","Orange"]
let dishes=["Plat","Bol","Tasse"]
let fruitsAndAnimals=Fruits.concat(animals)
console.log(fruitsAndAnimals)

let whereIsTheTiger=animals.indexOf("Tigre")
console.log(`Le tigre est en position ${whereIsTheTiger+1} dans la liste avec ${whereIsTheTiger} comme indice.`)