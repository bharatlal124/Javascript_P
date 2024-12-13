//Complete the deleteOccur function
//Do not alter the starter Code.
let arr = [23, 56, 4, 78, 5, 63, 45, 210, 56];
let ele = 56;
function deleteOccur(arr, ele) {
  //Implement Your function here

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === ele) {
      arr.splice(i, 1);
    }
  }
  return arr;
}

console.log(deleteOccur(arr, ele));
//Output: [23,4,78,5,63,45,210];
