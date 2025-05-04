// Encapsulation means private field, that can't be accessed outside the class
class BankAccount {
    #balance = 0;
    constructor(owner) {
        this.owner = owner;
    }
    deposit(amount) {
        this.#balance += amount;
    }
    getBalance(){
        return this.#balance;
    }
}

const acc = new BankAccount("Tarek");
acc.deposit(1000000);
