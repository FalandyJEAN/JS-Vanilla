class Basic {
    constructor() {
        this.errors = {
            MissingParameterError: class MissingParameterError extends Error {
                constructor(message = "Yon oswa plizyè paramèt manke.") {
                    super(message)
                    this.name = "MissingParameterError"
                }
            },
            NegativeNumberError: class NegativeNumberError extends Error {
                constructor(message = "Valè yo dwe pozitif.") {
                    super(message)
                    this.name = "NegativeNumberError"
                }
            },
            ValueError: class ValueError extends Error {
                constructor(message = "Valè pa kòrèk.") {
                    super(message)
                    this.name = "ValueError"
                }
            }
        }
    }

    add(...numbers) {
        if (numbers.length < 2) {
            throw new this.errors.MissingParameterError()
        }

        for (const num of numbers) {
            if (typeof num !== 'number') {
                throw new this.errors.TypeError()
            }
        }

        return numbers.reduce((acc, num) => acc + num, 0)
    }

    subtract(...numbers) {
        if (numbers.length < 2) {
            throw new this.errors.MissingParameterError()
        }

        for (const num of numbers) {
            if (typeof num !== 'number') {
                throw new this.errors.TypeError()
            }
        }

        return numbers.slice(1).reduce((acc, num) => acc - num, numbers[0])
    }

    divide(a, b) {
        if (arguments.length !== 2) {
            throw new this.errors.MissingParameterError()
        }

        for (const arg of arguments) {
            if (typeof arg !== 'number') {
                throw new this.errors.TypeError()
            }
        }

        if (b === 0) {
            throw new this.errors.ZeroDivisionError()
        }
        return a / b
    }

    multiply(...numbers) {
        if (numbers.length < 2) {
            throw new this.errors.MissingParameterError()
        }

        for (const num of numbers) {
            if (typeof num !== 'number') {
                throw new this.errors.TypeError()
            }
        }

        return numbers.reduce((acc, num) => acc * num, 1)
    }
}

class Calculator extends Basic {
    constructor() {
        super()
    }

    factorial(n) {
        if (arguments.length !== 1) {
            throw new this.errors.MissingParameterError()
        }

        if (typeof n !== 'number') {
            throw new this.errors.TypeError()
        }

        if (n === 0) {
            return 1
        } else {
            let result = 1
            for (let i = 1; i <= n; i++) {
                result *= i
            }
            return result
        }
    }

    avg(...numbers) {
        if (numbers.length < 2) {
            throw new this.errors.MissingParameterError()
        }

        for (const num of numbers) {
            if (typeof num !== 'number') {
                throw new this.errors.TypeError()
            }
        }

        return this.add(...numbers) / numbers.length
    }

    arr(k, n) {
        if (arguments.length !== 2) {
            throw new this.errors.MissingParameterError()
        }

        for (const arg of arguments) {
            if (typeof arg !== 'number') {
                throw new this.errors.TypeError()
            }
        }

        if (k === 0) {
            return 1
        } else if (k > n) {
            throw new this.errors.ValueError()
        } else {
            let result = 1
            for (let i = n; i > n - k; i--) {
                result *= i
            }
            return result
        }
    }

    exp(base, exp) {
        if (arguments.length !== 2) {
            throw new this.errors.MissingParameterError()
        }

        for (const arg of arguments) {
            if (typeof arg !== 'number') {
                throw new this.errors.TypeError()
            }
        }

        return Math.pow(base, exp)
    }

    comb(n, k) {
        if (arguments.length !== 2) {
            throw new this.errors.MissingParameterError()
        }

        for (const arg of arguments) {
            if (typeof arg !== 'number') {
                throw new this.errors.TypeError()
            }
        }

        return this.divide(this.factorial(n), this.multiply(this.factorial(k), this.factorial(n - k)))
    }
}

const calc = new Calculator()

try {
    console.log(`Divizyon 10/0 = ${calc.divide(10, 0)}`)
} catch (err) {
    console.log(`Divizyon 10/0 = Ere: Nou paka divize pa zero.`)
}

console.log(`Miltiplikasyon 15*3 = ${calc.multiply(15, 3)}`)
try {
    console.log("Divizyon 0/0 =", calc.divide(0, 0))
} catch (err) {
    console.log("Divizyon 0/0 = Ere: Rezilta se yon vale enfini.");
}

try {
    console.log(`Mwayèn [3,5,3,'25',6] = ${calc.avg(3, 5, 3, "25", 6)}`)
} catch (err) {
    console.log(`Mwayèn [3,5,3,'25',6] = Ere: Tip done pa korek.`)
}

try {
    console.log(`Ekspozan 2^3 = ${calc.exp(2, 3)}`)
} catch (err) {
    console.log(`Ekspozan 2^3 = Ere: ${err.message}`)
}

try {
    console.log(`Ekspozan 2^-3 = ${calc.exp(2, -3)}`)
} catch (err) {
    console.log(`Ekspozan 2^-3 = Ere: ${err.message}`)
}

console.log(`Faktoryèl 4 = ${calc.factorial(4)}`)
console.log(`Faktoryèl 0 = ${calc.factorial(0)}`)

try {
    console.log(`Mwayèn [2,4] = ${calc.avg(2, 4)}`)
} catch (err) {
    console.log(`Mwayèn [2,4] = Ere: ${err.message}`)
}

try {
    console.log(`Konbinezan 2 nan 4 = ${calc.comb(2, 4)}`)
} catch (err) {
    console.log(`Konbinezan 2 nan 4 = Ere: ${err.message}`)
}
