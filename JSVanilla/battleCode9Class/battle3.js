function ranvese(chenn, N) {
    const aranjman = chenn.split(",").map(Number)
    const longe = aranjman.length
    
    for (let i = 0; i < longe; i++) {
        aranjman.reverse()
        if (i !== longe - 1) {
            const denyeEleman = aranjman.pop()
            aranjman.unshift(denyeEleman)
        }
    }
    
    const pozisyon = aranjman.indexOf(N)
    console.log(`N = ${N}, pozisyon l = ${pozisyon}`)
}

const chenn = "0,1,2,3,4"
const N = 4
ranvese(chenn, N)
