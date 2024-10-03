class BankAccount {
    static bankName = 'Sberbank';

    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited ${amount} into account ${this.accountNumber}. New balance: ${this.balance}`);
    }
    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(`Withdraw ${amount} from account ${this.accountNumber}. New balance: ${this.balance}`);
        } else {
            console.log("Нет денег");
        }

    }
}


const account1 = new BankAccount("1234567890", 1000);
account1.deposit(500);
account1.withdraw(200);
account1.withdraw(1500);


