"use strict";
class BankAccount {
    constructor() {
        this._balance = 0;
    }
    get balance() {
        return this._balance;
    }
    set balance(newBalance) {
        if (newBalance < 0) {
            throw new Error("Invalid balance");
        }
        this._balance = newBalance;
    }
}
const account = new BankAccount();
account.balance = 100;
console.log(account.balance);
