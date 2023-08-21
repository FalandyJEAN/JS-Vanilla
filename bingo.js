let mX = 5, mY = 5
let tablo = []

function genereTab() {
  tablo = []
  for (let x = 0; x < mX; x++) {
    let row = [];
    for (let y = 0; y < mY; y++) {
      let nonb;
      do {
        nonb = Math.floor(Math.random() * 100)
      } while (row.includes(nonb))
      row.push(nonb)
    }
    tablo.push(row);
    console.log(row.join('\t\t'))
  }
}

genereTab()

console.log("Nonb ki soti yo se: ")
setTimeout(() => {
  let boulYo = []
  for (let i = 0; i < 5; i++) {
    let randX, randY, nonb
    do {
      randX = Math.floor(Math.random() * mX)
      randY = Math.floor(Math.random() * mY)
      nonb = tablo[randX][randY]
    } while (boulYo.includes(nonb))
    boulYo.push(nonb)
    tablo[randX][randY] = `⭐`
  }

  for (let i = 0; i < boulYo.length; i++) {
    console.log(boulYo[i])
  }

  for (let i = 0; i < mX; i++) {
    for (let j = 0; j < mY; j++) {
      if (boulYo.includes(tablo[i][j])) {
        tablo[i][j] = `[${tablo[i][j]}]`
      }
    }
    console.log(tablo[i].join('\t\t'))
  }
}, 2000)
