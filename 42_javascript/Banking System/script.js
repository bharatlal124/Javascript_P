function main() {
  class Account {
      _accountNumber;
      _balance;
    constructor(accountNumber) {
      this._accountNumber = accountNumber;
      this._balance = 0;
    }

    get getbalance() {
      return this._balance;
    }

    set setbalance(value) {
      if (value >= 0) {
        this._balance = value;
      } else {
        return "Please enter a positive value for the balance";
      }
    }

    deposit(amount) {
      this._balance += amount;
    //   console.log("deposit: ",this._balance);
    }

    withdraw(amount) {
      if (amount <= this._balance) {
        this._balance -= amount;
      } else {
        return "Insufficient balance";
      }
    }
  }

  const myAccount = new Account("1234567890");
  myAccount.deposit(500);
  myAccount.withdraw(200);
  console.log(myAccount.getbalance); 

  // Do not modify the return statement
  return Account;
}

main();
