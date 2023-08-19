const readlineSync = require("readline-sync")

function kripte(teksPouKripte) {
  const alfabe = "abcdefghijklmnopqrstuvwxyz"
  let teksKripte = ""

  for (let i = 0;i < teksPouKripte.length;i++) {
    const eleman = teksPouKripte[i].toLowerCase()
    const pozisyon = alfabe.indexOf(eleman)
    teksKripte += pozisyon.toString()
    if (i < teksPouKripte.length - 1) {
      teksKripte += "."
    }
  }

  return teksKripte
}

function dekripte(teksPouDekripte) {
  const alfabe = "abcdefghijklmnopqrstuvwxyz"
  const endeksLetYo = teksPouDekripte.split(".").map(Number)
  let teksDekripte = ""

  for (const endeks of endeksLetYo) {
    if (endeks >= 0 && endeks < alfabe.length) {
      teksDekripte += alfabe[endeks]
    }
  }

  return teksDekripte
}

do {
  chwa = readlineSync.question(`********MENI********
  1-Kripte
  2-Dekripte
  3-Femen pwogram lan
    
  Antre chwa ou an :`)

  switch (chwa) {
    case "1":
      let teksPouKripte = readlineSync.question("Antre teks ou vle kripte : ")
      console.log("Rezilta kriptaj:", kripte(teksPouKripte))
      break
    case "2":
      let teksPouDekripte = readlineSync.question("Antre chenn ou vle dekripte sou fom (4.9.4.etc): ")
      console.log("Rezilta dekriptaj:", dekripte(teksPouDekripte))
      break
    case "3":
      console.log("Ou femen pwogram lan avek sikse.")
      break
    default:
      console.log("Ou fe yon move chwa. Tanpri eseye ankò.")
  }

} while (chwa !== "3")
