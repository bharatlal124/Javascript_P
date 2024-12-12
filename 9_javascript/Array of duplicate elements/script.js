//Complete the findDuplicate function
// Do not alter the starter code.

let arr = [4, 2, 34, 4, 1, 12, 1, 4];
function findDuplicate(arr){
//Implement your function here
    
    let duplicates = [];
    let frequency = {};

    for (let i = 0; i < arr.length; i++) {
        if (!frequency[arr[i]]) {
            frequency[arr[i]] = 1;
            
        } else {
           
            frequency[arr[i]]++;

            if (frequency[arr[i]] === 2) {
                duplicates.push(arr[i]);
            }
        }
    }

    return duplicates;
}    
console.log(findDuplicate(arr));