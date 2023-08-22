let mX = 5, mY = 5
let tablo = []

function genereTab() {
  tablo = []
  for (let x = 0; x < mX; x++) {
    let row = []
    for (let y = 0; y < mY; y++) {
      let nonb
      do {
        nonb = Math.floor(Math.random() * 100)
      } while (row.includes(nonb))
      row.push(nonb)
    }
    tablo.push(row)
  }
}

genereTab()

console.log("Hello! Men kat la:")

for (let x = 0; x < mX; x++) {
  let row = []
  for (let y = 0; y < mY; y++) {
    row.push(tablo[x][y])
  }
  console.log(row.join('\t\t'))
}

console.log("\n")
console.log("Nonb ki soti yo se: ")

setTimeout(() => {
  let boulYo = []

  while (boulYo.length < 5) {
    let nonb = Math.floor(Math.random() * 100)
    if (!boulYo.includes(nonb)) {
      boulYo.push(nonb)
    }
  }

  console.log("Aprè tiraj, men nonb ki BINGO yo:", boulYo)

  let middleX = Math.floor(mX / 2)
  let middleY = Math.floor(mY / 2)
  for (let i = 0; i < mX; i++) {
    for (let j = 0; j < mY; j++) {
      tablo[i][j] = (i === middleX && j === middleY) ? '⭐' : tablo[i][j]
    }
  }

  for (let i = 0; i < mX; i++) {
    let row = [];
    for (let j = 0; j < mY; j++) {
      row.push(tablo[i][j])
    }
    console.log(row.join('\t\t'))
  }
}, 2000)
