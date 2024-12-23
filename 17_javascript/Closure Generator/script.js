// Complete the genrateID function
//Do not alter the starter code
function generateID(start){
//Implement Your function here
    let count = start;
      return function id() {
        return `A_2023_${count++}`;
      };
}

const func = generateID(99);
console.log(func());//Output : A_2023_99
console.log(func()); // Output: A_2023_100