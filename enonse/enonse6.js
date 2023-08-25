class BankAccount {
    constructor(accountNumber, accountHolder, initialBalance = 0) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = initialBalance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount
            console.log(`Ou depoze ${amount} HTG sou kont ou,ki gen kom nimewo : ${this.accountNumber}`)
        } else {
            console.log("Depo ou an pa valid,antre yon kantite kob ki siperye a zewo.")
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount
            console.log(`Ou fe retre ${amount} HTG sou kont ou,ki gen kom nimewo : ${this.accountNumber}`)
        } else {
            console.log("Retre sa a pa valid,eseye anko.")
        }
    }

    getBalance() {
        return this.balance
    }

    toString() {
        return `
        Account Number: ${this.accountNumber}
        Account Holder: ${this.accountHolder}
        Balance: ${this.balance.toFixed(2)} HTG`
    }
}

const account1 = new BankAccount("00577883", "Falandy Jean", 700)

account1.deposit(500);
account1.withdraw(200);


const balance = account1.getBalance();

console.log(account1.toString());
