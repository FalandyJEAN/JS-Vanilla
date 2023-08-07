const readlineSync = require('readline-sync');

let koule1 = readlineSync.question('Tape premye koule (6 karakte): ');
let koule2 = readlineSync.question('Tape dezyem koule (6 karakte): ');

const validKarakte = "0123456789ABCDEF";
let rezilta = "";

if (koule1.length !== 6 || koule2.length !== 6) {
  console.info("Fòk koule yo gen 6 karakte.");
} else {
 
  let kouleValid1 = true;
  let kouleValid2 = true;

  for (let i = 0; i < 6; i++) {
    if (!validKarakte.includes(koule1[i])) {
      kouleValid1 = false;
      break;
    }
  }

  for (let i = 0; i < 6; i++) {
    if (!validKarakte.includes(koule2[i])) {
      kouleValid2 = false;
      break;
    }
  }

  if (!kouleValid1 || !kouleValid2) {
    console.info("Koulè yo dwe ekzademisal, sa vle di fòk yo fè pati '0123456789ABCDEF'.");
  } else {
    
    for (let i = 0; i < 6; i++) {
      rezilta += Math.floor(Math.random() * 2) ? koule1[i] : koule2[i];
      rezilta += " "; 
    }

    console.info(rezilta.trim());
  }
}
