function reverseAndShift(sequence, N) {
    const arr = sequence.split(",").map(Number)
    const L = arr.length
    
    for (let i = 0; i < L; i++) {
        arr.reverse()
        if (i !== L - 1) {
            const lastElement = arr.pop()
            arr.unshift(lastElement)
        }
    }
    
    const position = arr.indexOf(N)
    console.log(`N = ${N}, pozisyon l = ${position}`)
}

const sequence = "0,1,2,3,4"
const N = 3
reverseAndShift(sequence, N)
