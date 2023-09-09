const readlineSync=require('readline-sync');

let vale1,vale2;
vale1=readlineSync.question("Antre premye vale an : ")*1;
vale2=readlineSync.question("Antre dezyem vale an : ")*1;
console.log(`Rezilta adisyon ${vale1} ak ${vale2} se : ${vale1+vale2}`);
console.log(`Rezilta soustraksyon ${vale1} ak ${vale2} se : ${vale1-vale2}`);
console.log(`Rezilta miltiplikasyon ${vale1} ak ${vale2} se : ${vale1*vale2}`);
console.log(`Rezilta divizyon ${vale1} ak ${vale2} se : ${vale1/vale2}`);