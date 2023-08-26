class Basic {
    constructor() {
        this.errors = {
            MissingParameterError: class MissingParameterError extends Error {
                constructor(message) {
                    super(message || "Yon oswa plizyè paramèt manke.");
                    this.name = "MissingParameterError";
                }
            },
            InfinityResultError: class InfinityResultError extends Error {
                constructor(message) {
                    super(message || "Rezilta a se yon vale enfini.");
                    this.name = "InfinityResultError";
                }
            },
            ZeroDivisionError: class ZeroDivisionError extends Error {
                constructor(message) {
                    super(message || "Nou paka divize pa zewo.");
                    this.name = "ZeroDivisionError";
                }
            },
            NegativeNumberError: class NegativeNumberError extends Error {
                constructor(message) {
                    super(message || "Valè yo dwe pozitif.");
                    this.name = "NegativeNumberError";
                }
            },
            ValueError: class ValueError extends Error {
                constructor(message) {
                    super(message || "Valè pa kòrèk.");
                    this.name = "ValueError";
                }
            },
            TypeError: class TypeError extends Error {
                constructor(message) {
                    super(message || "Tip done pa kòrèk.");
                    this.name = "TypeError";
                }
            }
        };
    }

    add(...numbers) {
        if (numbers.length < 2) {
            throw new this.errors.MissingParameterError();
        }

        for (const num of numbers) {
            if (typeof num !== 'number') {
                throw new this.errors.TypeError("Paramèt yo dwe gen tip Number.");
            }
        }

        return numbers.reduce((acc, num) => acc + num, 0);
    }

    substract(...numbers) {
        if (numbers.length < 2) {
            throw new this.errors.MissingParameterError();
        }

        for (const num of numbers) {
            if (typeof num !== 'number') {
                throw new this.errors.TypeError("Paramèt yo dwe gen tip Number.");
            }
        }

        return numbers.slice(1).reduce((acc, num) => acc - num, numbers[0]);
    }

    divide(a, b) {
        if (arguments.length !== 2) {
            throw new this.errors.MissingParameterError();
        }

        for (const arg of arguments) {
            if (typeof arg !== 'number') {
                throw new this.errors.TypeError("Paramèt yo dwe gen tip Number.");
            }
        }

        if (b === 0) {
            throw new this.errors.ZeroDivisionError();
        } else if (a === 0 && b === 0) {
            throw new this.errors.InfinityResultError();
        }
        return a / b;
    }

    multiply(...numbers) {
        if (numbers.length < 2) {
            throw new this.errors.MissingParameterError();
        }

        for (const num of numbers) {
            if (typeof num !== 'number') {
                throw new this.errors.TypeError("Paramèt yo dwe gen tip Number.");
            }
        }

        return numbers.reduce((acc, num) => acc * num, 1);
    }
}

class Calculator extends Basic {
    constructor() {
        super();
    }

    fact(n) {
        if (arguments.length !== 1) {
            throw new this.errors.MissingParameterError();
        }

        if (typeof n !== 'number') {
            throw new this.errors.TypeError("Paramèt yo dwe gen tip Number.");
        }

        if (n === 0) {
            return 1;
        } else {
            let result = 1;
            for (let i = 1; i <= n; i++) {
                result *= i;
            }
            return result;
        }
    }

    avg(...numbers) {
        if (numbers.length < 2) {
            throw new this.errors.MissingParameterError();
        }

        for (const num of numbers) {
            if (typeof num !== 'number') {
                throw new this.errors.TypeError("Paramèt yo dwe gen tip Number.");
            }
        }

        return this.add(...numbers) / numbers.length;
    }

    arr(k, n) {
        if (arguments.length !== 2) {
            throw new this.errors.MissingParameterError();
        }

        for (const arg of arguments) {
            if (typeof arg !== 'number') {
                throw new this.errors.TypeError("Paramèt yo dwe gen tip Number.");
            }
        }

        if (k === 0) {
            return 1;
        } else if (k > n) {
            throw new this.errors.ValueError("K dwe pi piti oubyen egal ak n.");
        } else {
            let result = 1;
            for (let i = n; i > n - k; i--) {
                result *= i;
            }
            return result;
        }
    }

    exp(base, exponent) {
        if (arguments.length !== 2) {
            throw new this.errors.MissingParameterError();
        }

        for (const arg of arguments) {
            if (typeof arg !== 'number') {
                throw new this.errors.TypeError("Paramèt yo dwe gen tip Number.");
            }
        }

        return Math.pow(base, exponent);
    }

    comb(n, k) {
        if (arguments.length !== 2) {
            throw new this.errors.MissingParameterError();
        }

        for (const arg of arguments) {
            if (typeof arg !== 'number') {
                throw new this.errors.TypeError("Paramèt yo dwe gen tip Number.");
            }
        }

        return this.divide(this.fact(n), this.multiply(this.fact(k), this.fact(n - k)));
    }
}

const calc = new Calculator();
console.log("Adisyon 2+3", calc.add(2, 3));
console.log("Adisyon 2.3 + 6.1", calc.add(2.3, 6.1));
console.log("Soustraksyon 10-3", calc.substract(10, 3));
console.log("Divizyon 10/0", calc.divide(10, 0));
console.log("Miltiplikasyon 15*3", calc.multiply(15, 3));
console.log("Divizyon 0/0", calc.divide(0, 0));
console.log("Mwayèn [3,5,3,'25',6]", calc.avg(3, 5, 3, "25", 6));
console.log("Ekspozan 2e3", calc.exp(2, 3));
console.log("Ekspozan 2e-3", calc.exp(2, -3));
console.log("Faktoryèl 4", calc.fact(4));
console.log("Faktoryèl 0", calc.fact(0));
console.log("Mwayèn [2,4]", calc.avg(2, 4));
console.log("Konbinezan 2 nan 4", calc.comb(2, 4));
