const readlineSync = require("readline-sync")

let mX = 5
let mY = 5
let tablo = []
let chans = 2

let usedNumbers = []

while (chans > 0) {
  console.clear()

  console.log("Hello! Men kat la:")

  tablo = []
  for (let x = 0; x < mX; x++) {
    let row = []
    for (let y = 0; y < mY; y++) {
      let nonb
      do {
        nonb = Math.floor(Math.random() * 100)
      } while (row.includes(nonb) || usedNumbers.includes(nonb))
      usedNumbers.push(nonb)
      row.push(nonb)
    }
    tablo.push(row)
  }

  let mitanX = Math.floor(mX / 2)
  let mitanY = Math.floor(mY / 2)
  for (let i = 0; i < mX; i++) {
    for (let j = 0; j < mY; j++) {
      tablo[i][j] = (i === mitanX && j === mitanY) ? '⭐' : tablo[i][j]
    }
  }

  for (let x = 0; x < mX; x++) {
    let row = []
    for (let y = 0; y < mY; y++) {
      row.push(tablo[x][y])
    }
    console.log(row.join('\t\t'))
  }

  console.log(`Ou gen ${chans} chans.`)

  let bingo = []
  for (let i = 0; i < mX; i++) {
    for (let j = 0; j < mY; j++) {
      let nonb = tablo[i][j]
      bingo.push(nonb)
    }
  }

  let boulYo = []
  let usedBingoNumbers = []
  while (boulYo.length < 5) {
    let nonb = bingo[Math.floor(Math.random() * bingo.length)]
    if (!boulYo.includes(nonb) && nonb !== '⭐') {
      boulYo.push(nonb)
      usedBingoNumbers.push(nonb)
    }
  }

  console.log("Aprè tiraj, men nonb ki BINGO yo:", boulYo)

  for (let i = 0; i < mX; i++) {
    for (let j = 0; j < mY; j++) {
      if (boulYo.includes(tablo[i][j])) {
        tablo[i][j] = `[${tablo[i][j]}]`
      } else {
        tablo[i][j] = `${tablo[i][j]}`
      }
    }
  }

  console.log("Kat la ak nonb BINGO yo:")
  for (let x = 0; x < mX; x++) {
    let row = []
    for (let y = 0; y < mY; y++) {
      row.push(tablo[x][y])
    }
    console.log(row.join('\t\t'))
  }

  chans--

  if (chans > 0) {
    let rejwe
    do {
      rejwe = readlineSync.question("Ou vle rejwe? (O/N): ").toLowerCase()
    } while (rejwe !== 'o' && rejwe !== 'n')
    
    if (rejwe === 'n') {
      break
    }
  }
}

console.log("Ou temine. Mesi!")
