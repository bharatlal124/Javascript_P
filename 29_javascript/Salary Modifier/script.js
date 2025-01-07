// Complete the increaseSalaries function
const employees = [
  { id: 1, name: "Alice", department: "sales", salary: 40000 },
  { id: 2, name: "Bob", department: "engineering", salary: 50000 },
  { id: 3, name: "Charlie", department: "marketing", salary: 45000 },
  { id: 4, name: "David", department: "sales", salary: 35000 },
  { id: 5, name: "Emily", department: "engineering", salary: 55000 }
];

function increaseSalaries(employees) {
  // Implement your function here to modify the salary
  const updatedEmployees = employees.map(employee => {
    let salaryIncreasePercentage;

    switch (employee.department) {
      case "sales":
        salaryIncreasePercentage = 0.1;
        break;
      case "engineering":
        salaryIncreasePercentage = 0.15;
        break;
      default:
        salaryIncreasePercentage = 0.05;
        break;
    }

    const updatedSalary = (employee.salary * (1 + salaryIncreasePercentage)).toFixed(1);

   return { ...employee, salary: updatedSalary };
  });

  return updatedEmployees;
}

const updatedEmployees = increaseSalaries(employees);
console.log(updatedEmployees);
console.log(employees); 
