//
class Account {
    accountId: number = 0
    constructor() {
        console.log('Account')
    }
    //
    deposit() {
        return 10
    }
}
class SavingsAccount extends Account {
    constructor() {
        super()
        console.log('Savings Account')

    }
    //override
    deposit(): number {
        return 100 * super.deposit()
    }
}
let sb = new SavingsAccount()
console.log(sb.accountId)
console.log(sb.deposit())