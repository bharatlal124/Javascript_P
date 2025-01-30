//complete the ExpenseTracker class.
// Do not alter the starter code
function main() {
  class ExpenseTracker {
    // Create your private properties here
    #expenses;
    #income;

    // Create a constructor function
    constructor(income) {
      // initialize the income property
      this.#income = income;
      // initialize the expenses property as an empty array
      this.#expenses = [];
    }

    // create your private method to calculate expenses
    #calculateTotalExpenses() {
      return this.#expenses.reduce((total, expense) => total + expense.amount, 0);
    }

    // Create your public methods here
   
    addExpense(name, amount, date) {
      this.#expenses.push({ name, amount, date });
    }

    
    calculateBalance() {
      const totalExpenses = this.#calculateTotalExpenses();
      return this.#income - totalExpenses;
    }
  }

  // The class should function accordingly.
  const tracker = new ExpenseTracker(5000);
  tracker.addExpense("Rent", 1000, "2021-10-01");
  tracker.addExpense("Groceries", 500, "2021-10-02");
  console.log(tracker.calculateBalance()); 
  return ExpenseTracker;
}

main();
