const readlineSync = require('readline-sync');
let kantiteNot;

do {
    kantiteNot = readlineSync.question(`******Pwogram sa pral kalkile moyenn selon not ou antre yo******
Antre kantite not ou pral kalkile moyenne lan (fok antre an se yon nonb egz: 6,8,10 elatriye)  : `) * 1;

} while (isNaN(kantiteNot)|| kantiteNot <= 0 );

console.log("Felisitasyon,Kantite not la byen rantre.");
console.log("NB: Not ou yo dwe soti nan 1 pou rive nan 10!");

let total=0;
const listNot=[];

for(let i=0;i<kantiteNot;i++){
    let not=readlineSync.question(`Antre not nimewo ${i+1}  :`)*1;

    while(isNaN(not)|| not<0 || not>10 ){
        not=readlineSync.question("Antre yon not ki valid :")*1;
    }
    listNot.push(not);
    total+= not;
}

console.log(`Men not ou te antre yo :`)
for(let i=0;i<kantiteNot;i++){
    console.log(`Not nimewo ${i+1} an se: ${listNot[i]}`);
}
let moyenn=(total/kantiteNot)*10;

console.log(`Moyenn lan se : ${moyenn}/100`);

if (moyenn>=90){
    console.log("Mention : A");
}else if(moyenn>=80 && moyenn<90){
    console.log("Mention : B");
}else if(moyenn>=70 && moyenn<80){
    console.log('Mention : C');
}else if(moyenn>=60 && moyenn<70){
    console.log("Mention : D");
}else if(moyenn<60){
    console.log("Mention : F")
}

