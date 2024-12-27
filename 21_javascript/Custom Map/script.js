function main() {
    const array = [2, 4, 6, 2, 7, 8];
    //Write your code here.
    //Create your higher order functiomn here with the name customMap with takes two parameter array and a callback function.
    //The function should return an array
    //Do not modify any other code.
    
    
    function customMap(array, callbackFn) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
      result.push(callbackFn(array[i]));
    }
    return result;
  }

  

  const squareResult = customMap(array, square);
  console.log(squareResult); 

 
  const doubleResult = customMap(array, double);
  console.log(doubleResult); 
 

  return customMap;
}

function square(num) {
  return num * num;
}

function double(num) {
  return num * 2;
}

main();
   